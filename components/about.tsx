import Image from "next/image"

export function About() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-5 py-14">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 mb-12">
        <div>
          <div className="text-[10px] uppercase tracking-[0.16em] text-[#3c7fb8] mb-1.5 text-chart-5">The Composer</div>
          <h2 className="text-[18px] uppercase tracking-[0.16em] text-[#d0d0d0] mb-4">Tymar Miles</h2>

          <p className="text-[13px] text-[#b2b2b2] leading-relaxed mb-4">
            Based in NYC, born in Poughkeepsie, New York (1988), Tymar Miles is a composer and sound designer whose work
            bridges the gap between cinematic storytelling and modern music production.
          </p>

          <p className="mt-2.5 text-[10px] text-[#d0d0d0] uppercase tracking-[0.14em] mb-2 text-chart-5">Background</p>
          <p className="text-[13px] text-[#b2b2b2] leading-relaxed mb-4">
            Tymar began producing music at the age of 12, composing on a keyboard and developing an early sensitivity to
            melody, rhythm, and emotion. His foundation was built under the mentorship of Dave Woods through the ASCAP
            Foundation.
          </p>

          <p className="text-[13px] text-[#b2b2b2] leading-relaxed mb-4">
            In 2013, Tymar advanced his musical development by attending producer camps in Los Angeles and The SAE
            Institute in New York City, learning from seasoned professionals including Ken Lewis.
          </p>

          <p className="text-[13px] text-[#b2b2b2] leading-relaxed">
            Now, as the founder of Ariladia Entertainment, Tymar channels over two decades of hands-on experience into
            original music for film, games, trailers, and TV.
          </p>
        </div>

        <div className="flex justify-center md:justify-end items-start">
          <div className="rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.12)] max-w-[280px] w-full">
            <Image
              src="/images/design-mode/Whisk_1mwnyemzkrmyizjztumnhhtlzq2n00cmwemntgj(1).jpeg"
              alt="Tymar Miles - Composer"
              width={280}
              height={400}
              className="object-cover py-0 my-24 opacity-100 mx-0 ml-0 h-[190!! Cre] h-[auto Stop] h-[auto Sto look Ip] mb-28 mt-24 size-[300px] border-[5px] rounded-none shadow-none text-left"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-[30px]">
        <div>
          <p className="mt-2.5 text-[10px] text-[#d0d0d0] uppercase tracking-[0.14em] text-chart-4">Approach</p>
          <ul className="mt-2.5 text-[13px] text-[#b2b2b2] space-y-1">
            <li>• Story-driven scoring tailored to each director's vision.</li>
            <li>• Hybrid orchestral textures with modern sound design.</li>
            <li>• Clear communication, fast revisions, and professional delivery.</li>
          </ul>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#3c7fb8] mb-1.5 text-chart-4">
            For Filmmakers & Creators
          </p>
          <p className="text-[13px] text-[#b2b2b2] leading-relaxed">
            Whether you're building a grounded drama, high-energy trailer, or atmospheric game world, Ariladia delivers
            music that locks into theme, pacing, and emotion—never generic, always specific to your project.
          </p>
        </div>
      </div>
    </section>
  )
}
