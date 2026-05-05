import { ENEMY_TYPES, GAME_RULES } from "./gameBalance";

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isTooClose(point, targets) {
  return targets.some((target) => {
    const distance = Math.hypot(point.x - target.x, point.y - target.y);
    return distance < target.radius;
  });
}

function pickEnemyType(floor, levelId = "skeleton") {
  if (levelId === "hell") {
    const roll = Math.random();
    if (floor >= 4 && roll > 0.86) return "hellTitan";
    if (floor >= 3 && roll > 0.72) return "hellTank";
    if (roll > 0.5) return "hellGolem";
    if (roll > 0.25) return "hellKiller";
    return "impLittle";
  }

  if (floor <= 1) return "skeleton";
  if (floor <= 3) return Math.random() > 0.65 ? "guard" : "skeleton";
  const roll = Math.random();
  if (roll > 0.84) return "dogStrong";
  if (roll > 0.62) return "dog";
  if (roll > 0.42) return "guard";
  return "skeleton";
}

const OBSTACLE_TYPES = [
  "columnBroken",
  "columnSkull",
  "column",
  "barrel",
  "box",
  "pileStones",
  "spike",
  "torch",
];

const HELL_OBSTACLE_TYPES = [
  "hellColumnFlag",
  "hellColumnSkull",
  "hellColumnSpikes",
  "hellColumnBigSkull",
  "hellFlag",
  "hellGates",
  "hellRock",
  "hellSpikes",
  "hellTorch",
  "hellTable",
];

export function createFloorLayout(floor) {
  return createRoomLayout({ floor, room: 1, isBossRoom: false });
}

export function createFloorPlan(floor) {
  const roomCount =
    floor === GAME_RULES.floorsPerLevel
      ? GAME_RULES.maxRoomsPerFloor
      : randomBetween(GAME_RULES.minRoomsPerFloor, GAME_RULES.maxRoomsPerFloor);

  return {
    floor,
    roomCount,
  };
}

export function createRoomLayout({ floor, room, isBossRoom, levelId = "skeleton" }) {
  const roomPadding = 48;
  const roomWidth = GAME_RULES.roomWidth;
  const roomHeight = GAME_RULES.roomHeight;
  const obstacleCount = isBossRoom ? 0 : randomBetween(4, 7);
  const enemyCount = isBossRoom ? 1 : Math.min(1 + floor + room + (levelId === "hell" ? 1 : 0), 7);
  const obstacleTypes = levelId === "hell" ? HELL_OBSTACLE_TYPES : OBSTACLE_TYPES;
  const spawnPoint = { x: 130, y: roomHeight / 2 };
  const exitPoint = { x: roomWidth - 85, y: roomHeight / 2 };
  const rewardPoint = { x: roomWidth / 2, y: roomHeight / 2 };
  const reservedPoints = [
    { ...spawnPoint, radius: 150 },
    { ...exitPoint, radius: 150 },
    { ...rewardPoint, radius: 110 },
  ];

  const obstacles = [];
  let obstacleAttempts = 0;

  while (obstacles.length < obstacleCount && obstacleAttempts < 120) {
    obstacleAttempts += 1;
    const obstacle = {
      id: `obstacle-${obstacles.length}`,
      type: obstacleTypes[randomBetween(0, obstacleTypes.length - 1)],
      x: randomBetween(roomPadding + 90, roomWidth - roomPadding - 90),
      y: randomBetween(roomPadding + 90, roomHeight - roomPadding - 90),
      width: randomBetween(54, 92),
      height: randomBetween(54, 96),
    };

    const tooCloseToReservedPoint = isTooClose(obstacle, reservedPoints);
    const tooCloseToOtherObstacle = isTooClose(
      obstacle,
      obstacles.map((item) => ({ ...item, radius: 92 }))
    );

    if (!tooCloseToReservedPoint && !tooCloseToOtherObstacle) {
      obstacles.push(obstacle);
    }
  }

  const enemies = Array.from({ length: enemyCount }, (_, index) => {
    const type = isBossRoom
      ? (levelId === "hell" ? "infernalBoss" : "boss")
      : pickEnemyType(floor, levelId);
    const enemyReservedPoints = [
      { ...spawnPoint, radius: 235 },
      { ...exitPoint, radius: 120 },
      ...obstacles.map((item) => ({ ...item, radius: 86 })),
    ];
    let point = {
      x: randomBetween(roomPadding + 120, roomWidth - roomPadding - 120),
      y: randomBetween(roomPadding + 120, roomHeight - roomPadding - 120),
    };
    let enemyAttempts = 0;

    while (isTooClose(point, enemyReservedPoints) && enemyAttempts < 80) {
      enemyAttempts += 1;
      point = {
        x: randomBetween(roomPadding + 120, roomWidth - roomPadding - 120),
        y: randomBetween(roomPadding + 120, roomHeight - roomPadding - 120),
      };
    }

    return {
      id: `enemy-${floor}-${index}`,
      type,
      x: point.x,
      y: point.y,
      ...ENEMY_TYPES[type],
    };
  });

  return {
    room: {
      x: 32,
      y: 20,
      width: roomWidth,
      height: roomHeight,
    },
    start: {
      x: spawnPoint.x,
      y: spawnPoint.y,
    },
    exit: {
      x: exitPoint.x,
      y: exitPoint.y,
      width: 64,
      height: 110,
    },
    obstacles,
    enemies,
  };
}

export function chooseTarotCards(allCards) {
  const shuffled = [...allCards].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 2);
}
