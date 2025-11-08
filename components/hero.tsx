import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="max-w-[1200px] mx-auto px-5 pt-20 pb-[72px]">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,3fr)_minmax(260px,2fr)] gap-10 md:gap-10 items-center">
        {/* Left Content */}
        <div>
          <div className="text-[11px] text-[#3c7fb8] tracking-[0.16em] uppercase mb-2">
            Cinematic Music • Trailers • Games • TV
          </div>
          <h1 className="text-[clamp(28px,4vw,40px)] font-medium tracking-[0.16em] uppercase mb-3 text-[#f5f5f5]">
            {"Scoring the future, Frame by Frame"}    
          </h1>
          <p className="text-sm text-[#d0d0d0] mb-[18px] max-w-[460px]">
            Ariladia Entertainment is the composing studio of Tymar Miles, crafting emotional, high-impact scores that
            elevate stories for film, trailers, and interactive worlds.
          </p>
          <p className="text-[13px] text-[#b2b2b2] mb-[22px]">
            From intimate character themes to large-scale hybrid orchestral soundscapes, every cue is built to move your
            audience and serve your vision.
          </p>
          <div className="flex gap-3 mb-[18px] flex-wrap">
            <a
              href="https://youtube.com/@ariladia.entertainment?si=0Dr5O9zI6gez9CrF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2.5 px-[18px] rounded-full text-[11px] tracking-[0.16em] uppercase font-semibold transition-all duration-[0.25s] bg-gradient-to-r from-[#4da45b] to-[#3c7fb8] text-[#010101] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.45)] hover:scale-105"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch / Listen
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 py-2.5 px-[18px] rounded-full border text-[11px] tracking-[0.16em] uppercase text-[#d0d0d0] transition-all duration-[0.25s] hover:bg-[rgba(255,255,255,0.04)] hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.3)] text-popover-foreground bg-chart-5"
              style={{ borderColor: "rgba(255,255,255,0.16)" }}
            >
              Book for Your Project
            </Link>
          </div>
          <div className="text-[10px] text-[#b2b2b2]">
            Available for directors, producers, game studios, and brands looking for narrative-driven music with
            professional delivery.
          </div>
        </div>

        {/* Right Media Card */}
        <div
          className="rounded-[24px] border p-8 shadow-[0_10px_34px_rgba(0,0,0,0.7)] flex flex-col items-center text-center gap-6 md:order-none order-[-1]"
          style={{
            background: "radial-gradient(circle at top, #181c27 0%, #070912 60%)",
            borderColor: "rgba(255,255,255,0.12)",
          }}
        >
          <Image
            src="/images/design-mode/AriLadia.png"
            alt="Ariladia Logo"
            width={180}
            height={180}
            className="object-contain"
          />
          <div className="text-sm text-[#d0d0d0] leading-relaxed">
            <p className="mb-3">
              <strong className="text-[#f5f5f5]">Welcome!</strong> The name "Ariladia" was created to represent growth,
              professionalism, unity, and creativity.
            </p>
            <p className="text-[13px] text-[#b2b2b2]">
              Thank you for sharing your time with me and embracing the power of creativity and the joy of music.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
