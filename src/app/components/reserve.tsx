import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { CyanBackdrop } from './cyan-backdrop';

export function Reserve() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  };

  return (
    <section id="reserve" className="relative overflow-hidden px-6 py-32">
      <CyanBackdrop dense />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <p className="font-mono mb-5 text-[12px] tracking-[0.25em] text-[var(--cyan-600)]">
          SHIPPING SPRING 2026
        </p>
        <h2 className="font-display text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em]">
          Be among the first to
          <br />
          <span className="animate-hue bg-[linear-gradient(120deg,var(--cyan-500),var(--cyan-300),var(--cyan-600))] bg-clip-text text-transparent">
            breathe it in.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-[16px] leading-relaxed text-muted-foreground">
          Reserve Nimbus One with a fully refundable $99 deposit. Founders get
          engraving, priority shipping, and a year of Nimbus+ on us.
        </p>

        {done ? (
          <div className="mx-auto mt-10 inline-flex items-center gap-3 rounded-full border border-[var(--cyan-400)] bg-[var(--cyan-50)] px-6 py-4 text-[var(--cyan-700)]">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--cyan-500)] text-[var(--cyan-50)]">
              <Check className="h-4 w-4" />
            </span>
            You're on the list — check {email} for confirmation.
          </div>
        ) : (
          <form onSubmit={submit} className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="192aakarsh@gmail.com"
              className="flex-1 rounded-full border border-border bg-card px-5 py-3.5 outline-none transition-colors focus:border-[var(--cyan-400)] focus:ring-2 focus:ring-[var(--ring)]/40"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
            >
              Reserve
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
