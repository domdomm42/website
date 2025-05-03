import Header from "@/components/Header";
import ProjectCard from "../components/ProjectCard";
import { getPostsData } from "../lib/notion";
import { FadeIn } from "@/components/FadeIn";
import Footer from "@/components/Footer";
import LatestBlogCard from "@/components/LatestBlogCard";

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
          <h2 className="text-5xl text-white mb-8">
            welcome to my{"  "}
            <span className="gradient-text select-none">digital workshop</span>
          </h2>

          <p className="text-gray-400 max-w-4xl mb-40 text-lg">
            I am a Full-stack developer and a lover of learning and technology.
            I&apos;ve studied and worked across diverse fields ranging from Web
            Development to AI. Beyond tech, I&apos;m into perfecting my craft
            through BJJ, Muay Thai, Boxing, and weightlifting. I find that
            keeping active helps me not only physically but also improves my
            mood and mental clarity.
          </p>
        </FadeIn>

        <section className="mb-40">
          <FadeIn delay={200} mobileDelay={100}>
            <h3 className="text-white text-xl mb-6 font-light">
              selected works
            </h3>
          </FadeIn>
          <FadeIn delay={400} mobileDelay={200}>
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 xl:grid-cols-3">
              <ProjectCard
                title="HiveStream"
                image="/hivestream.jpg"
                tags={["NodeJS", "NextJS", "React", "TailwindCSS", "AWS"]}
                description="AI LinkedIn Automation"
                link="https://www.hivestream.au"
              />
              <ProjectCard
                title="OpenOnion"
                image="/ProductSample2.webp"
                tags={["React", "TailwindCSS", "NextJS", "MongoDB", "Cypress"]}
                description="Helping students navigate university life"
                link="https://pls.openonion.ai"
              />
              <ProjectCard
                title="Vocal AI"
                image="/vocalai.png"
                tags={["React", "Python", "TailwindCSS", "OpenAI", "Deepgram"]}
                description="Speech-To-Speech AI Assistant"
                link="https://vocalai.netlify.app"
              />
            </div>
          </FadeIn>
        </section>

        <FadeIn>
          <section className="mb-40">
            <h3 className="text-white text-xl mb-6 font-light">
              🌊 what am I up to right now?
            </h3>
            <p className="text-gray-400 max-w-4xl mb-20 text-lg">
              I am currently working as a Full Stack Developer at Lawpath.
              <br />
              <br />
              In my spare time, I love exploring and learning new things.
              <br />
              <span className="text-gray-400 text-sm">
                Updated 3 May 2025
              </span>
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-40">
            <h3 className="text-white text-xl mb-6 font-light">
              📝 check out my latest blog
            </h3>
            <LatestBlogCard post={latestPost} />
          </section>
        </FadeIn>
      </main>
      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
}
