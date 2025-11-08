export function Studio() {
  return (
    <section id="studio" className="max-w-[1200px] mx-auto px-5 py-14">
      <h2 className="text-[15px] text-[#d0d0d0] tracking-[0.12em] uppercase font-medium mb-[22px] text-chart-4">Studio & Process</h2>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-[26px] items-start mt-1.5">
        <div>
          <p className="text-[13px] text-[#b2b2b2] leading-relaxed">
            Ariladia combines a fully-equipped production setup with a flexible workflow designed to meet tight
            deadlines without sacrificing depth.
          </p>
          <ul className="mt-2.5 text-[11px] text-[#b2b2b2] space-y-1 list-none">
            <li>• Professional DAW environment centered around hybrid orchestral writing.</li>
            <li>• Extensive palette of orchestral, synth, and sound design libraries.</li>
            <li>• High-quality mixing and stem delivery for editors and post teams.</li>
          </ul>
          <p className="mt-2 text-[10px] text-[#b2b2b2]">
            Remote-friendly collaboration with secure file sharing, cue sheets, revisions, and clear communication at
            every step.
          </p>
        </div>

        <div
          className="p-[12px_11px] rounded-2xl border text-[9px] text-[#b2b2b2] flex flex-col gap-1"
          style={{
            borderColor: "rgba(255,255,255,0.14)",
            background: "radial-gradient(circle at top, rgba(255,255,255,0.04), transparent)",
          }}
        >
          <div className="text-[10px] uppercase tracking-[0.14em] text-[#d0d0d0]">Deliverables</div>
          <div>• Custom themes & motifs for key characters and worlds</div>
          <div>• Full cues, alt mixes, stems, and cut-downs for trailers</div>
          <div>• Atmospheres, impacts, and sound design layers</div>
          <div>• Broadcast-ready masters aligned to your specs</div>
        </div>
      </div>
    </section>
  )
}
