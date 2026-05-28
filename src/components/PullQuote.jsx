import { motion } from 'framer-motion';

export default function PullQuote({ texto, autor }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1 }}
      className="mx-auto my-20 max-w-3xl px-6 text-center"
    >
      <p className="font-script text-3xl leading-[1.25] text-rose-medium sm:text-4xl md:text-5xl">
        “{texto}”
      </p>
      {autor && (
        <footer className="font-sans mt-5 text-[11px] uppercase tracking-[0.4em] text-ink/45">
          — {autor}
        </footer>
      )}
    </motion.blockquote>
  );
}
