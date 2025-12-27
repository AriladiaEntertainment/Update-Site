export function FeaturedSeries() {
  return (
    <section id="featured-series" className="max-w-[1200px] mx-auto px-5 py-20">
      <div className="text-center mb-8">
        <div className="text-[11px] text-[#3c7fb8] uppercase tracking-[0.16em] mb-3">Featured Content</div>
        <h2 className="text-[24px] md:text-[32px] text-[#d0d0d0] tracking-[0.12em] uppercase font-medium mb-4">
          Original Series
        </h2>
        <p className="text-sm text-[#b2b2b2] max-w-[600px] mx-auto">
          An exclusive look into original compositions and cinematic storytelling
        </p>
      </div>

      <div className="max-w-[900px] mx-auto mb-12">
        <div
          className="rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(60,127,184,0.3)]"
          style={{
            borderColor: "rgba(60,127,184,0.3)",
            background: "radial-gradient(circle at top, rgba(60,127,184,0.1), rgba(255,255,255,0.02))",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          }}
        >
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/e2Y2tjEsBr0"
              title="Featured Portfolio Showcase"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.14em] border"
                style={{
                  borderColor: "rgba(77,164,91,0.4)",
                  background: "rgba(77,164,91,0.1)",
                  color: "#4da45b",
                }}
              >
                Featured
              </div>
              <div
                className="px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.14em] border"
                style={{
                  borderColor: "rgba(60,127,184,0.4)",
                  background: "rgba(60,127,184,0.1)",
                  color: "#3c7fb8",
                }}
              >
                Portfolio Showcase
              </div>
            </div>
            <h3 className="text-[18px] md:text-[20px] text-[#d0d0d0] uppercase tracking-[0.14em] font-medium mb-3">
              Featured Compositions
            </h3>
            <p className="text-[13px] text-[#b2b2b2] leading-relaxed mb-4">
              A collection of cinematic music across multiple genres and media, showcasing the depth and versatility of
              Ariladia Entertainment's scoring capabilities.
            </p>
            <a
              href="https://youtu.be/e2Y2tjEsBr0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[0.16em] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(60,127,184,0.4)]"
              style={{
                background: "linear-gradient(90deg, #4da45b, #3c7fb8)",
                color: "#010101",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch Full Video
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto">
        <div
          className="rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(60,127,184,0.3)]"
          style={{
            borderColor: "rgba(60,127,184,0.3)",
            background: "radial-gradient(circle at top, rgba(60,127,184,0.1), rgba(255,255,255,0.02))",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          }}
        >
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/rCS73SE75fo"
              title="Ariladia Original Series"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.14em] border"
                style={{
                  borderColor: "rgba(77,164,91,0.4)",
                  background: "rgba(77,164,91,0.1)",
                  color: "#4da45b",
                }}
              >
                Original Series
              </div>
              <div
                className="px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.14em] border"
                style={{
                  borderColor: "rgba(60,127,184,0.4)",
                  background: "rgba(60,127,184,0.1)",
                  color: "#3c7fb8",
                }}
              >
                Exclusive Content
              </div>
            </div>
            <h3 className="text-[18px] md:text-[20px] text-[#d0d0d0] uppercase tracking-[0.14em] font-medium mb-3">
              Ariladia Entertainment Series
            </h3>
            <p className="text-[13px] text-[#b2b2b2] leading-relaxed mb-4">
              Experience the creative journey behind cinematic compositions, sound design, and the art of scoring for
              visual media. This series showcases the process, inspiration, and dedication that goes into every project.
            </p>
            <a
              href="https://youtu.be/rCS73SE75fo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[0.16em] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(60,127,184,0.4)]"
              style={{
                background: "linear-gradient(90deg, #4da45b, #3c7fb8)",
                color: "#010101",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch Full Series
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
