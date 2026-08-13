export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Deep space base */}
      <div className="absolute inset-0 bg-[#050208]" />

      {/* Grid on top area */}
      <div className="absolute inset-0 grid-bg" />

      {/* Aurora blobs */}
      <div
        className="aurora-blob animate-aurora-1 w-[55vw] h-[55vw] -top-[20vw] -left-[15vw]"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.28) 0%, transparent 65%)" }}
      />
      <div
        className="aurora-blob animate-aurora-2 w-[45vw] h-[45vw] top-[5vh] -right-[18vw]"
        style={{ background: "radial-gradient(circle, rgba(217,70,239,0.16) 0%, transparent 65%)" }}
      />
      <div
        className="aurora-blob animate-aurora-3 w-[40vw] h-[40vw] top-[60vh] left-[20vw]"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 65%)" }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 120% 90% at 50% 40%, transparent 50%, rgba(5,2,8,0.8) 100%)" }}
      />
    </div>
  );
}
