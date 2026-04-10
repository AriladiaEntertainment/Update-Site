import Link from "next/link"

export function AnnouncementBanner() {
  return (
    <div className="w-full flex items-center justify-center py-3 px-4"
      style={{ background: "rgba(2,3,8,0.92)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="flex items-center gap-4 flex-wrap justify-center max-w-4xl">
        {/* Glowing dot */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: "#4da45b" }}
          />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5"
            style={{ backgroundColor: "#4da45b" }}
          />
        </span>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <span className="text-[11px] tracking-[0.14em] uppercase font-semibold whitespace-nowrap"
            style={{ color: "#d0d0d0" }}
          >
            Now Open:
          </span>

          <a
            href="https://youtu.be/6nko1WBKVC4?si=T_58yfKfE9B67dcJ"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transition-transform duration-300 hover:scale-105"
            title="The Scoring Initiative Teaser - Watch the video"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border"
              style={{ borderColor: "rgba(77,164,91,0.4)", backgroundColor: "rgba(77,164,91,0.08)" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: "#4da45b" }}>
                <path d="M19.615 3.175c-3.674-3.673-9.63-3.673-13.304 0-3.674 3.674-3.674 9.63 0 13.304 3.673 3.673 9.63 3.673 13.304 0 3.674-3.674 3.674-9.63 0-13.304zm-6.107 10.945v-5.25l4.524 2.625-4.524 2.625z"/>
              </svg>
              <span className="text-[10px] tracking-[0.12em] uppercase font-bold"
                style={{ color: "#4da45b" }}
              >
                Watch Teaser
              </span>
            </div>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-[10px] tracking-[0.12em] uppercase font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: "#000", backgroundColor: "#4da45b", boxShadow: "0 0 15px rgba(77,164,91,0.6)" }}
            >
              Enter for $5
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
