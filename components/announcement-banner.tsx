import Link from "next/link"
import Image from "next/image"

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

          <Link
            href="#scoring-initiative"
            className="group relative transition-transform duration-300 hover:scale-105"
            title="The Scoring Initiative - Win a custom score for your project"
          >
            <div className="relative w-48 h-12 sm:h-14">
              <Image
                src="/scoring-initiative-banner.png"
                alt="The Scoring Initiative - Enter for $5"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.12em] uppercase font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: "#4da45b" }}
            >
              Enter for $5
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
