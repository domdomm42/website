import Header from "@/components/Header";
import ProjectCard from "../components/ProjectCard";
import { getPostsData } from "../lib/notion";
import { FadeIn } from "@/components/FadeIn";
import Footer from "@/components/Footer";
import LatestBlogCard from "@/components/LatestBlogCard";
import Experience from "@/components/Experience";

export default async function Home() {
  const posts = await getPostsData();

  const latestPost = posts[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#191a19] p-6 sm:p-8 md:p-10 lg:p-12 xl:px-24 xl:py-0 2xl:px-32 2xl:py-8 pt-0">
      <FadeIn>
        <Header />
      </FadeIn>
      <main className="flex-grow">
        <FadeIn delay={200}>
          <div className="mb-24 pt-4 sm:pt-6">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-gray-700 bg-[#1e1e1e] px-3 py-1 text-sm text-gray-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Building at Lawpath · Sydney
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              welcome to my{" "}
              <span className="gradient-text select-none">
                digital workshop
              </span>
            </h2>

            <p className="text-gray-400 max-w-2xl text-lg mb-8">
              I build software at Lawpath and care deeply about the craft.
              Outside of code I train MMA, play music, and occasionally lift
              weights.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="https://github.com/domdomm42"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/oudomlim"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:limoudom2001@gmail.com"
                aria-label="Email"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>

        <section className="mb-24">
          <FadeIn delay={200} mobileDelay={100}>
            <h3 className="text-white text-xl mb-6 font-light">
              selected works
            </h3>
          </FadeIn>
          <FadeIn delay={400} mobileDelay={200}>
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 xl:grid-cols-3">
              <ProjectCard
                title="Lawpath"
                image="/lawpath.png"
                description="Helping small businesses"
                link="https://lawpath.com.au/"
              />
              <ProjectCard
                title="OpenOnion"
                image="/ProductSample2.webp"
                description="Helping students navigate university life"
                badge="Archived"
                link="https://pls.openonion.ai"
              />
              <ProjectCard
                title="Vocal AI"
                image="/vocalai.png"
                description="Speech-To-Speech AI Assistant"
                link="https://vocalai.netlify.app"
              />
            </div>
          </FadeIn>
        </section>

        <FadeIn>
          <section className="mb-24">
            <h3 className="text-white text-xl mb-6 font-light">
              💼 where I&apos;ve worked
            </h3>
            <Experience />
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-24">
            <h3 className="text-white text-xl mb-6 font-light">
              📝 check out my latest blog
            </h3>
            <LatestBlogCard post={latestPost} />
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-24">
            <div className="rounded-2xl border border-gray-800 bg-[#1e1e1e] px-8 py-12 text-center">
              <h3 className="text-3xl sm:text-4xl text-white mb-4">
                Let&apos;s build something
              </h3>
              <p className="text-gray-400 max-w-xl mx-auto mb-8">
                Always happy to chat about new ideas, opportunities, or just
                trading notes on code and training.
              </p>
              <a
                href="mailto:limoudom2001@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-200 hover:scale-105"
                data-cursor-hover
              >
                Get in touch
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>
          </section>
        </FadeIn>
      </main>
      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
}
