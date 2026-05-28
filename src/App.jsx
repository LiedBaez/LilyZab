import FloatingHearts from './components/FloatingHearts.jsx';
import Hero from './components/Hero.jsx';
import Chapter from './components/Chapter.jsx';
import Countdown from './components/Countdown.jsx';
import Footer from './components/Footer.jsx';
import { CHAPTERS } from './data/chapters.js';

export default function App() {
  return (
    <>
      <FloatingHearts />
      <main>
        <Hero />
        {CHAPTERS.map((c) => (
          <Chapter key={c.year} chapter={c} />
        ))}
        <Countdown />
        <Footer />
      </main>
    </>
  );
}
