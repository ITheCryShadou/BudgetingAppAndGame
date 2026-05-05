import * as Phaser from "phaser";
import noxIdleSheet from "../assets/game/heroes/nox/Nox-Idle.png";
import noxWalkSheet from "../assets/game/heroes/nox/Nox-Walk.png";
import noxRunSheet from "../assets/game/heroes/nox/Nox-Run.png";
import noxDashSheet from "../assets/game/heroes/nox/Nox-Dash.png";
import noxAttackSheet from "../assets/game/heroes/nox/Nox-Attack.png";
import noxSkillAttackSheet from "../assets/game/heroes/nox/Nox-SkillAttack.png";
import noxSuperAttackSheet from "../assets/game/heroes/nox/Nox-SuperAttack.png";
import noxDamagedSheet from "../assets/game/heroes/nox/Nox-DamageTaken.png";
import noxDeathSheet from "../assets/game/heroes/nox/Nox-Death.png";
import noxArcaneOrbProjectile from "../assets/game/heroes/nox/Nox-ArcaneOrbProjectile.png";
import noxCrystalShardProjectile from "../assets/game/heroes/nox/Nox-CrystalShardProjectile.png";
import noxDashShadowProjectile from "../assets/game/heroes/nox/Nox-DashShadowProjectile.png";
import noxHitImpactEffect from "../assets/game/heroes/nox/Nox-HitImpactEffect.png";
import noxLargeMagicWaveProjectile from "../assets/game/heroes/nox/Nox-LargeMagicWaveProjectile.png";
import noxMagicBoltProjectile from "../assets/game/heroes/nox/Nox-MagicBoltProjectile.png";
import noxSmallMagicArcProjectile from "../assets/game/heroes/nox/Nox-SmallMagicArcProjectile.png";
import noxSuperSpellBurstProjectile from "../assets/game/heroes/nox/Nox-SuperSpellBurstProjectile.png";
import rivenIdleSheet from "../assets/game/heroes/riven/Riven-Idle.png";
import rivenWalkSheet from "../assets/game/heroes/riven/Riven-Walk.png";
import rivenRunSheet from "../assets/game/heroes/riven/Riven-Run.png";
import rivenDashSheet from "../assets/game/heroes/riven/Riven-Dash.png";
import rivenAttackSheet from "../assets/game/heroes/riven/Riven-Attack.png";
import rivenDamagedSheet from "../assets/game/heroes/riven/Riven-DamageTaken.png";
import rivenDeathSheet from "../assets/game/heroes/riven/Riven-Death.png";
import rivenProjectile from "../assets/game/heroes/riven/Riven-AttackCritProjectin.png";
import skeletonCommonIdle from "../assets/game/enemies/skeleton-common/SkeletonCommon-Idle.png";
import skeletonCommonWalk from "../assets/game/enemies/skeleton-common/SkeletonCommon-Walk.png";
import skeletonCommonAttack from "../assets/game/enemies/skeleton-common/SkeletonCommon-Attack.png";
import skeletonCommonDamage from "../assets/game/enemies/skeleton-common/SkeletonCommon-DamageTaken.png";
import skeletonCommonDeath from "../assets/game/enemies/skeleton-common/SkeletonCommon-Death.png";
import skeletonCommonRevive from "../assets/game/enemies/skeleton-common/SkeletonCommon-Revive.png";
import skeletonStrongIdle from "../assets/game/enemies/skeleton-strong/SkeletonStrong-Idle.png";
import skeletonStrongWalk from "../assets/game/enemies/skeleton-strong/SkeletonStrong-Walk.png";
import skeletonStrongAttack from "../assets/game/enemies/skeleton-strong/SkeletonStrong-Attack.png";
import skeletonStrongDamage from "../assets/game/enemies/skeleton-strong/SkeletonStrong-DamageTaken.png";
import skeletonStrongDeath from "../assets/game/enemies/skeleton-strong/SkeletonStrong-Death.png";
import skeletonStrongRevive from "../assets/game/enemies/skeleton-strong/SkeletonStrong-Revive.png";
import skeletonDogIdle from "../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Idle.png";
import skeletonDogRun from "../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Run.png";
import skeletonDogAttack from "../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Attack.png";
import skeletonDogDamage from "../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-DamageTaken.png";
import skeletonDogDeath from "../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Death.png";
import skeletonDogRevive from "../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Revive.png";
import skeletonDogStrongIdle from "../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Idle.png";
import skeletonDogStrongRun from "../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Run.png";
import skeletonDogStrongAttack from "../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Attack.png";
import skeletonDogStrongDamage from "../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-DamageTaken.png";
import skeletonDogStrongDeath from "../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Death.png";
import skeletonDogStrongRevive from "../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Revive.png";
import skeletonBossIdle from "../assets/game/enemies/skeleton-boss/SkeletonBoss-Idle.png";
import skeletonBossWalk from "../assets/game/enemies/skeleton-boss/SkeletonBoss-Walk.png";
import skeletonBossAttack from "../assets/game/enemies/skeleton-boss/SkeletonBoss-AttackClose.png";
import skeletonBossDamage from "../assets/game/enemies/skeleton-boss/SkeletonBoss-DamageTaken.png";
import skeletonBossDeath from "../assets/game/enemies/skeleton-boss/SkeletonBoss-Death.png";
import skeletonBossRevive from "../assets/game/enemies/skeleton-boss/SkeletonBoss-Revive.png";
import skeletonBossProjectile from "../assets/game/enemies/skeleton-boss/SkeletonBoss-AttackLongProjectile.png";
import hellGolemIdle from "../assets/game/hell/enemies/HellGolem/HellGolem-Idle.png";
import hellGolemWalk from "../assets/game/hell/enemies/HellGolem/HellGolem-Walk.png";
import hellGolemAttack from "../assets/game/hell/enemies/HellGolem/HellGolem-Attack.png";
import hellGolemSuperAttack from "../assets/game/hell/enemies/HellGolem/HellGolem-SuperAttack.png";
import hellGolemDamage from "../assets/game/hell/enemies/HellGolem/HellGolem-DamageTaken.png";
import hellGolemDeath from "../assets/game/hell/enemies/HellGolem/HellGolem-Death.png";
import hellKillerIdle from "../assets/game/hell/enemies/HellKiller/HellKiller-Idle.png";
import hellKillerWalk from "../assets/game/hell/enemies/HellKiller/HellKiller-Walk.png";
import hellKillerAttack from "../assets/game/hell/enemies/HellKiller/HellKiller-Attack.png";
import hellKillerSuperAttack from "../assets/game/hell/enemies/HellKiller/HellKiller-SuperAttack.png";
import hellKillerDamage from "../assets/game/hell/enemies/HellKiller/HellKiller-DamageTaken.png";
import hellKillerDeath from "../assets/game/hell/enemies/HellKiller/HellKiller-Death.png";
import hellKillerProjectile from "../assets/game/hell/enemies/HellKiller/HellKiller-projectile-Attack.png";
import hellKillerSuperProjectile from "../assets/game/hell/enemies/HellKiller/HellKiller-projectile-SuperAttack1.png";
import hellTankIdle from "../assets/game/hell/enemies/HellTank/HellTank-Idle.png";
import hellTankWalk from "../assets/game/hell/enemies/HellTank/HellTank-Walk.png";
import hellTankAttack from "../assets/game/hell/enemies/HellTank/HellTank-Attack.png";
import hellTankSuperAttack from "../assets/game/hell/enemies/HellTank/HellTank-SuperAttack.png";
import hellTankDamage from "../assets/game/hell/enemies/HellTank/HellTank-DamageTaken.png";
import hellTankDeath from "../assets/game/hell/enemies/HellTank/HellTank-Death.png";
import hellTitanIdle from "../assets/game/hell/enemies/HellTitan/HellTitan-Idle.png";
import hellTitanWalk from "../assets/game/hell/enemies/HellTitan/HellTitan-Walk.png";
import hellTitanAttack from "../assets/game/hell/enemies/HellTitan/HellTitan-Attack.png";
import hellTitanSuperAttack from "../assets/game/hell/enemies/HellTitan/HellTitan-SuperAttack.png";
import hellTitanDamage from "../assets/game/hell/enemies/HellTitan/HellTitan-DamageTaken.png";
import hellTitanDeath from "../assets/game/hell/enemies/HellTitan/HellTitan-Death.png";
import impLittleIdle from "../assets/game/hell/enemies/ImpLittle/ImpLittle-Idle.png";
import impLittleWalk from "../assets/game/hell/enemies/ImpLittle/ImpLittle-Walk.png";
import impLittleAttack from "../assets/game/hell/enemies/ImpLittle/ImpLittle-Attack.png";
import impLittleSuperAttack from "../assets/game/hell/enemies/ImpLittle/ImpLittle-SuperAttack.png";
import impLittleDamage from "../assets/game/hell/enemies/ImpLittle/ImpLittle-DamageTaken.png";
import impLittleDeath from "../assets/game/hell/enemies/ImpLittle/ImpLittle-Death.png";
import infernalBossP1Idle from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Idle.png";
import infernalBossP1Walk from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Walk.png";
import infernalBossP1Attack from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Attack.png";
import infernalBossP1SuperAttack from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-SuperAttack.png";
import infernalBossP1Damage from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-DamageTaken.png";
import infernalBossP1Death from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Death.png";
import infernalBossP1FireOrb from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-FireOrbProjectile.png";
import infernalBossP1HellLance from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-HellLanceRainProjectile.png";
import infernalBossP1InfernalWaveStart from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-InfernalWaveProjectile_Start.png";
import infernalBossP1InfernalWaveEnd from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-InfernalWaveProjectile_End.png";
import infernalBossP1ScytheWaveStart from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-ScytheWaveProjectile_Start.png";
import infernalBossP1ScytheWaveEnd from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-ScytheWaveProjectile_End.png";
import infernalBossP2Idle from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-Idle.png";
import infernalBossP2Walk from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-Walk.png";
import infernalBossP2Attack from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-Attack.png";
import infernalBossP2SuperAttack from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-SuperAttack.png";
import infernalBossP2ChainPrison from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-ChainPrison.png";
import infernalBossP2ChainSnare from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-ChainSnare.png";
import infernalBossP2Damage from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-DamageTaken.png";
import infernalBossP2Death from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-Death.png";
import infernalBossP2HellfireTornado from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-HellfireTornado.png";
import infernalBossP2SuperHellfireTornado from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-SuperHellfireTornado.png";
import infernalBossP2TornadoStart from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-HellFireTornadoProjectile_Start.png";
import infernalBossP2TornadoContinue from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-HellFireTornadoProjectile_Continue.png";
import infernalBossP2TornadoLoop from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-HellFireTornadoProjectile_Loop.png";
import infernalBossP2TornadoEnd from "../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-HellFireTornadoProjectile_End.png";
import roomBgCommon from "../assets/game/room-bg-common.png";
import roomBgBoss from "../assets/game/room-bg-boss.png";
import roomTunnel from "../assets/game/room-tunnel.png";
import roomTunnelBoss from "../assets/game/room-tunnel-boss.png";
import roomTunnelTraveler from "../assets/game/room-tunnel-traveler.png";
import roomTunnelTravelerBoss from "../assets/game/room-tunnel-traveler-boss.png";
import hellBgCommon from "../assets/game/hell-bg-common.png";
import hellBgBoss from "../assets/game/hell-bg-boss.png";
import hellTunnel from "../assets/game/hell-tunnel.png";
import hellTunnelBoss from "../assets/game/hell-tunnel-boss.png";
import travelerRoomBg from "../assets/game/traveler-room-bg.png";
import dungeonChestIcon from "../assets/game/chests/dungeon-chest-icon.png";
import dungeonChestOpenSheet from "../assets/game/chests/dungeon-chest-open.png";
import dungeonChestOpenedIcon from "../assets/game/chests/dungeon-chest-opened.png";
import woodenChestIcon from "../assets/game/chests/wooden-chest-icon.png";
import woodenChestOpenSheet from "../assets/game/chests/wooden-chest-open.png";
import blueChestIcon from "../assets/game/chests/blue-chest-icon.png";
import blueChestOpenSheet from "../assets/game/chests/blue-chest-open.png";
import goldenChestIcon from "../assets/game/chests/golden-chest-icon.png";
import goldenChestOpenSheet from "../assets/game/chests/golden-chest-open.png";
import cursedChestIcon from "../assets/game/chests/cursed-chest-icon.png";
import cursedChestOpenSheet from "../assets/game/chests/cursed-chest-open.png";
import healPotion from "../assets/game/heal-potion.png";
import blueHeartHalfIcon from "../assets/game/heart-blue-half.png";
import greenHeartHalfIcon from "../assets/game/heart-green-half.png";
import coinIcon from "../assets/game/coin.png";
import gemIcon from "../assets/game/gem.png";
import tarotCardImage from "../assets/game/tarot-card.png";
import travelerCarpet from "../assets/game/traveler/TravelerCarpet.png";
import travelerNpc1 from "../assets/game/traveler/Traveler-Npc1.png";
import travelerNpc2 from "../assets/game/traveler/Traveler-Npc2.png";
import travelerNpc3 from "../assets/game/traveler/Traveler-Npc3.png";
import travelerNpc4 from "../assets/game/traveler/Traveler-Npc4.png";
import travelerNpc5 from "../assets/game/traveler/Traveler-Npc5.png";
import travelerNpc6 from "../assets/game/traveler/Traveler-Npc6.png";
import obstacleColumnBroken from "../assets/game/obstacles/column-broken.png";
import obstacleColumnSkull from "../assets/game/obstacles/column-skull.png";
import obstacleColumn from "../assets/game/obstacles/column.png";
import obstacleBarrel from "../assets/game/obstacles/barrel.png";
import obstacleBox from "../assets/game/obstacles/box.png";
import obstaclePileStones from "../assets/game/obstacles/pile-stones.png";
import obstacleSpike from "../assets/game/obstacles/spike.png";
import obstacleTorch from "../assets/game/obstacles/torch.png";
import hellColumnFlag from "../assets/game/hell/obstacles/Column1-Flag.png";
import hellColumnSkull from "../assets/game/hell/obstacles/Column2-Skull.png";
import hellColumnSpikes from "../assets/game/hell/obstacles/Column3-Spikes.png";
import hellColumnBigSkull from "../assets/game/hell/obstacles/Column4-BigSkull.png";
import hellFlag from "../assets/game/hell/obstacles/HellFlag.png";
import hellGates from "../assets/game/hell/obstacles/HellGates.png";
import hellRock from "../assets/game/hell/obstacles/HellRock.png";
import hellSpikes from "../assets/game/hell/obstacles/HellSpikes.png";
import hellTorch from "../assets/game/hell/obstacles/HellTorch.png";
import hellTable from "../assets/game/hell/obstacles/Table.png";
import {
  GAME_RULES,
  ENEMY_TYPES,
  HERO_SHOP_SKILLS,
  LEVELS,
  PLAYER_BASE_STATS,
  SHOP_CARDS,
  BOSS_CARDS,
  TAROT_CARDS,
} from "./gameBalance";
import { chooseTarotCards, createFloorPlan, createRoomLayout } from "./dungeonGenerator";

const PLAYER_STRIPS = {
  idle: { source: "noxIdleSheet", width: 1009, height: 95, frames: 9, fps: 6 },
  walk: { source: "noxWalkSheet", width: 1045, height: 91, frames: 9, fps: 10 },
  fastWalk: { source: "noxRunSheet", width: 1066, height: 88, frames: 9, fps: 13 },
  dash: { source: "noxDashSheet", width: 711, height: 93, frames: 5, fps: 14 },
  attack: { source: "noxAttackSheet", width: 1151, height: 90, frames: 9, fps: 13 },
  skillAttack: { source: "noxSkillAttackSheet", width: 1025, height: 115, frames: 8, fps: 12 },
  superAttack: { source: "noxSuperAttackSheet", width: 1255, height: 128, frames: 8, fps: 11 },
  damaged: { source: "noxDamagedSheet", width: 496, height: 93, frames: 4, fps: 10 },
  death: { source: "noxDeathSheet", width: 825, height: 93, frames: 6, fps: 8 },
};
const NOX_PROJECTILE_STRIPS = {
  arcaneOrb: { source: "noxArcaneOrbProjectile", width: 1014, height: 78, frames: 9, fps: 13 },
  crystalShard: { source: "noxCrystalShardProjectile", width: 1028, height: 71, frames: 9, fps: 13 },
  dashShadow: { source: "noxDashShadowProjectile", width: 1023, height: 83, frames: 9, fps: 14 },
  hitImpact: { source: "noxHitImpactEffect", width: 814, height: 118, frames: 7, fps: 14 },
  largeWave: { source: "noxLargeMagicWaveProjectile", width: 1116, height: 105, frames: 9, fps: 12 },
  magicBolt: { source: "noxMagicBoltProjectile", width: 1040, height: 70, frames: 9, fps: 14 },
  smallArc: { source: "noxSmallMagicArcProjectile", width: 697, height: 81, frames: 6, fps: 13 },
  superBurst: { source: "noxSuperSpellBurstProjectile", width: 1118, height: 197, frames: 7, fps: 11 },
};
const RIVEN_STRIPS = {
  idle: { source: "rivenIdleSheet", width: 109, height: 116, frames: 1, fps: 1 },
  walk: { source: "rivenWalkSheet", width: 1022, height: 107, frames: 8, fps: 9 },
  fastWalk: { source: "rivenRunSheet", width: 1026, height: 113, frames: 8, fps: 12 },
  dash: { source: "rivenDashSheet", width: 765, height: 88, frames: 6, fps: 14 },
  attack: { source: "rivenAttackSheet", width: 641, height: 104, frames: 5, fps: 13 },
  damaged: { source: "rivenDamagedSheet", width: 627, height: 98, frames: 5, fps: 12 },
  death: { source: "rivenDeathSheet", width: 884, height: 97, frames: 7, fps: 8 },
};
const HERO_STRIPS = {
  nox: PLAYER_STRIPS,
  riven: RIVEN_STRIPS,
};
const CHEST_STRIPS = {
  dungeon: { source: "dungeonChestOpenSheet", width: 1396, height: 195, frames: 8, fps: 12 },
  wooden: { source: "woodenChestOpenSheet", width: 1496, height: 232, frames: 8, fps: 12 },
  blue: { source: "blueChestOpenSheet", width: 1492, height: 220, frames: 8, fps: 12 },
  golden: { source: "goldenChestOpenSheet", width: 1489, height: 220, frames: 8, fps: 12 },
  cursed: { source: "cursedChestOpenSheet", width: 1476, height: 219, frames: 8, fps: 12 },
};
const CHEST_TYPES = {
  dungeon: {
    icon: "dungeonChestIcon",
    openPrefix: "chestOpenDungeon",
    finalTexture: "dungeonChestOpenedIcon",
    displayWidth: 74,
    displayHeight: 72,
    openWidth: 72,
    openHeight: 82,
  },
  wooden: {
    icon: "woodenChestIcon",
    openPrefix: "chestOpenWooden",
    displayWidth: 74,
    displayHeight: 72,
    openWidth: 76,
    openHeight: 82,
  },
  blue: {
    icon: "blueChestIcon",
    openPrefix: "chestOpenBlue",
    displayWidth: 74,
    displayHeight: 72,
    openWidth: 76,
    openHeight: 82,
  },
  golden: {
    icon: "goldenChestIcon",
    openPrefix: "chestOpenGolden",
    displayWidth: 74,
    displayHeight: 72,
    openWidth: 76,
    openHeight: 82,
  },
  cursed: {
    icon: "cursedChestIcon",
    openPrefix: "chestOpenCursed",
    displayWidth: 74,
    displayHeight: 72,
    openWidth: 76,
    openHeight: 82,
  },
};
const ENEMY_STRIPS = {
  skeleton: {
    idle: { source: "skeletonCommonIdle", width: 457, height: 135, frames: 4, fps: 5 },
    walk: { source: "skeletonCommonWalk", width: 692, height: 132, frames: 7, fps: 9 },
    attack: { source: "skeletonCommonAttack", width: 596, height: 137, frames: 5, fps: 12 },
    damaged: { source: "skeletonCommonDamage", width: 567, height: 121, frames: 5, fps: 11 },
    death: { source: "skeletonCommonDeath", width: 740, height: 121, frames: 7, fps: 9 },
    revive: { source: "skeletonCommonRevive", width: 669, height: 121, frames: 6, fps: 9 },
  },
  guard: {
    idle: { source: "skeletonStrongIdle", width: 373, height: 114, frames: 4, fps: 5 },
    walk: { source: "skeletonStrongWalk", width: 373, height: 117, frames: 4, fps: 8 },
    attack: { source: "skeletonStrongAttack", width: 538, height: 104, frames: 5, fps: 12 },
    damaged: { source: "skeletonStrongDamage", width: 370, height: 129, frames: 4, fps: 11 },
    death: { source: "skeletonStrongDeath", width: 680, height: 111, frames: 7, fps: 9 },
    revive: { source: "skeletonStrongRevive", width: 544, height: 149, frames: 5, fps: 8 },
  },
  dog: {
    idle: { source: "skeletonDogIdle", width: 682, height: 92, frames: 4, fps: 5 },
    walk: { source: "skeletonDogRun", width: 712, height: 97, frames: 4, fps: 11 },
    attack: { source: "skeletonDogAttack", width: 676, height: 104, frames: 5, fps: 13 },
    damaged: { source: "skeletonDogDamage", width: 704, height: 114, frames: 5, fps: 11 },
    death: { source: "skeletonDogDeath", width: 718, height: 71, frames: 5, fps: 9 },
    revive: { source: "skeletonDogRevive", width: 680, height: 94, frames: 5, fps: 9 },
  },
  dogStrong: {
    idle: { source: "skeletonDogStrongIdle", width: 115, height: 107, frames: 1, fps: 1 },
    walk: { source: "skeletonDogStrongRun", width: 474, height: 100, frames: 3, fps: 7 },
    attack: { source: "skeletonDogStrongAttack", width: 705, height: 97, frames: 5, fps: 13 },
    damaged: { source: "skeletonDogStrongDamage", width: 653, height: 105, frames: 5, fps: 11 },
    death: { source: "skeletonDogStrongDeath", width: 647, height: 95, frames: 5, fps: 9 },
    revive: { source: "skeletonDogStrongRevive", width: 558, height: 107, frames: 5, fps: 9 },
  },
  boss: {
    idle: { source: "skeletonBossIdle", width: 502, height: 153, frames: 4, fps: 5 },
    walk: { source: "skeletonBossWalk", width: 378, height: 146, frames: 3, fps: 6 },
    attack: { source: "skeletonBossAttack", width: 77, height: 149, frames: 1, fps: 1 },
    damaged: { source: "skeletonBossDamage", width: 455, height: 127, frames: 5, fps: 10 },
    death: { source: "skeletonBossDeath", width: 544, height: 132, frames: 4, fps: 8 },
    revive: { source: "skeletonBossRevive", width: 515, height: 135, frames: 5, fps: 7 },
  },
  hellGolem: {
    idle: { source: "hellGolemIdle", width: 927, height: 94, frames: 8, fps: 6 },
    walk: { source: "hellGolemWalk", width: 922, height: 97, frames: 8, fps: 8 },
    attack: { source: "hellGolemAttack", width: 1335, height: 123, frames: 10, fps: 13 },
    superAttack: { source: "hellGolemSuperAttack", width: 1343, height: 123, frames: 10, fps: 11 },
    damaged: { source: "hellGolemDamage", width: 734, height: 97, frames: 6, fps: 11 },
    death: { source: "hellGolemDeath", width: 1074, height: 108, frames: 8, fps: 9 },
  },
  hellKiller: {
    idle: { source: "hellKillerIdle", width: 886, height: 108, frames: 8, fps: 6 },
    walk: { source: "hellKillerWalk", width: 1023, height: 105, frames: 8, fps: 9 },
    attack: { source: "hellKillerAttack", width: 1027, height: 105, frames: 8, fps: 12 },
    superAttack: { source: "hellKillerSuperAttack", width: 1380, height: 123, frames: 10, fps: 11 },
    damaged: { source: "hellKillerDamage", width: 640, height: 93, frames: 6, fps: 11 },
    death: { source: "hellKillerDeath", width: 973, height: 86, frames: 8, fps: 9 },
  },
  hellTank: {
    idle: { source: "hellTankIdle", width: 1099, height: 116, frames: 8, fps: 5 },
    walk: { source: "hellTankWalk", width: 1087, height: 101, frames: 8, fps: 7 },
    attack: { source: "hellTankAttack", width: 1432, height: 114, frames: 10, fps: 11 },
    superAttack: { source: "hellTankSuperAttack", width: 1371, height: 123, frames: 10, fps: 10 },
    damaged: { source: "hellTankDamage", width: 621, height: 110, frames: 6, fps: 10 },
    death: { source: "hellTankDeath", width: 789, height: 113, frames: 6, fps: 8 },
  },
  hellTitan: {
    idle: { source: "hellTitanIdle", width: 966, height: 127, frames: 8, fps: 5 },
    walk: { source: "hellTitanWalk", width: 959, height: 128, frames: 8, fps: 7 },
    attack: { source: "hellTitanAttack", width: 1390, height: 119, frames: 10, fps: 11 },
    superAttack: { source: "hellTitanSuperAttack", width: 1383, height: 149, frames: 10, fps: 9 },
    damaged: { source: "hellTitanDamage", width: 856, height: 108, frames: 6, fps: 10 },
    death: { source: "hellTitanDeath", width: 1348, height: 121, frames: 8, fps: 8 },
  },
  impLittle: {
    idle: { source: "impLittleIdle", width: 866, height: 114, frames: 8, fps: 7 },
    walk: { source: "impLittleWalk", width: 971, height: 114, frames: 8, fps: 11 },
    attack: { source: "impLittleAttack", width: 595, height: 117, frames: 5, fps: 13 },
    superAttack: { source: "impLittleSuperAttack", width: 579, height: 97, frames: 5, fps: 12 },
    damaged: { source: "impLittleDamage", width: 759, height: 108, frames: 6, fps: 12 },
    death: { source: "impLittleDeath", width: 651, height: 116, frames: 6, fps: 9 },
  },
  infernalBoss: {
    idle: { source: "infernalBossP1Idle", width: 946, height: 105, frames: 8, fps: 6 },
    walk: { source: "infernalBossP1Walk", width: 1101, height: 103, frames: 9, fps: 8 },
    attack: { source: "infernalBossP1Attack", width: 1469, height: 117, frames: 11, fps: 12 },
    superAttack: { source: "infernalBossP1SuperAttack", width: 1469, height: 135, frames: 11, fps: 10 },
    damaged: { source: "infernalBossP1Damage", width: 779, height: 98, frames: 7, fps: 10 },
    death: { source: "infernalBossP1Death", width: 1046, height: 94, frames: 8, fps: 8 },
  },
  infernalBossPhase2: {
    idle: { source: "infernalBossP2Idle", width: 950, height: 116, frames: 8, fps: 6 },
    walk: { source: "infernalBossP2Walk", width: 1106, height: 101, frames: 9, fps: 9 },
    attack: { source: "infernalBossP2Attack", width: 1467, height: 117, frames: 11, fps: 13 },
    superAttack: { source: "infernalBossP2SuperAttack", width: 1475, height: 136, frames: 11, fps: 11 },
    chainPrison: { source: "infernalBossP2ChainPrison", width: 1326, height: 172, frames: 10, fps: 10 },
    chainSnare: { source: "infernalBossP2ChainSnare", width: 1379, height: 181, frames: 10, fps: 10 },
    hellfireTornado: { source: "infernalBossP2HellfireTornado", width: 1489, height: 184, frames: 11, fps: 10 },
    superHellfireTornado: { source: "infernalBossP2SuperHellfireTornado", width: 1490, height: 219, frames: 11, fps: 9 },
    damaged: { source: "infernalBossP2Damage", width: 807, height: 107, frames: 7, fps: 11 },
    death: { source: "infernalBossP2Death", width: 1062, height: 97, frames: 8, fps: 8 },
  },
};

function createEnemyKeys(prefix, strips) {
  return Object.fromEntries(
    Object.entries(strips).map(([name, strip]) => [
      name,
      Array.from({ length: strip.frames }, (_, index) => `${prefix}${capitalize(name)}${index}`),
    ])
  );
}

function createHeroKeys(strips) {
  return Object.fromEntries(
    Object.entries(strips).map(([name, strip]) => [
      name,
      Array.from({ length: strip.frames }, (_, index) => `hero${capitalize(name)}${index}`),
    ])
  );
}

function capitalize(value) {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

const HERO_COLOR = 0xb98cff;
const TRAVELER_KEYS = [
  "travelerNpc1",
  "travelerNpc2",
  "travelerNpc3",
  "travelerNpc4",
  "travelerNpc5",
  "travelerNpc6",
];
const ENEMY_FRAME_KEYS = {
  skeleton: "enemySkeletonIdle0",
  guard: "enemyGuardIdle0",
  dog: "enemyDogIdle0",
  dogStrong: "enemyDogStrongIdle0",
  boss: "enemyBossIdle0",
  hellGolem: "enemyHellGolemIdle0",
  hellKiller: "enemyHellKillerIdle0",
  hellTank: "enemyHellTankIdle0",
  hellTitan: "enemyHellTitanIdle0",
  impLittle: "enemyImpLittleIdle0",
  infernalBoss: "enemyInfernalBossIdle0",
};
const ANIMATION_KEYS = {
  skeleton: createEnemyKeys("enemySkeleton", ENEMY_STRIPS.skeleton),
  guard: createEnemyKeys("enemyGuard", ENEMY_STRIPS.guard),
  dog: createEnemyKeys("enemyDog", ENEMY_STRIPS.dog),
  dogStrong: createEnemyKeys("enemyDogStrong", ENEMY_STRIPS.dogStrong),
  boss: createEnemyKeys("enemyBoss", ENEMY_STRIPS.boss),
  hellGolem: createEnemyKeys("enemyHellGolem", ENEMY_STRIPS.hellGolem),
  hellKiller: createEnemyKeys("enemyHellKiller", ENEMY_STRIPS.hellKiller),
  hellTank: createEnemyKeys("enemyHellTank", ENEMY_STRIPS.hellTank),
  hellTitan: createEnemyKeys("enemyHellTitan", ENEMY_STRIPS.hellTitan),
  impLittle: createEnemyKeys("enemyImpLittle", ENEMY_STRIPS.impLittle),
  infernalBoss: createEnemyKeys("enemyInfernalBoss", ENEMY_STRIPS.infernalBoss),
  infernalBossPhase2: createEnemyKeys("enemyInfernalBossPhase2", ENEMY_STRIPS.infernalBossPhase2),
};

const HIT_INVULNERABILITY_MS = 500;
const SPAWN_INVULNERABILITY_MS = 2000;
const SKELETON_REVIVE_CHANCE = 0.35;
const SKELETON_REVIVE_HEALTH_RATIO = 0.5;
const BOSS_REVIVE_HEALTH_RATIO = 0.3;
const INFERNAL_PHASE_TWO_TRIGGER = 0.2;
const INFERNAL_PHASE_TWO_HEAL = 0.7;
const INFERNAL_MAX_TORNADOES = 5;

const OBSTACLE_TEXTURES = {
  columnBroken: "obstacleColumnBroken",
  columnSkull: "obstacleColumnSkull",
  column: "obstacleColumn",
  barrel: "obstacleBarrel",
  box: "obstacleBox",
  pileStones: "obstaclePileStones",
  spike: "obstacleSpike",
  torch: "obstacleTorch",
  hellColumnFlag: "hellColumnFlag",
  hellColumnSkull: "hellColumnSkull",
  hellColumnSpikes: "hellColumnSpikes",
  hellColumnBigSkull: "hellColumnBigSkull",
  hellFlag: "hellFlag",
  hellGates: "hellGates",
  hellRock: "hellRock",
  hellSpikes: "hellSpikes",
  hellTorch: "hellTorch",
  hellTable: "hellTable",
};

export default class RoguelikeScene extends Phaser.Scene {
  constructor(callbacks = {}) {
    super("RoguelikeScene");
    this.callbacks = callbacks;
    this.heroId = callbacks.heroId ?? "nox";
    this.levelId = callbacks.levelId ?? "skeleton";
    this.levelSequence = callbacks.levelSequence ?? [this.levelId];
    this.stageIndex = 0;
    this.levelId = this.levelSequence[this.stageIndex] ?? this.levelId;
    this.heroStrips = HERO_STRIPS[this.heroId] ?? HERO_STRIPS.nox;
    this.heroAnimationKeys = createHeroKeys(this.heroStrips);
  }

  preload() {
    this.load.image("noxIdleSheet", noxIdleSheet);
    this.load.image("noxWalkSheet", noxWalkSheet);
    this.load.image("noxRunSheet", noxRunSheet);
    this.load.image("noxDashSheet", noxDashSheet);
    this.load.image("noxAttackSheet", noxAttackSheet);
    this.load.image("noxSkillAttackSheet", noxSkillAttackSheet);
    this.load.image("noxSuperAttackSheet", noxSuperAttackSheet);
    this.load.image("noxDamagedSheet", noxDamagedSheet);
    this.load.image("noxDeathSheet", noxDeathSheet);
    this.load.image("noxArcaneOrbProjectile", noxArcaneOrbProjectile);
    this.load.image("noxCrystalShardProjectile", noxCrystalShardProjectile);
    this.load.image("noxDashShadowProjectile", noxDashShadowProjectile);
    this.load.image("noxHitImpactEffect", noxHitImpactEffect);
    this.load.image("noxLargeMagicWaveProjectile", noxLargeMagicWaveProjectile);
    this.load.image("noxMagicBoltProjectile", noxMagicBoltProjectile);
    this.load.image("noxSmallMagicArcProjectile", noxSmallMagicArcProjectile);
    this.load.image("noxSuperSpellBurstProjectile", noxSuperSpellBurstProjectile);
    this.load.image("rivenIdleSheet", rivenIdleSheet);
    this.load.image("rivenWalkSheet", rivenWalkSheet);
    this.load.image("rivenRunSheet", rivenRunSheet);
    this.load.image("rivenDashSheet", rivenDashSheet);
    this.load.image("rivenAttackSheet", rivenAttackSheet);
    this.load.image("rivenDamagedSheet", rivenDamagedSheet);
    this.load.image("rivenDeathSheet", rivenDeathSheet);
    this.load.image("rivenProjectile", rivenProjectile);
    this.load.image("skeletonCommonIdle", skeletonCommonIdle);
    this.load.image("skeletonCommonWalk", skeletonCommonWalk);
    this.load.image("skeletonCommonAttack", skeletonCommonAttack);
    this.load.image("skeletonCommonDamage", skeletonCommonDamage);
    this.load.image("skeletonCommonDeath", skeletonCommonDeath);
    this.load.image("skeletonCommonRevive", skeletonCommonRevive);
    this.load.image("skeletonStrongIdle", skeletonStrongIdle);
    this.load.image("skeletonStrongWalk", skeletonStrongWalk);
    this.load.image("skeletonStrongAttack", skeletonStrongAttack);
    this.load.image("skeletonStrongDamage", skeletonStrongDamage);
    this.load.image("skeletonStrongDeath", skeletonStrongDeath);
    this.load.image("skeletonStrongRevive", skeletonStrongRevive);
    this.load.image("skeletonDogIdle", skeletonDogIdle);
    this.load.image("skeletonDogRun", skeletonDogRun);
    this.load.image("skeletonDogAttack", skeletonDogAttack);
    this.load.image("skeletonDogDamage", skeletonDogDamage);
    this.load.image("skeletonDogDeath", skeletonDogDeath);
    this.load.image("skeletonDogRevive", skeletonDogRevive);
    this.load.image("skeletonDogStrongIdle", skeletonDogStrongIdle);
    this.load.image("skeletonDogStrongRun", skeletonDogStrongRun);
    this.load.image("skeletonDogStrongAttack", skeletonDogStrongAttack);
    this.load.image("skeletonDogStrongDamage", skeletonDogStrongDamage);
    this.load.image("skeletonDogStrongDeath", skeletonDogStrongDeath);
    this.load.image("skeletonDogStrongRevive", skeletonDogStrongRevive);
    this.load.image("skeletonBossIdle", skeletonBossIdle);
    this.load.image("skeletonBossWalk", skeletonBossWalk);
    this.load.image("skeletonBossAttack", skeletonBossAttack);
    this.load.image("skeletonBossDamage", skeletonBossDamage);
    this.load.image("skeletonBossDeath", skeletonBossDeath);
    this.load.image("skeletonBossRevive", skeletonBossRevive);
    this.load.image("skeletonBossProjectile", skeletonBossProjectile);
    this.load.image("hellGolemIdle", hellGolemIdle);
    this.load.image("hellGolemWalk", hellGolemWalk);
    this.load.image("hellGolemAttack", hellGolemAttack);
    this.load.image("hellGolemSuperAttack", hellGolemSuperAttack);
    this.load.image("hellGolemDamage", hellGolemDamage);
    this.load.image("hellGolemDeath", hellGolemDeath);
    this.load.image("hellKillerIdle", hellKillerIdle);
    this.load.image("hellKillerWalk", hellKillerWalk);
    this.load.image("hellKillerAttack", hellKillerAttack);
    this.load.image("hellKillerSuperAttack", hellKillerSuperAttack);
    this.load.image("hellKillerDamage", hellKillerDamage);
    this.load.image("hellKillerDeath", hellKillerDeath);
    this.load.image("hellKillerProjectile", hellKillerProjectile);
    this.load.image("hellKillerSuperProjectile", hellKillerSuperProjectile);
    this.load.image("hellTankIdle", hellTankIdle);
    this.load.image("hellTankWalk", hellTankWalk);
    this.load.image("hellTankAttack", hellTankAttack);
    this.load.image("hellTankSuperAttack", hellTankSuperAttack);
    this.load.image("hellTankDamage", hellTankDamage);
    this.load.image("hellTankDeath", hellTankDeath);
    this.load.image("hellTitanIdle", hellTitanIdle);
    this.load.image("hellTitanWalk", hellTitanWalk);
    this.load.image("hellTitanAttack", hellTitanAttack);
    this.load.image("hellTitanSuperAttack", hellTitanSuperAttack);
    this.load.image("hellTitanDamage", hellTitanDamage);
    this.load.image("hellTitanDeath", hellTitanDeath);
    this.load.image("impLittleIdle", impLittleIdle);
    this.load.image("impLittleWalk", impLittleWalk);
    this.load.image("impLittleAttack", impLittleAttack);
    this.load.image("impLittleSuperAttack", impLittleSuperAttack);
    this.load.image("impLittleDamage", impLittleDamage);
    this.load.image("impLittleDeath", impLittleDeath);
    this.load.image("infernalBossP1Idle", infernalBossP1Idle);
    this.load.image("infernalBossP1Walk", infernalBossP1Walk);
    this.load.image("infernalBossP1Attack", infernalBossP1Attack);
    this.load.image("infernalBossP1SuperAttack", infernalBossP1SuperAttack);
    this.load.image("infernalBossP1Damage", infernalBossP1Damage);
    this.load.image("infernalBossP1Death", infernalBossP1Death);
    this.load.image("infernalBossP1FireOrb", infernalBossP1FireOrb);
    this.load.image("infernalBossP1HellLance", infernalBossP1HellLance);
    this.load.image("infernalBossP1InfernalWaveStart", infernalBossP1InfernalWaveStart);
    this.load.image("infernalBossP1InfernalWaveEnd", infernalBossP1InfernalWaveEnd);
    this.load.image("infernalBossP1ScytheWaveStart", infernalBossP1ScytheWaveStart);
    this.load.image("infernalBossP1ScytheWaveEnd", infernalBossP1ScytheWaveEnd);
    this.load.image("infernalBossP2Idle", infernalBossP2Idle);
    this.load.image("infernalBossP2Walk", infernalBossP2Walk);
    this.load.image("infernalBossP2Attack", infernalBossP2Attack);
    this.load.image("infernalBossP2SuperAttack", infernalBossP2SuperAttack);
    this.load.image("infernalBossP2ChainPrison", infernalBossP2ChainPrison);
    this.load.image("infernalBossP2ChainSnare", infernalBossP2ChainSnare);
    this.load.image("infernalBossP2Damage", infernalBossP2Damage);
    this.load.image("infernalBossP2Death", infernalBossP2Death);
    this.load.image("infernalBossP2HellfireTornado", infernalBossP2HellfireTornado);
    this.load.image("infernalBossP2SuperHellfireTornado", infernalBossP2SuperHellfireTornado);
    this.load.image("infernalBossP2TornadoStart", infernalBossP2TornadoStart);
    this.load.image("infernalBossP2TornadoContinue", infernalBossP2TornadoContinue);
    this.load.image("infernalBossP2TornadoLoop", infernalBossP2TornadoLoop);
    this.load.image("infernalBossP2TornadoEnd", infernalBossP2TornadoEnd);
    this.load.image("roomBgCommon", roomBgCommon);
    this.load.image("roomBgBoss", roomBgBoss);
    this.load.image("roomTunnel", roomTunnel);
    this.load.image("roomTunnelBoss", roomTunnelBoss);
    this.load.image("roomTunnelTraveler", roomTunnelTraveler);
    this.load.image("roomTunnelTravelerBoss", roomTunnelTravelerBoss);
    this.load.image("hellBgCommon", hellBgCommon);
    this.load.image("hellBgBoss", hellBgBoss);
    this.load.image("hellTunnel", hellTunnel);
    this.load.image("hellTunnelBoss", hellTunnelBoss);
    this.load.image("travelerRoomBg", travelerRoomBg);
    this.load.image("dungeonChestIcon", dungeonChestIcon);
    this.load.image("dungeonChestOpenSheet", dungeonChestOpenSheet);
    this.load.image("dungeonChestOpenedIcon", dungeonChestOpenedIcon);
    this.load.image("woodenChestIcon", woodenChestIcon);
    this.load.image("woodenChestOpenSheet", woodenChestOpenSheet);
    this.load.image("blueChestIcon", blueChestIcon);
    this.load.image("blueChestOpenSheet", blueChestOpenSheet);
    this.load.image("goldenChestIcon", goldenChestIcon);
    this.load.image("goldenChestOpenSheet", goldenChestOpenSheet);
    this.load.image("cursedChestIcon", cursedChestIcon);
    this.load.image("cursedChestOpenSheet", cursedChestOpenSheet);
    this.load.image("healPotion", healPotion);
    this.load.image("blueHeartHalf", blueHeartHalfIcon);
    this.load.image("greenHeartHalf", greenHeartHalfIcon);
    this.load.image("coinIcon", coinIcon);
    this.load.image("gemIcon", gemIcon);
    this.load.image("tarotCard", tarotCardImage);
    this.load.image("travelerCarpet", travelerCarpet);
    this.load.image("travelerNpc1", travelerNpc1);
    this.load.image("travelerNpc2", travelerNpc2);
    this.load.image("travelerNpc3", travelerNpc3);
    this.load.image("travelerNpc4", travelerNpc4);
    this.load.image("travelerNpc5", travelerNpc5);
    this.load.image("travelerNpc6", travelerNpc6);
    this.load.image("obstacleColumnBroken", obstacleColumnBroken);
    this.load.image("obstacleColumnSkull", obstacleColumnSkull);
    this.load.image("obstacleColumn", obstacleColumn);
    this.load.image("obstacleBarrel", obstacleBarrel);
    this.load.image("obstacleBox", obstacleBox);
    this.load.image("obstaclePileStones", obstaclePileStones);
    this.load.image("obstacleSpike", obstacleSpike);
    this.load.image("obstacleTorch", obstacleTorch);
    this.load.image("hellColumnFlag", hellColumnFlag);
    this.load.image("hellColumnSkull", hellColumnSkull);
    this.load.image("hellColumnSpikes", hellColumnSpikes);
    this.load.image("hellColumnBigSkull", hellColumnBigSkull);
    this.load.image("hellFlag", hellFlag);
    this.load.image("hellGates", hellGates);
    this.load.image("hellRock", hellRock);
    this.load.image("hellSpikes", hellSpikes);
    this.load.image("hellTorch", hellTorch);
    this.load.image("hellTable", hellTable);
  }

  create() {
    this.floor = 1;
    this.room = 1;
    this.floorPlan = createFloorPlan(this.floor);
    this.maxHearts = GAME_RULES.maxHearts;
    this.hearts = this.maxHearts;
    this.tempHearts = 0;
    this.greenHearts = 0;
    this.coins = this.callbacks.startingCoins ?? 0;
    this.gems = 0;
    this.startingCoins = this.coins;
    this.runStartedAt = this.time.now;
    this.enemyKills = 0;
    this.selectedCards = [];
    this.cardLevels = {};
    this.bossRewards = [];
    this.tunnelsSinceTraveler = 0;
    this.hasProjectileAttack = false;
    this.hasNoxVoidBarrage = false;
    this.purchasedShopCards = new Set();
    this.shopCards = [];
    this.shopCoinRerollCost = GAME_RULES.shopCoinRerollBaseCost;
    this.shopGemRerollUsed = false;
    this.activeCurses = [];
    this.challengeActive = false;
    this.challengeCompleted = false;
    this.stats = { ...PLAYER_BASE_STATS };
    this.lastAttackAt = 0;
    this.lastSkillAt = 0;
    this.lastRollAt = 0;
    this.attackCounter = 0;
    this.guaranteedCritCounter = 0;
    this.lastSharpRitualAt = 0;
    this.isRolling = false;
    this.isChoosingTarot = false;
    this.isGameOver = false;
    this.invulnerableUntil = 0;
    this.registerCroppedTextures();

    this.keys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      skill: Phaser.Input.Keyboard.KeyCodes.E,
      roll: Phaser.Input.Keyboard.KeyCodes.SHIFT,
      interact: Phaser.Input.Keyboard.KeyCodes.F,
    });
    this.input.keyboard.addCapture([Phaser.Input.Keyboard.KeyCodes.ESC]);

    this.input.on("pointerdown", () => this.attack());

    this.drawUi();
    this.startRoom();
  }

  update(time, delta) {
    if (!this.player || this.isChoosingTarot || this.isGameOver) return;

    if (this.isTransitioning) {
      this.updateTunnel(time);
      return;
    }

    this.movePlayer(time);
    this.moveEnemies(time);
    this.updateProjectiles(time);
    this.updateChallengeRoom(time);
    this.updateSpriteAnimations(time);
    this.updateUi();
    this.maybeSpawnChest();
    this.checkPlayerInteractions(time);

    if (Phaser.Input.Keyboard.JustDown(this.keys.skill)) {
      this.castSkill(time);
    }

    if (Phaser.Input.Keyboard.JustDown(this.keys.roll)) {
      this.roll(time);
    }
  }

  startRoom() {
    this.clearFloorObjects();
    if (this.stats.shieldPulse && this.tempHearts <= 0) {
      this.addTempHearts(0.5);
      this.showFloatingText(148, 252, "SHIELD PULSE", "#78d8ff", 18);
    }
    this.layout = createRoomLayout({
      floor: this.floor,
      room: this.room,
      isBossRoom: this.isBossRoom(),
      levelId: this.levelId,
      roomType: this.getCurrentRoomType(),
    });
    this.drawRoom();
    this.createPlayer();
    this.createEnemies();
    this.createExit();
    this.createEventRoomChoices();
    this.grantSpawnProtection();
    this.updateUi();
  }

  getCurrentRoomType() {
    if (this.isBossRoom()) return "combat";
    return this.floorPlan.roomTypes?.[this.room - 1] ?? "combat";
  }

  isEventRoom() {
    return this.layout?.roomType && this.layout.roomType !== "combat";
  }

  grantSpawnProtection() {
    this.invulnerableUntil = this.time.now + SPAWN_INVULNERABILITY_MS;
    this.player?.setAlpha(0.62);
    this.time.delayedCall(SPAWN_INVULNERABILITY_MS, () => {
      if (!this.player?.active || this.isRolling) return;
      this.player.setAlpha(1);
    });
  }

  clearFloorObjects() {
    [
      this.roomGraphics,
      this.roomBackground,
      this.wallGroup,
      this.obstacleGroup,
      this.enemyGroup,
      this.pickupGroup,
      this.projectileGroup,
      this.chestSprite,
      this.exitZone,
      this.exitLabel,
      this.tunnelLabel,
      this.heartUiGroup,
      this.tunnelExitZone,
      this.tunnelExitLabel,
      this.travelerSprite,
      this.travelerCarpet,
      this.shopHint,
      this.eventChoiceGroup,
      this.eventRoomTitle,
      this.challengeTimerText,
      this.player,
    ].forEach((item) => item?.destroy?.(true));
    this.chestSprite = null;
    this.tunnelLabel = null;
    this.tunnelExitZone = null;
    this.tunnelExitLabel = null;
    this.travelerSprite = null;
    this.travelerCarpet = null;
    this.shopHint = null;
    this.eventChoiceGroup = null;
    this.eventRoomTitle = null;
    this.challengeTimerText = null;
    this.challengeActive = false;
    this.challengeCompleted = false;
    this.challengeNextWaveAt = 0;
    this.challengeDrainAt = 0;
    this.roomRewardResolved = false;
    this.aliveEnemies = 0;
  }

  getGroupChildren(group) {
    if (!group) return [];

    try {
      return group.getChildren?.() ?? [];
    } catch {
      return group.children?.entries ?? group.children?.list ?? [];
    }
  }

  registerCroppedTextures() {
    Object.entries(this.heroStrips).forEach(([name, strip]) => {
      this.registerHeroStrip(`hero${capitalize(name)}`, strip);
    });
    Object.entries(NOX_PROJECTILE_STRIPS).forEach(([name, strip]) => {
      this.registerStrip(`nox${capitalize(name)}`, strip);
    });
    Object.entries(CHEST_STRIPS).forEach(([type, strip]) => {
      this.registerStrip(CHEST_TYPES[type].openPrefix, strip);
    });

    this.registerEnemyStrips("enemySkeleton", ENEMY_STRIPS.skeleton);
    this.registerEnemyStrips("enemyGuard", ENEMY_STRIPS.guard);
    this.registerEnemyStrips("enemyDog", ENEMY_STRIPS.dog);
    this.registerEnemyStrips("enemyDogStrong", ENEMY_STRIPS.dogStrong);
    this.registerEnemyStrips("enemyBoss", ENEMY_STRIPS.boss);
    this.registerEnemyStrips("enemyHellGolem", ENEMY_STRIPS.hellGolem);
    this.registerEnemyStrips("enemyHellKiller", ENEMY_STRIPS.hellKiller);
    this.registerEnemyStrips("enemyHellTank", ENEMY_STRIPS.hellTank);
    this.registerEnemyStrips("enemyHellTitan", ENEMY_STRIPS.hellTitan);
    this.registerEnemyStrips("enemyImpLittle", ENEMY_STRIPS.impLittle);
    this.registerEnemyStrips("enemyInfernalBoss", ENEMY_STRIPS.infernalBoss);
    this.registerEnemyStrips("enemyInfernalBossPhase2", ENEMY_STRIPS.infernalBossPhase2);
    this.registerStrip("hellKillerProjectile", {
      source: "hellKillerProjectile",
      width: 636,
      height: 149,
      frames: 5,
      fps: 8,
    });
    this.registerStrip("hellKillerSuperProjectile", {
      source: "hellKillerSuperProjectile",
      width: 603,
      height: 86,
      frames: 5,
      fps: 8,
    });
    this.registerStrip("infernalFireOrb", { source: "infernalBossP1FireOrb", width: 435, height: 53, frames: 5, fps: 8 });
    this.registerStrip("infernalHellLance", { source: "infernalBossP1HellLance", width: 873, height: 133, frames: 7, fps: 10 });
    this.registerStrip("infernalWaveStart", { source: "infernalBossP1InfernalWaveStart", width: 1080, height: 82, frames: 8, fps: 10 });
    this.registerStrip("infernalWaveEnd", { source: "infernalBossP1InfernalWaveEnd", width: 1026, height: 71, frames: 8, fps: 10 });
    this.registerStrip("infernalScytheStart", { source: "infernalBossP1ScytheWaveStart", width: 779, height: 72, frames: 7, fps: 10 });
    this.registerStrip("infernalScytheEnd", { source: "infernalBossP1ScytheWaveEnd", width: 949, height: 68, frames: 8, fps: 10 });
    this.registerStrip("infernalTornadoStart", { source: "infernalBossP2TornadoStart", width: 1318, height: 194, frames: 8, fps: 10 });
    this.registerStrip("infernalTornadoContinue", { source: "infernalBossP2TornadoContinue", width: 1453, height: 185, frames: 8, fps: 10 });
    this.registerStrip("infernalTornadoLoop", { source: "infernalBossP2TornadoLoop", width: 1409, height: 175, frames: 8, fps: 10 });
    this.registerStrip("infernalTornadoEnd", { source: "infernalBossP2TornadoEnd", width: 1373, height: 195, frames: 8, fps: 10 });
  }

  registerHeroStrip(prefix, strip) {
    const frameWidth = Math.floor(strip.width / strip.frames);

    for (let index = 0; index < strip.frames; index += 1) {
      this.createCroppedTexture(`${prefix}${index}`, strip.source, {
        x: index * frameWidth,
        y: 0,
        width: index === strip.frames - 1 ? strip.width - index * frameWidth : frameWidth,
        height: strip.height,
      });
    }
  }

  registerEnemyStrips(prefix, strips) {
    Object.entries(strips).forEach(([name, strip]) => {
      this.registerStrip(`${prefix}${capitalize(name)}`, strip);
    });
  }

  registerStrip(prefix, strip) {
    const frameWidth = Math.floor(strip.width / strip.frames);

    for (let index = 0; index < strip.frames; index += 1) {
      this.createCroppedTexture(`${prefix}${index}`, strip.source, {
        x: index * frameWidth,
        y: 0,
        width: index === strip.frames - 1 ? strip.width - index * frameWidth : frameWidth,
        height: strip.height,
      });
    }
  }

  createCroppedTexture(newKey, sourceKey, crop) {
    if (this.textures.exists(newKey)) return;

    const sourceImage = this.textures.get(sourceKey).getSourceImage();
    const canvas = document.createElement("canvas");
    canvas.width = crop.width;
    canvas.height = crop.height;

    const context = canvas.getContext("2d");
    context.drawImage(
      sourceImage,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      crop.width,
      crop.height
    );

    this.textures.addCanvas(newKey, canvas);
  }

  getAliveEnemyCount() {
    return this.aliveEnemies ?? 0;
  }

  getEnemyName(type) {
    const names = {
      skeleton: "Skeleton",
      guard: "Skeleton Guard",
      dog: "Skeleton Dog",
      dogStrong: "Strong Skeleton Dog",
      boss: "Skeleton King",
      impLittle: "Imp Little",
      hellKiller: "Hell Killer",
      hellGolem: "Hell Golem",
      hellTank: "Hell Tank",
      hellTitan: "Hell Titan",
      infernalBoss: "Infernal Boss",
    };
    return names[type] ?? "enemy";
  }

  getActiveBoss() {
    if (!this.isBossRoom()) return null;
    return this.getGroupChildren(this.enemyGroup).find(
      (enemy) => enemy?.isAlive && (enemy.type === "boss" || enemy.type === "infernalBoss")
    ) ?? null;
  }

  isBossRoom() {
    return this.floor === GAME_RULES.floorsPerLevel && this.room === this.floorPlan.roomCount;
  }

  drawRoom() {
    const { room, obstacles } = this.layout;

    this.roomGraphics = this.add.graphics();
    this.roomGraphics.fillStyle(0x161820, 1);
    this.roomGraphics.fillRect(0, 0, this.scale.width, this.scale.height);
    this.roomBackground = this.add
      .image(
        room.x + room.width / 2,
        room.y + room.height / 2,
        this.getRoomTexture()
      )
      .setDisplaySize(room.width, room.height)
      .setDepth(0);
    this.roomGraphics.lineStyle(4, 0x8f6cff, 0.55);
    this.roomGraphics.strokeRoundedRect(room.x, room.y, room.width, room.height, 12);

    this.wallGroup = this.add.group();
    this.addWall(room.x + room.width / 2, room.y - 8, room.width, 20);
    this.addWall(room.x + room.width / 2, room.y + room.height + 8, room.width, 20);
    this.addWall(room.x - 8, room.y + room.height / 2, 20, room.height);
    this.addWall(room.x + room.width + 8, room.y + room.height / 2, 20, room.height);

    this.obstacleGroup = this.add.group();
    obstacles.forEach((obstacle) => this.addObstacle(obstacle));
  }

  getRoomTexture() {
    if (this.levelId === "hell") {
      return this.isBossRoom() ? "hellBgBoss" : "hellBgCommon";
    }

    return this.isBossRoom() ? "roomBgBoss" : "roomBgCommon";
  }

  addWall(x, y, width, height) {
    const wall = this.add.rectangle(x, y, width, height, 0x11131b, 0);
    this.wallGroup.add(wall);
  }

  addObstacle(obstacle) {
    const block = this.add.image(
      obstacle.x,
      obstacle.y,
      OBSTACLE_TEXTURES[obstacle.type] ?? "obstacleColumn"
    );
    block
      .setDisplaySize(obstacle.width, obstacle.height)
      .setDepth(4);
    block.collisionWidth = obstacle.width * 0.78;
    block.collisionHeight = obstacle.height * 0.58;
    this.obstacleGroup.add(block);
  }

  createPlayer() {
    const { start } = this.layout;
    this.player = this.physics.add
      .image(start.x, start.y, "heroIdle0")
      .setDisplaySize(64, 72)
      .setDepth(10);
    this.player.body.setSize(28, 34, true);
    this.player.frameKeys = this.heroAnimationKeys.idle;
    this.player.animationFps = this.heroStrips.idle.fps;
    this.player.animationFrame = 0;
    this.player.animationStartedAt = 0;
    this.player.loopAnimation = true;
    this.player.animationState = "idle";
    this.player.gameDisplayWidth = 64;
    this.player.gameDisplayHeight = 72;
  }

  createEnemies() {
    this.enemyGroup = this.add.group();
    this.pickupGroup = this.add.group();
    this.projectileGroup = this.add.group();
    this.aliveEnemies = 0;

    this.layout.enemies.forEach((enemyData) => {
      this.spawnEnemy(enemyData);
    });

  }

  spawnEnemy(enemyData, { summoned = false } = {}) {
    const displaySize = this.getEnemyDisplaySize(enemyData.type);
    const enemy = this.physics.add
      .image(enemyData.x, enemyData.y, ENEMY_FRAME_KEYS[enemyData.type])
      .setDisplaySize(displaySize.width, displaySize.height)
      .setTint(enemyData.tint)
      .setDepth(enemyData.type === "boss" || enemyData.type === "infernalBoss" ? 10 : 9);

    enemy.body.setSize(displaySize.bodyWidth, displaySize.bodyHeight, true);
    enemy.type = enemyData.type;
    const bossCurseMultiplier = (enemyData.type === "boss" || enemyData.type === "infernalBoss") && this.activeCurses.includes("Boss HP +20%")
      ? 1.2
      : 1;
    enemy.health = enemyData.health * bossCurseMultiplier;
    enemy.maxHealth = enemy.health;
    enemy.isAlive = true;
    enemy.isReviving = false;
    enemy.isSummoned = summoned || enemyData.isSummoned || false;
    enemy.speed = enemyData.speed * (this.challengeActive ? 1.35 : 1);
    enemy.aiStyle = enemyData.aiStyle ?? "cautious";
    enemy.desiredRange = enemyData.desiredRange ?? 70;
    enemy.retreatHealthRatio = enemyData.retreatHealthRatio ?? 0.35;
    enemy.retreatChance = enemyData.retreatChance ?? 0.35;
    enemy.lungeChance = enemyData.lungeChance ?? 0;
    enemy.superAttackChance = enemyData.superAttackChance ?? 0.25;
    enemy.projectileCooldown = enemyData.projectileCooldown ?? 1800;
    enemy.superProjectileCooldown = enemyData.superProjectileCooldown ?? 4400;
    enemy.lastProjectileAt = 0;
    enemy.lastSuperProjectileAt = 0;
    enemy.aiMode = "idle";
    enemy.aiModeUntil = 0;
    enemy.nextAiDecisionAt = 0;
    enemy.strafeDirection = Math.random() > 0.5 ? 1 : -1;
    enemy.nextLungeAt = 0;
    enemy.slowedUntil = 0;
    enemy.slowAmount = 0;
    enemy.contactDamage = GAME_RULES.enemyHitDamage;
    enemy.damageCooldown = enemyData.damageCooldown;
    enemy.lastDamageAt = 0;
    enemy.baseTint = enemyData.tint;
    enemy.animationSet = ANIMATION_KEYS[enemyData.type];
    enemy.stripSet = ENEMY_STRIPS[enemyData.type];
    enemy.frameKeys = enemy.animationSet.idle;
    enemy.animationFps = enemy.stripSet.idle.fps;
    if (enemy.type === "hellGolem") {
      enemy.frameKeys = [enemy.animationSet.idle[0]];
      enemy.animationFps = 1;
    }
    enemy.animationFrame = 0;
    enemy.animationState = "idle";
    enemy.loopAnimation = true;
    enemy.animationStartedAt = 0;
    enemy.gameDisplayWidth = displaySize.width;
    enemy.gameDisplayHeight = displaySize.height;
    enemy.hasRevived = enemyData.hasRevived ?? false;
    enemy.canRevive = enemyData.canRevive ?? (!enemy.isSummoned && Boolean(enemy.animationSet.revive));
    enemy.reviveChance = enemyData.reviveChance ?? (
      enemy.type === "boss" ? 1 : SKELETON_REVIVE_CHANCE
    );
    enemy.phase = enemy.type === "infernalBoss" ? 1 : 0;
    enemy.phaseTwoTriggered = false;

    this.enemyGroup.add(enemy);
    enemy.setActive(true).setVisible(true);
    this.aliveEnemies += 1;
    return enemy;
  }

  getEnemyDisplaySize(type) {
    if (type === "infernalBoss") {
      return { width: 128, height: 116, bodyWidth: 58, bodyHeight: 54 };
    }

    if (type === "boss") {
      return { width: 116, height: 138, bodyWidth: 52, bodyHeight: 58 };
    }

    if (type === "hellTitan") {
      return { width: 92, height: 96, bodyWidth: 42, bodyHeight: 44 };
    }

    if (type === "hellTank" || type === "hellGolem") {
      return { width: 82, height: 86, bodyWidth: 38, bodyHeight: 40 };
    }

    if (type === "hellKiller") {
      return { width: 70, height: 76, bodyWidth: 32, bodyHeight: 36 };
    }

    if (type === "impLittle") {
      return { width: 58, height: 64, bodyWidth: 28, bodyHeight: 30 };
    }

    if (type === "dogStrong") {
      return { width: 66, height: 70, bodyWidth: 34, bodyHeight: 34 };
    }

    return { width: 54, height: 66, bodyWidth: 28, bodyHeight: 32 };
  }

  maybeSpawnChest() {
    if (this.isEventRoom()) return;
    if (this.getAliveEnemyCount() > 0 || this.chestSprite || this.roomRewardResolved) return;

    this.roomRewardResolved = true;
    if (Math.random() > GAME_RULES.chestSpawnChance) return;

    const { room } = this.layout;
    const chestType = this.chooseChestType();
    const chestConfig = CHEST_TYPES[chestType] ?? CHEST_TYPES.dungeon;
    this.chestSprite = this.add
      .image(room.x + room.width / 2, room.y + room.height / 2, chestConfig.icon)
      .setDisplaySize(chestConfig.displayWidth, chestConfig.displayHeight)
      .setDepth(8);
    this.chestSprite.isOpened = false;
    this.chestSprite.chestType = chestType;
    this.chestSprite.frameKeys = null;
    this.chestSprite.gameDisplayWidth = chestConfig.displayWidth;
    this.chestSprite.gameDisplayHeight = chestConfig.displayHeight;

  }

  chooseChestType() {
    const weights = GAME_RULES.chestTypeWeights ?? { dungeon: 1 };
    const totalWeight = Object.values(weights).reduce((sum, value) => sum + value, 0);
    let roll = Math.random() * totalWeight;
    for (const [type, weight] of Object.entries(weights)) {
      roll -= weight;
      if (roll <= 0) return type;
    }
    return "dungeon";
  }

  openChest() {
    if (!this.chestSprite || this.chestSprite.isOpened) return;

    this.chestSprite.isOpened = true;
    this.roomRewardResolved = true;
    const lootX = this.chestSprite.x;
    const lootY = this.chestSprite.y + 58;
    const chestType = this.chestSprite.chestType ?? "dungeon";
    const chestConfig = CHEST_TYPES[chestType] ?? CHEST_TYPES.dungeon;
    const chestStrip = CHEST_STRIPS[chestType] ?? CHEST_STRIPS.dungeon;

    this.chestSprite.frameKeys = Array.from(
      { length: chestStrip.frames },
      (_, index) => `${chestConfig.openPrefix}${index}`
    );
    this.chestSprite.animationFps = 16;
    this.chestSprite.animationFrame = -1;
    this.chestSprite.animationStartedAt = this.time.now;
    this.chestSprite.loopAnimation = false;
    this.chestSprite.gameDisplayWidth = chestConfig.openWidth;
    this.chestSprite.gameDisplayHeight = chestConfig.openHeight;
    this.chestSprite.setTexture(`${chestConfig.openPrefix}0`).setDisplaySize(chestConfig.openWidth, chestConfig.openHeight);

    this.time.delayedCall(520, () => {
      if (!this.chestSprite?.active) return;
      this.chestSprite.frameKeys = null;
      this.chestSprite.setTexture(chestConfig.finalTexture ?? `${chestConfig.openPrefix}${chestStrip.frames - 1}`)
        .setDisplaySize(chestConfig.openWidth, chestConfig.openHeight);
    });

    this.time.delayedCall(260, () => this.dropChestLoot(lootX, lootY, chestType));
  }

  dropChestLoot(lootX, lootY, chestType = "dungeon") {
    if (!this.pickupGroup) return;

    const lootPosition = this.findSafePickupPosition(
      lootX + Phaser.Math.Between(-18, 18),
      lootY + Phaser.Math.Between(-6, 12)
    );
    const { x, y } = lootPosition;
    const lootRoll = Math.random();
    let pickup = null;

    pickup = this.createChestLootByType(chestType, lootRoll, x, y);

    if (!pickup) return;

    pickup.pickupReadyAt = this.time.now + 420;
    this.tweens.add({
      targets: pickup,
      y: pickup.y - 10,
      duration: 180,
      yoyo: true,
      ease: "Sine.easeOut",
    });
  }

  findSafePickupPosition(preferredX, preferredY, radius = 24) {
    if (this.isPickupPositionSafe(preferredX, preferredY, radius)) {
      return { x: preferredX, y: preferredY };
    }

    const anchorX = this.chestSprite?.x ?? preferredX;
    const anchorY = this.chestSprite?.y ?? preferredY;
    const angles = [90, 120, 60, 180, 0, 145, 35, -90, -135, -45];
    const distances = [72, 96, 124, 152, 184];

    for (const distance of distances) {
      for (const angleDeg of angles) {
        const angle = Phaser.Math.DegToRad(angleDeg);
        const x = anchorX + Math.cos(angle) * distance;
        const y = anchorY + Math.sin(angle) * distance;
        if (this.isPickupPositionSafe(x, y, radius)) {
          return { x, y };
        }
      }
    }

    const bounds = this.getWalkableBounds();
    return {
      x: Phaser.Math.Clamp(preferredX, bounds.left + radius, bounds.right - radius),
      y: Phaser.Math.Clamp(preferredY, bounds.top + radius, bounds.bottom - radius),
    };
  }

  isPickupPositionSafe(x, y, radius = 24) {
    const bounds = this.getWalkableBounds();
    if (
      x < bounds.left + radius ||
      x > bounds.right - radius ||
      y < bounds.top + radius ||
      y > bounds.bottom - radius
    ) {
      return false;
    }

    const blockedByObstacle = this.getGroupChildren(this.obstacleGroup).some((block) => {
      const halfWidth = (block.collisionWidth ?? block.displayWidth) / 2 + radius + 8;
      const halfHeight = (block.collisionHeight ?? block.displayHeight) / 2 + radius + 8;
      return (
        x > block.x - halfWidth &&
        x < block.x + halfWidth &&
        y > block.y - halfHeight &&
        y < block.y + halfHeight
      );
    });
    if (blockedByObstacle) return false;

    if (this.chestSprite?.active) {
      const chestHalfWidth = Math.max(70, this.chestSprite.displayWidth * 0.62) + radius;
      const chestHalfHeight = Math.max(78, this.chestSprite.displayHeight * 0.72) + radius;
      const blockedByChest =
        x > this.chestSprite.x - chestHalfWidth &&
        x < this.chestSprite.x + chestHalfWidth &&
        y > this.chestSprite.y - chestHalfHeight &&
        y < this.chestSprite.y + chestHalfHeight;
      if (blockedByChest) return false;
    }

    return true;
  }

  createChestLootByType(chestType, lootRoll, x, y) {
    if (chestType === "blue") {
      if (lootRoll < 0.45) return this.spawnTempHeartPickup(x, y, 1);
      if (lootRoll < 0.75) return this.spawnPotion(x, y);
      if (lootRoll < 0.9) return this.spawnTempHeartPickup(x, y, 0.5);
      return this.spawnTarotPickup(x, y + 4);
    }

    if (chestType === "golden") {
      if (lootRoll < 0.18) return this.spawnCurrency("gem", 1, x, y);
      if (lootRoll < 0.32) return this.spawnTarotPickup(x, y + 4);
      return this.spawnCurrency("coin", this.rollCoinAmount(12, 24), x, y);
    }

    if (chestType === "cursed") {
      this.applyCursedChestPenalty();
      if (lootRoll < 0.32) return this.spawnTarotPickup(x, y + 4);
      if (lootRoll < 0.56) return this.spawnCurrency("gem", 1, x, y);
      return this.spawnCurrency("coin", this.rollCoinAmount(18, 30), x, y);
    }

    if (chestType === "wooden") {
      if (lootRoll < 0.04) return this.spawnCurrency("gem", 1, x, y);
      if (lootRoll < 0.12) return this.spawnTarotPickup(x, y + 4);
      if (lootRoll < 0.28) return this.spawnPotion(x, y);
      return this.spawnCurrency("coin", this.rollCoinAmount(6, 14), x, y);
    }

    if (lootRoll < GAME_RULES.chestGemChance) return this.spawnCurrency("gem", 1, x, y);
    if (lootRoll < GAME_RULES.chestGemChance + GAME_RULES.chestBlueHeartChance) {
      return this.spawnTempHeartPickup(x, y, 0.5);
    }
    if (lootRoll < GAME_RULES.chestGemChance + GAME_RULES.chestBlueHeartChance + GAME_RULES.chestTarotChance) {
      return this.spawnTarotPickup(x, y + 4);
    }
    if (lootRoll < GAME_RULES.chestGemChance + GAME_RULES.chestBlueHeartChance + GAME_RULES.chestTarotChance + GAME_RULES.chestPotionChance) {
      return this.spawnPotion(x, y);
    }
    return this.spawnCurrency("coin", this.rollCoinAmount(), x, y);
  }

  applyCursedChestPenalty() {
    this.showFloatingText(this.player.x, this.player.y - 68, "CURSED CHEST", "#7c3cff", 18);
    if (Math.random() < 0.5) {
      this.applyPlayerDamage(0.5);
      return;
    }
    this.stats.damageReduction = Math.max(-0.35, (this.stats.damageReduction ?? 0) - 0.08);
  }

  rollCoinAmount(min = GAME_RULES.coinDropMin, max = GAME_RULES.coinDropMax) {
    const range = max - min + 1;
    return min + Math.floor(Math.random() * Math.random() * range);
  }

  spawnPotion(x, y) {
    const potion = this.add
      .image(x, y, "healPotion")
      .setDisplaySize(30, 44)
      .setDepth(9);
    potion.type = "potion";
    this.pickupGroup.add(potion);
    return potion;
  }

  spawnTempHeartPickup(x, y, amount = 0.5) {
    const heart = this.add
      .image(x, y, "blueHeartHalf")
      .setDisplaySize(32, 32)
      .setDepth(9);
    heart.type = "temp-heart";
    heart.amount = amount;
    this.pickupGroup.add(heart);
    return heart;
  }

  spawnGreenHeartPickup(x, y, amount = 0.5) {
    const heart = this.add
      .image(x, y, "greenHeartHalf")
      .setDisplaySize(32, 32)
      .setDepth(9);
    heart.type = "green-heart";
    heart.amount = amount;
    this.pickupGroup.add(heart);
    return heart;
  }

  spawnTarotPickup(x, y) {
    const tarot = this.add
      .image(x, y, "tarotCard")
      .setDisplaySize(34, 54)
      .setDepth(9);
    tarot.type = "tarot";
    this.pickupGroup.add(tarot);
    return tarot;
  }

  spawnCurrency(currency, amount, x, y) {
    const iconKey = currency === "gem" ? "gemIcon" : "coinIcon";
    const pickup = this.add
      .image(x, y, iconKey)
      .setDisplaySize(currency === "gem" ? 30 : 28, currency === "gem" ? 30 : 28)
      .setDepth(9);
    pickup.type = "currency";
    pickup.currency = currency;
    pickup.amount = amount;
    this.pickupGroup.add(pickup);

    const label = this.add
      .text(x + 18, y - 22, currency === "gem" ? "+1" : `+${amount}`, {
        fontFamily: "monospace",
        fontSize: "14px",
        color: currency === "gem" ? "#d8b4fe" : "#ffd36b",
      })
      .setDepth(12)
      .setOrigin(0.5);
    this.tweens.add({
      targets: label,
      y: label.y - 18,
      alpha: 0,
      duration: 900,
      onComplete: () => label.destroy(),
    });
    return pickup;
  }

  createEventRoomChoices() {
    if (!this.isEventRoom()) return;

    const roomType = this.layout.roomType;
    const titleByType = {
      award: "Award Room",
      challenge: "Challenge Room",
      cursed: "Cursed Room",
      rest: "Rest Room",
    };
    this.eventChoiceGroup = this.add.group();
    this.eventRoomTitle = this.add
      .text(512, 78, titleByType[roomType] ?? "Event Room", {
        fontFamily: "monospace",
        fontSize: "24px",
        color: roomType === "cursed" ? "#b98cff" : "#f5f0ff",
        stroke: "#08090e",
        strokeThickness: 5,
      })
      .setOrigin(0.5)
      .setDepth(20);

    const choices = this.getEventRoomChoices(roomType);
    const positions = [
      { x: 350, y: 300 },
      { x: 512, y: 220 },
      { x: 674, y: 300 },
    ];
    choices.forEach((choice, index) => this.createEventChoice(choice, positions[index]));
  }

  getEventRoomChoices(roomType) {
    if (roomType === "award") {
      return [
        { id: "award-tarot", label: "Tarot", detail: "Choose a card", icon: "tarotCard", apply: () => this.offerTarotChoice({ advanceFloor: false }) },
        { id: "award-chest", label: "Chest", detail: "Random chest", icon: "dungeonChestIcon", apply: () => this.spawnRewardChestAt(512, 300) },
        { id: "award-coins", label: "Coins", detail: "+15 coins", icon: "coinIcon", apply: () => { this.coins += 15; this.updateUi(); } },
      ];
    }

    if (roomType === "challenge") {
      return [
        { id: "challenge-start", label: "Start", detail: "Waves, no dash, HP drain", icon: "cursedChestIcon", apply: () => this.startChallengeRoom() },
      ];
    }

    if (roomType === "cursed") {
      return [
        { id: "curse-card", label: "Rare card", detail: "Boss HP +20%", icon: "tarotCard", apply: () => this.takeCursedRareCard() },
        { id: "curse-power", label: "Dark power", detail: "Damage +40%, -1 max heart", icon: "cursedChestIcon", apply: () => { this.stats.attackDamage *= 1.4; this.decreaseMaxHearts(1); } },
        { id: "curse-gems", label: "Blood gems", detail: "+2 gems, take damage", icon: "gemIcon", apply: () => { this.gems += 2; this.applyPlayerDamage(0.5); this.updateUi(); } },
      ];
    }

    return [
      { id: "rest-heal", label: "Rest", detail: "Restore 1 heart", icon: "healPotion", apply: () => this.healPlayer(1) },
      { id: "rest-cleanse", label: "Cleanse", detail: "Remove a curse", icon: "tarotCard", apply: () => this.cleanseCurse() },
      { id: "rest-upgrade", label: "Upgrade", detail: "Improve a card", icon: "tarotCard", apply: () => this.upgradeRandomCard() },
      { id: "rest-buy-heal", label: "Buy heal", detail: "10 coins -> 1 heart", icon: "coinIcon", apply: () => this.buyRestHeal() },
    ].slice(0, 3);
  }

  createEventChoice(choice, position) {
    const marker = this.add
      .rectangle(position.x, position.y, 120, 92, 0x171923, 0.78)
      .setStrokeStyle(2, 0xb98cff, 0.65)
      .setDepth(8);
    const icon = this.add.image(position.x, position.y - 14, choice.icon).setDisplaySize(34, 34).setDepth(9);
    const label = this.add
      .text(position.x, position.y + 26, `${choice.label}\n${choice.detail}`, {
        fontFamily: "monospace",
        fontSize: "12px",
        color: "#f5f0ff",
        align: "center",
      })
      .setOrigin(0.5)
      .setDepth(9);
    marker.choice = choice;
    marker.choiceRadius = 72;
    this.eventChoiceGroup.add(marker);
    this.eventChoiceGroup.add(icon);
    this.eventChoiceGroup.add(label);
  }

  startChallengeRoom() {
    if (this.challengeActive || this.challengeCompleted) return;
    this.challengeActive = true;
    this.challengeCompleted = false;
    this.challengeWave = 0;
    this.challengeTotalWaves = 3;
    this.challengeEndsAt = this.time.now + 45000;
    this.challengeNextWaveAt = this.time.now;
    this.challengeDrainAt = this.time.now + 5000;
    this.challengeTimerText = this.add
      .text(512, 116, "Challenge: 45s", {
        fontFamily: "monospace",
        fontSize: "18px",
        color: "#ffcf6b",
        stroke: "#08090e",
        strokeThickness: 4,
      })
      .setOrigin(0.5)
      .setDepth(30);
  }

  updateChallengeRoom(time) {
    if (!this.challengeActive) return;

    const remaining = Math.max(0, Math.ceil((this.challengeEndsAt - time) / 1000));
    this.challengeTimerText?.setText(`Challenge: ${remaining}s   Dash locked`);

    if (time >= this.challengeNextWaveAt && this.challengeWave < this.challengeTotalWaves) {
      this.spawnChallengeWave();
      this.challengeWave += 1;
      this.challengeNextWaveAt = time + 8500;
    }

    if (time >= this.challengeDrainAt) {
      this.challengeDrainAt = time + 5000;
      this.applyPlayerDamage(0.5);
      this.showFloatingText(this.player.x, this.player.y - 68, "TRIAL DRAIN", "#ff5f87", 16);
    }

    const wavesDone = this.challengeWave >= this.challengeTotalWaves;
    if (wavesDone && this.getAliveEnemyCount() <= 0) {
      this.completeChallengeRoom();
      return;
    }

    if (time >= this.challengeEndsAt) {
      this.endGame("Failed the challenge room timer");
    }
  }

  spawnChallengeWave() {
    const bounds = this.getWalkableBounds();
    const count = 2 + this.challengeWave;
    Array.from({ length: count }).forEach((_, index) => {
      const type = this.levelId === "hell"
        ? Phaser.Utils.Array.GetRandom(["impLittle", "hellKiller", "hellGolem"])
        : Phaser.Utils.Array.GetRandom(["skeleton", "guard", "dog"]);
      const x = Phaser.Math.Clamp(310 + index * 120, bounds.left + 40, bounds.right - 40);
      const y = Phaser.Math.Between(bounds.top + 80, bounds.bottom - 130);
      const enemy = this.spawnEnemy({
        ...ENEMY_TYPES[type],
        type,
        x,
        y,
        canRevive: false,
        isSummoned: true,
      }, { summoned: true });
      enemy.setAlpha(0);
      this.tweens.add({ targets: enemy, alpha: 1, duration: 240 });
    });
  }

  completeChallengeRoom() {
    this.challengeActive = false;
    this.challengeCompleted = true;
    this.challengeTimerText?.setText("Challenge completed");
    this.spawnCurrency("coin", this.rollCoinAmount(18, 28), 512, 280);
    if (Math.random() < 0.35) this.spawnTarotPickup(560, 282);
    this.showFloatingText(this.player.x, this.player.y - 72, "CHALLENGE COMPLETE", "#ffd36b", 18);
  }

  resolveEventChoice(marker) {
    if (!marker?.choice || marker.choiceResolved) return;
    marker.choiceResolved = true;
    const choice = marker.choice;
    this.getGroupChildren(this.eventChoiceGroup).forEach((item) => item?.destroy?.());
    this.eventChoiceGroup = this.add.group();
    choice.apply?.();
    this.showFloatingText(this.player.x, this.player.y - 62, choice.label.toUpperCase(), "#f5f0ff", 16);
  }

  spawnRewardChestAt(x, y) {
    if (this.chestSprite?.active) return;
    const chestType = this.chooseChestType();
    const chestConfig = CHEST_TYPES[chestType] ?? CHEST_TYPES.dungeon;
    this.chestSprite = this.add.image(x, y, chestConfig.icon).setDisplaySize(chestConfig.displayWidth, chestConfig.displayHeight).setDepth(8);
    this.chestSprite.isOpened = false;
    this.chestSprite.chestType = chestType;
    this.chestSprite.frameKeys = null;
    this.chestSprite.gameDisplayWidth = chestConfig.displayWidth;
    this.chestSprite.gameDisplayHeight = chestConfig.displayHeight;
  }

  takeCursedRareCard() {
    this.activeCurses.push("Boss HP +20%");
    const rareCards = this.getEligibleTarotCards(TAROT_CARDS).filter((card) => ["rare", "epic"].includes(card.rarity));
    const card = this.prepareCardForOffer(Phaser.Utils.Array.GetRandom(rareCards.length ? rareCards : this.getEligibleTarotCards(TAROT_CARDS)));
    this.applyChosenCard(card, "Cursed Room");
  }

  cleanseCurse() {
    const removed = this.activeCurses.pop();
    this.showFloatingText(this.player.x, this.player.y - 70, removed ? "CURSE CLEANSED" : "NO CURSE", "#d9ccff", 16);
  }

  upgradeRandomCard() {
    const upgradeable = Object.keys(this.cardLevels).filter((id) => this.cardLevels[id] < 3);
    if (upgradeable.length === 0) {
      this.showFloatingText(this.player.x, this.player.y - 70, "NO CARD TO UPGRADE", "#d9ccff", 16);
      return;
    }
    const id = Phaser.Utils.Array.GetRandom(upgradeable);
    const source = [...TAROT_CARDS, ...BOSS_CARDS].find((card) => card.id === id);
    if (!source) return;
    const card = this.prepareCardForOffer(source);
    this.applyChosenCard(card, "Rest Upgrade");
  }

  buyRestHeal() {
    if (this.coins < 10) {
      this.showFloatingText(this.player.x, this.player.y - 70, "NEED 10 COINS", "#ffd36b", 16);
      return;
    }
    this.coins -= 10;
    this.healPlayer(1);
  }

  createExit() {
    const { exit } = this.layout;
    this.exitReadyAt = this.time.now + (this.isEventRoom() ? 900 : 0);
    this.exitZone = this.add.rectangle(exit.x, exit.y, exit.width, exit.height, 0x6b4bb5, 0.35);
    this.exitZone.setStrokeStyle(2, 0xa988ff, 0.9);
    this.exitLabel = this.add
      .text(exit.x, exit.y - (this.isEventRoom() ? 42 : 7), "EXIT", {
        fontFamily: "monospace",
        fontSize: "14px",
        color: "#d9ccff",
      })
      .setOrigin(0.5)
      .setDepth(12);
  }

  movePlayer(time) {
    const velocity = new Phaser.Math.Vector2(0, 0);

    if (this.keys.left.isDown) velocity.x -= 1;
    if (this.keys.right.isDown) velocity.x += 1;
    if (this.keys.up.isDown) velocity.y -= 1;
    if (this.keys.down.isDown) velocity.y += 1;

    velocity.normalize().scale(this.isRolling ? this.stats.rollSpeed : this.stats.speed);
    this.player.setVelocity(velocity.x, velocity.y);
    this.keepPlayerInsideRoom();
    this.resolveSpriteAgainstObstacles(this.player, 24, 30);

    if (velocity.x !== 0) {
      this.player.setFlipX(velocity.x < 0);
    }

    if (this.playerAnimationLockedUntil > time) return;

    if (this.isRolling) {
      this.playHeroAnimation("dash", { loop: false });
    } else if (velocity.lengthSq() > 0) {
      this.playHeroAnimation(this.stats.speed > PLAYER_BASE_STATS.speed ? "fastWalk" : "walk");
    } else {
      this.playHeroAnimation("idle");
    }
  }

  keepPlayerInsideRoom() {
    const bounds = this.getWalkableBounds();
    this.player.x = Phaser.Math.Clamp(this.player.x, bounds.left + 24, bounds.right - 24);
    this.player.y = Phaser.Math.Clamp(this.player.y, bounds.top + 34, bounds.bottom - 34);
  }

  moveEnemies(time) {
    this.getGroupChildren(this.enemyGroup).forEach((enemy) => {
      if (!enemy?.isAlive || enemy.isReviving) return;
      const distance = Phaser.Math.Distance.Between(enemy.x, enemy.y, this.player.x, this.player.y);

      if (enemy.type === "infernalBoss") {
        this.updateInfernalBossAi(enemy, time, distance);
      } else if (enemy.type === "boss") {
        this.updateBossAi(enemy, time, distance);
      } else {
        this.updateEnemyAi(enemy, time, distance);
      }

      this.keepSpriteInsideRoom(enemy, enemy.displayWidth * 0.25, enemy.displayHeight * 0.36);
      this.resolveSpriteAgainstObstacles(enemy, enemy.displayWidth * 0.28, enemy.displayHeight * 0.33);

      if (time - enemy.lastDamageAt > enemy.damageCooldown) {
        enemy.clearTint();
        enemy.setTint(enemy.baseTint || 0xffffff);
      }
    });
  }

  updateEnemyAi(enemy, time, distance) {
    const healthRatio = enemy.health / enemy.maxHealth;
    const effectiveSpeed = this.getEnemySpeed(enemy, time);
    const isRanged = enemy.aiStyle === "ranged";
    const isMelee = !isRanged;

    if (isRanged && distance < 480) {
      this.tryHellKillerProjectile(enemy, time, distance);
    }

    if (time >= enemy.nextAiDecisionAt) {
      enemy.nextAiDecisionAt = time + Phaser.Math.Between(520, 950);
      enemy.strafeDirection = Math.random() > 0.5 ? 1 : -1;

      if (
        healthRatio <= enemy.retreatHealthRatio &&
        Math.random() < enemy.retreatChance
      ) {
        enemy.aiMode = "retreat";
        enemy.aiModeUntil = time + Phaser.Math.Between(700, 1200);
      } else if (isRanged && distance < enemy.desiredRange - 70) {
        enemy.aiMode = "backoff";
        enemy.aiModeUntil = time + Phaser.Math.Between(520, 840);
      } else if (isRanged && distance < enemy.desiredRange + 70) {
        enemy.aiMode = "strafe";
        enemy.aiModeUntil = time + Phaser.Math.Between(620, 980);
      } else if (
        enemy.aiStyle === "skirmisher" &&
        distance < 170 &&
        time >= enemy.nextLungeAt &&
        Math.random() < enemy.lungeChance
      ) {
        enemy.aiMode = "lunge";
        enemy.aiModeUntil = time + 360;
        enemy.nextLungeAt = time + Phaser.Math.Between(1700, 2600);
        if (enemy.animationSet?.superAttack && Math.random() < enemy.superAttackChance) {
          this.playEnemyAnimation(enemy, "superAttack", { loop: false, lockMs: 420 });
        }
      } else if (isMelee && distance <= 44) {
        enemy.aiMode = "strafe";
        enemy.aiModeUntil = time + Phaser.Math.Between(260, 480);
      } else if (isMelee && distance < 900) {
        enemy.aiMode = "chase";
        enemy.aiModeUntil = time + Phaser.Math.Between(640, 1040);
      } else if (distance < enemy.desiredRange) {
        enemy.aiMode = "backoff";
        enemy.aiModeUntil = time + Phaser.Math.Between(420, 720);
      } else if (distance < 430) {
        enemy.aiMode = enemy.aiStyle === "guard" && distance < 150 ? "strafe" : "chase";
        enemy.aiModeUntil = time + Phaser.Math.Between(600, 1000);
      } else {
        enemy.aiMode = "idle";
        enemy.aiModeUntil = time + 700;
      }
    }

    if (time > enemy.aiModeUntil) {
      enemy.aiMode = isMelee && distance < 900 ? "chase" : distance < 430 ? "chase" : "idle";
    }

    this.moveEnemyByMode(enemy, enemy.aiMode, effectiveSpeed, time);
  }

  tryHellKillerProjectile(enemy, time, distance) {
    const canSuper = time - (enemy.lastSuperProjectileAt ?? 0) >= enemy.superProjectileCooldown;
    const shouldSuper = canSuper && distance < 360 && Math.random() < enemy.superAttackChance;
    const cooldown = shouldSuper ? enemy.superProjectileCooldown : enemy.projectileCooldown;
    const lastShotAt = shouldSuper ? enemy.lastSuperProjectileAt : enemy.lastProjectileAt;
    if (time - (lastShotAt ?? 0) < cooldown) return;

    if (shouldSuper) {
      enemy.lastSuperProjectileAt = time;
      this.playEnemyAnimation(enemy, "superAttack", { loop: false, lockMs: 620 });
      const baseAngle = Phaser.Math.Angle.Between(enemy.x, enemy.y, this.player.x, this.player.y);
      [-12, 0, 12].forEach((spread) => {
        this.fireEnemyProjectile(enemy, "hellKillerSuperProjectile0", baseAngle + Phaser.Math.DegToRad(spread), 255, 32);
      });
      return;
    }

    enemy.lastProjectileAt = time;
    this.playEnemyAnimation(enemy, "attack", { loop: false, lockMs: 420 });
    const angle = Phaser.Math.Angle.Between(enemy.x, enemy.y, this.player.x, this.player.y);
    this.fireEnemyProjectile(enemy, "hellKillerProjectile0", angle, 230, 34);
  }

  fireEnemyProjectile(enemy, texture, angle, speed, size) {
    const projectile = this.add
      .image(enemy.x, enemy.y - 6, texture)
      .setDisplaySize(size, size)
      .setDepth(11)
      .setRotation(angle);
    projectile.damage = GAME_RULES.enemyHitDamage;
    projectile.owner = "enemy";
    projectile.expiresAt = this.time.now + 2100;
    this.projectileGroup.add(projectile);
    this.physics.add.existing(projectile);
    projectile.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
  }

  updateInfernalBossAi(enemy, time, distance) {
    if (!enemy.phaseTwoTriggered && enemy.health / enemy.maxHealth <= INFERNAL_PHASE_TWO_TRIGGER) {
      this.triggerInfernalPhaseTwo(enemy);
      return;
    }

    const effectiveSpeed = this.getEnemySpeed(enemy, time) * (enemy.phase === 2 ? 1.22 : 1);

    if (time >= enemy.nextAiDecisionAt) {
      enemy.nextAiDecisionAt = time + Phaser.Math.Between(520, 820);
      enemy.strafeDirection = Math.random() > 0.5 ? 1 : -1;

      if (distance < 135) {
        enemy.aiMode = "retreat";
        enemy.aiModeUntil = time + 520;
      } else if (distance > enemy.desiredRange + 80) {
        enemy.aiMode = "chase";
        enemy.aiModeUntil = time + 640;
      } else {
        enemy.aiMode = "strafe";
        enemy.aiModeUntil = time + 780;
      }
    }

    this.moveEnemyByMode(enemy, enemy.aiMode, effectiveSpeed, time);
    this.tryInfernalBossAttack(enemy, time, distance);
  }

  triggerInfernalPhaseTwo(enemy) {
    enemy.phaseTwoTriggered = true;
    enemy.phase = 2;
    enemy.health = enemy.maxHealth * INFERNAL_PHASE_TWO_HEAL;
    enemy.speed *= 1.16;
    enemy.projectileCooldown *= 0.72;
    enemy.superProjectileCooldown *= 0.66;
    enemy.animationSet = ANIMATION_KEYS.infernalBossPhase2;
    enemy.stripSet = ENEMY_STRIPS.infernalBossPhase2;
    enemy.frameKeys = enemy.animationSet.superAttack;
    enemy.animationFps = enemy.stripSet.superAttack.fps;
    enemy.animationFrame = -1;
    enemy.animationStartedAt = this.time.now;
    enemy.animationState = "superAttack";
    enemy.loopAnimation = false;
    enemy.animationLockedUntil = this.time.now + 1250;
    enemy.setTexture(enemy.frameKeys[0]);
    enemy.setTint(0xff7a2f);
    this.cameras.main.shake(520, 0.01);
    this.time.delayedCall(520, () => {
      if (!enemy?.active || !enemy.isAlive) return;
      this.spawnInfernalTornado(enemy);
    });
    this.time.delayedCall(1250, () => {
      if (!enemy?.active || !enemy.isAlive) return;
      enemy.clearTint();
      enemy.setTint(enemy.baseTint || 0xffffff);
      this.playEnemyAnimation(enemy, "idle");
    });
  }

  tryInfernalBossAttack(enemy, time, distance) {
    const cooldown = enemy.phase === 2 ? 1050 : 1550;
    if (time - (enemy.lastProjectileAt ?? 0) < cooldown) return;
    if (enemy.animationLockedUntil > time) return;

    enemy.lastProjectileAt = time;
    const phaseTwo = enemy.phase === 2;
    const roll = Math.random();
    const angle = Phaser.Math.Angle.Between(enemy.x, enemy.y, this.player.x, this.player.y);

    if (phaseTwo && roll > 0.76) {
      this.castInfernalTornadoAttack(enemy, Math.random() > 0.45 ? 2 : 1);
      return;
    }

    if (phaseTwo && roll > 0.55) {
      this.castInfernalChain(enemy, roll > 0.68 ? "chainPrison" : "chainSnare");
      return;
    }

    if (roll > 0.7 || (phaseTwo && roll > 0.42)) {
      this.playEnemyAnimation(enemy, "superAttack", { loop: false, lockMs: phaseTwo ? 660 : 720 });
      const waveKey = phaseTwo ? "infernalWaveStart" : "infernalScytheStart";
      const spreads = phaseTwo ? [-18, 0, 18] : [-10, 10];
      spreads.forEach((spread) => {
        this.fireAnimatedEnemyProjectile(enemy, `${waveKey}0`, `${waveKey}`, angle + Phaser.Math.DegToRad(spread), phaseTwo ? 265 : 235, phaseTwo ? 58 : 48, 2300);
      });
      return;
    }

    if (roll > 0.42) {
      this.playEnemyAnimation(enemy, "attack", { loop: false, lockMs: 520 });
      const spreads = phaseTwo ? [-12, 0, 12] : [0];
      spreads.forEach((spread) => {
        this.fireAnimatedEnemyProjectile(enemy, "infernalFireOrb0", "infernalFireOrb", angle + Phaser.Math.DegToRad(spread), phaseTwo ? 300 : 250, 34, 2000);
      });
      return;
    }

    this.playEnemyAnimation(enemy, "attack", { loop: false, lockMs: 580 });
    this.castHellLanceRain(enemy, phaseTwo ? 5 : 3);
  }

  fireAnimatedEnemyProjectile(enemy, texture, framePrefix, angle, speed, size, lifetime) {
    const projectile = this.add
      .image(enemy.x, enemy.y - 8, texture)
      .setDisplaySize(size, size)
      .setDepth(12)
      .setRotation(angle);
    projectile.owner = "enemy";
    projectile.damage = GAME_RULES.enemyHitDamage;
    projectile.expiresAt = this.time.now + lifetime;
    projectile.frameKeys = this.getFrameKeys(framePrefix);
    projectile.animationFps = 10;
    projectile.animationFrame = -1;
    projectile.animationStartedAt = this.time.now;
    projectile.loopAnimation = true;
    projectile.gameDisplayWidth = size;
    projectile.gameDisplayHeight = size;
    this.projectileGroup.add(projectile);
    this.physics.add.existing(projectile);
    projectile.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    return projectile;
  }

  getFrameKeys(prefix) {
    const keys = [];
    for (let index = 0; this.textures.exists(`${prefix}${index}`); index += 1) {
      keys.push(`${prefix}${index}`);
    }
    return keys;
  }

  castHellLanceRain(enemy, count) {
    const bounds = this.getWalkableBounds();
    Array.from({ length: count }).forEach((_, index) => {
      const x = Phaser.Math.Clamp(
        this.player.x + Phaser.Math.Between(-150, 150),
        bounds.left + 20,
        bounds.right - 20
      );
      const y = bounds.top + 24;
      this.time.delayedCall(index * 120, () => {
        if (!enemy?.active || !enemy.isAlive) return;
        const projectile = this.add
          .image(x, y, "infernalHellLance0")
          .setDisplaySize(34, 58)
          .setDepth(12)
          .setRotation(Math.PI / 2);
        projectile.owner = "enemy";
        projectile.damage = GAME_RULES.enemyHitDamage;
        projectile.expiresAt = this.time.now + 1600;
        projectile.frameKeys = this.getFrameKeys("infernalHellLance");
        projectile.animationFps = 10;
        projectile.animationFrame = -1;
        projectile.animationStartedAt = this.time.now;
        projectile.loopAnimation = true;
        projectile.gameDisplayWidth = 34;
        projectile.gameDisplayHeight = 58;
        this.projectileGroup.add(projectile);
        this.physics.add.existing(projectile);
        projectile.body.setVelocity(0, 310);
      });
    });
  }

  castInfernalChain(enemy, animationName) {
    this.playEnemyAnimation(enemy, animationName, { loop: false, lockMs: 760 });
    const marker = this.add
      .circle(this.player.x, this.player.y, animationName === "chainPrison" ? 74 : 52, 0xff4b1f, 0.22)
      .setStrokeStyle(2, 0xffb347, 0.65)
      .setDepth(11);
    marker.owner = "enemy";
    marker.damage = GAME_RULES.enemyHitDamage;
    marker.expiresAt = this.time.now + 900;
    marker.hazardRadius = animationName === "chainPrison" ? 78 : 56;
    this.projectileGroup.add(marker);
  }

  castInfernalTornadoAttack(enemy, count) {
    this.playEnemyAnimation(enemy, count > 1 ? "superHellfireTornado" : "hellfireTornado", {
      loop: false,
      lockMs: count > 1 ? 900 : 760,
    });
    Array.from({ length: count }).forEach((_, index) => {
      this.time.delayedCall(260 + index * 180, () => {
        if (!enemy?.active || !enemy.isAlive) return;
        this.spawnInfernalTornado(enemy);
      });
    });
  }

  spawnInfernalTornado(enemy) {
    const currentTornadoes = this.getGroupChildren(this.projectileGroup).filter((item) => item?.isTornado).length;
    if (currentTornadoes >= INFERNAL_MAX_TORNADOES) return;

    const bounds = this.getWalkableBounds();
    const x = Phaser.Math.Between(bounds.left + 90, bounds.right - 90);
    const y = Phaser.Math.Between(bounds.top + 90, bounds.bottom - 90);
    const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
    const speed = Phaser.Math.Between(80, 135);
    const lifetime = Phaser.Math.Between(5000, 10000);
    const tornado = this.add
      .image(x, y, "infernalTornadoStart0")
      .setDisplaySize(86, 106)
      .setDepth(13);
    tornado.owner = "enemy";
    tornado.damage = GAME_RULES.enemyHitDamage;
    tornado.expiresAt = this.time.now + lifetime;
    tornado.isTornado = true;
    tornado.hazardRadius = 42;
    tornado.frameKeys = this.getFrameKeys("infernalTornadoStart");
    tornado.animationFps = 10;
    tornado.animationFrame = -1;
    tornado.animationStartedAt = this.time.now;
    tornado.loopAnimation = true;
    tornado.gameDisplayWidth = 86;
    tornado.gameDisplayHeight = 106;
    this.projectileGroup.add(tornado);
    this.physics.add.existing(tornado);
    tornado.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);

    this.time.delayedCall(620, () => {
      if (!tornado?.active) return;
      tornado.frameKeys = this.getFrameKeys(Math.random() > 0.5 ? "infernalTornadoContinue" : "infernalTornadoLoop");
      tornado.animationStartedAt = this.time.now;
      tornado.animationFrame = -1;
    });
    this.time.delayedCall(lifetime - 650, () => {
      if (!tornado?.active) return;
      tornado.frameKeys = this.getFrameKeys("infernalTornadoEnd");
      tornado.animationStartedAt = this.time.now;
      tornado.animationFrame = -1;
      tornado.body.setVelocity(tornado.body.velocity.x * 0.35, tornado.body.velocity.y * 0.35);
    });
  }

  updateBossAi(enemy, time, distance) {
    const healthRatio = enemy.health / enemy.maxHealth;
    enemy.phase = healthRatio <= 0.35 ? 3 : healthRatio <= 0.65 ? 2 : 1;
    const phaseSpeedBonus = enemy.phase === 3 ? 1.36 : enemy.phase === 2 ? 1.18 : 1;
    const effectiveSpeed = this.getEnemySpeed(enemy, time) * phaseSpeedBonus;

    if (time >= enemy.nextAiDecisionAt) {
      enemy.nextAiDecisionAt = time + Phaser.Math.Between(480, 760);
      enemy.strafeDirection = Math.random() > 0.5 ? 1 : -1;

      if (distance < 115) {
        enemy.aiMode = "retreat";
        enemy.aiModeUntil = time + 520;
      } else if (enemy.phase >= 2 && distance < 260 && Math.random() < 0.42) {
        enemy.aiMode = "bossDash";
        enemy.aiModeUntil = time + 420;
      } else if (distance > enemy.desiredRange + 70) {
        enemy.aiMode = "chase";
        enemy.aiModeUntil = time + 680;
      } else {
        enemy.aiMode = "strafe";
        enemy.aiModeUntil = time + 760;
      }
    }

    const modeSpeed = enemy.aiMode === "bossDash" ? effectiveSpeed * 2.15 : effectiveSpeed;
    this.moveEnemyByMode(enemy, enemy.aiMode, modeSpeed, time);

    if (distance > 120 && distance < 430) {
      this.tryBossProjectile(enemy, time);
    }
  }

  getEnemySpeed(enemy, time) {
    if (time < (enemy.slowedUntil ?? 0)) {
      return enemy.speed * (1 - (enemy.slowAmount ?? 0));
    }

    return enemy.speed;
  }

  moveEnemyByMode(enemy, mode, speed, time) {
    const angleToPlayer = Phaser.Math.Angle.Between(enemy.x, enemy.y, this.player.x, this.player.y);
    let moveAngle = angleToPlayer;
    let shouldMove = true;

    if (mode === "idle") {
      shouldMove = false;
    } else if (mode === "retreat" || mode === "backoff") {
      moveAngle = angleToPlayer + Math.PI;
    } else if (mode === "strafe") {
      moveAngle = angleToPlayer + Phaser.Math.DegToRad(82 * enemy.strafeDirection);
    } else if (mode === "bossDash") {
      moveAngle = angleToPlayer + Phaser.Math.DegToRad(38 * enemy.strafeDirection);
    }

    if (!shouldMove) {
      enemy.setVelocity(0, 0);
      if (enemy.animationLockedUntil <= time || !enemy.animationLockedUntil) {
        this.playEnemyAnimation(enemy, "idle");
      }
      return;
    }

    enemy.setVelocity(Math.cos(moveAngle) * speed, Math.sin(moveAngle) * speed);
    enemy.setFlipX(enemy.type === "hellGolem" ? enemy.body.velocity.x > 0 : enemy.body.velocity.x < 0);
    if (enemy.animationLockedUntil <= time || !enemy.animationLockedUntil) {
      this.playEnemyAnimation(enemy, "walk");
    }
  }

  updateProjectiles(time) {
    this.getGroupChildren(this.projectileGroup).forEach((projectile) => {
      if (!projectile?.active) return;
      this.animateSprite(projectile, time);

      if (projectile.isTornado) {
        this.updateInfernalTornado(projectile);
      }

      if (projectile.owner === "hero") {
        this.updateHeroProjectile(projectile);
      } else {
        const distance = Phaser.Math.Distance.Between(
          projectile.x,
          projectile.y,
          this.player.x,
          this.player.y
        );

        if (distance < (projectile.hazardRadius ?? 30)) {
          if (!projectile.isTornado) {
            projectile.destroy();
          }
          this.takeProjectileHit(projectile.damage ?? GAME_RULES.enemyHitDamage, time);
          return;
        }
      }

      if (time > projectile.expiresAt) {
        projectile.destroy();
      }
    });
  }

  updateInfernalTornado(tornado) {
    const bounds = this.getWalkableBounds();
    if (tornado.x < bounds.left + 40 || tornado.x > bounds.right - 40) {
      tornado.body.setVelocityX(-tornado.body.velocity.x);
    }
    if (tornado.y < bounds.top + 50 || tornado.y > bounds.bottom - 50) {
      tornado.body.setVelocityY(-tornado.body.velocity.y);
    }

    if (Math.random() < 0.012) {
      const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
      const speed = Phaser.Math.Between(70, 135);
      tornado.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    }
  }

  updateHeroProjectile(projectile) {
    this.getGroupChildren(this.enemyGroup).forEach((enemy) => {
      if (!projectile.active || !enemy?.isAlive || enemy.isReviving) return;

      const distance = Phaser.Math.Distance.Between(projectile.x, projectile.y, enemy.x, enemy.y);
      if (distance < (projectile.hazardRadius ?? enemy.displayWidth * 0.28 + 14)) {
        this.createNoxHitImpact(projectile.x, projectile.y, projectile.rotation);
        this.damageEnemy(enemy, projectile.damage ?? this.stats.attackDamage, {
          canBurn: true,
          canCrit: true,
          canSlow: true,
        });
        projectile.destroy();
      }
    });
  }

  attack() {
    const now = this.time.now;
    if (now - this.lastAttackAt < this.stats.attackCooldown) return;

    this.lastAttackAt = now;
    this.attackCounter += 1;
    if (this.stats.perfectStrike) {
      this.guaranteedCritCounter += 1;
    }
    const pointer = this.input.activePointer;
    const angle = Phaser.Math.Angle.Between(this.player.x, this.player.y, pointer.worldX, pointer.worldY);
    const hitX = this.player.x + Math.cos(angle) * 42;
    const hitY = this.player.y + Math.sin(angle) * 42;

    const slash = this.add.arc(hitX, hitY, 38, -50, 50, false, 0xb98cff, 0.4);
    slash.setRotation(angle);
    this.playHeroAnimation("attack", { loop: false, lockMs: 260 });
    this.tweens.add({
      targets: slash,
      alpha: 0,
      scale: 1.6,
      duration: 145,
      onComplete: () => slash.destroy(),
    });

    if (this.hasProjectileAttack) {
      this.fireHeroProjectile(angle);
    }

    this.getGroupChildren(this.enemyGroup).forEach((enemy) => {
      if (!enemy?.isAlive || enemy.isReviving) return;
      const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, enemy.x, enemy.y);
      if (distance <= this.stats.attackRange) {
        this.damageEnemy(enemy, this.stats.attackDamage, {
          canBurn: true,
          canCrit: true,
          canSlow: true,
        });
      }
    });

    if (this.stats.burningWave && this.attackCounter % 4 === 0) {
      this.castBurningWave();
    }
  }

  fireHeroProjectile(angle) {
    const isRiven = this.heroId === "riven";
    const isNox = this.heroId === "nox";
    const projectile = isRiven
      ? this.add
        .image(
          this.player.x + Math.cos(angle) * 34,
          this.player.y + Math.sin(angle) * 34,
          "rivenProjectile"
        )
        .setDisplaySize(48, 34)
        .setDepth(11)
        .setRotation(angle)
      : this.createNoxAnimatedEffect({
        prefix: "noxMagicBolt",
        strip: NOX_PROJECTILE_STRIPS.magicBolt,
        x: this.player.x + Math.cos(angle) * 34,
        y: this.player.y + Math.sin(angle) * 34,
        width: 58,
        height: 34,
        rotation: angle,
        depth: 11,
      });
    projectile.owner = "hero";
    projectile.damage = this.stats.attackDamage * (isNox && this.hasNoxVoidBarrage ? 1.08 : 1);
    projectile.expiresAt = this.time.now + (isNox ? 1150 : 950);
    this.projectileGroup.add(projectile);
    this.physics.add.existing(projectile);
    projectile.body.setVelocity(Math.cos(angle) * (isNox ? 500 : 430), Math.sin(angle) * (isNox ? 500 : 430));

    if (isNox && this.hasNoxVoidBarrage && this.attackCounter % 3 === 0) {
      const crit = this.createNoxAnimatedEffect({
        prefix: "noxArcaneOrb",
        strip: NOX_PROJECTILE_STRIPS.arcaneOrb,
        x: this.player.x + Math.cos(angle) * 30,
        y: this.player.y + Math.sin(angle) * 30,
        width: 66,
        height: 44,
        rotation: angle,
        depth: 12,
      });
      crit.owner = "hero";
      crit.damage = this.stats.attackDamage * 1.35;
      crit.expiresAt = this.time.now + 1050;
      this.projectileGroup.add(crit);
      this.physics.add.existing(crit);
      crit.body.setVelocity(Math.cos(angle) * 560, Math.sin(angle) * 560);
    }
  }

  castSkill(time) {
    if (time - this.lastSkillAt < this.stats.skillCooldown) return;
    this.lastSkillAt = time;

    if (this.heroId === "riven") {
      this.castRivenSkill();
      return;
    }

    this.castNoxSkill();
  }

  castNoxSkill() {
    const pointer = this.input.activePointer;
    const angle = Phaser.Math.Angle.Between(this.player.x, this.player.y, pointer.worldX, pointer.worldY);
    this.playHeroAnimation(this.hasNoxVoidBarrage ? "superAttack" : "skillAttack", {
      loop: false,
      lockMs: this.hasNoxVoidBarrage ? 620 : 460,
    });

    const burst = this.createNoxAnimatedEffect({
      prefix: this.hasNoxVoidBarrage ? "noxSuperBurst" : "noxLargeWave",
      strip: this.hasNoxVoidBarrage ? NOX_PROJECTILE_STRIPS.superBurst : NOX_PROJECTILE_STRIPS.largeWave,
      x: this.player.x + Math.cos(angle) * 72,
      y: this.player.y + Math.sin(angle) * 72,
      width: this.hasNoxVoidBarrage ? 126 : 104,
      height: this.hasNoxVoidBarrage ? 86 : 50,
      rotation: angle,
      depth: 12,
      selfAnimate: true,
    });
    this.tweens.add({
      targets: burst,
      x: burst.x + Math.cos(angle) * (this.hasNoxVoidBarrage ? 190 : 155),
      y: burst.y + Math.sin(angle) * (this.hasNoxVoidBarrage ? 190 : 155),
      alpha: 0,
      scaleX: 1.35,
      scaleY: 1.2,
      duration: this.hasNoxVoidBarrage ? 520 : 390,
      ease: "Cubic.easeOut",
      onComplete: () => burst.destroy(),
    });

    this.getGroupChildren(this.enemyGroup).forEach((enemy) => {
      if (!enemy?.isAlive || enemy.isReviving) return;
      const distance = Phaser.Math.Distance.Between(burst.x, burst.y, enemy.x, enemy.y);
      if (distance < 175) {
        this.damageEnemy(enemy, this.getSkillDamage(enemy, this.hasNoxVoidBarrage ? 1.95 : 1.55), {
          canBurn: true,
          canCrit: true,
          canSlow: true,
          isSkill: true,
        });
      }
    });

    const boom = this.createNoxAnimatedEffect({
      prefix: "noxHitImpact",
      strip: NOX_PROJECTILE_STRIPS.hitImpact,
      x: burst.x + Math.cos(angle) * 120,
      y: burst.y + Math.sin(angle) * 120,
      width: 86,
      height: 62,
      rotation: angle,
      depth: 11,
      selfAnimate: true,
    }).setAlpha(0.85);
    this.tweens.add({
      targets: boom,
      alpha: 0,
      scaleX: 1.55,
      scaleY: 1.45,
      duration: 360,
      ease: "Cubic.easeOut",
      onComplete: () => boom.destroy(),
    });

    if (this.hasNoxVoidBarrage) {
      [-14, 0, 14].forEach((spread, index) => {
        this.time.delayedCall(index * 70, () => {
          this.fireNoxShardProjectile(angle + Phaser.Math.DegToRad(spread));
        });
      });
    }
  }

  fireNoxShardProjectile(angle) {
    const projectile = this.createNoxAnimatedEffect({
      prefix: "noxCrystalShard",
      strip: NOX_PROJECTILE_STRIPS.crystalShard,
      x: this.player.x + Math.cos(angle) * 42,
      y: this.player.y + Math.sin(angle) * 42,
      width: 62,
      height: 36,
      rotation: angle,
      depth: 12,
    });
    projectile.owner = "hero";
    projectile.damage = this.stats.attackDamage * 1.15;
    projectile.expiresAt = this.time.now + 1250;
    projectile.hazardRadius = 42;
    this.projectileGroup.add(projectile);
    this.physics.add.existing(projectile);
    projectile.body.setVelocity(Math.cos(angle) * 460, Math.sin(angle) * 460);
  }

  createNoxAnimatedEffect({ prefix, strip, x, y, width, height, rotation = 0, depth = 11, selfAnimate = false }) {
    const sprite = this.add.image(x, y, `${prefix}0`).setDisplaySize(width, height).setDepth(depth).setRotation(rotation);
    sprite.frameKeys = Array.from({ length: strip.frames }, (_, index) => `${prefix}${index}`);
    sprite.animationFps = strip.fps;
    sprite.animationFrame = -1;
    sprite.animationLastFrameAt = 0;
    sprite.gameDisplayWidth = width;
    sprite.gameDisplayHeight = height;
    if (selfAnimate && strip.frames > 1) {
      let frame = 0;
      const timer = this.time.addEvent({
        delay: 1000 / strip.fps,
        loop: true,
        callback: () => {
          if (!sprite.active) {
            timer.remove(false);
            return;
          }
          frame = (frame + 1) % strip.frames;
          sprite.setTexture(sprite.frameKeys[frame]);
          sprite.setDisplaySize(width, height);
        },
      });
    }
    return sprite;
  }

  createNoxHitImpact(x, y, rotation = 0) {
    if (this.heroId !== "nox") return;
    const impact = this.createNoxAnimatedEffect({
      prefix: "noxHitImpact",
      strip: NOX_PROJECTILE_STRIPS.hitImpact,
      x,
      y,
      width: 58,
      height: 48,
      rotation,
      depth: 13,
      selfAnimate: true,
    });
    this.tweens.add({
      targets: impact,
      alpha: 0,
      scale: 1.25,
      duration: 240,
      onComplete: () => impact.destroy(),
    });
  }

  castRivenSkill() {
    const pointer = this.input.activePointer;
    const angle = Phaser.Math.Angle.Between(this.player.x, this.player.y, pointer.worldX, pointer.worldY);
    const wave = this.add
      .image(this.player.x + Math.cos(angle) * 55, this.player.y + Math.sin(angle) * 55, "rivenProjectile")
      .setDisplaySize(78, 46)
      .setRotation(angle)
      .setDepth(12)
      .setTint(0xff8b3d);

    this.tweens.add({
      targets: wave,
      x: wave.x + Math.cos(angle) * 190,
      y: wave.y + Math.sin(angle) * 190,
      alpha: 0,
      duration: 360,
      onComplete: () => wave.destroy(),
    });

    this.getGroupChildren(this.enemyGroup).forEach((enemy) => {
      if (!enemy?.isAlive || enemy.isReviving) return;
      const distance = Phaser.Math.Distance.Between(wave.x, wave.y, enemy.x, enemy.y);
      if (distance < 190) {
        this.damageEnemy(enemy, this.getSkillDamage(enemy, this.stats.burningWave ? 2.05 : 1.65), {
          canBurn: true,
          canCrit: true,
          canSlow: true,
          isSkill: true,
        });
      }
    });
  }

  getSkillDamage(enemy, multiplier) {
    const poisonBonus = this.stats.venomRitual && enemy?.isPoisoned ? 1.3 : 1;
    return this.stats.attackDamage * multiplier * poisonBonus;
  }

  castBurningWave() {
    const pointer = this.input.activePointer;
    const angle = Phaser.Math.Angle.Between(this.player.x, this.player.y, pointer.worldX, pointer.worldY);
    const wave = this.add
      .ellipse(this.player.x + Math.cos(angle) * 92, this.player.y + Math.sin(angle) * 92, 118, 34, 0xff7a2f, 0.42)
      .setRotation(angle)
      .setDepth(9);

    this.tweens.add({
      targets: wave,
      alpha: 0,
      scaleX: 1.55,
      scaleY: 1.45,
      duration: 360,
      ease: "Cubic.easeOut",
      onComplete: () => wave.destroy(),
    });

    this.getGroupChildren(this.enemyGroup).forEach((enemy) => {
      if (!enemy?.isAlive || enemy.isReviving) return;
      const distance = Phaser.Math.Distance.Between(wave.x, wave.y, enemy.x, enemy.y);
      if (distance < 145) {
        this.damageEnemy(enemy, this.stats.attackDamage * 0.65, {
          canBurn: true,
          canCrit: false,
          canSlow: false,
        });
        this.applyEnemyBurn(enemy);
      }
    });
  }

  roll(time) {
    if (this.challengeActive) {
      this.showFloatingText(this.player.x, this.player.y - 56, "NO DASH", "#ffcf6b", 14);
      return;
    }
    if (time - this.lastRollAt < this.stats.rollCooldown || this.isRolling) return;

    this.lastRollAt = time;
    this.isRolling = true;
    this.invulnerableUntil = time + this.stats.rollDuration + 120;
    this.player.setAlpha(0.55);
    this.playHeroAnimation("dash", { loop: false, lockMs: this.stats.rollDuration });
    if (this.heroId === "nox") {
      const pointer = this.input.activePointer;
      const angle = Phaser.Math.Angle.Between(this.player.x, this.player.y, pointer.worldX, pointer.worldY);
      const shadow = this.createNoxAnimatedEffect({
        prefix: "noxDashShadow",
        strip: NOX_PROJECTILE_STRIPS.dashShadow,
        x: this.player.x,
        y: this.player.y,
        width: 92,
        height: 44,
        rotation: angle,
        depth: 7,
        selfAnimate: true,
      }).setAlpha(0.62);
      this.tweens.add({
        targets: shadow,
        alpha: 0,
        scaleX: 1.25,
        duration: 260,
        onComplete: () => shadow.destroy(),
      });
    }
    if (this.stats.infernalDash) {
      this.createInfernalDashTrail();
    }

    this.time.delayedCall(this.stats.rollDuration, () => {
      this.isRolling = false;
      this.player.setAlpha(1);
    });
  }

  createInfernalDashTrail() {
    const trail = this.add
      .ellipse(this.player.x, this.player.y, 150, 46, 0xff6a22, 0.36)
      .setDepth(6);
    this.tweens.add({
      targets: trail,
      alpha: 0,
      scaleX: 1.25,
      scaleY: 1.2,
      duration: 2000,
      onComplete: () => trail.destroy(),
    });
    this.time.addEvent({
      delay: 250,
      repeat: 7,
      callback: () => {
        if (!trail.active) return;
        this.getGroupChildren(this.enemyGroup).forEach((enemy) => {
          if (!enemy?.isAlive || enemy.isReviving) return;
          const distance = Phaser.Math.Distance.Between(trail.x, trail.y, enemy.x, enemy.y);
          if (distance < 96) this.applyEnemyBurn(enemy);
        });
      },
    });
  }

  updateSpriteAnimations(time) {
    this.animateSprite(this.player, time);
    this.animateSprite(this.chestSprite, time);

    this.getGroupChildren(this.enemyGroup).forEach((enemy) => {
      if (enemy?.isAlive) this.animateSprite(enemy, time);
    });
  }

  playHeroAnimation(name, { loop = true, lockMs = 0 } = {}) {
    if (!this.player || this.player.animationState === name) return;

    const strip = this.heroStrips[name];
    const frameKeys = this.heroAnimationKeys[name];
    if (!strip || !frameKeys) return;

    this.player.animationState = name;
    this.player.frameKeys = frameKeys;
    this.player.animationFps = strip.fps;
    this.player.animationFrame = -1;
    this.player.animationStartedAt = this.time.now;
    this.player.loopAnimation = loop;
    this.player.setTexture(frameKeys[0]);
    this.player.setDisplaySize(this.player.gameDisplayWidth, this.player.gameDisplayHeight);

    if (lockMs > 0) {
      this.playerAnimationLockedUntil = this.time.now + lockMs;
    }
  }

  playEnemyAnimation(enemy, name, { loop = true, lockMs = 0 } = {}) {
    if (!enemy || enemy.animationState === name || !enemy.animationSet?.[name]) return;

    const strip = enemy.stripSet[name];
    enemy.animationState = name;
    enemy.frameKeys = enemy.type === "hellGolem" && name === "idle"
      ? [enemy.animationSet[name][0]]
      : enemy.animationSet[name];
    enemy.animationFps = enemy.type === "hellGolem" && name === "idle" ? 1 : strip.fps;
    enemy.animationFrame = -1;
    enemy.animationStartedAt = this.time.now;
    enemy.loopAnimation = loop;
    enemy.setTexture(enemy.frameKeys[0]);
    enemy.setDisplaySize(enemy.gameDisplayWidth, enemy.gameDisplayHeight);

    if (lockMs > 0) {
      enemy.animationLockedUntil = this.time.now + lockMs;
    }
  }

  tryBossProjectile(enemy, time) {
    const cooldown = enemy.phase === 3 ? 1350 : enemy.phase === 2 ? 1800 : 2300;
    if (time - (enemy.lastProjectileAt ?? 0) < cooldown) return;

    enemy.lastProjectileAt = time;
    this.playEnemyAnimation(enemy, "attack", { loop: false, lockMs: 520 });

    const baseAngle = Phaser.Math.Angle.Between(enemy.x, enemy.y, this.player.x, this.player.y);
    const spreads = enemy.phase === 3 ? [-16, 0, 16] : enemy.phase === 2 ? [-9, 9] : [0];
    spreads.forEach((spread) => this.fireBossProjectile(enemy, time, baseAngle + Phaser.Math.DegToRad(spread)));
  }

  fireBossProjectile(enemy, time, angle) {
    const projectile = this.add
      .image(enemy.x, enemy.y - 10, "skeletonBossProjectile")
      .setDisplaySize(enemy.phase >= 3 ? 48 : 42, enemy.phase >= 3 ? 48 : 42)
      .setDepth(11)
      .setRotation(angle);
    projectile.damage = GAME_RULES.enemyHitDamage;
    projectile.owner = "enemy";
    projectile.expiresAt = time + 2100;
    this.projectileGroup.add(projectile);
    this.physics.add.existing(projectile);
    const projectileSpeed = enemy.phase >= 2 ? 285 : 235;
    projectile.body.setVelocity(Math.cos(angle) * projectileSpeed, Math.sin(angle) * projectileSpeed);
  }

  animateSprite(sprite, time) {
    if (!sprite?.frameKeys || sprite.frameKeys.length === 0) return;

    const frameDuration = 1000 / sprite.animationFps;
    const elapsed = Math.max(0, time - (sprite.animationStartedAt ?? 0));
    const nextFrame = sprite.loopAnimation === false
      ? Math.min(sprite.frameKeys.length - 1, Math.floor(elapsed / frameDuration))
      : Math.floor(time / frameDuration) % sprite.frameKeys.length;

    if (sprite.animationFrame === nextFrame) return;

    sprite.animationFrame = nextFrame;
    sprite.setTexture(sprite.frameKeys[nextFrame]);
    sprite.setDisplaySize(sprite.gameDisplayWidth, sprite.gameDisplayHeight);
  }

  keepSpriteInsideRoom(sprite, halfWidth, halfHeight) {
    const bounds = this.getWalkableBounds();
    sprite.x = Phaser.Math.Clamp(sprite.x, bounds.left + halfWidth, bounds.right - halfWidth);
    sprite.y = Phaser.Math.Clamp(sprite.y, bounds.top + halfHeight, bounds.bottom - halfHeight);
  }

  getWalkableBounds() {
    const { room } = this.layout;

    return {
      left: room.x + 42,
      right: room.x + room.width - 42,
      top: room.y + 72,
      bottom: room.y + room.height - 54,
    };
  }

  resolveSpriteAgainstObstacles(sprite, halfWidth, halfHeight) {
    this.getGroupChildren(this.obstacleGroup).forEach((block) => {
      const bounds = {
        left: block.x - (block.collisionWidth ?? block.displayWidth) / 2,
        right: block.x + (block.collisionWidth ?? block.displayWidth) / 2,
        top: block.y - (block.collisionHeight ?? block.displayHeight) / 2,
        bottom: block.y + (block.collisionHeight ?? block.displayHeight) / 2,
      };
      const spriteBox = {
        left: sprite.x - halfWidth,
        right: sprite.x + halfWidth,
        top: sprite.y - halfHeight,
        bottom: sprite.y + halfHeight,
      };

      const isOverlapping =
        spriteBox.right > bounds.left &&
        spriteBox.left < bounds.right &&
        spriteBox.bottom > bounds.top &&
        spriteBox.top < bounds.bottom;

      if (!isOverlapping) return;

      const pushLeft = spriteBox.right - bounds.left;
      const pushRight = bounds.right - spriteBox.left;
      const pushUp = spriteBox.bottom - bounds.top;
      const pushDown = bounds.bottom - spriteBox.top;
      const smallestPush = Math.min(pushLeft, pushRight, pushUp, pushDown);

      if (smallestPush === pushLeft) sprite.x -= pushLeft;
      if (smallestPush === pushRight) sprite.x += pushRight;
      if (smallestPush === pushUp) sprite.y -= pushUp;
      if (smallestPush === pushDown) sprite.y += pushDown;
    });
  }

  checkPlayerInteractions() {
    this.getGroupChildren(this.enemyGroup).forEach((enemy) => {
      if (!enemy?.isAlive || enemy.isReviving) return;

      const distance = Phaser.Math.Distance.Between(
        this.player.x,
        this.player.y,
        enemy.x,
        enemy.y
      );

      if (distance < 42) {
        this.takeEnemyHit(this.player, enemy);
      }
    });

    this.getGroupChildren(this.pickupGroup).forEach((pickup) => {
      if (!pickup?.active) return;
      if (this.time.now < (pickup.pickupReadyAt ?? 0)) return;

      const distance = Phaser.Math.Distance.Between(
        this.player.x,
        this.player.y,
        pickup.x,
        pickup.y
      );

      if (distance < 32) {
        this.collectPickup(this.player, pickup);
      }
    });

    this.getGroupChildren(this.eventChoiceGroup).forEach((marker) => {
      if (!marker?.choice || marker.choiceResolved) return;
      const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, marker.x, marker.y);
      if (distance < (marker.choiceRadius ?? 68)) {
        this.resolveEventChoice(marker);
      }
    });

    if (this.chestSprite && !this.chestSprite.isOpened) {
      const chestDistance = Phaser.Math.Distance.Between(
        this.player.x,
        this.player.y,
        this.chestSprite.x,
        this.chestSprite.y
      );

      if (chestDistance < 58) {
        this.openChest();
      }
    }

    if (this.exitZone && this.isPlayerTouchingExit()) {
      this.tryLeaveFloor();
    }
  }

  isPlayerTouchingExit() {
    if (this.time.now < (this.exitReadyAt ?? 0)) return false;
    const bounds = this.exitZone.getBounds();

    return (
      this.player.x > bounds.left &&
      this.player.x < bounds.right &&
      this.player.y > bounds.top &&
      this.player.y < bounds.bottom
    );
  }

  damageEnemy(enemy, damage, {
    canBurn = false,
    canCrit = false,
    canSlow = false,
    isBurn = false,
    isPoison = false,
    isBleed = false,
    isSkill = false,
  } = {}) {
    if (!enemy?.isAlive || enemy.isReviving) return;

    let finalDamage = damage;
    if (!isBurn && !isPoison && !isBleed && this.stats.crystalBlood) {
      finalDamage *= 1 + Math.min(this.tempHearts, 5) * 0.05;
    }
    if (!isBurn && !isPoison && !isBleed && this.stats.huntersMark && !enemy.hasTakenHeroHit) {
      finalDamage *= 1.5;
      enemy.hasTakenHeroHit = true;
    }

    const forcedCrit = canCrit && this.stats.perfectStrike && this.guaranteedCritCounter >= 5;
    const isCritical = canCrit && (forcedCrit || Math.random() < this.stats.critChance);
    if (isCritical) {
      this.guaranteedCritCounter = 0;
      finalDamage *= this.stats.critMultiplier;
      if (this.stats.flameCrit && enemy.isBurning) {
        finalDamage *= 1.4;
        enemy.burnExpiresAt = Math.max(enemy.burnExpiresAt ?? 0, this.time.now + 3000);
      }
      if (this.stats.executionFang && enemy.health / enemy.maxHealth <= 0.3) {
        finalDamage *= 1.6;
        this.showFloatingText(enemy.x, enemy.y - enemy.displayHeight * 0.58, "EXECUTE", "#fff2df", 18);
      }
      if (this.stats.sharpRitual && this.time.now - this.lastSharpRitualAt > 1000) {
        this.lastSharpRitualAt = this.time.now;
        this.lastSkillAt = Math.max(0, this.lastSkillAt - 500);
      }
      if (this.stats.killerTempo) {
        this.applyKillerTempo();
      }
      if (this.stats.huntersMark && !enemy.hasBleedFromMark) {
        enemy.hasBleedFromMark = true;
        this.applyEnemyBleed(enemy);
      }
    }

    enemy.health -= finalDamage;
    this.showDamageNumber(enemy, finalDamage, { isCritical, isBurn });
    if (isCritical) {
      this.showFloatingText(enemy.x, enemy.y - enemy.displayHeight * 0.48, "CRIT!", "#ffd36b", 22);
    }
    if (isCritical || finalDamage >= this.stats.attackDamage * 1.5 || enemy.type === "boss" || enemy.type === "infernalBoss") {
      this.cameras.main.shake(isCritical ? 150 : 110, isCritical ? 0.0055 : 0.0035);
    }
    if (
      enemy.type === "infernalBoss" &&
      !enemy.phaseTwoTriggered &&
      enemy.health / enemy.maxHealth <= INFERNAL_PHASE_TWO_TRIGGER
    ) {
      this.triggerInfernalPhaseTwo(enemy);
      return;
    }

    enemy.setTint(0xff5f87);
    enemy.lastDamageAt = this.time.now;
    this.playEnemyAnimation(enemy, "damaged", { loop: false, lockMs: 220 });
    this.tweens.add({
      targets: enemy,
      scaleX: 1.08,
      scaleY: 1.08,
      yoyo: true,
      duration: 80,
    });

    if (enemy.health <= 0) {
      if (this.tryReviveEnemy(enemy)) {
        return;
      }

      this.defeatEnemy(enemy);
      return;
    }

    if (canSlow && this.stats.enemySlowOnHit > 0) {
      this.applyEnemySlow(enemy);
    }

    if (!isBurn && canBurn && this.stats.burnChance > 0 && Math.random() < this.stats.burnChance) {
      this.applyEnemyBurn(enemy);
    }

    if (
      !isBurn &&
      !isPoison &&
      !isBleed &&
      this.stats.poisonChance > 0 &&
      Math.random() < this.stats.poisonChance
    ) {
      this.applyEnemyPoison(enemy);
    }
  }

  applyEnemySlow(enemy) {
    enemy.slowAmount = Math.max(enemy.slowAmount ?? 0, this.stats.enemySlowOnHit);
    enemy.slowedUntil = Math.max(
      enemy.slowedUntil ?? 0,
      this.time.now + this.stats.enemySlowDuration
    );
    this.showFloatingText(enemy.x, enemy.y - enemy.displayHeight * 0.34, "SLOWED", "#78d8ff", 16);
  }

  applyEnemyBurn(enemy) {
    const extraDuration = enemy.isBurning && this.stats.hellfireCore ? 1000 : 0;
    enemy.isBurning = true;
    enemy.burnExpiresAt = Math.max(enemy.burnExpiresAt ?? 0, this.time.now + 3000 + extraDuration);
    const burnDamage = Math.max(0.08, this.stats.burnDamage || this.stats.attackDamage * 0.12) *
      (this.stats.burnDamageMultiplier ?? 1);
    enemy.setTint(0xff7a2f);
    this.showFloatingText(enemy.x, enemy.y - enemy.displayHeight * 0.36, "BURN", "#ff8a3d", 16);

    [1000, 2000, 3000, 4000].forEach((delay) => {
      this.time.delayedCall(delay, () => {
        if (!enemy?.active || !enemy.isAlive) return;
        if (this.time.now > (enemy.burnExpiresAt ?? 0)) {
          enemy.isBurning = false;
          return;
        }
        this.damageEnemy(enemy, burnDamage, { isBurn: true });
      });
    });
  }

  applyEnemyPoison(enemy) {
    enemy.isPoisoned = true;
    enemy.poisonExpiresAt = Math.max(enemy.poisonExpiresAt ?? 0, this.time.now + 4000);
    if (this.stats.blackVenom) {
      enemy.poisonDamageReduction = Math.max(enemy.poisonDamageReduction ?? 0, 0.2);
    }
    const poisonDamage = Math.max(0.06, this.stats.poisonDamage || this.stats.attackDamage * 0.08);
    enemy.setTint(0x66d36e);
    this.showFloatingText(enemy.x, enemy.y - enemy.displayHeight * 0.42, "POISON", "#75f08a", 16);

    [1000, 2000, 3000, 4000].forEach((delay) => {
      this.time.delayedCall(delay, () => {
        if (!enemy?.active || !enemy.isAlive) return;
        if (this.time.now > (enemy.poisonExpiresAt ?? 0)) {
          enemy.isPoisoned = false;
          return;
        }
        this.damageEnemy(enemy, poisonDamage, { isPoison: true });
      });
    });
  }

  applyEnemyBleed(enemy) {
    this.showFloatingText(enemy.x, enemy.y - enemy.displayHeight * 0.45, "BLEED", "#ff5f87", 16);
    [700, 1400, 2100].forEach((delay) => {
      this.time.delayedCall(delay, () => {
        if (!enemy?.active || !enemy.isAlive) return;
        this.damageEnemy(enemy, Math.max(0.08, this.stats.attackDamage * 0.1), { isBleed: true });
      });
    });
  }

  applyKillerTempo() {
    if (this.killerTempoResetAt && this.time.now < this.killerTempoResetAt) return;
    this.stats.attackCooldown *= 0.85;
    this.killerTempoResetAt = this.time.now + 2000;
    this.showFloatingText(this.player.x, this.player.y - 54, "KILLER TEMPO", "#ffd36b", 16);
    this.time.delayedCall(2000, () => {
      this.stats.attackCooldown /= 0.85;
      this.killerTempoResetAt = 0;
    });
  }

  applyQuickHandsTempo() {
    if (this.quickHandsTempoResetAt && this.time.now < this.quickHandsTempoResetAt) return;
    this.stats.attackCooldown *= 0.9;
    this.quickHandsTempoResetAt = this.time.now + 2000;
    this.showFloatingText(this.player.x, this.player.y - 52, "QUICK HANDS", "#f5f0ff", 15);
    this.time.delayedCall(2000, () => {
      this.stats.attackCooldown /= 0.9;
      this.quickHandsTempoResetAt = 0;
    });
  }

  createAshExplosion(enemy) {
    const blast = this.add.circle(enemy.x, enemy.y, 28, 0xff7a2f, 0.36).setDepth(8);
    this.tweens.add({
      targets: blast,
      radius: 112,
      alpha: 0,
      duration: 360,
      onComplete: () => blast.destroy(),
    });
    this.getGroupChildren(this.enemyGroup).forEach((target) => {
      if (!target?.isAlive || target === enemy || target.isReviving) return;
      const distance = Phaser.Math.Distance.Between(enemy.x, enemy.y, target.x, target.y);
      if (distance < 118) {
        this.damageEnemy(target, this.stats.attackDamage * 0.45, {});
        this.applyEnemyBurn(target);
      }
    });
  }

  spreadBurn(enemy) {
    const target = this.getGroupChildren(this.enemyGroup).find((item) => (
      item?.isAlive &&
      item !== enemy &&
      !item.isReviving &&
      Phaser.Math.Distance.Between(enemy.x, enemy.y, item.x, item.y) < 170
    ));
    if (target && Math.random() < 0.45) this.applyEnemyBurn(target);
  }

  createPoisonCloud(x, y) {
    const cloud = this.add.circle(x, y, 36, 0x54c96b, 0.28).setDepth(7);
    this.tweens.add({
      targets: cloud,
      radius: 105,
      alpha: 0,
      duration: 3000,
      onComplete: () => cloud.destroy(),
    });
    this.time.addEvent({
      delay: 420,
      repeat: 6,
      callback: () => {
        if (!cloud.active) return;
        this.getGroupChildren(this.enemyGroup).forEach((enemy) => {
          if (!enemy?.isAlive || enemy.isReviving) return;
          const distance = Phaser.Math.Distance.Between(cloud.x, cloud.y, enemy.x, enemy.y);
          if (distance < 105) this.applyEnemyPoison(enemy);
        });
      },
    });
  }

  spreadPoison(enemy) {
    const target = this.getGroupChildren(this.enemyGroup).find((item) => (
      item?.isAlive &&
      item !== enemy &&
      !item.isReviving &&
      Phaser.Math.Distance.Between(enemy.x, enemy.y, item.x, item.y) < 180
    ));
    if (target && Math.random() < 0.5) this.applyEnemyPoison(target);
  }

  showDamageNumber(enemy, amount, { isCritical = false, isBurn = false } = {}) {
    const value = amount >= 1 ? amount.toFixed(1).replace(".0", "") : amount.toFixed(2);
    const color = isBurn ? "#ff8a3d" : isCritical ? "#ffd36b" : "#f7efff";
    const size = isCritical ? 22 : 16;
    this.showFloatingText(
      enemy.x + Phaser.Math.Between(-10, 10),
      enemy.y - enemy.displayHeight * 0.36,
      value,
      color,
      size
    );
  }

  showFloatingText(x, y, text, color = "#f7efff", fontSize = 16) {
    const label = this.add
      .text(x, y, text, {
        fontFamily: "monospace",
        fontSize: `${fontSize}px`,
        color,
        stroke: "#08090e",
        strokeThickness: 4,
      })
      .setOrigin(0.5)
      .setDepth(80);

    this.tweens.add({
      targets: label,
      y: y - 42,
      alpha: 0,
      scaleX: 1.12,
      scaleY: 1.12,
      duration: 760,
      ease: "Cubic.easeOut",
      onComplete: () => label.destroy(),
    });
  }

  tryReviveEnemy(enemy) {
    if (!enemy.canRevive || enemy.hasRevived || !enemy.animationSet?.revive) return false;
    if (Math.random() > enemy.reviveChance) return false;

    enemy.hasRevived = true;
    enemy.isReviving = true;
    enemy.setVelocity(0, 0);
    enemy.body.enable = false;
    enemy.clearTint();
    enemy.setTint(enemy.type === "boss" ? 0xffc16b : 0xdad1ff);

    const reviveFrames = enemy.animationSet.revive.length;
    const reviveFps = enemy.stripSet.revive.fps;
    const reviveDuration = Math.ceil((reviveFrames / reviveFps) * 1000) + 120;
    this.playEnemyAnimation(enemy, "revive", { loop: false, lockMs: reviveDuration });

    this.time.delayedCall(reviveDuration, () => {
      if (!enemy?.active) return;

      enemy.isReviving = false;
      enemy.body.enable = true;
      enemy.health = enemy.maxHealth * (
        enemy.type === "boss" ? BOSS_REVIVE_HEALTH_RATIO : SKELETON_REVIVE_HEALTH_RATIO
      );
      enemy.aiMode = "idle";
      enemy.nextAiDecisionAt = this.time.now + 250;
      enemy.clearTint();
      enemy.setTint(enemy.baseTint || 0xffffff);
      this.playEnemyAnimation(enemy, "idle");

      if (enemy.type === "boss") {
        this.summonBossSkeletons(enemy);
      }
    });

    return true;
  }

  summonBossSkeletons(boss) {
    const commonCount = Phaser.Math.Between(2, 4);
    const guardCount = Phaser.Math.Between(0, 1);
    const summonTypes = [
      ...Array.from({ length: commonCount }, () => "skeleton"),
      ...Array.from({ length: guardCount }, () => "guard"),
    ];
    const bounds = this.getWalkableBounds();

    summonTypes.forEach((type, index) => {
      const angle = (Math.PI * 2 * index) / summonTypes.length;
      const distance = type === "guard" ? 110 : 82;
      const x = Phaser.Math.Clamp(
        boss.x + Math.cos(angle) * distance,
        bounds.left + 34,
        bounds.right - 34
      );
      const y = Phaser.Math.Clamp(
        boss.y + Math.sin(angle) * distance,
        bounds.top + 40,
        bounds.bottom - 40
      );
      const summoned = this.spawnEnemy({
        ...ENEMY_TYPES[type],
        type,
        x,
        y,
        canRevive: false,
        isSummoned: true,
      }, { summoned: true });
      summoned.setAlpha(0);
      this.tweens.add({
        targets: summoned,
        alpha: 1,
        duration: 260,
      });
    });
  }

  defeatEnemy(enemy) {
    enemy.isAlive = false;
    this.enemyKills += 1;
    this.aliveEnemies = Math.max(0, this.getAliveEnemyCount() - 1);
    enemy.setVelocity(0, 0);
    enemy.body.enable = false;
    const deathFrames = enemy.animationSet?.death?.length ?? 1;
    const deathFps = enemy.stripSet?.death?.fps ?? 8;
    const deathDuration = Math.ceil((deathFrames / deathFps) * 1000);
    this.playEnemyAnimation(enemy, "death", { loop: false, lockMs: 5000 });
    if (enemy.isBurning) {
      if (this.stats.ashExplosion) this.createAshExplosion(enemy);
      if (this.stats.infernoChain) this.spreadBurn(enemy);
    }
    if (enemy.isPoisoned) {
      if (this.stats.plagueCloud) this.createPoisonCloud(enemy.x, enemy.y);
      if (this.stats.spreadingPlague) this.spreadPoison(enemy);
      if (this.stats.toxicReward && Math.random() < 0.15) this.addGreenHearts(0.5);
    }
    if (enemy.type === "boss" || enemy.type === "infernalBoss") {
      this.spawnCurrency("gem", 1, enemy.x, enemy.y + 42);
      this.bossRewards.push("Gem x1");
      this.grantBossCard();
    }
    if (
      this.stats.blueHeartDropChance > 0 &&
      Math.random() < this.stats.blueHeartDropChance
    ) {
      this.spawnTempHeartPickup(enemy.x, enemy.y + 26, 0.5);
    }
    if (this.stats.blueHeartCards >= 5 && this.tempHearts > 0) {
      this.addTempHearts(0.5);
    }
    if (this.stats.quickHandsKillTempo) {
      this.applyQuickHandsTempo();
    }
    this.time.delayedCall(deathDuration + 40, () => {
      if (!enemy?.active || !enemy.frameKeys?.length) return;
      enemy.animationFrame = enemy.frameKeys.length - 1;
      enemy.setTexture(enemy.frameKeys[enemy.animationFrame]);
      enemy.setDisplaySize(enemy.gameDisplayWidth, enemy.gameDisplayHeight);
      enemy.frameKeys = null;
    });
    this.time.delayedCall(5000, () => enemy.destroy());
  }

  grantBossCard() {
    const availableCards = this.getEligibleTarotCards(BOSS_CARDS);
    if (availableCards.length === 0) return;
    const card = this.prepareCardForOffer(Phaser.Utils.Array.GetRandom(availableCards));
    this.applyChosenCard(card, "Boss");
    this.bossRewards.push(card.title);
    this.showFloatingText(this.player.x, this.player.y - 74, `BOSS CARD: ${card.title}`, "#ff5f5f", 18);
  }

  takeEnemyHit(player, enemy) {
    const now = this.time.now;
    if (now < this.invulnerableUntil || now - enemy.lastDamageAt < enemy.damageCooldown) return;

    enemy.lastDamageAt = now;
    const attackAnimation = enemy.animationSet?.superAttack && Math.random() < enemy.superAttackChance
      ? "superAttack"
      : "attack";
    this.playEnemyAnimation(enemy, attackAnimation, { loop: false, lockMs: attackAnimation === "superAttack" ? 520 : 360 });
    const contactDamage = (enemy.contactDamage ?? GAME_RULES.enemyHitDamage) *
      (enemy.poisonDamageReduction ? 1 - enemy.poisonDamageReduction : 1);
    this.applyPlayerDamage(contactDamage, enemy);
    this.invulnerableUntil = now + HIT_INVULNERABILITY_MS;
    this.cameras.main.shake(
      attackAnimation === "superAttack" ? 230 : 130,
      attackAnimation === "superAttack" ? 0.009 : 0.006
    );
    player.setTint(0xff6b8a);
    this.playHeroAnimation("damaged", { loop: false, lockMs: 320 });

    this.time.delayedCall(180, () => player.clearTint());

    if (this.hearts <= 0) {
      this.endGame(`Defeated by ${this.getEnemyName(enemy.type)}`);
    }
  }

  takeProjectileHit(damage, time) {
    if (time < this.invulnerableUntil) return;

    this.applyPlayerDamage(damage);
    this.invulnerableUntil = time + HIT_INVULNERABILITY_MS;
    this.cameras.main.shake(120, 0.005);
    this.player.setTint(0xff6b8a);
    this.playHeroAnimation("damaged", { loop: false, lockMs: 320 });
    this.time.delayedCall(180, () => this.player?.clearTint());

    if (this.hearts <= 0) {
      this.endGame("Defeated by projectile");
    }
  }

  collectPickup(player, pickup) {
    if (pickup.type === "potion") {
      this.healPlayer(1);
      pickup.destroy();
    }

    if (pickup.type === "currency") {
      if (pickup.currency === "gem") {
        this.gems += pickup.amount;
      } else {
        this.coins += pickup.amount;
      }
      pickup.destroy();
      this.updateUi();
    }

    if (pickup.type === "tarot") {
      pickup.destroy();
      this.offerTarotChoice({ advanceFloor: false });
    }

    if (pickup.type === "temp-heart") {
      this.addTempHearts(pickup.amount ?? 0.5);
      pickup.destroy();
    }

    if (pickup.type === "green-heart") {
      this.addGreenHearts(pickup.amount ?? 0.5);
      pickup.destroy();
    }
  }

  healPlayer(amount) {
    this.hearts = Math.min(this.maxHearts, this.hearts + amount);
    this.updateUi();
  }

  addTempHearts(amount) {
    this.tempHearts = Math.max(0, this.tempHearts + amount);
    this.updateUi();
  }

  addGreenHearts(amount) {
    this.greenHearts = Math.max(0, this.greenHearts + amount);
    this.updateUi();
  }

  createShieldEcho() {
    const blast = this.add.circle(this.player.x, this.player.y, 26, 0x78d8ff, 0.34).setDepth(8);
    this.tweens.add({
      targets: blast,
      radius: 125,
      alpha: 0,
      duration: 320,
      onComplete: () => blast.destroy(),
    });
    this.getGroupChildren(this.enemyGroup).forEach((enemy) => {
      if (!enemy?.isAlive || enemy.isReviving) return;
      const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, enemy.x, enemy.y);
      if (distance < 128) {
        this.damageEnemy(enemy, this.stats.attackDamage * 0.55, {});
        const pushAngle = Phaser.Math.Angle.Between(this.player.x, this.player.y, enemy.x, enemy.y);
        enemy.body?.setVelocity(Math.cos(pushAngle) * 150, Math.sin(pushAngle) * 150);
      }
    });
  }

  poisonAroundPlayer(sourceEnemy = null) {
    if (sourceEnemy?.isAlive) {
      this.applyEnemyPoison(sourceEnemy);
    }
    this.getGroupChildren(this.enemyGroup).forEach((enemy) => {
      if (!enemy?.isAlive || enemy.isReviving) return;
      const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, enemy.x, enemy.y);
      if (distance < 125) this.applyEnemyPoison(enemy);
    });
  }

  applyPlayerDamage(damage, sourceEnemy = null) {
    const incomingDamage = this.getIncomingDamage(damage);
    const tempAbsorb = Math.min(this.tempHearts, incomingDamage);
    this.tempHearts = Math.max(0, this.tempHearts - tempAbsorb);
    let remainingDamage = incomingDamage - tempAbsorb;
    if (tempAbsorb > 0 && this.stats.shieldEcho) {
      this.createShieldEcho();
    }
    const greenAbsorb = Math.min(this.greenHearts, remainingDamage);
    this.greenHearts = Math.max(0, this.greenHearts - greenAbsorb);
    remainingDamage -= greenAbsorb;
    if (greenAbsorb > 0) {
      this.poisonAroundPlayer(sourceEnemy);
    }
    this.hearts = Math.max(0, this.hearts - remainingDamage);
  }

  getIncomingDamage(damage) {
    const cappedDamage = Math.min(damage, GAME_RULES.enemyHitDamage);
    const azureReduction = this.stats.azureBarrier && this.tempHearts >= 1 ? 0.15 : 0;
    return Math.max(
      0.25,
      cappedDamage * (1 - Math.min((this.stats.damageReduction ?? 0) + azureReduction, 0.75))
    );
  }

  healToFull() {
    this.hearts = this.maxHearts;
    this.updateUi();
  }

  increaseMaxHearts(amount) {
    this.maxHearts += amount;
    this.hearts = Math.min(this.maxHearts, this.hearts + amount);
    this.updateUi();
  }

  decreaseMaxHearts(amount) {
    this.maxHearts = Math.max(1, this.maxHearts - amount);
    this.hearts = Math.min(this.hearts, this.maxHearts);
    this.updateUi();
  }

  enableProjectileAttack() {
    this.hasProjectileAttack = true;
    if (this.heroId === "nox") {
      this.hasNoxVoidBarrage = true;
      this.stats.skillCooldown *= 0.92;
    }
    this.updateUi();
  }

  tryLeaveFloor() {
    if (this.getAliveEnemyCount() > 0) return;
    if (this.challengeActive && !this.challengeCompleted) return;

    if (this.isBossRoom()) {
      this.winRun();
      return;
    }

    if (this.room < this.floorPlan.roomCount) {
      const nextRoom = this.room + 1;
      const toBoss = this.floor === GAME_RULES.floorsPerLevel && nextRoom === this.floorPlan.roomCount;
      this.enterTunnel({
        toBoss,
        onComplete: () => {
          this.room = nextRoom;
          this.startRoom();
        },
      });
      return;
    }

    this.enterTunnel({
      toBoss: false,
      onComplete: () => this.offerTarotChoice(),
    });
  }

  enterTunnel({ toBoss, onComplete }) {
    this.isTransitioning = true;
    this.tunnelHasTraveler = this.shouldSpawnTraveler(toBoss);
    this.pendingTunnelComplete = onComplete;
    this.clearFloorObjects();
    const tunnelTexture = this.getTunnelTexture(toBoss);

    this.roomBackground = this.add
      .image(this.scale.width / 2, this.scale.height / 2, tunnelTexture)
      .setDisplaySize(GAME_RULES.roomWidth, GAME_RULES.roomHeight)
      .setDepth(0);

    this.tunnelLabel = this.add
      .text(512, 72, toBoss ? "Boss tunnel" : "Tunnel", {
        fontFamily: "monospace",
        fontSize: "22px",
        color: "#f5f0ff",
      })
      .setOrigin(0.5)
      .setDepth(30);

    if (toBoss) {
      this.showBossWarning();
    }

    this.createTunnelPlayer();

    if (this.tunnelHasTraveler) {
      this.createTravelerShop();
      this.createTunnelExit();
      return;
    }

    this.tweens.add({
      targets: this.player,
      x: 870,
      duration: 1250,
      ease: "Sine.easeInOut",
      onComplete: () => this.finishTunnel(),
    });
  }

  showBossWarning() {
    const warning = this.add
      .text(512, 132, "WARNING: BOSS ROOM AHEAD", {
        fontFamily: "monospace",
        fontSize: "26px",
        color: "#ffcf6b",
        stroke: "#08090e",
        strokeThickness: 6,
      })
      .setOrigin(0.5)
      .setDepth(40)
      .setAlpha(0);

    this.cameras.main.shake(220, 0.004);
    this.tweens.add({
      targets: warning,
      alpha: 1,
      scaleX: 1.08,
      scaleY: 1.08,
      yoyo: true,
      repeat: 2,
      duration: 360,
      ease: "Sine.easeInOut",
    });
  }

  getTunnelTexture(toBoss) {
    if (this.tunnelHasTraveler) {
      return "travelerRoomBg";
    }

    if (this.levelId === "hell") {
      return toBoss ? "hellTunnelBoss" : "hellTunnel";
    }

    return toBoss ? "roomTunnelBoss" : "roomTunnel";
  }

  shouldSpawnTraveler(toBoss) {
    return toBoss;
  }

  createTunnelPlayer() {
    this.player = this.physics.add
      .image(150, 330, "heroWalk0")
      .setDisplaySize(64, 72)
      .setDepth(10);
    this.player.body.setSize(28, 34, true);
    this.player.frameKeys = this.heroAnimationKeys.walk;
    this.player.animationFps = this.heroStrips.walk.fps;
    this.player.animationFrame = -1;
    this.player.animationStartedAt = this.time.now;
    this.player.loopAnimation = true;
    this.player.gameDisplayWidth = 64;
    this.player.gameDisplayHeight = 72;
  }

  createTravelerShop() {
    this.purchasedShopCards = new Set();
    this.shopCards = [];
    this.shopCoinRerollCost = GAME_RULES.shopCoinRerollBaseCost;
    this.shopGemRerollUsed = false;
    const travelerKey = Phaser.Utils.Array.GetRandom(TRAVELER_KEYS);
    this.travelerCarpet = this.add
      .image(520, 388, "travelerCarpet")
      .setDisplaySize(210, 118)
      .setDepth(4);
    this.travelerSprite = this.add
      .image(520, 306, travelerKey)
      .setDisplaySize(96, 126)
      .setDepth(9);
    this.shopHint = this.add
      .text(520, 214, "Press F to trade", {
        fontFamily: "monospace",
        fontSize: "15px",
        color: "#f2eaff",
        backgroundColor: "rgba(15, 13, 24, 0.72)",
        padding: { x: 8, y: 5 },
      })
      .setOrigin(0.5)
      .setDepth(30);
  }

  createTunnelExit() {
    this.tunnelExitZone = this.add
      .rectangle(890, 332, 88, 250, 0x6b4bb5, 0.24)
      .setStrokeStyle(2, 0xa988ff, 0.9)
      .setDepth(6);
    this.tunnelExitLabel = this.add
      .text(890, 184, "NEXT", {
        fontFamily: "monospace",
        fontSize: "14px",
        color: "#d9ccff",
      })
      .setOrigin(0.5)
      .setDepth(30);
  }

  updateTunnel(time) {
    if (!this.tunnelHasTraveler) {
      this.updateSpriteAnimations(time);
      return;
    }

    if (!this.isShopOpen) {
      this.moveTunnelPlayer(time);
      this.checkTravelerInteraction();
      this.checkTunnelExit();
    }

    this.updateSpriteAnimations(time);
    this.updateUi();
  }

  moveTunnelPlayer(time) {
    const velocity = new Phaser.Math.Vector2(0, 0);

    if (this.keys.left.isDown) velocity.x -= 1;
    if (this.keys.right.isDown) velocity.x += 1;
    if (this.keys.up.isDown) velocity.y -= 1;
    if (this.keys.down.isDown) velocity.y += 1;

    velocity.normalize().scale(this.stats.speed);
    this.player.setVelocity(velocity.x, velocity.y);
    this.player.x = Phaser.Math.Clamp(this.player.x, 108, 906);
    this.player.y = Phaser.Math.Clamp(this.player.y, 220, 472);

    if (velocity.x !== 0) {
      this.player.setFlipX(velocity.x < 0);
    }

    if (velocity.lengthSq() > 0) {
      this.playHeroAnimation("walk");
    } else {
      this.playHeroAnimation("idle");
    }
  }

  checkTravelerInteraction() {
    if (!this.travelerSprite || !Phaser.Input.Keyboard.JustDown(this.keys.interact)) return;

    const distance = Phaser.Math.Distance.Between(
      this.player.x,
      this.player.y,
      this.travelerSprite.x,
      this.travelerSprite.y
    );

    if (distance > 96) return;

    this.openShop();
  }

  openShop() {
    if (this.isShopOpen) return;

    this.isShopOpen = true;
    this.player.setVelocity(0, 0);
    if (!this.shopCards.length) {
      this.shopCards = this.rollTravelerCards();
    }
    this.callbacks.onShopOffer?.(
      this.shopCards,
      (cardId) => this.buyShopCard(cardId),
      () => this.closeShop(),
      {
        rerollCoins: () => this.rerollShop("coin"),
        rerollGem: () => this.rerollShop("gem"),
        getState: () => ({
          coinCost: this.shopCoinRerollCost,
          gemCost: GAME_RULES.shopGemRerollCost,
          gemUsed: this.shopGemRerollUsed,
        }),
      }
    );
  }

  getTravelerCards() {
    return this.rollTravelerCards();
  }

  rollTravelerCards({ improved = false } = {}) {
    const heroSkill = HERO_SHOP_SKILLS[this.heroId] ?? HERO_SHOP_SKILLS.nox;
    const heroCard = this.prepareCardForOffer({
      ...heroSkill,
      theme: "hero",
      rarity: "hero",
      apply: (stats, scene) => scene.enableProjectileAttack(),
    });
    const pool = [
      ...SHOP_CARDS,
      {
        ...heroSkill,
        theme: "hero",
        rarity: "hero",
        apply: (stats, scene) => scene.enableProjectileAttack(),
      },
      ...this.getEligibleTarotCards(TAROT_CARDS),
    ].filter((card) => !this.purchasedShopCards.has(card.id));

    const cards = [heroCard];
    while (cards.length < 3 && pool.length > 0) {
      const card = this.pickWeightedTravelerCard(pool, cards, improved);
      if (!card) break;
      cards.push(this.prepareCardForOffer(card));
    }
    return cards;
  }

  pickWeightedTravelerCard(pool, selectedCards, improved = false) {
    const selectedIds = new Set(selectedCards.map((card) => card.id));
    const candidates = pool.filter((card) => !selectedIds.has(card.id));
    if (candidates.length === 0) return null;

    const rarityWeight = {
      common: improved ? 0.35 : 0.65,
      rare: improved ? 3.4 : 2.4,
      epic: improved ? 4.4 : 3.2,
      cursed: improved ? 3.2 : 2.1,
      hero: improved ? 4.8 : 3.8,
      boss: 0,
    };
    const weighted = candidates.map((card) => {
      const currentLevel = this.cardLevels[card.id] ?? 0;
      const levelBonus = currentLevel > 0 ? 2 + currentLevel * (improved ? 2.2 : 1.4) : 0;
      return {
        card,
        weight: (rarityWeight[card.rarity ?? "common"] ?? 1) + levelBonus,
      };
    });
    const totalWeight = weighted.reduce((sum, item) => sum + item.weight, 0);
    let roll = Math.random() * totalWeight;
    for (const item of weighted) {
      roll -= item.weight;
      if (roll <= 0) return item.card;
    }
    return weighted[weighted.length - 1]?.card ?? null;
  }

  rerollShop(currency) {
    if (!this.isShopOpen) return null;
    if (currency === "gem") {
      if (this.shopGemRerollUsed || this.gems < GAME_RULES.shopGemRerollCost) return null;
      this.gems -= GAME_RULES.shopGemRerollCost;
      this.shopGemRerollUsed = true;
      this.shopCards = this.rollTravelerCards({ improved: true });
      this.updateUi();
      return {
        cards: this.shopCards,
        state: {
          coinCost: this.shopCoinRerollCost,
          gemCost: GAME_RULES.shopGemRerollCost,
          gemUsed: this.shopGemRerollUsed,
        },
      };
    }

    if (this.coins < this.shopCoinRerollCost) return null;
    this.coins -= this.shopCoinRerollCost;
    this.shopCoinRerollCost += GAME_RULES.shopCoinRerollCostStep;
    this.shopCards = this.rollTravelerCards();
    this.updateUi();
    return {
      cards: this.shopCards,
      state: {
        coinCost: this.shopCoinRerollCost,
        gemCost: GAME_RULES.shopGemRerollCost,
        gemUsed: this.shopGemRerollUsed,
      },
    };
  }

  closeShop() {
    this.isShopOpen = false;
  }

  buyShopCard(cardId) {
    const card = this.shopCards.find((item) => item.id === cardId);
    if (!card || this.purchasedShopCards.has(cardId) || this.gems < GAME_RULES.shopCardCost) {
      return false;
    }

    this.gems -= GAME_RULES.shopCardCost;
    this.purchasedShopCards.add(cardId);
    this.applyChosenCard(card, "Traveler");
    this.updateUi();
    return true;
  }

  getEligibleTarotCards(sourceCards = TAROT_CARDS) {
    return sourceCards.filter((card) => {
      if (card.heroId && card.heroId !== this.heroId) return false;
      const currentLevel = this.cardLevels[card.id] ?? 0;
      const maxLevel = this.getCardMaxLevel(card);
      return currentLevel < maxLevel;
    });
  }

  getCardMaxLevel(card) {
    return Math.max(1, card.levels?.length ?? 3);
  }

  prepareCardForOffer(card) {
    const currentLevel = this.cardLevels[card.id] ?? 0;
    const maxLevel = this.getCardMaxLevel(card);
    const nextLevel = Math.min(currentLevel + 1, maxLevel);
    const nextLevelData = card.levels?.[nextLevel - 1];
    const previousLevelData = currentLevel > 0 ? card.levels?.[currentLevel - 1] : null;
    const displayTitle = nextLevelData?.title ?? (
      maxLevel > 1 ? `${card.title} ${this.toRoman(nextLevel)}` : card.title
    );
    const description = nextLevelData?.description ?? (
      currentLevel > 0 ? `Improved: ${card.description}` : card.description
    );

    return {
      ...card,
      baseTitle: card.title,
      title: displayTitle,
      description,
      previousDescription: previousLevelData?.description ?? (currentLevel > 0 ? card.description : null),
      level: nextLevel,
      currentLevel,
      maxLevel,
      isDuplicate: currentLevel > 0,
      rarity: card.rarity ?? "common",
      apply: nextLevelData?.apply ?? card.apply,
    };
  }

  applyChosenCard(card, source = "Tarot") {
    card.apply?.(this.stats, this);
    this.cardLevels[card.id] = Math.max(this.cardLevels[card.id] ?? 0, card.level ?? 1);
    this.applyCardSynergy(card);
    this.selectedCards.push({
      id: card.id,
      title: card.title,
      description: card.description,
      rarity: card.rarity,
      level: card.level,
      source,
    });
  }

  toRoman(value) {
    return ["", "I", "II", "III", "IV", "V"][value] ?? `${value}`;
  }

  applyCardSynergy(card) {
    if (!card?.build) return;
    const counterByBuild = {
      fire: "fireCards",
      blueHeart: "blueHeartCards",
      crit: "critCards",
      poison: "poisonCards",
    };
    const counter = counterByBuild[card.build];
    if (!counter) return;

    this.stats[counter] += 1;

    if (card.build === "fire") {
      if (this.stats.fireCards >= 3 && !this.stats.ashExplosion) {
        this.stats.ashExplosion = true;
        this.showFloatingText(this.player.x, this.player.y - 62, "ASH EXPLOSION", "#ff8a3d", 18);
      }
      if (this.stats.fireCards >= 5 && !this.stats.infernoChain) {
        this.stats.infernoChain = true;
        this.showFloatingText(this.player.x, this.player.y - 62, "INFERNO CHAIN", "#ff5f3d", 18);
      }
    }

    if (card.build === "blueHeart") {
      if (this.stats.blueHeartCards >= 3 && !this.stats.shieldPulse) {
        this.stats.shieldPulse = true;
        this.showFloatingText(this.player.x, this.player.y - 62, "SHIELD PULSE", "#78d8ff", 18);
      }
      if (this.stats.blueHeartCards >= 5 && !this.stats.azureBarrier) {
        this.stats.azureBarrier = true;
        this.showFloatingText(this.player.x, this.player.y - 62, "AZURE BARRIER", "#67bfff", 18);
      }
    }

    if (card.build === "crit") {
      if (this.stats.critCards >= 3 && !this.stats.killerTempo) {
        this.stats.killerTempo = true;
        this.showFloatingText(this.player.x, this.player.y - 62, "KILLER TEMPO", "#ffd36b", 18);
      }
      if (this.stats.critCards >= 5 && !this.stats.perfectStrike) {
        this.stats.perfectStrike = true;
        this.showFloatingText(this.player.x, this.player.y - 62, "PERFECT STRIKE", "#fff2df", 18);
      }
    }

    if (card.build === "poison") {
      if (this.stats.poisonCards >= 3 && !this.stats.spreadingPlague) {
        this.stats.spreadingPlague = true;
        this.showFloatingText(this.player.x, this.player.y - 62, "SPREADING PLAGUE", "#75f08a", 18);
      }
      if (this.stats.poisonCards >= 5 && !this.stats.blackVenom) {
        this.stats.blackVenom = true;
        this.showFloatingText(this.player.x, this.player.y - 62, "BLACK VENOM", "#55d16a", 18);
      }
    }
  }

  checkTunnelExit() {
    if (!this.tunnelExitZone) return;
    const bounds = this.tunnelExitZone.getBounds();
    const isTouching =
      this.player.x > bounds.left &&
      this.player.x < bounds.right &&
      this.player.y > bounds.top &&
      this.player.y < bounds.bottom;

    if (isTouching) {
      this.finishTunnel();
    }
  }

  finishTunnel() {
    this.isTransitioning = false;
    const onComplete = this.pendingTunnelComplete;
    this.pendingTunnelComplete = null;
    this.clearFloorObjects();
    onComplete?.();
  }

  offerTarotChoice({ advanceFloor = true } = {}) {
    this.isChoosingTarot = true;
    this.physics.pause();

    const cards = chooseTarotCards(this.getEligibleTarotCards(TAROT_CARDS))
      .map((card) => this.prepareCardForOffer(card));
    this.callbacks.onTarotOffer?.(cards, (cardId) => {
      const card = cards.find((item) => item.id === cardId);
      if (card) {
        this.applyChosenCard(card, "Tarot");
      }
      this.isChoosingTarot = false;
      this.physics.resume();

      if (advanceFloor) {
        this.floor += 1;
        this.room = 1;
        this.floorPlan = createFloorPlan(this.floor);
        this.startRoom();
      }
    });
  }

  drawUi() {
    this.uiText = this.add
      .text(22, 16, "", {
        fontFamily: "monospace",
        fontSize: "18px",
        color: "#f5f0ff",
      })
      .setDepth(30);

    this.helpText = this.add
      .text(22, 592, "WASD move   LMB attack   E skill   Shift dash   Clear room -> exit", {
        fontFamily: "monospace",
        fontSize: "15px",
        color: "#bdb5d9",
      })
      .setDepth(30);
  }

  updateUi() {
    if (!this.uiText) return;
    const aliveEnemies = this.getAliveEnemyCount();
    const activeBoss = this.getActiveBoss();
    const eventLabel = {
      award: "Award Room",
      challenge: "Challenge Room",
      cursed: "Cursed Room",
      rest: "Rest Room",
    }[this.layout?.roomType];
    const roomLabel = this.isBossRoom()
      ? "Boss"
      : (eventLabel ?? `Room ${this.room}/${this.floorPlan.roomCount}`);
    const levelLabel = this.levelId === "hell" ? "Hell" : "Crypt";
    const stageLabel = this.levelSequence.length > 1
      ? `Stage ${this.stageIndex + 1}/${this.levelSequence.length}  `
      : "";
    this.uiText.setText(
      `${stageLabel}${levelLabel} ${this.floor}/${GAME_RULES.floorsPerLevel}   ${roomLabel}   Enemies ${aliveEnemies}`
    );
    const nextStats = {
      floor: this.floor,
      levelId: this.levelId,
      heroId: this.heroId,
      stage: this.stageIndex + 1,
      stageCount: this.levelSequence.length,
      room: this.room,
      roomCount: this.floorPlan.roomCount,
      boss: Boolean(activeBoss),
      bossType: activeBoss?.type === "infernalBoss" ? "hell" : "skeleton",
      bossName: activeBoss?.type === "infernalBoss" ? "Infernal Boss" : "Skeleton King",
      bossHealth: activeBoss ? Math.max(0, Number(activeBoss.health.toFixed(2))) : 0,
      bossMaxHealth: activeBoss?.maxHealth ?? 0,
      hearts: this.hearts,
      maxHearts: this.maxHearts,
      tempHearts: this.tempHearts,
      greenHearts: this.greenHearts,
      coins: this.coins,
      gems: this.gems,
      enemies: aliveEnemies,
      speed: Math.round(this.stats.speed),
      attackCooldown: Math.round(this.stats.attackCooldown),
      damage: Number(this.stats.attackDamage.toFixed(2)),
      synergies: {
        fire: this.stats.fireCards,
        blueHeart: this.stats.blueHeartCards,
        crit: this.stats.critCards,
        poison: this.stats.poisonCards,
      },
      critChance: Math.round(this.stats.critChance * 100),
      damageReduction: Math.round((this.stats.damageReduction ?? 0) * 100),
      skillCooldown: Math.round(this.stats.skillCooldown),
      skillCooldownRemaining: Math.max(
        0,
        Math.ceil((this.stats.skillCooldown - (this.time.now - this.lastSkillAt)) / 100) / 10
      ),
      projectileAttack: this.hasProjectileAttack,
    };
    const statsKey = JSON.stringify(nextStats);

    if (this.lastStatsKey !== statsKey) {
      this.lastStatsKey = statsKey;
      this.callbacks.onStatsChange?.(nextStats);
    }
  }

  createRunSummary(extra = {}) {
    const level = LEVELS[this.levelId] ?? LEVELS.skeleton;
    const isCampaign = this.levelSequence.length > 1;
    const nextLevelId = isCampaign ? this.levelSequence[this.stageIndex + 1] : null;
    const nextLevel = nextLevelId ? LEVELS[nextLevelId] : null;

    return {
      levelId: this.levelId,
      levelTitle: level.title,
      heroId: this.heroId,
      floor: this.floor,
      room: this.room,
      roomCount: this.floorPlan.roomCount,
      killedEnemies: this.enemyKills,
      coins: this.coins,
      coinsGained: Math.max(0, this.coins - this.startingCoins),
      gems: this.gems,
      selectedCards: [...this.selectedCards],
      elapsedMs: Math.max(0, this.time.now - this.runStartedAt),
      bossRewards: [...this.bossRewards],
      unlockedContent: [],
      campaign: {
        active: isCampaign,
        stage: this.stageIndex + 1,
        stageCount: this.levelSequence.length,
        nextLevelId,
        nextLevelTitle: nextLevel?.title ?? null,
      },
      ...extra,
    };
  }

  winRun() {
    if (this.levelSequence.length > 1 && this.stageIndex < this.levelSequence.length - 1) {
      this.physics.pause();
      this.callbacks.onRunComplete?.(this.createRunSummary({
        outcome: "campaign-level",
        title: `Level ${this.stageIndex + 1}/${this.levelSequence.length} completed`,
        continueCampaign: () => this.advanceCampaignStage(),
      }));
      return;
    }

    this.isGameOver = true;
    this.physics.pause();
    this.callbacks.onRunComplete?.(this.createRunSummary({
      outcome: "victory",
      title: `${this.levelId === "hell" ? "Hell" : "Crypt"} cleared`,
    }));
    this.add
      .text(512, 300, `${this.levelId === "hell" ? "Hell" : "Crypt"} cleared`, {
        fontFamily: "monospace",
        fontSize: "42px",
        color: "#f4e8ff",
      })
      .setOrigin(0.5)
      .setDepth(40);
  }

  advanceCampaignStage() {
    if (this.stageIndex >= this.levelSequence.length - 1) return false;

    this.stageIndex += 1;
    this.levelId = this.levelSequence[this.stageIndex];
    this.floor = 1;
    this.room = 1;
    this.floorPlan = createFloorPlan(this.floor);
    this.clearFloorObjects();
    this.isChoosingTarot = false;
    this.isTransitioning = false;
    this.invulnerableUntil = this.time.now + 1100;
    this.startRoom();
    this.physics.resume();
    return true;
  }

  endGame(reason = "HP reached zero") {
    this.isGameOver = true;
    this.physics.pause();
    this.playHeroAnimation("death", { loop: false, lockMs: 900 });
    this.callbacks.onRunComplete?.(this.createRunSummary({
      outcome: "death",
      title: "Game Over",
      deathReason: reason,
    }));
    this.add
      .text(512, 300, "Game Over", {
        fontFamily: "monospace",
        fontSize: "46px",
        color: "#ff8ca5",
      })
      .setOrigin(0.5)
      .setDepth(40);
  }
}
