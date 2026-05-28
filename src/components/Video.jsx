import { motion } from 'framer-motion';

export default function Video({ id, titulo, fecha, descripcion }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9 }}
      className="paper mx-auto my-12 max-w-3xl px-6 py-8 sm:px-10 sm:py-12"
    >
      <header className="border-b border-rose-medium/20 pb-5">
        <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-rose-medium">
          Video{fecha ? ` · ${fecha}` : ''}
        </p>
        {titulo && (
          <h3 className="font-display mt-3 text-2xl leading-tight text-ink sm:text-3xl">
            {titulo}
          </h3>
        )}
      </header>

      <div className="mt-7 overflow-hidden rounded-2xl bg-black/5 shadow-soft">
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
            title={titulo || 'video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="block h-full w-full border-0"
          />
        </div>
      </div>

      {descripcion && (
        <p className="font-serif mt-6 text-base italic leading-relaxed text-ink/75 sm:text-lg">
          {descripcion}
        </p>
      )}
    </motion.section>
  );
}
