const COLS = [
  { title: 'Product', links: ['Overview', 'Design', 'Specs', 'Nimbus+', 'Compare'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Sustainability'] },
  { title: 'Support', links: ['Help center', 'Warranty', 'Contact', 'Status'] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[linear-gradient(135deg,var(--cyan-400),var(--cyan-600))] text-[var(--cyan-50)]">
                <span className="font-display text-[15px] font-bold">N</span>
              </span>
              <span className="font-display text-[17px] font-semibold tracking-tight">Nimbus</span>
            </div>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-muted-foreground">
              The air you compute in. Designed on Earth, for whatever comes next.
            </p>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="font-mono mb-4 text-[12px] tracking-[0.2em] text-muted-foreground">
                {c.title.toUpperCase()}
              </h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[14px] text-foreground/80 transition-colors hover:text-[var(--cyan-600)]">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-[13px] text-muted-foreground sm:flex-row">
          <span className="font-mono">© 2026 IIXII™ & Aakarsh Singhal (This is just a template, not a real service)</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
            <a href="#" className="transition-colors hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
