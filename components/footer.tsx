"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function Footer() {
  const [year, setYear] = useState("")

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="max-w-[1200px] mx-auto my-4 mb-[26px] px-5 flex justify-between items-center gap-3 text-[9px] text-[#b2b2b2]">
      <div>© {year} Ariladia Entertainment. All Rights Reserved.</div>
      <Image
        src="/images/design-mode/AriLadia.png"
        alt="Ariladia Logo"
        width={60}
        height={18}
        className="opacity-80 object-contain"
      />
    </footer>
  )
}
