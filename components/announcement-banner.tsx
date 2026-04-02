import Link from "next/link"

export function AnnouncementBanner() {
  return (
    <div className="w-full flex items-center justify-center py-2.5 px-4 text-center"
      style={{ background: "rgba(2,3,8,0.92)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="flex items-center gap-3 flex-wrap justify-center">
        {/* Glowing dot */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: "#4da45b" }}
          />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5"
            style={{ backgroundColor: "#4da45b" }}
          />
        </span>

        <span className="text-[11px] tracking-[0.14em] uppercase font-semibold"
          style={{ color: "#d0d0d0" }}
        >
          Now Open:
        </span>

        <span className="text-[11px] tracking-[0.08em] uppercase"
          style={{ color: "#b2b2b2" }}
        >
          The Scoring Initiative — 5 winners receive a custom professional score
        </span>

        <Link
          href="#scoring-initiative"
          className="text-[10px] tracking-[0.14em] uppercase font-bold px-3 py-1 rounded-full border transition-all duration-300 hover:scale-105"
          style={{
            color: "#4da45b",
            borderColor: "rgba(77,164,91,0.4)",
            boxShadow: "0 0 10px rgba(77,164,91,0.25)",
          }}
        >
          Enter for $5
        </Link>
      </div>
    </div>
  )
}
