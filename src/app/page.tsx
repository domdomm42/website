import Header from "@/components/Header";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import { getPostsData } from "../lib/blog";
import { FadeIn } from "@/components/FadeIn";
import Footer from "@/components/Footer";

export default function Home() {
  const latestPost = getPostsData()[0]; // Get the latest blog post

  return (
    <div className="flex flex-col min-h-screen bg-[#191a19] p-6 sm:p-8 md:p-10 lg:p-12 xl:px-24 xl:py-0 2xl:px-32 2xl:py-8 pt-0">
      <FadeIn>
        <Header />
      </FadeIn>
      <main className="flex-grow">
        <FadeIn delay={200}>
          <h2 className="text-5xl text-white mb-8">
            welcome to
            <span className="block">
              my{"  "}
              <span className="gradient-text select-none">
                digital workshop
              </span>
            </span>
          </h2>

          <p className="text-gray-400 max-w-4xl mb-40 text-lg">
            I am a recent UNSW graduate and a lover of learning and technology.
            I&apos;ve studied and worked across diverse fields ranging from AI
            to Cybersecurity. Beyond tech, I&apos;m into perfecting my craft
            through BJJ, Muay Thai, Boxing, and weightlifting. I find that
            keeping active helps me not only physically but also improves my
            mood and mental clarity.
          </p>
        </FadeIn>

        <section className="mb-40">
          <FadeIn delay={400}>
            <h3 className="text-white text-xl mb-6 font-light">
              selected works
            </h3>
          </FadeIn>
          <FadeIn delay={600}>
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 xl:grid-cols-3">
              <ProjectCard
                title="OpenOnion"
                image="/ProductSample2.webp"
                tags={["Full-Stack", "React", "TailwindCSS", "NextJS"]}
                description="Helping students navigate university life"
                link="https://pls.openonion.ai"
              />
              <ProjectCard
                title="EventStar"
                image="/eventstar1.png"
                tags={["Full-Stack", "React", "TailwindCSS", "NextJS"]}
                description="Simplifying event management and ticketing"
                link="https://eventstar.netlify.app"
              />
              <ProjectCard
                title="Geobuddies"
                image="/geoBuddies.png"
                tags={["Full-Stack", "React", "TailwindCSS", "NextJS"]}
                description="Free-to-play Geoguessr clone"
                link="https://geobuddies.netlify.app"
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
              I am currently working as a Full Stack Developer at a startup
              called OpenOnion.
              <br />
              <br />
              Currently, in my spare time, I am getting my hands dirty with AI
              and deep learning, currently working thorough <br />
              <a
                href="https://course.fast.ai"
                target="_blank"
                className="text-gray-400 hover:text-gray-300 underline"
              >
                &quot;Practical Deep Learning for Coders&quot;
              </a>
              . It&apos;s a great course to get you started in the field of deep
              learning. The course is structured in a top-down approach, meaning
              that you start off building models using industry-standard tools
              and techniques, before moving onto the more complex inner workings
              of said tools and techniques.
              <br />
              <br />
              <span className="text-gray-400 text-sm">
                Updated 10 September 2024
              </span>
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-40">
            <h3 className="text-white text-xl mb-6 font-light">
              📝 check out my latest blog
            </h3>
            <div className="bg-[#1E1F1E] p-6 rounded-lg shadow-lg">
              <Link href={`/blog/${latestPost.slug}`} className="block">
                <h4 className="text-2xl text-white mb-2 hover:text-gray-300 transition-colors">
                  {latestPost.title}
                </h4>
                <p className="text-gray-400 mb-3 text-sm">{latestPost.date}</p>
                <p className="text-gray-300 mb-4">{latestPost.excerpt}</p>
                <span className="text-blue-400 hover:text-blue-300 transition-colors">
                  Read more →
                </span>
              </Link>
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
