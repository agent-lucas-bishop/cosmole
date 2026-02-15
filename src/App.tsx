import { useState, useEffect, useRef, useMemo } from 'react';
import {
  getDailyBody, getDayId, getClueForGuess, getAllBodyNames,
  checkGuess, loadStats, saveStats, loadState, saveState,
  generateShareText
} from './utils/game';
import type { GameState, GameStats } from './utils/game';
import './App.css';

const MAX_GUESSES = 6;

function App() {
  const body = useMemo(() => getDailyBody(), []);
  const dayId = useMemo(() => getDayId(), []);
  const allNames = useMemo(() => getAllBodyNames(), []);

  const [state, setState] = useState<GameState>(() =>
    loadState() || { dayId, guesses: [], solved: false, failed: false }
  );
  const [stats, setStats] = useState<GameStats>(() => loadStats());
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showStats, setShowStats] = useState(false);
  const [showHelp, setShowHelp] = useState(() => !localStorage.getItem('cosmole-seen'));
  const [copied, setCopied] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { saveState(state); }, [state]);
  useEffect(() => { saveStats(stats); }, [stats]);

  useEffect(() => {
    if (state.solved || state.failed) {
      const t = setTimeout(() => setShowStats(true), 1200);
      return () => clearTimeout(t);
    }
  }, [state.solved, state.failed]);

  const handleInput = (val: string) => {
    setInput(val);
    if (val.length < 1) { setSuggestions([]); return; }
    const lower = val.toLowerCase();
    const filtered = allNames
      .filter(n => n.toLowerCase().includes(lower))
      .filter(n => !state.guesses.includes(n))
      .slice(0, 6);
    setSuggestions(filtered);
  };

  const submitGuess = (guess: string) => {
    if (state.solved || state.failed) return;
    if (!allNames.some(n => n.toLowerCase() === guess.toLowerCase())) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    const canonical = allNames.find(n => n.toLowerCase() === guess.toLowerCase())!;
    if (state.guesses.includes(canonical)) return;

    const result = checkGuess(canonical, body);
    const newGuesses = [...state.guesses, canonical];
    const solved = result.correct;
    const failed = !solved && newGuesses.length >= MAX_GUESSES;

    setState({ dayId, guesses: newGuesses, solved, failed });
    setInput('');
    setSuggestions([]);

    if (solved || failed) {
      const newStats = { ...stats };
      newStats.played++;
      if (solved) {
        newStats.won++;
        newStats.distribution[newGuesses.length - 1]++;
        if (stats.lastDay === dayId - 1 || stats.played === 0) {
          newStats.streak = stats.streak + 1;
        } else {
          newStats.streak = 1;
        }
        newStats.maxStreak = Math.max(newStats.maxStreak, newStats.streak);
      } else {
        newStats.streak = 0;
      }
      newStats.lastDay = dayId;
      setStats(newStats);
    }
  };

  const revealedClues = state.guesses.map((_, i) => getClueForGuess(body, i));
  // Show next clue if game is still going
  if (!state.solved && !state.failed && revealedClues.length < MAX_GUESSES) {
    revealedClues.push(getClueForGuess(body, state.guesses.length));
  }

  const share = () => {
    const text = generateShareText(state);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const closeHelp = () => {
    setShowHelp(false);
    localStorage.setItem('cosmole-seen', '1');
  };

  return (
    <div className="app">
      <header className="header">
        <button className="icon-btn" onClick={() => setShowHelp(true)}>?</button>
        <h1 className="title">
          <span className="title-icon">🪐</span> COSMOLE
        </h1>
        <button className="icon-btn" onClick={() => setShowStats(true)}>📊</button>
      </header>

      <main className="main">
        {/* Clues */}
        <div className="clues">
          {revealedClues.map((clue, i) => {
            const isGuessed = i < state.guesses.length;
            const guess = state.guesses[i];
            const result = guess ? checkGuess(guess, body) : null;
            return (
              <div key={i} className={`clue-row ${isGuessed ? 'guessed' : 'current'} ${result?.correct ? 'correct' : ''}`}>
                <div className="clue-number">{i + 1}</div>
                <div className="clue-content">
                  <div className="clue-text">{clue}</div>
                  {isGuessed && (
                    <div className={`guess-result ${result?.correct ? 'correct' : ''}`}>
                      <span className="guess-name">{guess}</span>
                      {result && !result.correct && (
                        <span className="guess-hints">
                          <span className={`hint-badge ${result.hints.type ? 'match' : ''}`}>
                            {result.hints.type ? '✓' : '✗'} Type
                          </span>
                          <span className={`hint-badge ${result.hints.parent ? 'match' : ''}`}>
                            {result.hints.parent ? '✓' : '✗'} Orbits
                          </span>
                        </span>
                      )}
                      {result?.correct && <span className="correct-badge">✓ Correct!</span>}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Input */}
        {!state.solved && !state.failed && (
          <div className={`input-area ${shake ? 'shake' : ''}`}>
            <div className="input-wrapper">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => handleInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') submitGuess(input); }}
                placeholder="Name a celestial body..."
                className="guess-input"
                autoComplete="off"
              />
              <button className="submit-btn" onClick={() => submitGuess(input)}>
                →
              </button>
            </div>
            {suggestions.length > 0 && (
              <div className="suggestions">
                {suggestions.map(s => (
                  <button key={s} className="suggestion" onClick={() => { setInput(s); setSuggestions([]); submitGuess(s); }}>
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div className="guess-counter">
              {state.guesses.length}/{MAX_GUESSES} guesses
            </div>
          </div>
        )}

        {/* Game Over */}
        {state.failed && (
          <div className="game-over">
            <div className="answer-reveal">
              The answer was <strong>{body.emoji} {body.name}</strong>
            </div>
          </div>
        )}

        {state.solved && (
          <div className="game-over success">
            <div className="answer-reveal">
              {body.emoji} {body.name} — solved in {state.guesses.length}!
            </div>
          </div>
        )}
      </main>

      {/* Stats Modal */}
      {showStats && (
        <div className="modal-overlay" onClick={() => setShowStats(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowStats(false)}>×</button>
            <h2>Statistics</h2>
            <div className="stats-grid">
              <div className="stat"><div className="stat-num">{stats.played}</div><div className="stat-label">Played</div></div>
              <div className="stat"><div className="stat-num">{stats.played ? Math.round(stats.won / stats.played * 100) : 0}%</div><div className="stat-label">Win %</div></div>
              <div className="stat"><div className="stat-num">{stats.streak}</div><div className="stat-label">Streak</div></div>
              <div className="stat"><div className="stat-num">{stats.maxStreak}</div><div className="stat-label">Max</div></div>
            </div>
            <h3>Guess Distribution</h3>
            <div className="distribution">
              {stats.distribution.map((count, i) => {
                const max = Math.max(...stats.distribution, 1);
                return (
                  <div key={i} className="dist-row">
                    <span className="dist-label">{i + 1}</span>
                    <div className="dist-bar" style={{ width: `${Math.max(count / max * 100, 8)}%` }}>{count}</div>
                  </div>
                );
              })}
            </div>
            {(state.solved || state.failed) && (
              <button className="share-btn" onClick={share}>
                {copied ? '✓ Copied!' : '📋 Share Results'}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Help Modal */}
      {showHelp && (
        <div className="modal-overlay" onClick={closeHelp}>
          <div className="modal help-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeHelp}>×</button>
            <h2>🪐 How to Play</h2>
            <p>Identify the celestial body from progressive clues.</p>
            <ul>
              <li>You get <strong>6 clues</strong> and <strong>6 guesses</strong></li>
              <li>Each wrong guess reveals the next clue</li>
              <li>Clues go from hardest to easiest</li>
            </ul>
            <h3>Hints</h3>
            <div className="help-hints">
              <div><span className="hint-badge match">✓ Type</span> Same type (Planet, Moon, etc.)</div>
              <div><span className="hint-badge match">✓ Orbits</span> Orbits the same body</div>
            </div>
            <p className="help-bodies">Includes planets, moons, dwarf planets, asteroids, comets, and more!</p>
            <button className="play-btn" onClick={closeHelp}>Play</button>
          </div>
        </div>
      )}

      <div className="daily-cross-promo">
        <span className="promo-label">More Dailies</span>
        <div className="promo-links">
          <a href="https://cinephile.codyp.xyz" target="_blank" rel="noopener">🎬 Cinéphile</a>
          <a href="https://chromacle.vercel.app" target="_blank" rel="noopener">🎨 Chromacle</a>
          <a href="https://geodle-six.vercel.app" target="_blank" rel="noopener">🌍 Geodle</a>
          <a href="https://pokedle-pi.vercel.app" target="_blank" rel="noopener">🔴 Pokédle</a>
          <a href="https://flaggle-chi.vercel.app" target="_blank" rel="noopener">🏁 Flaggle</a>
        </div>
      </div>
    </div>
  );
}

export default App;
