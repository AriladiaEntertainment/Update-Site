import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { Studio } from "@/components/studio"
import { Credits } from "@/components/credits"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "radial-gradient(circle at top, #151821 0%, #020308 55%, #000 100%)" }}
    >
      <Header />
      <main className="pt-[88px]">
        <Hero />
        <About />
        <Portfolio />
        <Studio />
        <Credits />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
