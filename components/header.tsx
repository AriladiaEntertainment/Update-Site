"use client"

import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 border-b"
      style={{
        background: "radial-gradient(circle at top left, #161921 0%, #020308 65%)",
        backdropFilter: "blur(18px)",
        borderColor: "rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 py-3.5 flex items-center justify-between gap-[18px]">
        <Link href="#home" className="flex items-center gap-2.5">
          <Image
            src="/images/design-mode/AriLadia.png"
            alt="Ariladia Entertainment Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <div className="text-[18px] tracking-[0.14em] uppercase text-[#f5f5f5] font-serif font-light text-center text-chart-4">
            Ariladia Entertainment
          </div>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-[18px] list-none text-[13px] tracking-[0.14em] uppercase">
            {["Home", "About", "Portfolio", "Studio", "Credits", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="py-1.5 relative text-[#b2b2b2] transition-colors duration-[0.25s] hover:text-[#f5f5f5] group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-gradient-to-r from-[#4da45b] via-[#3c7fb8] to-[#bb4343] transition-all duration-[0.25s] group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="#contact"
          className="md:hidden inline-flex py-[7px] px-3.5 rounded-full border text-[11px] uppercase tracking-[0.16em] text-[#d0d0d0]"
          style={{ borderColor: "rgba(255,255,255,0.16)" }}
        >
          Request A Score
        </Link>
      </div>
    </header>
  )
}
