import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { FeaturedSeries } from "@/components/featured-series"
import { Portfolio } from "@/components/portfolio"
import { Studio } from "@/components/studio"
import { Credits } from "@/components/credits"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScoringInitiative } from "@/components/scoring-initiative"

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "radial-gradient(circle at top, #151821 0%, #020308 55%, #000 100%)" }}
    >
      <AnnouncementBanner />
      <Header />
      <main className="pt-[72px]">
        <Hero />
        <About />
        <FeaturedSeries />
        <Portfolio />
        <Studio />
        <Credits />
        <ScoringInitiative />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
