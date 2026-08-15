import { motion } from 'motion/react';
import { Eye, Brain, Sparkles, Radio, ShieldCheck, Zap } from 'lucide-react';

const FEATURES = [
  { icon: Eye, title: 'Spatial Vision', body: 'Twelve depth sensors map your world at 120fps, so Nimbus understands space the way you do.' },
  { icon: Brain, title: 'On-device Intellect', body: 'A 40-TOPS neural core runs the full model locally. No cloud round-trips, no waiting.' },
  { icon: Radio, title: 'Ambient Voice', body: 'Beam-forming mics isolate you in a crowd. Speak naturally — it always hears the right voice.' },
  { icon: ShieldCheck, title: 'Sealed Privacy', body: 'Your data never leaves the glass. A hardware shutter cuts every sensor with one tap.' },
  { icon: Zap, title: '18-Hour Endurance', body: 'Graphene cells and adaptive power sipping carry you from sunrise to the after-party.' },
  { icon: Sparkles, title: 'Living Interface', body: 'A cyan light-field surfaces just what you need, then fades back into the ambient calm.' },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Features() {
  return (
    <section id="design" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="mb-16 max-w-2xl">
        <p className="font-mono mb-4 text-[12px] tracking-[0.25em] text-[var(--cyan-600)]">CAPABILITIES</p>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
          Engineered to disappear, built to keep up.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease, delay: (i % 3) * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-[var(--cyan-400)] hover:shadow-[0_24px_60px_-30px_rgba(6,182,212,0.5)]"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,var(--cyan-200),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="mb-6 inline-grid h-12 w-12 place-items-center rounded-xl bg-[var(--cyan-50)] text-[var(--cyan-600)] transition-colors duration-500 group-hover:bg-[var(--cyan-500)] group-hover:text-[var(--cyan-50)]">
              <f.icon className="h-5 w-5" />
            </span>
            <h3 className="font-display mb-2 text-[19px] font-semibold">{f.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{f.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
