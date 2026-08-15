// Animated cinematic cyan atmosphere used behind hero / sections.
export function CyanBackdrop({ dense = false }: { dense?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      
      <div className="animate-drift animate-hue absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,var(--cyan-300),transparent_65%)] blur-3xl" />
      <div className="animate-drift-2 animate-hue absolute -bottom-48 right-[-8rem] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle_at_center,var(--cyan-400),transparent_60%)] blur-3xl" />
      {dense && (
        <div className="animate-drift absolute top-1/3 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--cyan-200),transparent_70%)] blur-3xl" />
      )}
      
      <div
        className="animate-gridpan absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(6,182,212,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.10) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 78%)',
        }}
      />
    </div>
  );
}
