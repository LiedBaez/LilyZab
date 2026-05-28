import { motion } from 'framer-motion';
import PhotoGrid from './PhotoGrid.jsx';
import LetterCard from './LetterCard.jsx';
import PullQuote from './PullQuote.jsx';
import Tradition from './Tradition.jsx';
import FinalReflection from './FinalReflection.jsx';
import Video from './Video.jsx';
import DetalleQueAdoro from './DetalleQueAdoro.jsx';

const EXTRAS = {
  tradition: Tradition,
  finalReflection: FinalReflection,
  detalleQueAdoro: DetalleQueAdoro,
};

export default function Chapter({ chapter }) {
  const {
    year,
    titulo,
    subtitulo,
    fotos = [],
    videos = [],
    cartas = [],
    pullQuote,
    extras = [],
    pullQuoteBefore = false,
  } = chapter;

  const yearIsLong = String(year).length > 4;
  const yearSize = yearIsLong
    ? 'text-5xl sm:text-7xl'
    : 'text-[5rem] sm:text-[8rem]';

  const Header = (
    <header className="text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className={`font-display leading-none text-rose-medium/70 ${yearSize}`}
      >
        {year}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display mt-1 text-2xl text-ink sm:text-4xl"
      >
        {titulo}
      </motion.h2>
      {subtitulo && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif mx-auto mt-4 max-w-2xl text-base italic text-ink/70 sm:text-lg"
        >
          {subtitulo}
        </motion.p>
      )}
    </header>
  );

  return (
    <section
      id={`cap-${year}`}
      className="mx-auto max-w-5xl scroll-mt-12 px-5 py-16 sm:px-8 sm:py-24"
    >
      {Header}

      {pullQuoteBefore && pullQuote && (
        <PullQuote texto={pullQuote.texto} autor={pullQuote.autor} />
      )}

      {fotos.length > 0 && <PhotoGrid photos={fotos} />}

      {videos.length > 0 && (
        <div className="mt-4">
          {videos.map((v) => (
            <Video key={v.id} {...v} />
          ))}
        </div>
      )}

      {cartas.map((id) => (
        <LetterCard key={id} id={id} />
      ))}

      {extras.map((name) => {
        const C = EXTRAS[name];
        return C ? <C key={name} /> : null;
      })}

      {!pullQuoteBefore && pullQuote && (
        <PullQuote texto={pullQuote.texto} autor={pullQuote.autor} />
      )}
    </section>
  );
}
