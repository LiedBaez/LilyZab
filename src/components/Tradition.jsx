import { motion } from 'framer-motion';

export default function Tradition() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9 }}
      className="paper mx-auto my-14 max-w-2xl px-7 py-10 text-center sm:px-12 sm:py-14"
    >
      <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-rose-medium">
        Cada agosto
      </p>
      <p className="font-script mt-6 text-2xl leading-[1.35] text-ink sm:text-3xl">
        “…un sueño: leer todas nuestras cartas anuales
        <br className="hidden sm:block" /> en voz alta, de frente, el uno al otro.”
      </p>
      <p className="font-sans mt-6 text-[11px] uppercase tracking-[0.35em] text-ink/45">
        — Lily, 2024
      </p>
    </motion.section>
  );
}
