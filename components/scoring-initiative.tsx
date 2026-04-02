export function ScoringInitiative() {
  return (
    <section
      id="scoring-initiative"
      className="border-t"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 py-14">
        <div
          className="rounded-[24px] border overflow-hidden"
          style={{
            borderColor: "rgba(255,255,255,0.12)",
            background: "radial-gradient(circle at top left, #131828 0%, #070912 60%)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0">
            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="text-[11px] text-[#3c7fb8] tracking-[0.16em] uppercase mb-3 font-semibold">
                About the Initiative
              </div>
              <h2 className="text-[clamp(22px,3vw,32px)] font-bold tracking-[0.12em] uppercase text-[#f5f5f5] mb-6 text-balance">
                The Scoring Initiative
              </h2>
              
              <h3 className="text-[14px] font-semibold tracking-[0.08em] uppercase text-[#f5f5f5] mb-3">
                The Opportunity
              </h3>
              <p className="text-[13px] text-[#b2b2b2] leading-relaxed max-w-[520px] mb-4">
                I&apos;m looking for the next five stories to bring to life.
              </p>
              <p className="text-[13px] text-[#b2b2b2] leading-relaxed max-w-[520px] mb-4">
                This initiative is a random lottery designed to support independent creators. For a $5 entry, you stand to receive a custom, high-fidelity score tailored specifically to your visual narrative.
              </p>
              <p className="text-[13px] text-[#b2b2b2] leading-relaxed max-w-[520px] mb-8">
                Five winners will be selected to have their project scored by Ariladia Entertainment, bringing the cinematic weight of professional production to your indie film, trailer, or media project.
              </p>
              
              <div>
                <a
                  href="https://ariladia.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#f5f5f5] text-[#020308] px-7 py-3.5 rounded-md text-[12px] tracking-[0.12em] uppercase font-bold hover:bg-white transition-all duration-[0.25s] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,245,245,0.15)]"
                >
                  Enter the Lottery — $5
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Accent panel */}
            <div
              className="hidden md:flex flex-col items-center justify-center px-10 border-l"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center border"
                  style={{
                    borderColor: "rgba(255,255,255,0.14)",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <svg className="w-7 h-7 text-[#3c7fb8]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.662a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.662A2.25 2.25 0 0 0 9 15.553Z"
                    />
                  </svg>
                </div>
                <div className="text-[10px] tracking-[0.14em] uppercase text-[#b2b2b2]">5 Winners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
