import { useMemo, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import Photo from './Photo.jsx';

export default function PhotoGrid({ photos }) {
  const [index, setIndex] = useState(-1);

  const ordered = useMemo(() => {
    if (!photos) return [];
    const heroes = photos.filter((p) => p.isHero);
    const rest = photos.filter((p) => !p.isHero);
    return [...heroes, ...rest];
  }, [photos]);

  const slides = useMemo(
    () =>
      ordered.map((p) => ({
        src: `${import.meta.env.BASE_URL}${p.file}`,
        description: p.caption || undefined,
      })),
    [ordered]
  );

  if (!photos || photos.length === 0) {
    return (
      <p className="font-serif my-10 text-center italic text-ink/50">
        Pronto, las primeras fotos juntos en persona 🩷
      </p>
    );
  }

  const heroes = ordered.filter((p) => p.isHero);
  const rest = ordered.filter((p) => !p.isHero);
  const heroOffset = 0;
  const restOffset = heroes.length;

  return (
    <div className="mt-8">
      {heroes.map((p, i) => (
        <Photo
          key={`hero-${i}`}
          {...p}
          onOpen={() => setIndex(heroOffset + i)}
        />
      ))}
      {rest.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
          {rest.map((p, i) => (
            <Photo
              key={p.file}
              {...p}
              index={i}
              onOpen={() => setIndex(restOffset + i)}
            />
          ))}
        </div>
      )}

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Captions, Counter, Zoom, Fullscreen]}
        carousel={{ finite: false, preload: 2 }}
        controller={{ closeOnBackdropClick: true }}
        animation={{ swipe: 300 }}
        styles={{
          container: { backgroundColor: 'rgba(74, 63, 85, 0.92)' },
          captionsTitleContainer: { backgroundColor: 'transparent' },
          captionsDescriptionContainer: { backgroundColor: 'transparent' },
        }}
      />
    </div>
  );
}
