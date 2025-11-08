export function Portfolio() {
  const items = [
    { label: "Film", title: "Narrative & Short Films", caption: "Emotional themes, tension, character arcs." },
    {
      label: "Trailer",
      title: "Trailer & Teaser Cues",
      caption: "Builds, drops, and signature hits custom to picture.",
    },
    { label: "Game", title: "Games & Interactive", caption: "Immersive loops and adaptive atmospheres." },
    { label: "TV / Sync", title: "TV & Branded Content", caption: "Underscore and modern hybrid cues." },
  ]

  return (
    <section id="portfolio" className="max-w-[1200px] mx-auto px-5 py-14">
      <h2 className="text-[15px] text-[#d0d0d0] tracking-[0.12em] uppercase font-medium mb-[22px] text-chart-5">Portfolio</h2>
      <p className="text-sm text-[#b2b2b2] mb-6">Organised selections across film, trailers, and interactive media.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div
          className="rounded-2xl overflow-hidden border"
          style={{
            borderColor: "rgba(255,255,255,0.12)",
            background: "radial-gradient(circle at top, rgba(255,255,255,0.06), transparent)",
          }}
        >
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/hHAMbjRdIDg"
              title="Composer Showreel 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="p-4">
            <div className="text-[8px] uppercase tracking-[0.14em] text-[#3c7fb8] mb-1 text-destructive-foreground">Featured Work</div>
            <div className="text-[11px] text-[#d0d0d0]">Cinematic DAW Playthrough</div>
            <div className="text-[9px] text-[#b2b2b2] mt-1">Hybrid orchestral scoring </div>
          </div>
        </div>

        <div
          className="rounded-2xl overflow-hidden border"
          style={{
            borderColor: "rgba(255,255,255,0.12)",
            background: "radial-gradient(circle at top, rgba(255,255,255,0.06), transparent)",
          }}
        >
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/bLGeliI8RGY"
              title="SOUNDS OF VALOR."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="p-4">
            <div className="text-[8px] uppercase tracking-[0.14em] text-[#3c7fb8] mb-1">Featured Work</div>
            <div className="text-[11px] text-[#d0d0d0]">Music Portfolio</div>
            <div className="text-[9px] text-[#b2b2b2] mt-1 text-chart-5">Film, game, and television compositions</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mt-1.5 text-[10px]">
        {items.map((item) => (
          <div
            key={item.label}
            className="p-[10px_9px] rounded-[14px] border flex flex-col gap-[3px] transition-all duration-[0.25s] cursor-pointer hover:-translate-y-[3px] hover:shadow-[0_12px_26px_rgba(0,0,0,0.6)]"
            style={{
              borderColor: "rgba(255,255,255,0.12)",
              background: "radial-gradient(circle at top, rgba(255,255,255,0.06), transparent)",
            }}
          >
            <div className="text-[8px] uppercase tracking-[0.14em] text-[#3c7fb8]">{item.label}</div>
            <div className="text-[11px] text-[#d0d0d0]">{item.title}</div>
            <div className="text-[9px] text-[#b2b2b2]">{item.caption}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
