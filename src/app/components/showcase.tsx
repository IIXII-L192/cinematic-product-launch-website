import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const ease = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { value: '0.9mm', label: 'Optical bezel' },
  { value: '84g', label: 'Total weight' },
  { value: '120Hz', label: 'Light-field refresh' },
  { value: 'IP68', label: 'Weather sealed' },
];

export function Showcase() {
  return (
    <section className="relative overflow-hidden bg-primary py-28 text-primary-foreground">
      
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-drift animate-hue absolute left-1/4 top-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,var(--cyan-600),transparent_65%)] opacity-40 blur-3xl" />
        <div className="animate-drift-2 absolute bottom-0 right-1/4 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,var(--cyan-400),transparent_65%)] opacity-30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="font-mono mb-4 text-[12px] tracking-[0.25em] text-[var(--cyan-300)]">THE DESIGN</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
            One sheet of glass.
            <br />
            Infinite depth inside.
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-primary-foreground/70">
            Milled from a single billet and finished with a nano-etched cyan
            interference coat, Nimbus One catches light the way water does —
            alive, shifting, never the same twice.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-primary p-5">
                <div className="font-display text-[clamp(1.4rem,2.4vw,1.9rem)] font-bold text-[var(--cyan-300)]">
                  {s.value}
                </div>
                <div className="font-mono mt-1 text-[11px] tracking-wide text-primary-foreground/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
          className="relative"
        >
          <div className="animate-floaty relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_120px_-30px_rgba(6,182,212,0.6)]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1680507079908-bc48d1efa18c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Close-up of the machined metal and glass body of Nimbus One"
              className="h-[clamp(20rem,42vw,32rem)] w-full bg-black object-cover"
            />
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="animate-sweep absolute inset-y-0 -left-1/3 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(103,232,249,0.4),transparent)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
