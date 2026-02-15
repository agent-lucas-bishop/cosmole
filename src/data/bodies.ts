export interface CelestialBody {
  name: string;
  type: string; // Planet, Dwarf Planet, Moon, Asteroid, Comet, Star
  parent: string; // What it orbits
  clues: string[]; // 6 clues, hardest first, easiest last
  emoji: string;
}

export const bodies: CelestialBody[] = [
  {
    name: "Mercury",
    type: "Planet",
    parent: "Sun",
    emoji: "☿️",
    clues: [
      "This body has a massive iron core making up ~85% of its radius",
      "Surface temperatures swing from -180°C to 430°C",
      "It has virtually no atmosphere — just a thin exosphere",
      "A year here is shorter than its day (in solar days)",
      "It's the smallest planet in our solar system",
      "The closest planet to the Sun"
    ]
  },
  {
    name: "Venus",
    type: "Planet",
    parent: "Sun",
    emoji: "♀️",
    clues: [
      "Its atmospheric pressure is 92 times that of Earth's",
      "Sulfuric acid clouds completely shroud its surface",
      "It rotates backwards compared to most planets",
      "A day here is longer than its year",
      "It's the hottest planet despite not being closest to the Sun",
      "Often called Earth's 'sister planet' — the second from the Sun"
    ]
  },
  {
    name: "Earth",
    type: "Planet",
    parent: "Sun",
    emoji: "🌍",
    clues: [
      "Its magnetic field extends up to 65,000 km into space",
      "71% of its surface is covered by liquid water",
      "It has a single large natural satellite",
      "Its atmosphere is 78% nitrogen and 21% oxygen",
      "The only known body with confirmed active plate tectonics",
      "The only planet known to harbor life"
    ]
  },
  {
    name: "Mars",
    type: "Planet",
    parent: "Sun",
    emoji: "♂️",
    clues: [
      "It hosts the longest canyon in the solar system: Valles Marineris",
      "Its two moons are likely captured asteroids",
      "Iron oxide dust gives it its distinctive color",
      "Home to Olympus Mons, the tallest volcano in the solar system",
      "Multiple rovers have explored its surface since 1997",
      "The fourth planet from the Sun, known as the Red Planet"
    ]
  },
  {
    name: "Jupiter",
    type: "Planet",
    parent: "Sun",
    emoji: "♃",
    clues: [
      "Its magnetic field is 20,000 times stronger than Earth's",
      "It has at least 95 known moons",
      "Its Great Red Spot is a storm larger than Earth",
      "It's composed mainly of hydrogen and helium",
      "It's the largest planet in our solar system",
      "The fifth planet from the Sun — a gas giant"
    ]
  },
  {
    name: "Saturn",
    type: "Planet",
    parent: "Sun",
    emoji: "♄",
    clues: [
      "Its density is less than water — it would float in a giant bathtub",
      "Winds at its equator reach up to 1,800 km/h",
      "Its largest moon has a thick nitrogen atmosphere and methane lakes",
      "The Cassini spacecraft orbited it from 2004 to 2017",
      "It has the most extensive and visible ring system",
      "The sixth planet from the Sun, famous for its rings"
    ]
  },
  {
    name: "Uranus",
    type: "Planet",
    parent: "Sun",
    emoji: "⛢",
    clues: [
      "It was the first planet discovered using a telescope (1781)",
      "Its axis is tilted 98° — it essentially rolls around the Sun",
      "It has 13 known rings, discovered in 1977",
      "Its blue-green color comes from methane in its atmosphere",
      "It's classified as an ice giant along with its neighbor",
      "The seventh planet from the Sun"
    ]
  },
  {
    name: "Neptune",
    type: "Planet",
    parent: "Sun",
    emoji: "♆",
    clues: [
      "It was predicted mathematically before it was observed",
      "Winds here reach 2,100 km/h — the fastest in the solar system",
      "Its largest moon Triton orbits in the opposite direction",
      "Voyager 2 is the only spacecraft to visit it (1989)",
      "It's the most distant planet in our solar system",
      "The eighth planet — a deep blue ice giant"
    ]
  },
  {
    name: "Pluto",
    type: "Dwarf Planet",
    parent: "Sun",
    emoji: "🔮",
    clues: [
      "Its largest moon is so big they orbit a shared center of gravity",
      "It has a heart-shaped nitrogen ice glacier called Tombaugh Regio",
      "Discovered in 1930 by Clyde Tombaugh",
      "New Horizons flew past it in July 2015",
      "It was reclassified from planet to dwarf planet in 2006",
      "Once the ninth planet — now the most famous dwarf planet"
    ]
  },
  {
    name: "Europa",
    type: "Moon",
    parent: "Jupiter",
    emoji: "🧊",
    clues: [
      "Tidal flexing from its parent planet heats its interior",
      "Its surface is among the smoothest in the solar system",
      "Scientists believe it has more liquid water than all of Earth's oceans",
      "A subsurface ocean lies beneath its icy crust",
      "NASA's upcoming Clipper mission will study it",
      "One of Jupiter's four Galilean moons — a prime target for finding life"
    ]
  },
  {
    name: "Titan",
    type: "Moon",
    parent: "Saturn",
    emoji: "🌫️",
    clues: [
      "The Huygens probe landed on its surface in 2005",
      "It's the only moon with a dense atmosphere",
      "Liquid methane and ethane form lakes and rivers on its surface",
      "Its atmosphere is thicker than Earth's",
      "It's larger than the planet Mercury",
      "Saturn's largest moon"
    ]
  },
  {
    name: "Io",
    type: "Moon",
    parent: "Jupiter",
    emoji: "🌋",
    clues: [
      "Tidal forces from its parent and sibling moons drive its activity",
      "Its surface is constantly being reshaped with no impact craters",
      "It has over 400 active volcanoes",
      "Sulfur gives its surface vivid yellow and orange colors",
      "It's the most volcanically active body in the solar system",
      "The innermost of Jupiter's four Galilean moons"
    ]
  },
  {
    name: "Ganymede",
    type: "Moon",
    parent: "Jupiter",
    emoji: "🛡️",
    clues: [
      "It's the only moon known to generate its own magnetic field",
      "It may have a subsurface saltwater ocean",
      "ESA's JUICE mission will orbit it in the 2030s",
      "It's even larger than the planet Mercury",
      "It's the largest moon in the entire solar system",
      "One of Jupiter's four Galilean moons"
    ]
  },
  {
    name: "The Moon",
    type: "Moon",
    parent: "Earth",
    emoji: "🌙",
    clues: [
      "It's slowly drifting away at about 3.8 cm per year",
      "Its far side was first photographed by Luna 3 in 1959",
      "12 humans have walked on its surface",
      "It causes tides on its parent planet",
      "It's the fifth-largest natural satellite in the solar system",
      "Earth's only natural satellite"
    ]
  },
  {
    name: "Enceladus",
    type: "Moon",
    parent: "Saturn",
    emoji: "💨",
    clues: [
      "Cassini flew through its plumes and detected organic molecules",
      "Geysers erupt from parallel fractures called 'tiger stripes'",
      "Its south pole shoots jets of water ice into space",
      "Material from this body feeds one of Saturn's rings",
      "A subsurface ocean makes it a candidate for extraterrestrial life",
      "A small icy moon of Saturn with dramatic geysers"
    ]
  },
  {
    name: "Ceres",
    type: "Dwarf Planet",
    parent: "Sun",
    emoji: "⚫",
    clues: [
      "Bright spots in Occator Crater puzzled scientists for years",
      "NASA's Dawn spacecraft orbited it from 2015 to 2018",
      "It was the first asteroid discovered, in 1801",
      "It contains about a third of the asteroid belt's total mass",
      "It's the largest object in the asteroid belt",
      "A dwarf planet between Mars and Jupiter"
    ]
  },
  {
    name: "Triton",
    type: "Moon",
    parent: "Neptune",
    emoji: "❄️",
    clues: [
      "Nitrogen geysers shoot plumes 8 km high on its surface",
      "It orbits in the opposite direction of its planet's rotation",
      "Its retrograde orbit suggests it was captured from the Kuiper Belt",
      "Surface temperature is about -235°C — one of the coldest in the solar system",
      "It's the seventh-largest moon in the solar system",
      "Neptune's largest moon"
    ]
  },
  {
    name: "Callisto",
    type: "Moon",
    parent: "Jupiter",
    emoji: "🪨",
    clues: [
      "Its surface is the most heavily cratered in the solar system",
      "It may have a subsurface ocean despite being geologically dead",
      "It orbits outside Jupiter's main radiation belts",
      "Valhalla is its largest impact basin, spanning 3,000 km",
      "It's the second-largest of Jupiter's moons",
      "The outermost of Jupiter's four Galilean moons"
    ]
  },
  {
    name: "Eris",
    type: "Dwarf Planet",
    parent: "Sun",
    emoji: "⚡",
    clues: [
      "Its discovery directly led to Pluto's reclassification",
      "It has one known moon called Dysnomia",
      "It's about three times farther from the Sun than Pluto",
      "It's the most massive known dwarf planet",
      "Named after the Greek goddess of discord",
      "A dwarf planet in the scattered disc beyond Neptune"
    ]
  },
  {
    name: "Phobos",
    type: "Moon",
    parent: "Mars",
    emoji: "💀",
    clues: [
      "It orbits so close it will be torn apart in ~50 million years",
      "Stickney crater covers nearly half its surface",
      "It completes an orbit in just 7 hours and 39 minutes",
      "It's gradually spiraling inward toward its planet",
      "It's one of the smallest moons in the solar system",
      "The larger of Mars's two moons"
    ]
  },
  {
    name: "Deimos",
    type: "Moon",
    parent: "Mars",
    emoji: "👻",
    clues: [
      "It's one of the smallest known moons at only 12 km across",
      "Unlike its sibling, it's slowly moving away from its planet",
      "Its smooth surface suggests it's covered in regolith",
      "It may be a captured asteroid from the nearby belt",
      "Named after the Greek personification of dread",
      "The smaller of Mars's two moons"
    ]
  },
  {
    name: "Charon",
    type: "Moon",
    parent: "Pluto",
    emoji: "⚓",
    clues: [
      "Its north pole has a dark reddish cap called Mordor Macula",
      "It and its parent are tidally locked — always showing the same face",
      "It's so large relative to its parent they're sometimes called a double system",
      "New Horizons revealed canyons and mountains on its surface",
      "Named after the ferryman of the dead in Greek mythology",
      "Pluto's largest moon"
    ]
  },
  {
    name: "Haumea",
    type: "Dwarf Planet",
    parent: "Sun",
    emoji: "🥚",
    clues: [
      "It has two small moons named Hi'iaka and Namaka",
      "It's one of the few bodies beyond Neptune known to have rings",
      "An ancient collision gave it its shape and created a family of objects",
      "It spins so fast (4 hours) that it's stretched into an elongated shape",
      "Named after the Hawaiian goddess of childbirth",
      "An egg-shaped dwarf planet in the Kuiper Belt"
    ]
  },
  {
    name: "Makemake",
    type: "Dwarf Planet",
    parent: "Sun",
    emoji: "🗿",
    clues: [
      "Its surface is covered in frozen methane and ethane",
      "It has one known moon, nicknamed MK2",
      "It's one of the brightest objects in the Kuiper Belt",
      "Discovered in 2005, shortly after Easter",
      "Named after the creation god of the Rapa Nui people",
      "A dwarf planet in the Kuiper Belt, discovered near Easter Island's patron deity"
    ]
  },
  {
    name: "Vesta",
    type: "Asteroid",
    parent: "Sun",
    emoji: "🏔️",
    clues: [
      "Rheasilvia crater at its south pole is one of the largest in the solar system",
      "NASA's Dawn spacecraft orbited it in 2011-2012",
      "Meteorites from this body (HED meteorites) have been found on Earth",
      "It's the brightest asteroid — sometimes visible to the naked eye",
      "It's the second-largest object in the asteroid belt",
      "A massive asteroid between Mars and Jupiter"
    ]
  },
  {
    name: "Halley's Comet",
    type: "Comet",
    parent: "Sun",
    emoji: "☄️",
    clues: [
      "The Giotto spacecraft photographed its nucleus in 1986",
      "Edmund Halley predicted its return, proving comets orbit the Sun",
      "It appears roughly every 75-79 years",
      "Its last perihelion was in 1986; it will return around 2061",
      "It's associated with the Orionid and Eta Aquariid meteor showers",
      "The most famous periodic comet in history"
    ]
  },
  {
    name: "The Sun",
    type: "Star",
    parent: "Milky Way",
    emoji: "☀️",
    clues: [
      "It converts 600 million tons of hydrogen into helium every second",
      "Its corona is mysteriously hotter than its surface",
      "It completes one orbit of the galaxy every 230 million years",
      "It contains 99.86% of our solar system's total mass",
      "It's a G-type main-sequence star about 4.6 billion years old",
      "The star at the center of our solar system"
    ]
  },
  {
    name: "Miranda",
    type: "Moon",
    parent: "Uranus",
    emoji: "🧩",
    clues: [
      "Verona Rupes on its surface is the tallest known cliff in the solar system",
      "Its patchwork terrain suggests it may have been shattered and reassembled",
      "Voyager 2 captured detailed images during its 1986 flyby",
      "It's only about 470 km in diameter",
      "Named after the character from Shakespeare's The Tempest",
      "The smallest and innermost of Uranus's five major moons"
    ]
  },
  {
    name: "Sedna",
    type: "Dwarf Planet",
    parent: "Sun",
    emoji: "🔴",
    clues: [
      "Its orbit takes about 11,400 years to complete",
      "At its farthest, it's nearly 1,000 AU from the Sun",
      "It's one of the reddest objects in the solar system",
      "Its extremely elongated orbit puzzles astronomers",
      "Discovered in 2003, it may be from the inner Oort Cloud",
      "Named after the Inuit goddess of the sea"
    ]
  },
  {
    name: "Mimas",
    type: "Moon",
    parent: "Saturn",
    emoji: "💫",
    clues: [
      "It may have an internal ocean despite its small size",
      "Its resonance with ring particles creates the Cassini Division",
      "Herschel crater spans nearly a third of its diameter",
      "The massive crater makes it look like a certain space station",
      "It's often called the 'Death Star moon'",
      "A small moon of Saturn with a giant crater"
    ]
  },
  {
    name: "67P/Churyumov–Gerasimenko",
    type: "Comet",
    parent: "Sun",
    emoji: "🦆",
    clues: [
      "The Philae lander bounced twice before settling on its surface",
      "It has a distinctive rubber-duck shape from two joined lobes",
      "ESA's Rosetta mission orbited it from 2014 to 2016",
      "Jets of gas and dust erupt as it approaches the Sun",
      "It was the first comet to have a spacecraft orbit and land on it",
      "A comet visited by the Rosetta mission"
    ]
  },
  {
    name: "Oberon",
    type: "Moon",
    parent: "Uranus",
    emoji: "👑",
    clues: [
      "A mountain on its limb was spotted by Voyager 2 rising 11 km high",
      "Its surface is heavily cratered and geologically old",
      "Dark material on its crater floors may be carbon-rich",
      "Discovered by William Herschel in 1787",
      "Named after the king of the fairies in A Midsummer Night's Dream",
      "The outermost major moon of Uranus"
    ]
  },
  {
    name: "Ariel",
    type: "Moon",
    parent: "Uranus",
    emoji: "✨",
    clues: [
      "It has the brightest and youngest surface of Uranus's moons",
      "Extensive rift valleys suggest past geological activity",
      "Voyager 2 imaged only about 35% of its surface",
      "Discovered in 1851 by William Lassell",
      "Named after a spirit in Shakespeare's The Tempest and Pope's poetry",
      "One of Uranus's five major moons — the brightest one"
    ]
  },
  {
    name: "Iapetus",
    type: "Moon",
    parent: "Saturn",
    emoji: "🎭",
    clues: [
      "An equatorial ridge up to 20 km high circles much of its waist",
      "Giovanni Cassini discovered it in 1671 and noticed its brightness varied",
      "One hemisphere is as dark as coal, the other as bright as snow",
      "Its extreme two-toned coloring is unique in the solar system",
      "Sometimes called the 'yin-yang moon'",
      "A moon of Saturn with a dramatic two-toned surface"
    ]
  },
  {
    name: "Bennu",
    type: "Asteroid",
    parent: "Sun",
    emoji: "💎",
    clues: [
      "OSIRIS-REx collected about 121 grams of material from its surface",
      "It's a rubble pile held together mostly by gravity",
      "It has a small chance of impacting Earth in the late 2100s",
      "The sample was returned to Earth in September 2023",
      "Named after the ancient Egyptian mythological bird",
      "A near-Earth asteroid visited by NASA's OSIRIS-REx"
    ]
  },
  {
    name: "Ryugu",
    type: "Asteroid",
    parent: "Sun",
    emoji: "🏯",
    clues: [
      "JAXA's Hayabusa2 collected subsurface samples using an impactor",
      "It has a distinctive diamond or spinning-top shape",
      "Its extremely dark surface reflects only about 2% of sunlight",
      "Samples revealed amino acids and other organic compounds",
      "Named after a magical underwater palace in Japanese folklore",
      "A near-Earth asteroid sampled by Japan's Hayabusa2"
    ]
  },
  {
    name: "Oumuamua",
    type: "Asteroid",
    parent: "Interstellar",
    emoji: "🚀",
    clues: [
      "It accelerated away from the Sun faster than gravity alone explains",
      "It showed no visible coma or tail despite solar heating",
      "Its extreme elongated shape was unlike any known asteroid",
      "Detected in October 2017 passing through our solar system",
      "It's the first confirmed interstellar object to visit our solar system",
      "A mysterious interstellar visitor named with a Hawaiian word meaning 'scout'"
    ]
  },
  {
    name: "Titan (Moon of Saturn)",
    type: "Moon",
    parent: "Saturn",
    emoji: "🌫️",
    clues: [
      "The Huygens probe landed here in 2005",
      "It has a thick nitrogen atmosphere denser than Earth's",
      "Lakes of liquid methane dot its polar regions",
      "NASA's Dragonfly rotorcraft will explore it in the 2030s",
      "It's the second-largest moon in the solar system",
      "Saturn's largest moon — the only moon with a dense atmosphere"
    ]
  },
  {
    name: "Psyche",
    type: "Asteroid",
    parent: "Sun",
    emoji: "🔩",
    clues: [
      "NASA launched a spacecraft of the same name to visit it in 2023",
      "It's thought to be the exposed core of a protoplanet",
      "Its composition is mostly iron and nickel",
      "If mined, its metals would be worth quintillions of dollars",
      "It's one of the most massive objects in the asteroid belt",
      "A metallic asteroid that may be a planetary core"
    ]
  }
];

// Remove duplicate Titan entry, keep the original
export const uniqueBodies = bodies.filter((b, i) =>
  bodies.findIndex(x => x.name === b.name) === i
);
