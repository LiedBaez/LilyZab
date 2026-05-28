import { motion } from 'framer-motion';

export default function DetalleQueAdoro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9 }}
      className="paper mx-auto my-14 max-w-2xl px-7 py-10 text-center sm:px-12 sm:py-12"
    >
      <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-rose-medium">
        Algo que adoro de ti
      </p>
      <p className="font-serif mt-6 text-base leading-relaxed text-ink/85 sm:text-lg">
        Siempre decoras de más tus tareas. Pones colores, dibujos, títulos
        enormes, mil detalles que la profe jamás va a notar. Yo te digo que
        pierdes tiempo, que mejor estudies.
      </p>
      <p className="font-serif mt-4 text-base leading-relaxed text-ink/85 sm:text-lg">
        Pero la verdad es que es de las cosas más tuyas que tienes — algo que
        no le veo a nadie más. Y cada vez que me lo enseñas, me derrito un
        poquito.
      </p>
    </motion.section>
  );
}
