import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Marquee } from './components/marquee';
import { Features } from './components/features';
import { Showcase } from './components/showcase';
import { Specs } from './components/specs';
import { Reserve } from './components/reserve';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div id="top" className="min-h-screen w-full bg-background text-foreground font-body antialiased">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Showcase />
        <Specs />
        <Reserve />
      </main>
      <Footer />
    </div>
  );
}
