const PARTNERS = ['ORBITAL', 'HELION', 'NOVA LABS', 'AETHER', 'QUANTA', 'LUMEN', 'VERTEX', 'ZENITH'];

export function Marquee() {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section className="relative border-y border-border bg-card/50 py-8">
      <p className="font-mono mb-6 text-center text-[11px] tracking-[0.25em] text-muted-foreground">
        TRUSTED BY THE TEAMS BUILDING WHAT'S NEXT
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-16 whitespace-nowrap">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-[20px] font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-[var(--cyan-600)]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
