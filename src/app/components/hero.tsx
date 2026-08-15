import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { CyanBackdrop } from './cyan-backdrop';
import { ImageWithFallback } from './figma/ImageWithFallback';

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="overview" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-16">
      <CyanBackdrop dense />

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="font-mono mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--cyan-300)] bg-[var(--cyan-50)] px-4 py-1.5 text-[12px] tracking-wide text-[var(--cyan-700)]"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--cyan-500)]" />
        MOCKUP WEBSITE
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.08 }}
        className="font-display max-w-4xl text-center text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.03em]"
      >
        Meet Nimbus One.
        <br />
        The{' '}
        <span className="animate-hue bg-[linear-gradient(120deg,var(--cyan-500),var(--cyan-300),var(--cyan-600))] bg-clip-text text-transparent">
          air you compute in.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.18 }}
        className="mt-7 max-w-xl text-center text-[17px] leading-relaxed text-muted-foreground"
      >
        A spatial AI companion that sees, listens and thinks alongside you —
        wrapped in aerospace-grade glass and a whisper of cyan light.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.28 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="#reserve"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
        >
          Reserve yours — $899
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <button className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3.5 backdrop-blur-md transition-colors hover:border-[var(--cyan-400)]">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--cyan-500)] text-[var(--cyan-50)]">
            <Play className="h-3 w-3 fill-current" />
          </span>
          Watch the film
        </button>
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease, delay: 0.4 }}
        className="animate-floaty relative mt-16 w-full max-w-4xl"
      >
        <div className="relative overflow-hidden rounded-3xl border border-border bg-black shadow-[0_40px_120px_-30px_rgba(6,182,212,0.55)]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1720962158789-9389a4f399da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
            alt="Nimbus One spatial AI device on a dark background"
            className="h-[clamp(18rem,44vw,34rem)] w-full object-cover opacity-95"
          />
          
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="animate-sweep absolute inset-y-0 -left-1/3 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(103,232,249,0.35),transparent)]" />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(4,20,26,0.55))]" />
          <div className="absolute bottom-5 left-6 flex items-center gap-3">
            <span className="font-mono rounded-md bg-[var(--cyan-500)]/20 px-2.5 py-1 text-[11px] text-[var(--cyan-100)] backdrop-blur">
              4K · SPATIAL VISION
            </span>
            <span className="font-mono rounded-md bg-white/10 px-2.5 py-1 text-[11px] text-white backdrop-blur">
              18H BATTERY
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
