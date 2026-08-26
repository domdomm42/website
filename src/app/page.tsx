import Header from "@/components/Header";
import ProjectCard from "../components/ProjectCard";
import { FadeIn } from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="page-shell">
      <div className="page-inner">
        <FadeIn>
          <Header />
        </FadeIn>

        <main className="flex-grow">
          <FadeIn delay={100}>
            <section className="mb-14 lg:mb-20">
              <h1 className="display-headline text-[clamp(2.75rem,8vw,6.75rem)] mb-10 lg:mb-14">
                Welcome to my
                <br />
                <span className="display-accent">digital workshop.</span>
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
                <p className="md:col-span-7 text-text-muted text-base sm:text-lg font-normal leading-[1.7] max-w-xl">
                  I build software at Lawpath and care deeply about the craft.
                  I&apos;ve worked in startups of different sizes, from early
                  stage to growing teams. Outside of code I train MMA, play
                  music, and occasionally lift weights.
                </p>

                <aside className="md:col-span-4 md:col-start-9 border-l border-[color:var(--rule)] pl-5 md:pl-6">
                  <p className="section-label mb-2">Now</p>
                  <p className="font-display text-base sm:text-lg text-foreground leading-snug">
                    Building at Lawpath · Sydney
                  </p>
                  <p className="text-text-muted text-sm font-normal mt-3 leading-relaxed">
                    Legal, tax, and compliance tools for Australian small
                    businesses.
                  </p>
                  <p className="text-text-muted text-xs mt-4 tracking-wide uppercase">
                    Updated Aug 2025
                  </p>
                </aside>
              </div>
            </section>
          </FadeIn>

          <hr className="hairline mb-8 lg:mb-10" />

          <section className="mb-14 lg:mb-20">
            <FadeIn delay={180} mobileDelay={80}>
              <div className="flex items-end justify-between gap-4 mb-8">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground">
                  Projects
                </h2>
                <p className="section-label hidden sm:block">01 — 03</p>
              </div>
            </FadeIn>

            <FadeIn delay={280} mobileDelay={120}>
              <div className="space-y-10 lg:space-y-12">
                <ProjectCard
                  number="01"
                  title="Lawpath"
                  description="Helping small businesses deal with the boring work"
                  link="https://lawpath.com.au/"
                  tags={["Full-stack"]}
                  logo="/lawpath-logo.png"
                  featured
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
                  <div className="md:pr-8 lg:pr-12 md:border-r border-[color:var(--rule)]">
                    <ProjectCard
                      number="02"
                      title="OpenOnion"
                      description="Helping students navigate university life"
                      archived
                      archiveStyle="kicker"
                      tags={["Full-stack"]}
                      logo="/openonionlogo.svg"
                      logoDark="/openonionlogo-dark.svg"
                      logoTone="color"
                      link="https://pls.openonion.ai"
                    />
                  </div>
                  <div className="md:pl-8 lg:pl-12">
                    <ProjectCard
                      number="03"
                      title="Vocal AI"
                      description="Speech-to-speech AI assistant"
                      tags={["Full-stack"]}
                      monogram="VA"
                      link="https://vocalai.netlify.app"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          <hr className="hairline mb-8 lg:mb-10" />

          <FadeIn>
            <section className="mb-14 lg:mb-20">
              <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-8">
                Experience
              </h2>
              <Experience />
            </section>
          </FadeIn>
        </main>

        <FadeIn>
          <Footer />
        </FadeIn>
      </div>
    </div>
  );
}
