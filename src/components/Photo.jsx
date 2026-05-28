import { motion } from 'framer-motion';

export default function Photo({ file, caption, isHero, index = 0, onOpen }) {
  const src = file;

  const handleClick = (e) => {
    e.preventDefault();
    if (onOpen) onOpen();
  };

  if (isHero) {
    return (
      <motion.figure
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="my-10 flex flex-col items-center"
      >
        <button
          type="button"
          onClick={handleClick}
          className="paper group block overflow-hidden rounded-3xl outline-none ring-rose-medium/40 transition focus-visible:ring-4"
          aria-label={caption ? `Abrir foto: ${caption}` : 'Abrir foto'}
        >
          <img
            src={`${import.meta.env.BASE_URL}${src}`}
            alt={caption || ''}
            loading="lazy"
            decoding="async"
            className="block max-h-[75vh] w-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </button>
        {caption ? (
          <figcaption className="font-script mt-4 text-center text-xl text-rose-medium sm:text-2xl">
            {caption}
          </figcaption>
        ) : null}
      </motion.figure>
    );
  }

  return (
    <motion.figure
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: Math.min(index * 0.04, 0.5) }}
      className="flex flex-col"
    >
      <button
        type="button"
        onClick={handleClick}
        className="paper group block overflow-hidden rounded-2xl outline-none ring-rose-medium/40 transition focus-visible:ring-4"
        aria-label={caption ? `Abrir foto: ${caption}` : 'Abrir foto'}
      >
        <img
          src={`${import.meta.env.BASE_URL}${src}`}
          alt={caption || ''}
          loading="lazy"
          decoding="async"
          className="block aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </button>
      {caption ? (
        <figcaption className="font-sans mt-2 px-1 text-center text-xs text-ink/60">
          {caption}
        </figcaption>
      ) : null}
    </motion.figure>
  );
}
