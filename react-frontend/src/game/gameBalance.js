export const GAME_RULES = {
  maxHearts: 4,
  enemyHitDamage: 0.5,
  floorsPerLevel: 5,
  floorCount: 5,
  minRoomsPerFloor: 3,
  maxRoomsPerFloor: 5,
  chestSpawnChance: 1,
  chestGemChance: 0.05,
  chestBlueHeartChance: 0.08,
  chestTarotChance: 0.1,
  chestPotionChance: 0.2,
  merchantTunnelChance: 1,
  merchantForceAfterTunnels: 0,
  shopCardCost: 1,
  coinDropMin: 5,
  coinDropMax: 10,
  roomWidth: 960,
  roomHeight: 600,
};

export const LEVELS = {
  skeleton: {
    id: "skeleton",
    title: "Skeleton Crypt",
    shortTitle: "Crypt",
    theme: "skeleton",
  },
  hell: {
    id: "hell",
    title: "Hell Depths",
    shortTitle: "Hell",
    theme: "hell",
  },
  campaign: {
    id: "campaign",
    title: "Chaos Campaign",
    shortTitle: "Campaign",
    theme: "mixed",
  },
};

export const HEROES = {
  nox: {
    id: "nox",
    name: "Nox",
    price: 0,
    description: "Balanced mage with a close burst skill.",
  },
  riven: {
    id: "riven",
    name: "Riven",
    price: 0,
    description: "Fast blade fighter with a forward flame wave.",
  },
};

export const PLAYER_BASE_STATS = {
  speed: 210,
  attackDamage: 1,
  attackCooldown: 420,
  attackRange: 92,
  critChance: 0.05,
  critMultiplier: 1.75,
  burnChance: 0,
  burnDamage: 0,
  burnDamageMultiplier: 1,
  burnDurationBonus: 0,
  damageReduction: 0,
  enemySlowOnHit: 0,
  enemySlowDuration: 0,
  blueHeartDropChance: 0,
  poisonChance: 0,
  poisonDamage: 0,
  poisonDamageReduction: 0,
  fireCards: 0,
  blueHeartCards: 0,
  critCards: 0,
  poisonCards: 0,
  shieldEcho: false,
  crystalBlood: false,
  shieldPulse: false,
  azureBarrier: false,
  hellfireCore: false,
  infernalDash: false,
  burningWave: false,
  flameCrit: false,
  ashExplosion: false,
  infernoChain: false,
  huntersMark: false,
  sharpRitual: false,
  executionFang: false,
  killerTempo: false,
  perfectStrike: false,
  toxicReward: false,
  plagueCloud: false,
  venomRitual: false,
  spreadingPlague: false,
  blackVenom: false,
  skillCooldown: 4500,
  rollCooldown: 900,
  rollSpeed: 520,
  rollDuration: 220,
};

export const TAROT_CARDS = [
  {
    id: "quick-hands",
    title: "Quick Hands",
    description: "Attack speed +10%",
    apply(stats) {
      stats.attackCooldown *= 0.9;
    },
  },
  {
    id: "fleet-step",
    title: "Fleet Step",
    description: "Movement speed +12%",
    apply(stats) {
      stats.speed *= 1.12;
    },
  },
  {
    id: "violet-force",
    title: "Violet Force",
    description: "Damage +25%",
    apply(stats) {
      stats.attackDamage *= 1.25;
    },
  },
  {
    id: "soft-heart",
    title: "Soft Heart",
    description: "Restore HP to full",
    theme: "heart",
    apply(stats, scene) {
      scene.healToFull();
    },
  },
  {
    id: "heart-vessel",
    title: "Heart Vessel",
    description: "Max HP +1 heart",
    theme: "heart",
    apply(stats, scene) {
      scene.increaseMaxHearts(1);
    },
  },
  {
    id: "moon-guard",
    title: "Moon Guard",
    description: "Gain +1 temporary blue heart",
    theme: "heart",
    build: "blueHeart",
    apply(stats, scene) {
      scene.addTempHearts(1);
    },
  },
  {
    id: "azure-vessel",
    title: "Azure Vessel",
    description: "Gain +2 temporary blue hearts",
    theme: "heart",
    build: "blueHeart",
    apply(stats, scene) {
      scene.addTempHearts(2);
    },
  },
  {
    id: "blue-splinter",
    title: "Blue Splinter",
    description: "Kills have 10% chance to drop half a blue heart",
    theme: "heart",
    build: "blueHeart",
    apply(stats) {
      stats.blueHeartDropChance = Math.max(stats.blueHeartDropChance, 0.1);
    },
  },
  {
    id: "shield-echo",
    title: "Shield Echo",
    description: "Losing blue hearts creates a magic blast",
    theme: "heart",
    build: "blueHeart",
    apply(stats) {
      stats.shieldEcho = true;
    },
  },
  {
    id: "crystal-blood",
    title: "Crystal Blood",
    description: "+5% damage per blue heart, up to +25%",
    theme: "heart",
    build: "blueHeart",
    apply(stats) {
      stats.crystalBlood = true;
    },
  },
  {
    id: "short-ritual",
    title: "Short Ritual",
    description: "Skill cooldown -15%",
    apply(stats) {
      stats.skillCooldown *= 0.85;
    },
  },
  {
    id: "bone-focus",
    title: "Bone Focus",
    description: "Crit chance +15%",
    theme: "skeleton",
    build: "crit",
    apply(stats) {
      stats.critChance += 0.15;
    },
  },
  {
    id: "grave-fang",
    title: "Grave Fang",
    description: "Crit damage +35%",
    theme: "skeleton",
    build: "crit",
    apply(stats) {
      stats.critMultiplier += 0.35;
    },
  },
  {
    id: "hunters-mark",
    title: "Hunter's Mark",
    description: "First hit on each enemy deals +50% damage",
    theme: "skeleton",
    build: "crit",
    apply(stats) {
      stats.huntersMark = true;
    },
  },
  {
    id: "sharp-ritual",
    title: "Sharp Ritual",
    description: "Crits reduce E cooldown by 0.5s",
    theme: "skeleton",
    build: "crit",
    apply(stats) {
      stats.sharpRitual = true;
    },
  },
  {
    id: "execution-fang",
    title: "Execution Fang",
    description: "Crits execute enemies below 30% HP",
    theme: "skeleton",
    build: "crit",
    apply(stats) {
      stats.executionFang = true;
    },
  },
  {
    id: "obsidian-skin",
    title: "Obsidian Skin",
    description: "Incoming damage -20%",
    theme: "hell",
    apply(stats) {
      stats.damageReduction = Math.min(0.55, stats.damageReduction + 0.2);
    },
  },
  {
    id: "cinder-edge",
    title: "Cinder Edge",
    description: "15% chance to burn enemies for 3s",
    theme: "hell",
    build: "fire",
    apply(stats) {
      stats.burnChance = Math.max(stats.burnChance, 0.15);
      stats.burnDamage = Math.max(stats.burnDamage, 0.16);
    },
  },
  {
    id: "hellfire-core",
    title: "Hellfire Core",
    description: "Burn damage +50%, re-burn extends burn",
    theme: "hell",
    build: "fire",
    apply(stats) {
      stats.hellfireCore = true;
      stats.burnDamageMultiplier = Math.max(stats.burnDamageMultiplier, 1.5);
    },
  },
  {
    id: "infernal-dash",
    title: "Infernal Dash",
    description: "Dash leaves fire for 2s",
    theme: "hell",
    build: "fire",
    apply(stats) {
      stats.infernalDash = true;
    },
  },
  {
    id: "burning-wave",
    title: "Burning Wave",
    description: "Every 4th attack releases a fire wave",
    theme: "hell",
    build: "fire",
    apply(stats) {
      stats.burningWave = true;
    },
  },
  {
    id: "flame-crit",
    title: "Flame Crit",
    description: "Crits hit burning enemies harder",
    theme: "hell",
    build: "fire",
    apply(stats) {
      stats.flameCrit = true;
    },
  },
  {
    id: "ash-tether",
    title: "Ash Tether",
    description: "Hits slow enemies by 18%",
    theme: "hellBonus",
    apply(stats) {
      stats.enemySlowOnHit = Math.max(stats.enemySlowOnHit, 0.18);
      stats.enemySlowDuration = Math.max(stats.enemySlowDuration, 900);
    },
  },
  {
    id: "war-tempo",
    title: "War Tempo",
    description: "Damage +10%, attack speed +8%",
    apply(stats) {
      stats.attackDamage *= 1.1;
      stats.attackCooldown *= 0.92;
    },
  },
  {
    id: "toxic-edge",
    title: "Toxic Edge",
    description: "15% chance to poison enemies for 4s",
    theme: "poison",
    build: "poison",
    apply(stats) {
      stats.poisonChance = Math.max(stats.poisonChance, 0.15);
      stats.poisonDamage = Math.max(stats.poisonDamage, 0.1);
    },
  },
  {
    id: "rotten-heart",
    title: "Rotten Heart",
    description: "+1 green heart; lost green hearts poison nearby enemies",
    theme: "poison",
    build: "poison",
    apply(stats, scene) {
      scene.addGreenHearts(1);
    },
  },
  {
    id: "plague-cloud",
    title: "Plague Cloud",
    description: "Poisoned enemies leave poison clouds on death",
    theme: "poison",
    build: "poison",
    apply(stats) {
      stats.plagueCloud = true;
    },
  },
  {
    id: "venom-ritual",
    title: "Venom Ritual",
    description: "E skill damage +30% against poisoned enemies",
    theme: "poison",
    build: "poison",
    apply(stats) {
      stats.venomRitual = true;
    },
  },
  {
    id: "toxic-reward",
    title: "Toxic Reward",
    description: "Poisoned kills can restore 0.5 green heart",
    theme: "poison",
    build: "poison",
    apply(stats) {
      stats.toxicReward = true;
    },
  },
];

export const SHOP_CARDS = [
  {
    id: "traveler-heart-vessel",
    title: "Vessel of Dawn",
    description: "Max HP +1 heart",
    asset: "traveler1",
    apply(stats, scene) {
      scene.increaseMaxHearts(1);
    },
  },
  {
    id: "traveler-star-shot",
    title: "Star Shot",
    description: "LMB also fires a projectile",
    asset: "traveler2",
    apply(stats, scene) {
      scene.enableProjectileAttack();
    },
  },
  {
    id: "traveler-silk-boots",
    title: "Silk Boots",
    description: "Dash cooldown -20%",
    asset: "traveler3",
    apply(stats) {
      stats.rollCooldown *= 0.8;
    },
  },
];

export const HERO_SHOP_SKILLS = {
  nox: {
    id: "traveler-nox-star-shot",
    title: "Star Shot",
    description: "LMB also fires a magic projectile",
    asset: "traveler2",
  },
  riven: {
    id: "traveler-riven-ember-blade",
    title: "Ember Blade",
    description: "LMB fires a burning blade wave",
    asset: "traveler2",
  },
};

export const ENEMY_TYPES = {
  skeleton: {
    sheet: "skeletonCommon",
    crop: { x: 270, y: 95, width: 95, height: 145 },
    health: 2,
    speed: 82,
    damageCooldown: 950,
    aiStyle: "cautious",
    desiredRange: 72,
    retreatHealthRatio: 0.35,
    retreatChance: 0.45,
    tint: 0xffffff,
  },
  guard: {
    sheet: "skeletonStrong",
    crop: { x: 820, y: 92, width: 105, height: 150 },
    health: 3,
    speed: 66,
    damageCooldown: 1050,
    aiStyle: "guard",
    desiredRange: 58,
    retreatHealthRatio: 0.25,
    retreatChance: 0.28,
    tint: 0xd6c0ff,
  },
  dog: {
    sheet: "skeletonDog",
    crop: { x: 250, y: 100, width: 125, height: 115 },
    health: 1.5,
    speed: 125,
    damageCooldown: 780,
    aiStyle: "skirmisher",
    desiredRange: 84,
    retreatHealthRatio: 0.45,
    retreatChance: 0.68,
    lungeChance: 0.32,
    tint: 0xfff1c2,
  },
  dogStrong: {
    sheet: "skeletonDogStrong",
    crop: { x: 250, y: 100, width: 125, height: 115 },
    health: 2.4,
    speed: 138,
    damageCooldown: 720,
    aiStyle: "skirmisher",
    desiredRange: 88,
    retreatHealthRatio: 0.42,
    retreatChance: 0.58,
    lungeChance: 0.42,
    tint: 0xd4b7ff,
  },
  boss: {
    sheet: "skeletonBoss",
    crop: { x: 70, y: 95, width: 165, height: 195 },
    health: 12,
    speed: 58,
    damageCooldown: 850,
    aiStyle: "boss",
    desiredRange: 185,
    retreatHealthRatio: 0,
    retreatChance: 0,
    tint: 0xffd1f1,
  },
  impLittle: {
    health: 1.6,
    speed: 148,
    damageCooldown: 720,
    aiStyle: "skirmisher",
    desiredRange: 78,
    retreatHealthRatio: 0.32,
    retreatChance: 0.42,
    lungeChance: 0.46,
    superAttackChance: 0.35,
    tint: 0xffffff,
  },
  hellKiller: {
    health: 2.4,
    speed: 104,
    damageCooldown: 860,
    aiStyle: "ranged",
    desiredRange: 220,
    retreatHealthRatio: 0.38,
    retreatChance: 0.58,
    lungeChance: 0.1,
    projectileCooldown: 2800,
    superProjectileCooldown: 6800,
    superAttackChance: 0.24,
    tint: 0xffffff,
  },
  hellGolem: {
    health: 3.4,
    speed: 76,
    damageCooldown: 980,
    aiStyle: "guard",
    desiredRange: 70,
    retreatHealthRatio: 0.22,
    retreatChance: 0.2,
    lungeChance: 0.24,
    superAttackChance: 0.26,
    tint: 0xffffff,
  },
  hellTank: {
    health: 4.4,
    speed: 58,
    damageCooldown: 1080,
    aiStyle: "guard",
    desiredRange: 62,
    retreatHealthRatio: 0.15,
    retreatChance: 0.1,
    lungeChance: 0.2,
    superAttackChance: 0.34,
    tint: 0xffffff,
  },
  hellTitan: {
    health: 5.4,
    speed: 64,
    damageCooldown: 1160,
    aiStyle: "guard",
    desiredRange: 74,
    retreatHealthRatio: 0.18,
    retreatChance: 0.12,
    lungeChance: 0.28,
    superAttackChance: 0.42,
    tint: 0xffffff,
  },
  infernalBoss: {
    health: 16,
    speed: 72,
    damageCooldown: 780,
    aiStyle: "infernalBoss",
    desiredRange: 210,
    retreatHealthRatio: 0,
    retreatChance: 0,
    projectileCooldown: 1600,
    superProjectileCooldown: 4200,
    superAttackChance: 0.45,
    tint: 0xffffff,
  },
};
