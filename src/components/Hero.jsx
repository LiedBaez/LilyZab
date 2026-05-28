import { motion } from 'framer-motion';
import { NAMES, META } from '../data/config.js';

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        className="font-sans text-xs uppercase tracking-[0.4em] text-rose-medium/80"
      >
        Una historia de {META.yearsTogether} años
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="font-display mt-6 text-5xl leading-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl"
      >
        {NAMES.ella}
        <span className="mx-4 inline-block">❤️</span>
        {NAMES.el}
      </motion.h1>

      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.7 }}
        className="font-serif mt-10 max-w-2xl text-lg italic text-ink/80 sm:text-xl md:text-2xl"
      >
        “Siempre habrá una manera de pertenecer,
        <br className="hidden sm:block" /> y ya te pertenezco.”
        <footer className="font-sans mt-3 text-xs uppercase tracking-[0.3em] text-ink/50">
          — {NAMES.apodo}, 2024
        </footer>
      </motion.blockquote>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.2 }}
        className="font-sans mt-12 text-sm text-ink/60"
      >
        Desde el 1 de agosto de 2019 — {META.metInGame}
      </motion.p>

    </section>
  );
}
