import Link from "next/link"

export function AnnouncementBanner() {
  const videoId = "6nko1WBKVC4"
  
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
            Featured:
          </span>

          <Link
            href={`https://youtu.be/6nko1WBKVC4`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transition-transform duration-300 hover:scale-105"
            title="The Scoring Initiative - Watch the teaser"
          >
            <div className="relative w-44 h-11 sm:h-[50px] rounded-lg overflow-hidden bg-gray-900 flex items-center justify-center border border-gray-700 hover:border-green-500/50 transition-colors"
              style={{ boxShadow: "0 0 20px rgba(77,164,91,0.2)" }}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=0&modestbranding=1`}
                title="The Scoring Initiative - Video Teaser"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="pointer-events-none"
              />
            </div>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-[10px] tracking-[0.12em] uppercase font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: "#000", backgroundColor: "#4da45b", boxShadow: "0 0 15px rgba(77,164,91,0.6)" }}
            >
              Watch Now
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
