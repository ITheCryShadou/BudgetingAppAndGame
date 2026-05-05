import { ENEMY_TYPES, GAME_RULES, HEROES, PLAYER_BASE_STATS } from "./gameBalance";
import noxIcon from "../assets/game/heroes/nox/Nox-Icon.png";
import noxIdle from "../assets/game/heroes/nox/Nox-Idle.png";
import noxWalk from "../assets/game/heroes/nox/Nox-Walk.png";
import noxRun from "../assets/game/heroes/nox/Nox-Run.png";
import noxDash from "../assets/game/heroes/nox/Nox-Dash.png";
import noxAttack from "../assets/game/heroes/nox/Nox-Attack.png";
import noxSkillAttack from "../assets/game/heroes/nox/Nox-SkillAttack.png";
import noxSuperAttack from "../assets/game/heroes/nox/Nox-SuperAttack.png";
import noxDamage from "../assets/game/heroes/nox/Nox-DamageTaken.png";
import noxDeath from "../assets/game/heroes/nox/Nox-Death.png";
import noxArcaneOrbProjectile from "../assets/game/heroes/nox/Nox-ArcaneOrbProjectile.png";
import noxCrystalShardProjectile from "../assets/game/heroes/nox/Nox-CrystalShardProjectile.png";
import noxDashShadowProjectile from "../assets/game/heroes/nox/Nox-DashShadowProjectile.png";
import noxHitImpactEffect from "../assets/game/heroes/nox/Nox-HitImpactEffect.png";
import noxLargeMagicWaveProjectile from "../assets/game/heroes/nox/Nox-LargeMagicWaveProjectile.png";
import noxMagicBoltProjectile from "../assets/game/heroes/nox/Nox-MagicBoltProjectile.png";
import noxSmallMagicArcProjectile from "../assets/game/heroes/nox/Nox-SmallMagicArcProjectile.png";
import noxSuperSpellBurstProjectile from "../assets/game/heroes/nox/Nox-SuperSpellBurstProjectile.png";
import rivenIcon from "../assets/game/heroes/riven/Riven-Icon.png";
import rivenIdle from "../assets/game/heroes/riven/Riven-Idle.png";
import rivenWalk from "../assets/game/heroes/riven/Riven-Walk.png";
import rivenRun from "../assets/game/heroes/riven/Riven-Run.png";
import rivenDash from "../assets/game/heroes/riven/Riven-Dash.png";
import rivenAttack from "../assets/game/heroes/riven/Riven-Attack.png";
import rivenCrit from "../assets/game/heroes/riven/Riven-AttackCrit.png";
import rivenDamage from "../assets/game/heroes/riven/Riven-DamageTaken.png";
import rivenDeath from "../assets/game/heroes/riven/Riven-Death.png";
import rivenProjectile from "../assets/game/heroes/riven/Riven-AttackCritProjectin.png";
import skeletonIcon from "../assets/game/enemies/skeleton-common/SkeletonCommon-Icon.png";
import skeletonIdle from "../assets/game/enemies/skeleton-common/SkeletonCommon-Idle.png";
import skeletonWalk from "../assets/game/enemies/skeleton-common/SkeletonCommon-Walk.png";
import skeletonAttack from "../assets/game/enemies/skeleton-common/SkeletonCommon-Attack.png";
import skeletonCrit from "../assets/game/enemies/skeleton-common/SkeletonCommon-AttackCrit.png";
import skeletonDamage from "../assets/game/enemies/skeleton-common/SkeletonCommon-DamageTaken.png";
import skeletonDeath from "../assets/game/enemies/skeleton-common/SkeletonCommon-Death.png";
import skeletonRevive from "../assets/game/enemies/skeleton-common/SkeletonCommon-Revive.png";
import guardIcon from "../assets/game/enemies/skeleton-strong/SkeletonStrong-Icon.png";
import guardIdle from "../assets/game/enemies/skeleton-strong/SkeletonStrong-Idle.png";
import guardWalk from "../assets/game/enemies/skeleton-strong/SkeletonStrong-Walk.png";
import guardRun from "../assets/game/enemies/skeleton-strong/SkeletonStrong-Run.png";
import guardAttack from "../assets/game/enemies/skeleton-strong/SkeletonStrong-Attack.png";
import guardClose from "../assets/game/enemies/skeleton-strong/SkeletonStrong-AttackClose.png";
import guardCrit from "../assets/game/enemies/skeleton-strong/SkeletonStrong-AttackCrit.png";
import guardDamage from "../assets/game/enemies/skeleton-strong/SkeletonStrong-DamageTaken.png";
import guardDeath from "../assets/game/enemies/skeleton-strong/SkeletonStrong-Death.png";
import guardRevive from "../assets/game/enemies/skeleton-strong/SkeletonStrong-Revive.png";
import dogIcon from "../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Icon.png";
import dogIdle from "../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Idle.png";
import dogRun from "../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Run.png";
import dogAttack from "../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Attack.png";
import dogCrit from "../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-AttackCrit.png";
import dogDamage from "../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-DamageTaken.png";
import dogDeath from "../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Death.png";
import dogRevive from "../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Revive.png";
import dogStrongIcon from "../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Icon.png";
import dogStrongIdle from "../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Idle.png";
import dogStrongRun from "../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Run.png";
import dogStrongAttack from "../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Attack.png";
import dogStrongCrit from "../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-AttackCrit.png";
import dogStrongDash from "../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Dash.png";
import dogStrongDamage from "../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-DamageTaken.png";
import dogStrongDeath from "../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Death.png";
import dogStrongRevive from "../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Revive.png";
import dogStrongProjectile from "../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-AttackCritProjectile.png";
import skeletonBossIcon from "../assets/game/enemies/skeleton-boss/SkeletonBoss-Icon.png";
import skeletonBossIdle from "../assets/game/enemies/skeleton-boss/SkeletonBoss-Idle.png";
import skeletonBossWalk from "../assets/game/enemies/skeleton-boss/SkeletonBoss-Walk.png";
import skeletonBossAttack from "../assets/game/enemies/skeleton-boss/SkeletonBoss-AttackClose.png";
import skeletonBossLong from "../assets/game/enemies/skeleton-boss/SkeletonBoss-AttackLong.png";
import skeletonBossDamage from "../assets/game/enemies/skeleton-boss/SkeletonBoss-DamageTaken.png";
import skeletonBossDeath from "../assets/game/enemies/skeleton-boss/SkeletonBoss-Death.png";
import skeletonBossRevive from "../assets/game/enemies/skeleton-boss/SkeletonBoss-Revive.png";
import skeletonBossProjectile from "../assets/game/enemies/skeleton-boss/SkeletonBoss-AttackLongProjectile.png";
import impIcon from "../assets/game/hell/enemies/ImpLittle/ImpLittle-Icon.png";
import impIdle from "../assets/game/hell/enemies/ImpLittle/ImpLittle-Idle.png";
import impRun from "../assets/game/hell/enemies/ImpLittle/ImpLittle-Run.png";
import impAttack from "../assets/game/hell/enemies/ImpLittle/ImpLittle-Attack.png";
import impSuper from "../assets/game/hell/enemies/ImpLittle/ImpLittle-SuperAttack.png";
import impDamage from "../assets/game/hell/enemies/ImpLittle/ImpLittle-DamageTaken.png";
import impDeath from "../assets/game/hell/enemies/ImpLittle/ImpLittle-Death.png";
import killerIcon from "../assets/game/hell/enemies/HellKiller/HellKiller-Icon.png";
import killerIdle from "../assets/game/hell/enemies/HellKiller/HellKiller-Idle.png";
import killerWalk from "../assets/game/hell/enemies/HellKiller/HellKiller-Walk.png";
import killerRun from "../assets/game/hell/enemies/HellKiller/HellKiller-Run.png";
import killerAttack from "../assets/game/hell/enemies/HellKiller/HellKiller-Attack.png";
import killerSuper from "../assets/game/hell/enemies/HellKiller/HellKiller-SuperAttack.png";
import killerDamage from "../assets/game/hell/enemies/HellKiller/HellKiller-DamageTaken.png";
import killerDeath from "../assets/game/hell/enemies/HellKiller/HellKiller-Death.png";
import killerProjectile from "../assets/game/hell/enemies/HellKiller/HellKiller-projectile-Attack.png";
import killerSuperProjectile from "../assets/game/hell/enemies/HellKiller/HellKiller-projectile-SuperAttack1.png";
import golemIcon from "../assets/game/hell/enemies/HellGolem/HellGolem-Icon.png";
import golemIdle from "../assets/game/hell/enemies/HellGolem/HellGolem-Idle.png";
import golemWalk from "../assets/game/hell/enemies/HellGolem/HellGolem-Walk.png";
import golemRun from "../assets/game/hell/enemies/HellGolem/HellGolem-Run.png";
import golemAttack from "../assets/game/hell/enemies/HellGolem/HellGolem-Attack.png";
import golemSuper from "../assets/game/hell/enemies/HellGolem/HellGolem-SuperAttack.png";
import golemDamage from "../assets/game/hell/enemies/HellGolem/HellGolem-DamageTaken.png";
import golemDeath from "../assets/game/hell/enemies/HellGolem/HellGolem-Death.png";
import tankIcon from "../assets/game/hell/enemies/HellTank/HellTank-Icon.png";
import tankIdle from "../assets/game/hell/enemies/HellTank/HellTank-Idle.png";
import tankWalk from "../assets/game/hell/enemies/HellTank/HellTank-Walk.png";
import tankRun from "../assets/game/hell/enemies/HellTank/HellTank-Run.png";
import tankAttack from "../assets/game/hell/enemies/HellTank/HellTank-Attack.png";
import tankSuper from "../assets/game/hell/enemies/HellTank/HellTank-SuperAttack.png";
import tankDamage from "../assets/game/hell/enemies/HellTank/HellTank-DamageTaken.png";
import tankDeath from "../assets/game/hell/enemies/HellTank/HellTank-Death.png";
import titanIcon from "../assets/game/hell/enemies/HellTitan/HellTitan-Icon.png";
import titanIdle from "../assets/game/hell/enemies/HellTitan/HellTitan-Idle.png";
import titanWalk from "../assets/game/hell/enemies/HellTitan/HellTitan-Walk.png";
import titanRun from "../assets/game/hell/enemies/HellTitan/HellTitan-Run.png";
import titanAttack from "../assets/game/hell/enemies/HellTitan/HellTitan-Attack.png";
import titanSuper from "../assets/game/hell/enemies/HellTitan/HellTitan-SuperAttack.png";
import titanDamage from "../assets/game/hell/enemies/HellTitan/HellTitan-DamageTaken.png";
import titanDeath from "../assets/game/hell/enemies/HellTitan/HellTitan-Death.png";
import infernalIcon from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Icon.png";
import infernalP1Idle from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Idle.png";
import infernalP1Walk from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Walk.png";
import infernalP1Attack from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Attack.png";
import infernalP1Super from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-SuperAttack.png";
import infernalP1Death from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Death.png";
import infernalP2Idle from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-Idle.png";
import infernalP2Attack from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-Attack.png";
import infernalP2Super from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-SuperAttack.png";
import infernalTornado from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-HellfireTornado.png";
import infernalSuperTornado from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-SuperHellfireTornado.png";

function stat(label, value) {
  return { label, value };
}

function enemyStats(enemyId) {
  const enemy = ENEMY_TYPES[enemyId];
  return [
    stat("HP", enemy.health),
    stat("Damage", `${GAME_RULES.enemyHitDamage} heart`),
    stat("Speed", Math.round(enemy.speed)),
    stat("AI", enemy.aiStyle),
    stat("Attack cd", `${enemy.damageCooldown}ms`),
  ];
}

function heroStats(heroId) {
  return [
    stat("HP", `${GAME_RULES.maxHearts} hearts`),
    stat("Damage", PLAYER_BASE_STATS.attackDamage),
    stat("Speed", PLAYER_BASE_STATS.speed),
    stat("Crit", `${Math.round(PLAYER_BASE_STATS.critChance * 100)}%`),
    stat("Attack cd", `${PLAYER_BASE_STATS.attackCooldown}ms`),
    stat("Skill cd", `${PLAYER_BASE_STATS.skillCooldown / 1000}s`),
    stat("Price", `${HEROES[heroId].price} coins`),
  ];
}

const ARCHIVE_ANIMATION_META = {
  nox: {
    Idle: { frames: 9, fps: 6 },
    Walk: { frames: 9, fps: 10 },
    Run: { frames: 9, fps: 13 },
    Dash: { frames: 5, fps: 14 },
    Attack: { frames: 9, fps: 13 },
    "Skill attack": { frames: 8, fps: 12 },
    "Super attack": { frames: 8, fps: 11 },
    "Damage taken": { frames: 4, fps: 10 },
    Death: { frames: 6, fps: 8 },
    "Magic bolt projectile": { frames: 9, fps: 14 },
    "Arcane orb projectile": { frames: 9, fps: 13 },
    "Crystal shard projectile": { frames: 9, fps: 13 },
    "Dash shadow projectile": { frames: 9, fps: 14 },
    "Hit impact effect": { frames: 7, fps: 14 },
    "Large magic wave projectile": { frames: 9, fps: 12 },
    "Small magic arc projectile": { frames: 6, fps: 13 },
    "Super spell burst projectile": { frames: 7, fps: 11 },
  },
  riven: {
    Idle: { frames: 1, fps: 1 },
    Walk: { frames: 8, fps: 9 },
    Run: { frames: 8, fps: 12 },
    Dash: { frames: 6, fps: 14 },
    Attack: { frames: 5, fps: 13 },
    "Critical attack": { frames: 5, fps: 13 },
    "Damage taken": { frames: 5, fps: 12 },
    Death: { frames: 7, fps: 8 },
    Projectile: { frames: 1, fps: 1 },
  },
  skeleton: {
    Idle: { frames: 4, fps: 5 },
    Walk: { frames: 7, fps: 9 },
    Attack: { frames: 5, fps: 12 },
    "Critical attack": { frames: 5, fps: 12 },
    "Damage taken": { frames: 5, fps: 11 },
    Death: { frames: 7, fps: 9 },
    Revive: { frames: 6, fps: 9 },
  },
  guard: {
    Idle: { frames: 4, fps: 5 },
    Walk: { frames: 4, fps: 8 },
    Run: { frames: 4, fps: 8 },
    Attack: { frames: 5, fps: 12 },
    "Close attack": { frames: 1, fps: 1 },
    "Critical attack": { frames: 5, fps: 12 },
    "Damage taken": { frames: 4, fps: 11 },
    Death: { frames: 7, fps: 9 },
    Revive: { frames: 5, fps: 8 },
  },
  dog: {
    Idle: { frames: 4, fps: 5 },
    Run: { frames: 4, fps: 11 },
    Attack: { frames: 5, fps: 13 },
    "Critical attack": { frames: 5, fps: 13 },
    "Damage taken": { frames: 5, fps: 11 },
    Death: { frames: 5, fps: 9 },
    Revive: { frames: 5, fps: 9 },
  },
  dogStrong: {
    Idle: { frames: 1, fps: 1 },
    Run: { frames: 3, fps: 7 },
    Dash: { frames: 5, fps: 11 },
    Attack: { frames: 5, fps: 13 },
    "Critical attack": { frames: 5, fps: 13 },
    "Damage taken": { frames: 5, fps: 11 },
    Death: { frames: 5, fps: 9 },
    Revive: { frames: 5, fps: 9 },
    Projectile: { frames: 1, fps: 1 },
  },
  boss: {
    Idle: { frames: 4, fps: 5 },
    Walk: { frames: 3, fps: 6 },
    "Close attack": { frames: 1, fps: 1 },
    "Long attack": { frames: 1, fps: 1 },
    "Damage taken": { frames: 5, fps: 10 },
    Death: { frames: 4, fps: 8 },
    Revive: { frames: 5, fps: 7 },
    Projectile: { frames: 1, fps: 1 },
  },
  impLittle: {
    Idle: { frames: 8, fps: 7 },
    Run: { frames: 8, fps: 11 },
    Attack: { frames: 5, fps: 13 },
    "Super attack": { frames: 5, fps: 12 },
    "Damage taken": { frames: 6, fps: 12 },
    Death: { frames: 6, fps: 9 },
  },
  hellKiller: {
    Idle: { frames: 8, fps: 6 },
    Walk: { frames: 8, fps: 9 },
    Run: { frames: 8, fps: 10 },
    Attack: { frames: 8, fps: 12 },
    "Super attack": { frames: 10, fps: 11 },
    "Damage taken": { frames: 6, fps: 11 },
    Death: { frames: 8, fps: 9 },
    Projectile: { frames: 5, fps: 8 },
    "Super projectile": { frames: 5, fps: 8 },
  },
  hellGolem: {
    Idle: { frames: 1, fps: 1 },
    Walk: { frames: 8, fps: 8 },
    Run: { frames: 8, fps: 9 },
    Attack: { frames: 10, fps: 13 },
    "Super attack": { frames: 10, fps: 11 },
    "Damage taken": { frames: 6, fps: 11 },
    Death: { frames: 8, fps: 9 },
  },
  hellTank: {
    Idle: { frames: 8, fps: 5 },
    Walk: { frames: 8, fps: 7 },
    Run: { frames: 8, fps: 8 },
    Attack: { frames: 10, fps: 11 },
    "Super attack": { frames: 10, fps: 10 },
    "Damage taken": { frames: 6, fps: 10 },
    Death: { frames: 6, fps: 8 },
  },
  hellTitan: {
    Idle: { frames: 8, fps: 5 },
    Walk: { frames: 8, fps: 7 },
    Run: { frames: 8, fps: 8 },
    Attack: { frames: 10, fps: 11 },
    "Super attack": { frames: 10, fps: 9 },
    "Damage taken": { frames: 6, fps: 10 },
    Death: { frames: 8, fps: 8 },
  },
  infernalBoss: {
    "Phase 1 idle": { frames: 8, fps: 6 },
    "Phase 1 walk": { frames: 9, fps: 8 },
    "Phase 1 attack": { frames: 11, fps: 12 },
    "Phase 1 super": { frames: 11, fps: 10 },
    "Phase 1 death": { frames: 8, fps: 8 },
    "Phase 2 idle": { frames: 8, fps: 6 },
    "Phase 2 attack": { frames: 11, fps: 13 },
    "Phase 2 super": { frames: 11, fps: 11 },
    Tornado: { frames: 11, fps: 10 },
    "Super tornado": { frames: 11, fps: 9 },
  },
};

function addAnimationMeta(entries) {
  return entries.map((entry) => ({
    ...entry,
    animations: entry.animations.map((animation) => ({
      ...animation,
      ...(ARCHIVE_ANIMATION_META[entry.id]?.[animation.label] ?? { frames: 1, fps: 1 }),
    })),
  }));
}

export const ARCHIVE_HEROES = addAnimationMeta([
  {
    id: "nox",
    name: "Nox",
    icon: noxIcon,
    type: "Hero",
    description: "Remodeled void mage. Nox fights with precise magic strikes, an air strike skill, and an optional shop upgrade that unlocks a stronger projectile pattern.",
    stats: heroStats("nox"),
    animations: [
      { label: "Idle", image: noxIdle },
      { label: "Walk", image: noxWalk },
      { label: "Run", image: noxRun },
      { label: "Dash", image: noxDash },
      { label: "Attack", image: noxAttack },
      { label: "Skill attack", image: noxSkillAttack },
      { label: "Super attack", image: noxSuperAttack },
      { label: "Damage taken", image: noxDamage },
      { label: "Death", image: noxDeath },
      { label: "Magic bolt projectile", image: noxMagicBoltProjectile },
      { label: "Arcane orb projectile", image: noxArcaneOrbProjectile },
      { label: "Crystal shard projectile", image: noxCrystalShardProjectile },
      { label: "Dash shadow projectile", image: noxDashShadowProjectile },
      { label: "Hit impact effect", image: noxHitImpactEffect },
      { label: "Large magic wave projectile", image: noxLargeMagicWaveProjectile },
      { label: "Small magic arc projectile", image: noxSmallMagicArcProjectile },
      { label: "Super spell burst projectile", image: noxSuperSpellBurstProjectile },
    ],
    attacks: [
      "LMB: close magic strike.",
      "E: Skill Attack sends a large magic wave forward and damages enemies around the impact.",
      "Shop upgrade: Void Barrage adds animated Nox projectiles to LMB, every third shot adds an arcane orb, and E fires extra crystal shards.",
    ],
  },
  {
    id: "riven",
    name: "Riven",
    icon: rivenIcon,
    type: "Hero",
    description: "Fast blade fighter focused on forward pressure. Riven is stronger when she can dash through danger and chain attacks into fire waves.",
    stats: heroStats("riven"),
    animations: [
      { label: "Idle", image: rivenIdle },
      { label: "Walk", image: rivenWalk },
      { label: "Run", image: rivenRun },
      { label: "Dash", image: rivenDash },
      { label: "Attack", image: rivenAttack },
      { label: "Critical attack", image: rivenCrit },
      { label: "Damage taken", image: rivenDamage },
      { label: "Death", image: rivenDeath },
      { label: "Projectile", image: rivenProjectile },
    ],
    attacks: [
      "LMB: blade slash in melee range.",
      "E: forward flame wave.",
      "Shop upgrade: Ember Blade adds a burning blade projectile.",
    ],
  },
]);

export const ARCHIVE_ENEMIES = addAnimationMeta([
  {
    id: "skeleton",
    name: "Common Skeleton",
    icon: skeletonIcon,
    type: "Enemy",
    description: "Basic crypt fighter. It can revive once if the revive roll succeeds, so finishing a room can be less simple than it first looks.",
    stats: enemyStats("skeleton"),
    animations: [
      { label: "Idle", image: skeletonIdle },
      { label: "Walk", image: skeletonWalk },
      { label: "Attack", image: skeletonAttack },
      { label: "Critical attack", image: skeletonCrit },
      { label: "Damage taken", image: skeletonDamage },
      { label: "Death", image: skeletonDeath },
      { label: "Revive", image: skeletonRevive },
    ],
    attacks: ["Melee slash.", "Can retreat at low HP.", "Can revive with 50% HP."],
  },
  {
    id: "guard",
    name: "Strong Skeleton",
    icon: guardIcon,
    type: "Enemy",
    description: "A heavier skeleton guard with more health and slower, more deliberate movement.",
    stats: enemyStats("guard"),
    animations: [
      { label: "Idle", image: guardIdle },
      { label: "Walk", image: guardWalk },
      { label: "Run", image: guardRun },
      { label: "Attack", image: guardAttack },
      { label: "Close attack", image: guardClose },
      { label: "Critical attack", image: guardCrit },
      { label: "Damage taken", image: guardDamage },
      { label: "Death", image: guardDeath },
      { label: "Revive", image: guardRevive },
    ],
    attacks: ["Heavy melee slash.", "Defensive guard AI.", "Can revive with 50% HP."],
  },
  {
    id: "dog",
    name: "Skeleton Hound",
    icon: dogIcon,
    type: "Enemy",
    description: "Fast skirmisher that likes to jump in, bite, and escape when low on health.",
    stats: enemyStats("dog"),
    animations: [
      { label: "Idle", image: dogIdle },
      { label: "Run", image: dogRun },
      { label: "Attack", image: dogAttack },
      { label: "Critical attack", image: dogCrit },
      { label: "Damage taken", image: dogDamage },
      { label: "Death", image: dogDeath },
      { label: "Revive", image: dogRevive },
    ],
    attacks: ["Fast bite.", "Skirmisher lunge.", "Can revive with 50% HP."],
  },
  {
    id: "dogStrong",
    name: "Strong Skeleton Hound",
    icon: dogStrongIcon,
    type: "Enemy",
    description: "A stronger hound variant with sharper lunges and a dangerous critical projectile asset.",
    stats: enemyStats("dogStrong"),
    animations: [
      { label: "Idle", image: dogStrongIdle },
      { label: "Run", image: dogStrongRun },
      { label: "Dash", image: dogStrongDash },
      { label: "Attack", image: dogStrongAttack },
      { label: "Critical attack", image: dogStrongCrit },
      { label: "Damage taken", image: dogStrongDamage },
      { label: "Death", image: dogStrongDeath },
      { label: "Revive", image: dogStrongRevive },
      { label: "Projectile", image: dogStrongProjectile },
    ],
    attacks: ["Fast bite.", "Dash lunge.", "Can revive with 50% HP."],
  },
  {
    id: "boss",
    name: "Skeleton Boss",
    icon: skeletonBossIcon,
    type: "Boss",
    description: "Crypt boss. After its first defeat it revives at 30% HP and summons skeleton support before the second phase of the fight continues.",
    stats: enemyStats("boss"),
    animations: [
      { label: "Idle", image: skeletonBossIdle },
      { label: "Walk", image: skeletonBossWalk },
      { label: "Close attack", image: skeletonBossAttack },
      { label: "Long attack", image: skeletonBossLong },
      { label: "Damage taken", image: skeletonBossDamage },
      { label: "Death", image: skeletonBossDeath },
      { label: "Revive", image: skeletonBossRevive },
      { label: "Projectile", image: skeletonBossProjectile },
    ],
    attacks: ["Close scythe attack.", "Ranged projectile attack.", "Revive summons 2-4 skeletons and up to 1 strong skeleton."],
  },
  {
    id: "impLittle",
    name: "Little Imp",
    icon: impIcon,
    type: "Enemy",
    description: "Small hell enemy built around speed. It is fragile, but it can quickly punish slow movement.",
    stats: enemyStats("impLittle"),
    animations: [
      { label: "Idle", image: impIdle },
      { label: "Run", image: impRun },
      { label: "Attack", image: impAttack },
      { label: "Super attack", image: impSuper },
      { label: "Damage taken", image: impDamage },
      { label: "Death", image: impDeath },
    ],
    attacks: ["Quick melee hit.", "Super attack burst."],
  },
  {
    id: "hellKiller",
    name: "Hell Killer",
    icon: killerIcon,
    type: "Enemy",
    description: "Ranged hell enemy. It tries to keep distance and uses projectile pressure to make the room harder to cross.",
    stats: enemyStats("hellKiller"),
    animations: [
      { label: "Idle", image: killerIdle },
      { label: "Walk", image: killerWalk },
      { label: "Run", image: killerRun },
      { label: "Attack", image: killerAttack },
      { label: "Super attack", image: killerSuper },
      { label: "Damage taken", image: killerDamage },
      { label: "Death", image: killerDeath },
      { label: "Projectile", image: killerProjectile },
      { label: "Super projectile", image: killerSuperProjectile },
    ],
    attacks: ["Ranged projectile.", "Super projectile burst.", "Retreats when pressured."],
  },
  {
    id: "hellGolem",
    name: "Hell Golem",
    icon: golemIcon,
    type: "Enemy",
    description: "Tough melee enemy with slow movement and a heavier super attack.",
    stats: enemyStats("hellGolem"),
    animations: [
      { label: "Idle", image: golemIdle },
      { label: "Walk", image: golemWalk },
      { label: "Run", image: golemRun },
      { label: "Attack", image: golemAttack },
      { label: "Super attack", image: golemSuper },
      { label: "Damage taken", image: golemDamage },
      { label: "Death", image: golemDeath },
    ],
    attacks: ["Heavy melee hit.", "Super slam attack."],
  },
  {
    id: "hellTank",
    name: "Hell Tank",
    icon: tankIcon,
    type: "Enemy",
    description: "Slow and sturdy enemy designed to block space while faster hell enemies pressure the player.",
    stats: enemyStats("hellTank"),
    animations: [
      { label: "Idle", image: tankIdle },
      { label: "Walk", image: tankWalk },
      { label: "Run", image: tankRun },
      { label: "Attack", image: tankAttack },
      { label: "Super attack", image: tankSuper },
      { label: "Damage taken", image: tankDamage },
      { label: "Death", image: tankDeath },
    ],
    attacks: ["Close hit.", "Super heavy attack."],
  },
  {
    id: "hellTitan",
    name: "Hell Titan",
    icon: titanIcon,
    type: "Enemy",
    description: "Elite hell enemy with high HP. It is slower than small enemies, but much harder to remove from the arena.",
    stats: enemyStats("hellTitan"),
    animations: [
      { label: "Idle", image: titanIdle },
      { label: "Walk", image: titanWalk },
      { label: "Run", image: titanRun },
      { label: "Attack", image: titanAttack },
      { label: "Super attack", image: titanSuper },
      { label: "Damage taken", image: titanDamage },
      { label: "Death", image: titanDeath },
    ],
    attacks: ["Elite melee attack.", "Super attack with stronger timing pressure."],
  },
  {
    id: "infernalBoss",
    name: "Infernal Boss",
    icon: infernalIcon,
    type: "Boss",
    description: "Two phase hell boss. At low HP it enters phase 2, heals to 70%, and adds tornado pressure to the fight.",
    stats: enemyStats("infernalBoss"),
    animations: [
      { label: "Phase 1 idle", image: infernalP1Idle },
      { label: "Phase 1 walk", image: infernalP1Walk },
      { label: "Phase 1 attack", image: infernalP1Attack },
      { label: "Phase 1 super", image: infernalP1Super },
      { label: "Phase 1 death", image: infernalP1Death },
      { label: "Phase 2 idle", image: infernalP2Idle },
      { label: "Phase 2 attack", image: infernalP2Attack },
      { label: "Phase 2 super", image: infernalP2Super },
      { label: "Tornado", image: infernalTornado },
      { label: "Super tornado", image: infernalSuperTornado },
    ],
    attacks: [
      "Phase 1: fire orb, lance rain, infernal wave, scythe wave.",
      "Phase 2: faster attacks, chain control, and 1-5 moving tornadoes.",
      "Super tornado attack can spawn two tornadoes at once.",
    ],
  },
]);
