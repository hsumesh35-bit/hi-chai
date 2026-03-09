import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flower2, Heart, Sparkles, Smile } from "lucide-react";

const flowerThemes = [
  {
    name: "Rose Bloom",
    bg: "linear-gradient(135deg, #ffe4e6 0%, #fce7f3 45%, #f5d0fe 100%)",
    glow: "rgba(251, 113, 133, 0.35)",
    petal: "linear-gradient(180deg, #fb7185 0%, #ec4899 100%)",
    accent: "#be185d",
    emoji: "🌹",
    particles: ["🌸", "💖", "✨", "🌷"],
  },
  {
    name: "Lotus Light",
    bg: "linear-gradient(135deg, #ede9fe 0%, #fae8ff 45%, #fdf2f8 100%)",
    glow: "rgba(168, 85, 247, 0.28)",
    petal: "linear-gradient(180deg, #a855f7 0%, #d946ef 100%)",
    accent: "#7e22ce",
    emoji: "🪷",
    particles: ["🪷", "✨", "💜", "🌸"],
  },
  {
    name: "Sunflower Glow",
    bg: "linear-gradient(135deg, #fef3c7 0%, #fef9c3 45%, #ffedd5 100%)",
    glow: "rgba(250, 204, 21, 0.32)",
    petal: "linear-gradient(180deg, #facc15 0%, #f59e0b 100%)",
    accent: "#b45309",
    emoji: "🌻",
    particles: ["🌼", "☀️", "✨", "💛"],
  },
  {
    name: "Jasmine Dream",
    bg: "linear-gradient(135deg, #ecfeff 0%, #cffafe 45%, #f0fdf4 100%)",
    glow: "rgba(34, 211, 238, 0.25)",
    petal: "linear-gradient(180deg, #67e8f9 0%, #2dd4bf 100%)",
    accent: "#047857",
    emoji: "🤍",
    particles: ["🤍", "✨", "🌿", "🌸"],
  },
];

const kohliLines = [
  "Self-belief and hard work always shine.",
  "Stay strong, stay disciplined, and keep going.",
  "Champions rise again, no matter what.",
];

const yashLines = [
  "Walk with confidence. Your vibe matters.",
  "Power is quiet, calm, and fearless.",
  "Own your story with style and strength.",
];

const sisterLines = [
  "You are doing better than you think, Chai.",
  "Keep smiling, blooming, and trusting yourself.",
  "Your heart is soft, but your spirit is strong.",
];

const phases = [
  { key: "flower", duration: 4200 },
  { key: "greeting", duration: 4200 },
  { key: "motivation", duration: 5200 },
  { key: "bye", duration: 3000 },
];

const allImages = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
  "/image7.jpg",
];

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function FloatingParticle({ item, delay, x, size }) {
  return (
    <motion.div
      className="floating-particle"
      initial={{ opacity: 0, y: 40, x }}
      animate={{ opacity: [0, 1, 1, 0], y: -260, x: x + 20 }}
      transition={{ duration: 5.5, repeat: Infinity, delay, ease: "easeInOut" }}
      style={{ left: `${50 + x / 8}%`, bottom: "-20px", fontSize: size }}
    >
      {item}
    </motion.div>
  );
}

function FlowerBloom({ theme }) {
  const petals = Array.from({ length: 10 });

  return (
    <div className="flower-stage">
      <div className="flower-glow" style={{ background: theme.glow }} />

      {theme.particles.map((particle, i) => (
        <FloatingParticle
          key={`${theme.name}-${i}`}
          item={particle}
          delay={i * 0.7}
          x={-120 + i * 60}
          size={`${1.4 + (i % 3) * 0.4}rem`}
        />
      ))}

      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flower-wrap"
      >
        {petals.map((_, i) => {
          const angle = i * 36;
          return (
            <motion.div
              key={i}
              className="flower-petal"
              style={{
                transformOrigin: "bottom center",
                rotate: `${angle}deg`,
                background: theme.petal,
              }}
              initial={{ scaleY: 0.1, y: 20, opacity: 0.25 }}
              animate={{ scaleY: 1, y: -8, opacity: 1 }}
              transition={{ duration: 1.4, delay: i * 0.08, ease: "easeOut" }}
            />
          );
        })}

        <motion.div
          className="flower-center"
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.8 }}
        />

        <motion.div
          className="flower-stem"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 150, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.5 }}
        />

        <motion.div
          className="flower-leaf flower-leaf-left"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
        <motion.div
          className="flower-leaf flower-leaf-right"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        />
      </motion.div>

      <motion.div
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.4, duration: 0.8 }}
  className={`absolute left-1/2 -translate-x-1/2 bottom-16 text-center ${theme.accent}`}
>
        <div className="flower-title-main">
          {theme.emoji} {theme.name}
        </div>
        <div className="flower-title-sub">A little bloom for Chai</div>
      </motion.div>
    </div>
  );
}

function GreetingScreen({ theme }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="glass-card center-card"
    >
      <div className="icon-wrap">
        <Flower2 size={30} color={theme.accent} />
      </div>

      <h1 className="greeting-title" style={{ color: theme.accent }}>
        Hi Chai 🌸
      </h1>

      <p className="greeting-text">
        Eat well, be positive, stay healthy, my sweet sister. Take care.
      </p>

      <div className="made-with-love">
        <Heart size={16} fill="currentColor" />
        <span>Made with love for Chaithra</span>
      </div>
    </motion.div>
  );
}

function MotivationCard({ line, image, alt }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="motivation-card"
    >
      <img src={image} alt={alt} className="motivation-image" />
      <div className="motivation-overlay" />
      <div className="motivation-text-wrap">
        <p className="motivation-text">{line}</p>
      </div>
    </motion.div>
  );
}

function MotivationScreen({ sisterLine, line, image }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="glass-card motivation-shell"
    >
      <div className="motivation-header">
        <div className="motivation-badge">
          <Sparkles size={16} />
          <span>For Chai</span>
        </div>

        <p className="motivation-sister-line">{sisterLine}</p>
      </div>

      <MotivationCard line={line} image={image} alt="Motivation" />
    </motion.div>
  );
}

function ByeScreen({ onReplay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="glass-card center-card"
    >
      <div className="icon-wrap">
        <Smile size={30} color="#ec4899" />
      </div>

      <h2 className="bye-title">Bye Chai 💖</h2>
      <p className="bye-text">Take care and keep smiling.</p>
      <p className="bye-subtext">Your brother is always cheering for you.</p>

      <motion.button
        onClick={onReplay}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="replay-button"
      >
        Bloom again ✨
      </motion.button>
    </motion.div>
  );
}

export default function App() {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  const theme = useMemo(() => randomItem(flowerThemes), [cycle]);
  const motivationLine = useMemo(
  () => randomItem([...kohliLines, ...yashLines]),
  [cycle]
);
  const sisterLine = useMemo(() => randomItem(sisterLines), [cycle]);
  const motivationImage = useMemo(() => randomItem(allImages), [cycle]);

  useEffect(() => {
    const current = phases[phaseIndex];
    if (current.key === "bye") return undefined;

    const timer = setTimeout(() => {
      setPhaseIndex((prev) => prev + 1);
    }, current.duration);

    return () => clearTimeout(timer);
  }, [phaseIndex]);

  const startAgain = () => {
    setPhaseIndex(0);
    setCycle((prev) => prev + 1);
  };

  return (
    <div className="app-bg" style={{ background: theme.bg }}>
      <div className="top-radial" />
      <div className="top-glow" />

      <div className="main-shell">
        <AnimatePresence mode="wait">
          {phases[phaseIndex].key === "flower" && (
            <motion.div key={`flower-${cycle}`} className="screen-wrap">
              <FlowerBloom theme={theme} />
            </motion.div>
          )}

          {phases[phaseIndex].key === "greeting" && (
            <motion.div key={`greet-${cycle}`}>
              <GreetingScreen theme={theme} />
            </motion.div>
          )}

          {phases[phaseIndex].key === "motivation" && (
            <motion.div key={`motivation-${cycle}`} className="motivation-screen-wrap">
              <MotivationScreen
  sisterLine={sisterLine}
  line={motivationLine}
  image={motivationImage}
/>
            </motion.div>
          )}

          {phases[phaseIndex].key === "bye" && (
            <motion.div key={`bye-${cycle}`}>
              <ByeScreen onReplay={startAgain} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
