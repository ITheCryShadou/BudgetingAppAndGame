import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { createRoguelikeGame } from "./createRoguelikeGame";
import { ARCHIVE_ENEMIES, ARCHIVE_HEROES, ARCHIVE_TAROT } from "./archiveData";
import { HEROES, LEVELS } from "./gameBalance";
import heroIcon from "../assets/game/heroes/nox/Nox-Icon.png";
import rivenIcon from "../assets/game/heroes/riven/Riven-Icon.png";
import tarotCardImage from "../assets/game/tarot-card.png";
import tarotCardHealImage from "../assets/game/tarot-card-heal.png";
import tarotCardHellImage from "../assets/game/tarot-card-hell.png";
import tarotCardHellBonusImage from "../assets/game/tarot-card-hell-bonus.png";
import tarotCardSkeletonImage from "../assets/game/tarot-card-skeleton.png";
import tarotCardCursedImage from "../assets/game/tarot-card-cursed.png";
import tarotCardHeroImage from "../assets/game/tarot-card-hero.png";
import tarotCardBossImage from "../assets/game/tarot-card-boss.png";
import tarotCardFrostImage from "../assets/game/tarot-card-frost.png";
import tarotCardFrost1Image from "../assets/game/tarot-card-frost-1.png";
import tarotCardFrost2Image from "../assets/game/tarot-card-frost-2.png";
import tarotCardFrost3Image from "../assets/game/tarot-card-frost-3.png";
import tarotCardSwamp1Image from "../assets/game/tarot-card-swamp-1.png";
import tarotCardSwamp2Image from "../assets/game/tarot-card-swamp-2.png";
import tarotCardSwamp3Image from "../assets/game/tarot-card-swamp-3.png";
import tarotCardHeaven1Image from "../assets/game/tarot-card-heaven-1.png";
import tarotCardHeaven2Image from "../assets/game/tarot-card-heaven-2.png";
import tarotCardHeaven3Image from "../assets/game/tarot-card-heaven-3.png";
import tarotCardAqua1Image from "../assets/game/tarot-card-aqua-1.png";
import tarotCardAqua2Image from "../assets/game/tarot-card-aqua-2.png";
import tarotCardAqua3Image from "../assets/game/tarot-card-aqua-3.png";
import tarotTraveler1 from "../assets/game/tarot-traveler-1.png";
import tarotTraveler2 from "../assets/game/tarot-traveler-2.png";
import tarotTraveler3 from "../assets/game/tarot-traveler-3.png";
import travelerShopImage from "../assets/game/traveler/Traveler-Shop.png";
import heartFullImage from "../assets/game/heart-full.png";
import heartHalfImage from "../assets/game/heart-half.png";
import heartEmptyImage from "../assets/game/heart-empty.png";
import heartBlueFullImage from "../assets/game/heart-blue-full.png";
import heartBlueHalfImage from "../assets/game/heart-blue-half.png";
import heartGreenFullImage from "../assets/game/heart-green-full.png";
import heartGreenHalfImage from "../assets/game/heart-green-half.png";
import bossHotBarSkeleton from "../assets/game/boss-hotbar-skeleton.png";
import bossHotBarHell from "../assets/game/boss-hotbar-hell.png";
import coinImage from "../assets/game/coin.png";
import gemImage from "../assets/game/gem.png";
import "./RoguelikeGame.css";

const STORAGE_KEYS = {
  coins: "roguelike.wallet.coins",
  heroes: "roguelike.unlockedHeroes",
  hero: "roguelike.selectedHero",
  level: "roguelike.selectedLevel",
};

const SHOP_CARD_IMAGES = {
  traveler1: tarotTraveler1,
  traveler2: tarotTraveler2,
  traveler3: tarotTraveler3,
};

const HERO_IMAGES = {
  nox: heroIcon,
  riven: rivenIcon,
};

const BOSS_HOT_BARS = {
  skeleton: bossHotBarSkeleton,
  hell: bossHotBarHell,
  icy: bossHotBarSkeleton,
};

const TAROT_BG_VARIANTS = {
  frost: [tarotCardFrost1Image, tarotCardFrost2Image, tarotCardFrost3Image],
  poison: [tarotCardSwamp1Image, tarotCardSwamp2Image, tarotCardSwamp3Image],
  crit: [tarotCardHeaven1Image, tarotCardHeaven2Image, tarotCardHeaven3Image],
  blueHeart: [tarotCardAqua1Image, tarotCardAqua2Image, tarotCardAqua3Image],
};

const PLAYABLE_LEVEL_IDS = ["skeleton", "hell", "icy"];

function createCampaignSequence(length = 5) {
  return Array.from({ length }, () => (
    PLAYABLE_LEVEL_IDS[Math.floor(Math.random() * PLAYABLE_LEVEL_IDS.length)]
  ));
}

function readNumber(key, fallback) {
  const value = Number(window.localStorage.getItem(key));
  return Number.isFinite(value) ? value : fallback;
}

function readJson(key, fallback) {
  try {
    return JSON.parse(window.localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function heartImage(hearts, index) {
  const value = hearts - index;
  if (value >= 1) return heartFullImage;
  if (value >= 0.5) return heartHalfImage;
  return heartEmptyImage;
}

function tempHeartImage(hearts, index) {
  const value = hearts - index;
  return value >= 1 ? heartBlueFullImage : heartBlueHalfImage;
}

function greenHeartImage(hearts, index) {
  const value = hearts - index;
  return value >= 1 ? heartGreenFullImage : heartGreenHalfImage;
}

function stableTarotVariant(card, images) {
  const key = card.id ?? card.title ?? "";
  const hash = Array.from(key).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return images[hash % images.length];
}

function tarotBackground(card) {
  if (card.theme === "cursed" || card.rarity === "cursed") return tarotCardCursedImage;
  if (card.theme === "hero" || card.rarity === "hero") return tarotCardHeroImage;
  if (card.theme === "boss" || card.rarity === "boss") return tarotCardBossImage;
  if (card.build === "poison") return stableTarotVariant(card, TAROT_BG_VARIANTS.poison);
  if (card.build === "crit") return stableTarotVariant(card, TAROT_BG_VARIANTS.crit);
  if (card.build === "ice" || card.theme === "frost") return stableTarotVariant(card, TAROT_BG_VARIANTS.frost);
  if (card.build === "blueHeart") return stableTarotVariant(card, TAROT_BG_VARIANTS.blueHeart);
  if (card.theme === "heart") return tarotCardHealImage;
  if (card.theme === "hell") return tarotCardHellImage;
  if (card.theme === "hellBonus") return tarotCardHellBonusImage;
  if (card.theme === "skeleton") return tarotCardSkeletonImage;
  if (card.theme === "frost") return tarotCardFrostImage;
  return tarotCardImage;
}

function rarityLabel(card) {
  const value = card.rarity ?? "common";
  const labels = {
    common: "Common",
    rare: "Rare",
    epic: "Epic",
    cursed: "Cursed",
    hero: "Hero Card",
    boss: "Boss Card",
  };
  return labels[value] ?? "Common";
}

function CardDescription({ card }) {
  return (
    <span>
      {card.previousDescription && (
        <span className="card-upgrade-old">{card.previousDescription}</span>
      )}
      <span className={card.previousDescription ? "card-upgrade-new" : ""}>
        {card.description}
      </span>
    </span>
  );
}

function HeartRow({ hearts = 4, maxHearts = 4, tempHearts = 0, greenHearts = 0, className = "" }) {
  const tempHeartCount = Math.ceil(tempHearts);
  const greenHeartCount = Math.ceil(greenHearts);

  return (
    <div
      className={`heart-row ${className}`}
      aria-label={`HP ${hearts} hearts, blue ${tempHearts} hearts, green ${greenHearts} hearts`}
    >
      {Array.from({ length: maxHearts }, (_, index) => (
        <img key={`red-${index}`} src={heartImage(hearts, index)} alt="" aria-hidden="true" />
      ))}
      {Array.from({ length: tempHeartCount }, (_, index) => (
        <img
          key={`blue-${index}`}
          className="heart-temp"
          src={tempHeartImage(tempHearts, index)}
          alt=""
          aria-hidden="true"
        />
      ))}
      {Array.from({ length: greenHeartCount }, (_, index) => (
        <img
          key={`green-${index}`}
          className="heart-green"
          src={greenHeartImage(greenHearts, index)}
          alt=""
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function CurrencyPill({ icon, value, label }) {
  return (
    <span className="currency-pill" aria-label={`${label}: ${value}`}>
      <img src={icon} alt="" aria-hidden="true" />
      <strong>{value}</strong>
    </span>
  );
}

function SkillCooldown({ remaining = 0, cooldown = 4500 }) {
  const cooldownSeconds = Math.max(0.1, cooldown / 1000);
  const progress = Math.max(0, Math.min(1, 1 - remaining / cooldownSeconds));
  const ready = remaining <= 0;

  return (
    <div className={ready ? "skill-cooldown ready" : "skill-cooldown"}>
      <span>E</span>
      <strong>{ready ? "Ready" : `${remaining.toFixed(1)}s`}</strong>
      <em style={{ width: `${progress * 100}%` }} />
    </div>
  );
}

const ROOM_TYPE_META = {
  combat: { label: "Combat", short: "C", className: "combat" },
  award: { label: "Award room", short: "A", className: "award" },
  challenge: { label: "Challenge room", short: "T", className: "challenge" },
  cursed: { label: "Cursed room", short: "X", className: "cursed" },
  rest: { label: "Rest room", short: "R", className: "rest" },
  boss: { label: "Boss room", short: "B", className: "boss" },
};

function FloorMinimap({ stats }) {
  const roomCount = stats?.roomCount ?? 0;
  if (!roomCount) return null;

  const rooms = Array.from({ length: roomCount }, (_, index) => {
    const roomNumber = index + 1;
    const isBossRoom = stats?.floor === 5 && roomNumber === roomCount;
    const type = isBossRoom ? "boss" : (stats?.roomTypes?.[index] ?? "combat");
    return {
      roomNumber,
      type,
      meta: ROOM_TYPE_META[type] ?? ROOM_TYPE_META.combat,
      isCurrent: roomNumber === stats?.room,
      isVisited: roomNumber < (stats?.room ?? 1),
    };
  });

  return (
    <section className="floor-minimap" aria-label="Floor mini-map">
      <div className="floor-minimap-header">
        <span>Floor map</span>
        <strong>{stats?.floor ?? 1}/5</strong>
      </div>
      <div className="floor-minimap-track">
        {rooms.map((room, index) => (
          <div key={room.roomNumber} className="floor-minimap-node-wrap">
            <span
              className={[
                "floor-minimap-node",
                room.meta.className,
                room.isCurrent ? "current" : "",
                room.isVisited ? "visited" : "",
              ].filter(Boolean).join(" ")}
              title={`${room.roomNumber}. ${room.meta.label}`}
              aria-label={`${room.roomNumber}. ${room.meta.label}${room.isCurrent ? ", current" : ""}`}
            >
              {room.meta.short}
            </span>
            {index < rooms.length - 1 && <em aria-hidden="true" />}
          </div>
        ))}
      </div>
      <div className="floor-minimap-legend">
        {Object.entries(ROOM_TYPE_META).map(([type, meta]) => (
          <span key={type}>
            <i className={meta.className} />
            {meta.label}
          </span>
        ))}
      </div>
    </section>
  );
}

function BossHealthBar({ stats }) {
  const ratio = stats.bossMaxHealth > 0
    ? Math.max(0, Math.min(1, stats.bossHealth / stats.bossMaxHealth))
    : 0;
  const [shownRatio, setShownRatio] = useState(0);
  const bossKey = `${stats.levelId}-${stats.bossType}-${stats.floor}`;
  const lastBossKey = useRef(null);

  useEffect(() => {
    if (lastBossKey.current !== bossKey) {
      lastBossKey.current = bossKey;
      setShownRatio(0);
      const timer = window.setTimeout(() => setShownRatio(ratio), 80);
      return () => window.clearTimeout(timer);
    }

    setShownRatio(ratio);
    return undefined;
  }, [bossKey, ratio]);

  if (ratio <= 0) return null;

  return (
    <div className="boss-health-bar" aria-label={`${stats.bossName} HP`}>
      <div className="boss-health-track">
        <span style={{ width: `${shownRatio * 100}%` }} />
      </div>
      <img src={BOSS_HOT_BARS[stats.bossType] ?? bossHotBarSkeleton} alt="" aria-hidden="true" />
      <strong>{stats.bossName}</strong>
      <em>
        {Math.ceil(stats.bossHealth)}/{stats.bossMaxHealth}
      </em>
    </div>
  );
}

function formatRunTime(ms = 0) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function ResultCards({ cards = [] }) {
  if (cards.length === 0) {
    return <span className="result-empty">No cards selected</span>;
  }

  return (
    <div className="result-card-list">
      {cards.map((card, index) => (
        <span key={`${card.id}-${index}`}>
          <strong>{card.title}</strong>
          <em>{card.source}</em>
        </span>
      ))}
    </div>
  );
}

function DeathScreen({ result, heroImage, onRestart, onMainMenu }) {
  return (
    <div className="result-overlay">
      <section className="result-panel death-panel">
        <div className="result-hero">
          <img src={heroImage} alt="" />
        </div>
        <div className="result-content">
          <p className="result-kicker">Run ended</p>
          <h2>Death</h2>
          <div className="result-grid">
            <span>Hero<strong>{HEROES[result.heroId]?.name ?? result.heroId}</strong></span>
            <span>Level<strong>{result.levelTitle}</strong></span>
            <span>Floor<strong>{result.floor}/5</strong></span>
            <span>Room<strong>{result.room}/{result.roomCount}</strong></span>
            <span>Enemies killed<strong>{result.killedEnemies}</strong></span>
            <span>Coins gained<strong>{result.coinsGained}</strong></span>
            <span>Gems gained<strong>{result.gems}</strong></span>
            <span>Death reason<strong>{result.deathReason}</strong></span>
          </div>
          <div className="result-section">
            <h3>Selected cards</h3>
            <ResultCards cards={result.selectedCards} />
          </div>
          <div className="result-actions">
            <button type="button" onClick={onRestart}>Restart</button>
            <button type="button" onClick={onMainMenu}>Main menu</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function VictoryScreen({ result, onContinueCampaign, onEndRun, onMainMenu }) {
  const isCampaignStep = result.outcome === "campaign-level";
  const rewards = [
    `${result.coinsGained} coins`,
    `${result.gems} gems`,
  ];

  return (
    <div className="result-overlay">
      <section className="result-panel victory-panel">
        <div className="result-content wide">
          <p className="result-kicker">{isCampaignStep ? result.title : "Level cleared"}</p>
          <h2>Victory</h2>
          <div className="result-grid">
            <span>Completed level<strong>{result.levelTitle}</strong></span>
            <span>Time<strong>{formatRunTime(result.elapsedMs)}</strong></span>
            <span>Rewards<strong>{rewards.join(" / ")}</strong></span>
            <span>Boss reward<strong>{result.bossRewards?.join(", ") || "None"}</strong></span>
            <span>Unlocked content<strong>{result.unlockedContent?.join(", ") || "None yet"}</strong></span>
            <span>Next campaign level<strong>{result.campaign?.nextLevelTitle || "None"}</strong></span>
          </div>
          <div className="result-section">
            <h3>Selected cards</h3>
            <ResultCards cards={result.selectedCards} />
          </div>
          <div className="result-actions">
            {isCampaignStep ? (
              <>
                <button type="button" onClick={onContinueCampaign}>Continue campaign</button>
                <button type="button" onClick={onEndRun}>End run and save rewards</button>
              </>
            ) : (
              <button type="button" onClick={onMainMenu}>Main menu</button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function ArchiveAnimatedSprite({ animation }) {
  const [naturalSize, setNaturalSize] = useState(null);
  const [frame, setFrame] = useState(0);
  const frames = Math.max(1, animation.frames ?? 1);
  const sheetFrames = Math.max(frames, animation.sheetFrames ?? frames);
  const fps = Math.max(1, animation.fps ?? 1);
  const frameRatio = naturalSize
    ? Math.max(0.45, Math.min(2.2, (naturalSize.width / sheetFrames) / naturalSize.height))
    : 1;

  useEffect(() => {
    setFrame(0);
    if (frames <= 1) return undefined;

    const timer = window.setInterval(() => {
      setFrame((value) => (value + 1) % frames);
    }, 1000 / fps);

    return () => window.clearInterval(timer);
  }, [animation.image, fps, frames]);

  return (
    <div
      key={animation.image}
      className="archive-animated-sprite"
      style={{
        "--frames": frames,
        aspectRatio: frameRatio,
      }}
    >
      <img
        src={animation.image}
        alt=""
        aria-hidden="true"
        style={{
          width: `${sheetFrames * 100}%`,
          transform: `translateX(-${(frame * 100) / sheetFrames}%)`,
        }}
        onLoad={(event) => {
          setNaturalSize({
            width: event.currentTarget.naturalWidth,
            height: event.currentTarget.naturalHeight,
          });
        }}
      />
    </div>
  );
}

function ArchiveOverlay({
  tab,
  entryId,
  animationIndex,
  onTabChange,
  onEntryChange,
  onAnimationChange,
  onClose,
}) {
  const entries = tab === "heroes"
    ? ARCHIVE_HEROES
    : tab === "tarot"
      ? ARCHIVE_TAROT
      : ARCHIVE_ENEMIES;
  const activeEntry = entries.find((entry) => entry.id === entryId) ?? entries[0];
  const activeAnimation = activeEntry.animations[animationIndex] ?? activeEntry.animations[0];

  function changeTab(nextTab) {
    const nextEntries = nextTab === "heroes"
      ? ARCHIVE_HEROES
      : nextTab === "tarot"
        ? ARCHIVE_TAROT
        : ARCHIVE_ENEMIES;
    onTabChange(nextTab);
    onEntryChange(nextEntries[0].id);
    onAnimationChange(0);
  }

  function changeEntry(nextEntryId) {
    onEntryChange(nextEntryId);
    onAnimationChange(0);
  }

  return (
    <div className="archive-overlay">
      <section className="archive-panel">
        <header className="archive-header">
          <div>
            <p className="menu-kicker">Game archive</p>
            <h2>Archive</h2>
          </div>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </header>

        <div className="archive-tabs">
          <button
            type="button"
            className={tab === "heroes" ? "active" : ""}
            onClick={() => changeTab("heroes")}
          >
            Heroes
          </button>
          <button
            type="button"
            className={tab === "enemies" ? "active" : ""}
            onClick={() => changeTab("enemies")}
          >
            Enemies
          </button>
          <button
            type="button"
            className={tab === "tarot" ? "active" : ""}
            onClick={() => changeTab("tarot")}
          >
            Tarot
          </button>
        </div>

        <div className="archive-layout">
          <nav className="archive-list" aria-label="Archive entries">
            {entries.map((entry) => (
              <button
                key={entry.id}
                type="button"
                className={activeEntry.id === entry.id ? "archive-entry active" : "archive-entry"}
                onClick={() => changeEntry(entry.id)}
              >
                <img src={entry.icon} alt="" aria-hidden="true" />
                <span>
                  <strong>{entry.name}</strong>
                  <em>{entry.type}</em>
                </span>
              </button>
            ))}
          </nav>

          <article className="archive-detail">
            <div className="archive-profile">
              <div className="archive-icon-frame">
                <img src={activeEntry.icon} alt="" />
              </div>
              <div>
                <p className="menu-kicker">{activeEntry.type}</p>
                <h3>{activeEntry.name}</h3>
                <p>{activeEntry.description}</p>
              </div>
            </div>

            <div className="archive-main-preview">
              <div className="archive-preview-frame">
                <ArchiveAnimatedSprite animation={activeAnimation} />
              </div>
              <div className="archive-preview-info">
                <span>Animation</span>
                <strong>{activeAnimation.label}</strong>
              </div>
            </div>

            <div className="archive-animation-list">
              {activeEntry.animations.map((animation, index) => (
                <button
                  key={animation.label}
                  type="button"
                  className={activeAnimation.label === animation.label ? "active" : ""}
                  onClick={() => onAnimationChange(index)}
                >
                  <img src={animation.image} alt="" aria-hidden="true" />
                  <span>{animation.label}</span>
                </button>
              ))}
            </div>

            <div className="archive-info-grid">
              <section>
                <h4>Stats</h4>
                <div className="archive-stat-grid">
                  {activeEntry.stats.map((item) => (
                    <span key={item.label}>
                      {item.label}
                      <strong>{item.value}</strong>
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h4>Attacks</h4>
                <ul className="archive-attack-list">
                  {activeEntry.attacks.map((attack) => (
                    <li key={attack}>{attack}</li>
                  ))}
                </ul>
              </section>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

function RoguelikeGame() {
  const navigate = useNavigate();
  const gameHostRef = useRef(null);
  const gameRef = useRef(null);
  const [screen, setScreen] = useState("menu");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [archiveTab, setArchiveTab] = useState("heroes");
  const [archiveEntryId, setArchiveEntryId] = useState("nox");
  const [archiveAnimationIndex, setArchiveAnimationIndex] = useState(0);
  const [tarotOffer, setTarotOffer] = useState(null);
  const [shopOffer, setShopOffer] = useState(null);
  const [runResult, setRunResult] = useState(null);
  const [runSeed, setRunSeed] = useState(0);
  const [chosenTarotId, setChosenTarotId] = useState(null);
  const [buyingCardId, setBuyingCardId] = useState(null);
  const [stats, setStats] = useState(null);
  const [walletCoins, setWalletCoins] = useState(() => readNumber(STORAGE_KEYS.coins, 0));
  const [unlockedHeroes, setUnlockedHeroes] = useState(() => {
    const saved = readJson(STORAGE_KEYS.heroes, ["nox"]);
    return saved.includes("nox") ? saved : ["nox"];
  });
  const [selectedHero, setSelectedHero] = useState(
    () => window.localStorage.getItem(STORAGE_KEYS.hero) || "nox"
  );
  const [selectedLevel, setSelectedLevel] = useState(
    () => window.localStorage.getItem(STORAGE_KEYS.level) || "skeleton"
  );

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  useEffect(() => {
    if (screen !== "playing" || !gameHostRef.current || gameRef.current) return;

    gameRef.current = createRoguelikeGame(gameHostRef.current, {
      heroId: selectedHero,
      levelId: selectedLevel === "campaign" ? "skeleton" : selectedLevel,
      levelSequence: selectedLevel === "campaign" ? createCampaignSequence() : [selectedLevel],
      startingCoins: walletCoins,
      onTarotOffer(cards, chooseCard) {
        setTarotOffer({ cards, chooseCard });
      },
      onStatsChange(nextStats) {
        setStats(nextStats);
      },
      onShopOffer(cards, buyCard, closeShop, rerollApi) {
        setShopOffer({
          cards,
          buyCard,
          closeShop,
          rerollApi,
          rerollState: rerollApi?.getState?.() ?? { coinCost: 10, gemCost: 1, gemUsed: false },
          purchased: [],
        });
      },
      onRunComplete(result) {
        setRunResult(result);
      },
    });

    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, [screen, selectedHero, selectedLevel, walletCoins, runSeed]);

  useEffect(() => {
    const scene = gameRef.current?.scene?.getScene?.("RoguelikeScene");

    if (!scene || tarotOffer || shopOffer || runResult) return;

    if (settingsOpen) {
      scene.scene.pause();
    } else {
      scene.scene.resume();
    }
  }, [settingsOpen, tarotOffer, shopOffer, runResult]);

  useEffect(() => {
    function handlePauseKey(event) {
      if (event.key !== "Escape" || screen !== "playing" || tarotOffer || shopOffer || runResult) return;
      event.preventDefault();
      setSettingsOpen((open) => !open);
    }

    window.addEventListener("keydown", handlePauseKey);
    return () => window.removeEventListener("keydown", handlePauseKey);
  }, [screen, tarotOffer, shopOffer, runResult]);

  function chooseTarot(cardId) {
    if (!tarotOffer || chosenTarotId) return;
    setChosenTarotId(cardId);
    window.setTimeout(() => {
      tarotOffer.chooseCard(cardId);
      setTarotOffer(null);
      setChosenTarotId(null);
    }, 420);
  }

  function buyShopCard(cardId) {
    if (!shopOffer || shopOffer.purchased.includes(cardId) || buyingCardId) return;

    const bought = shopOffer.buyCard(cardId);
    if (bought) {
      setBuyingCardId(cardId);
      setShopOffer((offer) => ({
        ...offer,
        purchased: [...offer.purchased, cardId],
      }));
      window.setTimeout(() => setBuyingCardId(null), 520);
    }
  }

  function rerollShop(currency) {
    if (!shopOffer) return;
    const result = currency === "gem"
      ? shopOffer.rerollApi?.rerollGem?.()
      : shopOffer.rerollApi?.rerollCoins?.();
    if (!result) return;
    setShopOffer((offer) => ({
      ...offer,
      cards: result.cards,
      rerollState: result.state,
    }));
  }

  function closeShop() {
    shopOffer?.closeShop();
    setShopOffer(null);
  }

  function startGame() {
    setStats(null);
    setTarotOffer(null);
    setShopOffer(null);
    setRunResult(null);
    setChosenTarotId(null);
    setBuyingCardId(null);
    setSettingsOpen(false);
    setRunSeed((value) => value + 1);
    setScreen("playing");
  }

  function saveRunRewards(result) {
    const nextCoins = result?.coins ?? walletCoins;
    setWalletCoins(nextCoins);
    window.localStorage.setItem(STORAGE_KEYS.coins, String(nextCoins));
  }

  function finishRun(result, { saveRewards = true } = {}) {
    if (saveRewards) {
      saveRunRewards(result);
    }
    setTarotOffer(null);
    setShopOffer(null);
    setRunResult(null);
    setChosenTarotId(null);
    setBuyingCardId(null);
    setSettingsOpen(false);
    gameRef.current?.destroy(true);
    gameRef.current = null;
    setScreen("menu");
  }

  function restartRun() {
    setTarotOffer(null);
    setShopOffer(null);
    setRunResult(null);
    setChosenTarotId(null);
    setBuyingCardId(null);
    setSettingsOpen(false);
    setStats(null);
    gameRef.current?.destroy(true);
    gameRef.current = null;
    setRunSeed((value) => value + 1);
    setScreen("playing");
  }

  function continueCampaign() {
    runResult?.continueCampaign?.();
    setRunResult(null);
  }

  function selectHero(heroId) {
    if (!unlockedHeroes.includes(heroId)) return;
    setSelectedHero(heroId);
    window.localStorage.setItem(STORAGE_KEYS.hero, heroId);
  }

  function buyHero(heroId) {
    const hero = HEROES[heroId];
    if (!hero || unlockedHeroes.includes(heroId) || walletCoins < hero.price) return;

    const nextCoins = walletCoins - hero.price;
    const nextHeroes = [...unlockedHeroes, heroId];
    setWalletCoins(nextCoins);
    setUnlockedHeroes(nextHeroes);
    setSelectedHero(heroId);
    window.localStorage.setItem(STORAGE_KEYS.coins, String(nextCoins));
    window.localStorage.setItem(STORAGE_KEYS.heroes, JSON.stringify(nextHeroes));
    window.localStorage.setItem(STORAGE_KEYS.hero, heroId);
  }

  function selectLevel(levelId) {
    setSelectedLevel(levelId);
    window.localStorage.setItem(STORAGE_KEYS.level, levelId);
  }

  function exitToMain() {
    gameRef.current?.destroy(true);
    gameRef.current = null;
    setRunResult(null);
    setChosenTarotId(null);
    setBuyingCardId(null);
    navigate("/main");
  }

  if (screen === "menu") {
    return (
      <div className="game-menu">
        <div className="menu-hero-wrap">
          <img src={HERO_IMAGES[selectedHero]} alt="" className="menu-hero-sprite" />
        </div>

        <section className="menu-panel">
          <p className="menu-kicker">FinVue dungeon</p>
          <h1>Roguelike</h1>
          <div className="menu-wallet">
            <CurrencyPill icon={coinImage} value={walletCoins} label="Coins" />
            <span>{LEVELS[selectedLevel].title}</span>
          </div>
          <div className="menu-section">
            <h2>Level</h2>
            <div className="menu-choice-grid">
              {Object.values(LEVELS).map((level) => (
                <button
                  key={level.id}
                  type="button"
                  className={selectedLevel === level.id ? "menu-choice active" : "menu-choice"}
                  onClick={() => selectLevel(level.id)}
                >
                  <strong>{level.title}</strong>
                  <span>
                    {level.id === "campaign"
                      ? "5 random levels in one run"
                      : level.id === "hell"
                        ? "Lava rooms, tougher pacing"
                        : level.id === "icy"
                          ? "Frost rooms, traps, winter magic"
                          : "Classic skeleton run"}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="menu-section">
            <h2>Heroes</h2>
            <div className="hero-shop-grid">
              {Object.values(HEROES).map((hero) => {
                const unlocked = unlockedHeroes.includes(hero.id);
                const selected = selectedHero === hero.id;

                return (
                  <button
                    key={hero.id}
                    type="button"
                    className={selected ? "hero-shop-card active" : "hero-shop-card"}
                    onClick={() => (unlocked ? selectHero(hero.id) : buyHero(hero.id))}
                    disabled={!unlocked && walletCoins < hero.price}
                  >
                    <img src={HERO_IMAGES[hero.id]} alt="" />
                    <strong>{hero.name}</strong>
                    <span>{hero.description}</span>
                    <em>
                      {unlocked ? (selected ? "Selected" : "Select") : `${hero.price} coins`}
                    </em>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="menu-actions">
            <button type="button" onClick={startGame}>
              Play
            </button>
            <button type="button" onClick={() => setSettingsOpen(true)}>
              Settings
            </button>
            <button type="button" onClick={() => setArchiveOpen(true)}>
              Archive
            </button>
            <button type="button" onClick={exitToMain}>
              Exit
            </button>
          </div>
        </section>

        {settingsOpen && (
          <div className="settings-overlay">
            <div className="settings-panel">
              <h2>Settings</h2>
              <p>Controls: WASD, LMB, E, Shift.</p>
              <p>Audio and key rebinding can be added next.</p>
              <button type="button" onClick={() => setSettingsOpen(false)}>
                Close
              </button>
            </div>
          </div>
        )}

        {archiveOpen && (
          <ArchiveOverlay
            tab={archiveTab}
            entryId={archiveEntryId}
            animationIndex={archiveAnimationIndex}
            onTabChange={setArchiveTab}
            onEntryChange={setArchiveEntryId}
            onAnimationChange={setArchiveAnimationIndex}
            onClose={() => setArchiveOpen(false)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="roguelike-shell">
      <button
        type="button"
        className="game-settings-button"
        onClick={() => setSettingsOpen(true)}
      >
        Settings
      </button>

      <section className="roguelike-stage">
        <div ref={gameHostRef} className="roguelike-canvas" />

        {stats && (
          <div className="game-hud">
            <HeartRow
              hearts={stats.hearts}
              maxHearts={stats.maxHearts}
              tempHearts={stats.tempHearts ?? 0}
              greenHearts={stats.greenHearts ?? 0}
            />
            <div className="game-hud-currency">
              <CurrencyPill icon={coinImage} value={stats.coins ?? 0} label="Coins" />
              <CurrencyPill icon={gemImage} value={stats.gems ?? 0} label="Gems" />
            </div>
            <SkillCooldown
              remaining={stats.skillCooldownRemaining ?? 0}
              cooldown={stats.skillCooldown ?? 4500}
            />
          </div>
        )}

        {stats?.boss && stats.bossHealth > 0 && <BossHealthBar stats={stats} />}

        {!stats && !tarotOffer && !shopOffer && (
          <div className="game-loading">
            <span>Loading dungeon...</span>
          </div>
        )}

        {tarotOffer && (
          <div className="tarot-overlay">
            <div className="tarot-panel">
              <p className="tarot-kicker">Floor cleared</p>
              <h2>Choose one tarot card</h2>
              <div className="tarot-grid">
                {tarotOffer.cards.map((card) => (
                  <button
                    key={card.id}
                    type="button"
                    className={[
                      "tarot-card",
                      `rarity-${card.rarity ?? "common"}`,
                      card.isDuplicate ? "duplicate" : "",
                      chosenTarotId === card.id ? "choosing" : "",
                    ].filter(Boolean).join(" ")}
                    onClick={() => chooseTarot(card.id)}
                    disabled={Boolean(chosenTarotId)}
                  >
                    <span
                      className="tarot-card-art"
                      style={{ backgroundImage: `url(${tarotBackground(card)})` }}
                    >
                      <em className="card-rarity">{rarityLabel(card)}</em>
                      <strong>{card.title}</strong>
                      <CardDescription card={card} />
                      {card.isDuplicate && <small>Upgrade available</small>}
                    </span>
                    <span className="card-tooltip">
                      <strong>{card.title}</strong>
                      <em>{rarityLabel(card)}</em>
                      <CardDescription card={card} />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {shopOffer && (
          <div className="shop-overlay">
            <div className="shop-panel">
              <div className="shop-traveler">
                <img src={travelerShopImage} alt="" />
              </div>
              <div className="shop-content">
                <div className="shop-heading">
                  <p className="tarot-kicker">Traveler shop</p>
                  <h2>Choose a tarot</h2>
                  <CurrencyPill icon={gemImage} value={stats?.gems ?? 0} label="Gems" />
                </div>
                <div className="shop-card-grid">
                  {shopOffer.cards.map((card) => {
                    const purchased = shopOffer.purchased.includes(card.id);
                    const canBuy = (stats?.gems ?? 0) >= 1 && !purchased;

                    return (
                      <button
                        key={card.id}
                        type="button"
                        className={[
                          "shop-card",
                          `rarity-${card.rarity ?? "common"}`,
                          card.isDuplicate ? "duplicate" : "",
                          buyingCardId === card.id ? "buying" : "",
                        ].filter(Boolean).join(" ")}
                        disabled={!canBuy}
                        onClick={() => buyShopCard(card.id)}
                      >
                        <span
                          className="shop-card-art"
                          style={{ backgroundImage: `url(${card.theme === "hero" ? tarotBackground(card) : SHOP_CARD_IMAGES[card.asset]})` }}
                        >
                          <em className="card-rarity">{rarityLabel(card)}</em>
                          <strong>{card.title}</strong>
                          <CardDescription card={card} />
                          <em className="shop-card-cost">
                            <img src={gemImage} alt="" aria-hidden="true" /> 1
                          </em>
                        </span>
                        <span className="card-tooltip">
                          <strong>{card.title}</strong>
                          <em>{rarityLabel(card)}</em>
                          <CardDescription card={card} />
                        </span>
                        {purchased && <span className="shop-card-state">Bought</span>}
                      </button>
                    );
                  })}
                </div>
                <div className="shop-reroll-row">
                  <button
                    type="button"
                    className="shop-reroll"
                    disabled={(stats?.coins ?? 0) < (shopOffer.rerollState?.coinCost ?? 10)}
                    onClick={() => rerollShop("coin")}
                  >
                    Reroll <img src={coinImage} alt="" aria-hidden="true" /> {shopOffer.rerollState?.coinCost ?? 10}
                  </button>
                  <button
                    type="button"
                    className="shop-reroll improved"
                    disabled={shopOffer.rerollState?.gemUsed || (stats?.gems ?? 0) < (shopOffer.rerollState?.gemCost ?? 1)}
                    onClick={() => rerollShop("gem")}
                  >
                    Rare reroll <img src={gemImage} alt="" aria-hidden="true" /> {shopOffer.rerollState?.gemCost ?? 1}
                  </button>
                </div>
                <button type="button" className="shop-close" onClick={closeShop}>
                  Leave
                </button>
              </div>
            </div>
          </div>
        )}

        {runResult?.outcome === "death" && (
          <DeathScreen
            result={runResult}
            heroImage={HERO_IMAGES[runResult.heroId] ?? heroIcon}
            onRestart={restartRun}
            onMainMenu={() => finishRun(runResult, { saveRewards: false })}
          />
        )}

        {(runResult?.outcome === "victory" || runResult?.outcome === "campaign-level") && (
          <VictoryScreen
            result={runResult}
            onContinueCampaign={continueCampaign}
            onEndRun={() => finishRun(runResult, { saveRewards: true })}
            onMainMenu={() => finishRun(runResult, { saveRewards: true })}
          />
        )}
      </section>

      <aside className="roguelike-panel">
        <h1>Roguelike</h1>
        {stats && <FloorMinimap stats={stats} />}
        <div className="stat-list">
          <p>Floor: {stats?.floor ?? 1}/5</p>
          <p>
            Room:{" "}
            {stats?.boss
              ? "Boss"
              : `${stats?.room ?? 1}/${stats?.roomCount ?? 3}`}
          </p>
          <HeartRow
            hearts={stats?.hearts ?? 4}
            maxHearts={stats?.maxHearts ?? 4}
            tempHearts={stats?.tempHearts ?? 0}
            greenHearts={stats?.greenHearts ?? 0}
          />
          <div className="panel-currency">
            <CurrencyPill icon={coinImage} value={stats?.coins ?? 0} label="Coins" />
            <CurrencyPill icon={gemImage} value={stats?.gems ?? 0} label="Gems" />
          </div>
          <p>Enemies: {stats?.enemies ?? 0}</p>
          <p>Speed: {stats?.speed ?? 210}</p>
          <p>Damage: {stats?.damage ?? 1}</p>
          <p>Crit: {stats?.critChance ?? 5}%</p>
          <p>Dodge: {stats?.dodgeChance ?? 0}%</p>
          <p>Attack cd: {stats?.attackCooldown ?? 420}ms</p>
          <p>
            Skill E:{" "}
            {(stats?.skillCooldownRemaining ?? 0) <= 0
              ? "Ready"
              : `${stats?.skillCooldownRemaining}s`}
          </p>
          <p>Projectile: {stats?.projectileAttack ? "yes" : "no"}</p>
          <p>
            Builds: F{stats?.synergies?.fire ?? 0} / B{stats?.synergies?.blueHeart ?? 0} / C
            {stats?.synergies?.crit ?? 0} / P{stats?.synergies?.poison ?? 0} / I{stats?.synergies?.ice ?? 0}
          </p>
        </div>
      </aside>

      {settingsOpen && (
        <div className="settings-overlay">
          <div className="settings-panel">
            <h2>Settings</h2>
            <p>Game is paused. Press Esc to resume.</p>
            <div className="settings-actions">
              <button type="button" onClick={() => setSettingsOpen(false)}>
                Resume
              </button>
              <button type="button" onClick={exitToMain}>
                Exit to main page
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoguelikeGame;
