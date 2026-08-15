import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const LINKS = ['Overview', 'Design', 'Specs', 'Reserve'];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled
            ? 'border border-border bg-card/80 shadow-[0_8px_40px_-12px_rgba(6,182,212,0.35)] backdrop-blur-xl'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="animate-pulsering grid h-8 w-8 place-items-center rounded-lg bg-[linear-gradient(135deg,var(--cyan-400),var(--cyan-600))] text-[var(--cyan-50)]">
            <span className="font-display text-[15px] font-bold">N</span>
          </span>
          <span className="font-display text-[17px] font-semibold tracking-tight">Nimbus</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-mono relative rounded-full px-4 py-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
          ))}
        </div>

        <a
          href="#reserve"
          className="font-mono rounded-full bg-primary px-5 py-2 text-[13px] text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
        >
          Pre-order
        </a>
      </nav>
    </motion.header>
  );
}
