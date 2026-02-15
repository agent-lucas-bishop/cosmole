import { uniqueBodies } from '../data/bodies';
import type { CelestialBody } from '../data/bodies';

// Seeded PRNG (mulberry32)
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function getDayNumber(): number {
  const epoch = new Date('2026-02-15T00:00:00');
  const now = new Date();
  return Math.floor((now.getTime() - epoch.getTime()) / 86400000);
}

export function getDailyBody(): CelestialBody {
  const day = getDayNumber();
  const rng = mulberry32(day * 31337);
  const idx = Math.floor(rng() * uniqueBodies.length);
  return uniqueBodies[idx];
}

export function getDayId(): number {
  return getDayNumber();
}

export function getClueForGuess(body: CelestialBody, guessNumber: number): string {
  return body.clues[Math.min(guessNumber, body.clues.length - 1)];
}

export function getAllBodyNames(): string[] {
  return uniqueBodies.map(b => b.name).sort();
}

export function checkGuess(guess: string, answer: CelestialBody): { correct: boolean; hints: { type: boolean; parent: boolean } } {
  const guessBody = uniqueBodies.find(b => b.name.toLowerCase() === guess.toLowerCase());
  return {
    correct: guess.toLowerCase() === answer.name.toLowerCase(),
    hints: {
      type: guessBody ? guessBody.type === answer.type : false,
      parent: guessBody ? guessBody.parent === answer.parent : false,
    }
  };
}

// Streak / stats
export interface GameStats {
  played: number;
  won: number;
  streak: number;
  maxStreak: number;
  distribution: number[]; // index 0-5 = guesses 1-6
  lastDay: number;
}

const STATS_KEY = 'cosmole-stats';
const STATE_KEY = 'cosmole-state';

export function loadStats(): GameStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { played: 0, won: 0, streak: 0, maxStreak: 0, distribution: [0, 0, 0, 0, 0, 0], lastDay: -1 };
}

export function saveStats(stats: GameStats) {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

export interface GameState {
  dayId: number;
  guesses: string[];
  solved: boolean;
  failed: boolean;
}

export function loadState(): GameState | null {
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (raw) {
      const state = JSON.parse(raw) as GameState;
      if (state.dayId === getDayId()) return state;
    }
  } catch {}
  return null;
}

export function saveState(state: GameState) {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

export function generateShareText(state: GameState): string {
  const num = state.dayId;
  const score = state.solved ? `${state.guesses.length}/6` : 'X/6';
  const body = getDailyBody();
  const squares = state.guesses.map(g => {
    const result = checkGuess(g, body);
    if (result.correct) return '🟢';
    if (result.hints.type && result.hints.parent) return '🟡';
    if (result.hints.type || result.hints.parent) return '🟠';
    return '⚫';
  });
  return `🪐 Cosmole #${num} ${score}\n${squares.join('')}\nhttps://agent-lucas-bishop.github.io/cosmole`;
}
