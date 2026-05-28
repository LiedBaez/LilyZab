import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LETTERS } from '../data/letters.js';

const PREVIEW_PARAGRAPHS = 2;

export default function LetterCard({ id }) {
  const letter = LETTERS[id];
  const [open, setOpen] = useState(false);

  if (!letter) return null;

  const visible = open
    ? letter.parrafos
    : letter.parrafos.slice(0, PREVIEW_PARAGRAPHS);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9 }}
      className="paper relative mx-auto my-12 max-w-2xl px-7 py-9 sm:px-10 sm:py-12"
    >
      <header className="border-b border-rose-medium/20 pb-5">
        <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-rose-medium">
          {letter.autor} → {letter.destinatario} · {letter.aniversario}
        </p>
        <h3 className="font-display mt-3 text-2xl leading-tight text-ink sm:text-3xl">
          {letter.titulo}
        </h3>
        <p className="font-sans mt-1 text-xs text-ink/55">{letter.fecha}</p>
      </header>

      <div className="font-serif mt-6 space-y-4 text-base leading-relaxed text-ink/85 sm:text-lg">
        {visible.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <AnimatePresence>
          {!open && letter.parrafos.length > PREVIEW_PARAGRAPHS && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none -mt-12 h-12 bg-gradient-to-t from-[#FFFBF2] to-transparent"
            />
          )}
        </AnimatePresence>
      </div>

      <footer className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-rose-medium/20 pt-5">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="font-sans rounded-full bg-rose-medium/15 px-5 py-2 text-xs uppercase tracking-[0.25em] text-rose-medium transition hover:bg-rose-medium/25"
        >
          {open ? 'Cerrar carta' : 'Leer carta completa'}
        </button>
        <a
          href={`${import.meta.env.BASE_URL}${letter.archivoOriginal}`}
          target="_blank"
          rel="noreferrer"
          className="font-sans text-xs uppercase tracking-[0.25em] text-ink/55 underline-offset-4 hover:text-ink hover:underline"
        >
          📥 Descargar original
        </a>
      </footer>

      {open && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-script mt-8 text-center text-2xl text-rose-medium"
        >
          {letter.fraseDestacada}
        </motion.p>
      )}
    </motion.article>
  );
}
