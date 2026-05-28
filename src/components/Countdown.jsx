import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TARGET_DATE } from '../data/config.js';

function diff(target) {
  const ms = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  return { ms, days, hours, minutes, seconds };
}

function pad(n) {
  return String(n).padStart(2, '0');
}

function Cell({ label, value }) {
  return (
    <div className="paper flex min-w-[5.5rem] flex-col items-center justify-center px-4 py-5 sm:min-w-[7rem] sm:px-6 sm:py-7">
      <span className="font-display text-4xl text-ink sm:text-6xl">
        {pad(value)}
      </span>
      <span className="font-sans mt-2 text-[10px] uppercase tracking-[0.3em] text-ink/55 sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [t, setT] = useState(() => diff(TARGET_DATE));

  useEffect(() => {
    const id = setInterval(() => setT(diff(TARGET_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  const reached = t.ms === 0;

  return (
    <section
      id="cuenta-regresiva"
      className="scroll-mt-12 px-6 py-24 text-center sm:py-32"
    >
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9 }}
        className="font-script text-2xl text-rose-medium sm:text-3xl"
      >
        Y entonces, finalmente…
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.15 }}
        className="font-display mt-3 text-3xl text-ink sm:text-5xl"
      >
        16 de agosto de 2026
      </motion.h2>
      <p className="font-sans mt-2 text-sm uppercase tracking-[0.35em] text-ink/50">
        4:00 pm · nuestro primer abrazo
      </p>

      {reached ? (
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="font-display mt-12 text-4xl text-rose-medium sm:text-6xl"
        >
          Hoy. Por fin. Te abrazo, mi amor. 🩷
        </motion.p>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-5"
        >
          <Cell label="Días" value={t.days} />
          <Cell label="Horas" value={t.hours} />
          <Cell label="Minutos" value={t.minutes} />
          <Cell label="Segundos" value={t.seconds} />
        </motion.div>
      )}

      <motion.blockquote
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-serif mx-auto mt-14 max-w-2xl text-lg italic text-ink/75 sm:text-xl"
      >
        “…nuestro primer abrazo, e incluso nuestro primer beso, nuestro más íntimo sueño.”
        <footer className="font-sans mt-3 text-[11px] uppercase tracking-[0.3em] text-ink/45">
          — Lily, agosto de 2024
        </footer>
      </motion.blockquote>

    </section>
  );
}
