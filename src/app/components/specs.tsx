import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const TABS: Record<string, { k: string; v: string }[]> = {
  Optics: [
    { k: 'Field of view', v: '110° diagonal' },
    { k: 'Depth sensors', v: '12 × ToF array' },
    { k: 'Capture', v: '4K / 120fps HDR' },
    { k: 'Light-field panels', v: 'Dual micro-OLED' },
  ],
  Compute: [
    { k: 'Neural core', v: '40 TOPS on-device' },
    { k: 'Memory', v: '16GB unified' },
    { k: 'Storage', v: '256GB / 512GB' },
    { k: 'Model', v: 'Nimbus LM · local' },
  ],
  Power: [
    { k: 'Battery life', v: 'Up to 18 hours' },
    { k: 'Cell', v: 'Graphene hybrid' },
    { k: 'Fast charge', v: '0–80% in 25 min' },
    { k: 'Standby', v: '30 days' },
  ],
  Build: [
    { k: 'Frame', v: 'CNC 6000 aluminium' },
    { k: 'Glass', v: 'Sapphire, nano-etched' },
    { k: 'Weight', v: '84 grams' },
    { k: 'Rating', v: 'IP68 sealed' },
  ],
};

export function Specs() {
  const keys = Object.keys(TABS);
  const [active, setActive] = useState(keys[0]);

  return (
    <section id="specs" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="font-mono mb-4 text-[12px] tracking-[0.25em] text-[var(--cyan-600)]">TECHNICAL</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
            Every number, in plain sight.
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {keys.map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`font-mono rounded-full border px-4 py-2 text-[13px] transition-all duration-300 ${
                active === k
                  ? 'border-[var(--cyan-500)] bg-[var(--cyan-500)] text-[var(--cyan-50)]'
                  : 'border-border bg-card text-muted-foreground hover:border-[var(--cyan-300)] hover:text-foreground'
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2"
        >
          {TABS[active].map((row) => (
            <div key={row.k} className="flex items-center justify-between bg-card px-6 py-5">
              <span className="text-[15px] text-muted-foreground">{row.k}</span>
              <span className="font-display text-[16px] font-semibold">{row.v}</span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
