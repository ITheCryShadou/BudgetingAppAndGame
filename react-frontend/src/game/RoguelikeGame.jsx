import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { createRoguelikeGame } from "./createRoguelikeGame";
import { ARCHIVE_ENEMIES, ARCHIVE_HEROES } from "./archiveData";
import { HEROES, LEVELS } from "./gameBalance";
import heroIcon from "../assets/game/hero-icon.png";
import rivenIcon from "../assets/game/heroes/riven/Riven-Icon.png";
import tarotCardImage from "../assets/game/tarot-card.png";
import tarotCardHealImage from "../assets/game/tarot-card-heal.png";
import tarotCardHellImage from "../assets/game/tarot-card-hell.png";
import tarotCardHellBonusImage from "../assets/game/tarot-card-hell-bonus.png";
import tarotCardSkeletonImage from "../assets/game/tarot-card-skeleton.png";
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
};

const PLAYABLE_LEVEL_IDS = ["skeleton", "hell"];

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

function tarotBackground(card) {
  if (card.theme === "heart") return tarotCardHealImage;
  if (card.theme === "hell") return tarotCardHellImage;
  if (card.theme === "hellBonus") return tarotCardHellBonusImage;
  if (card.theme === "skeleton") return tarotCardSkeletonImage;
  return tarotCardImage;
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
  const fps = Math.max(1, animation.fps ?? 1);
  const frameRatio = naturalSize
    ? Math.max(0.45, Math.min(2.2, (naturalSize.width / frames) / naturalSize.height))
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
          width: `${frames * 100}%`,
          transform: `translateX(-${(frame * 100) / frames}%)`,
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
  const entries = tab === "heroes" ? ARCHIVE_HEROES : ARCHIVE_ENEMIES;
  const activeEntry = entries.find((entry) => entry.id === entryId) ?? entries[0];
  const activeAnimation = activeEntry.animations[animationIndex] ?? activeEntry.animations[0];

  function changeTab(nextTab) {
    const nextEntries = nextTab === "heroes" ? ARCHIVE_HEROES : ARCHIVE_ENEMIES;
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
      onShopOffer(cards, buyCard, closeShop) {
        setShopOffer({ cards, buyCard, closeShop, purchased: [] });
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
                    className={chosenTarotId === card.id ? "tarot-card choosing" : "tarot-card"}
                    onClick={() => chooseTarot(card.id)}
                    disabled={Boolean(chosenTarotId)}
                  >
                    <span
                      className="tarot-card-art"
                      style={{ backgroundImage: `url(${tarotBackground(card)})` }}
                    >
                      <strong>{card.title}</strong>
                      <span>{card.description}</span>
                    </span>
                    <span className="card-tooltip">
                      <strong>{card.title}</strong>
                      {card.description}
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
                        className={buyingCardId === card.id ? "shop-card buying" : "shop-card"}
                        disabled={!canBuy}
                        onClick={() => buyShopCard(card.id)}
                      >
                        <span
                          className="shop-card-art"
                          style={{ backgroundImage: `url(${SHOP_CARD_IMAGES[card.asset]})` }}
                        >
                          <strong>{card.title}</strong>
                          <span>{card.description}</span>
                          <em>
                            <img src={gemImage} alt="" aria-hidden="true" /> 1
                          </em>
                        </span>
                        <span className="card-tooltip">
                          <strong>{card.title}</strong>
                          {card.description}
                        </span>
                        {purchased && <span className="shop-card-state">Bought</span>}
                      </button>
                    );
                  })}
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
          <p>Armor: {stats?.damageReduction ?? 0}%</p>
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
            {stats?.synergies?.crit ?? 0} / P{stats?.synergies?.poison ?? 0}
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
