import { useMemo } from 'react';
import { motion } from 'framer-motion';

const SHAPES = ['🩷', '💗', '🌸', '🌷', '✿'];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FloatingHearts({ count = 22 }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
        left: rand(0, 100),
        size: rand(14, 30),
        duration: rand(18, 38),
        delay: rand(0, 20),
        sway: rand(-25, 25),
        opacity: rand(0.35, 0.7),
      })),
    [count]
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {items.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: '110vh', x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: '-15vh',
            x: [0, p.sway, -p.sway, 0],
            rotate: [0, 90, 180, 360],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            filter: 'drop-shadow(0 2px 4px rgba(249,168,212,0.25))',
          }}
        >
          {p.shape}
        </motion.span>
      ))}
    </div>
  );
}
