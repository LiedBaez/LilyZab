import { motion } from 'framer-motion';

export default function FinalReflection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1 }}
      className="paper mx-auto my-16 max-w-2xl px-7 py-10 text-center sm:px-10 sm:py-12"
    >
      <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-rose-medium">
        Y aquí seguimos
      </p>
      <h3 className="font-display mt-4 text-3xl text-ink sm:text-4xl">
        Ocho años después del primer mensaje,
        <br className="hidden sm:block" />
        seguimos juntos.
      </h3>
      <div className="font-serif mx-auto mt-6 max-w-xl space-y-4 text-left text-base leading-relaxed text-ink/80 sm:text-lg">
        <p>
          Aprendimos a amarnos sólo con palabras. A reír desde dos pantallas,
          a llorar en dos cuartos distintos a la misma hora, a planear una vida
          a miles de kilómetros como si ya fuera nuestra casa.
        </p>
        <p>
          Hicimos sólido lo que la gente dice que no se puede. Y a pesar de los
          años, sigues siendo el primer “buenos días” y el último “te amo” de
          cada día.
        </p>
        <p>
          Hoy todo eso deja de ser sólo palabras.
        </p>
      </div>
      <p className="font-script mt-8 text-2xl text-rose-medium sm:text-3xl">
        Voy a verte, Lily.
      </p>
    </motion.section>
  );
}
