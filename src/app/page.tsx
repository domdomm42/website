import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#191a19] p-8 sm:p-6 md:p-8 lg:p-12 xl:px-48 xl:py-24 2xl:px-96 2xl:py-32">
      {/* <header className="mb-12">
        <h1 className="text-2xl text-white">Oudom Lim</h1>
      </header> */}

      <main className="flex-grow">
        <h2 className="text-5xl text-white mb-8">
          welcome to
          <span className="block">
            my part of <span className="gradient-text">the web</span>
          </span>
        </h2>

        <p className="text-gray-400 max-w-4xl mb-32 text-lg">
          I am a recent UNSW graduate and a lover of learning and technology.
          I&apos;ve studied and worked across diverse fields ranging from AI to
          Cybersecurity. Beyond tech, I&apos;m into perfecting my craft through
          BJJ, Muay Thai, Boxing, and weightlifting. I find that keeping active
          helps me not only physically but also improves my mood and mental
          clarity.
        </p>

        <section className="mb-40">
          <h3 className="text-white text-xl mb-6 font-light">selected works</h3>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 xl:grid-cols-3">
            <ProjectCard
              title="OpenOnion"
              image="/openonionlogo.svg"
              tags={["Full-Stack", "React", "TailwindCSS", "NextJS"]}
              description="Helping students navigate university life"
              link="https://pls.openonion.ai"
            />
            <ProjectCard
              title="EventStar"
              image="/eventstarlogo.svg"
              tags={["Full-Stack", "React", "TailwindCSS", "NextJS"]}
              description="Simplifying event management and ticketing"
              link="https://eventstar.netlify.app"
            />
            <ProjectCard
              title="Geobuddies"
              image="/geobuddieslogo.svg"
              tags={["Full-Stack", "React", "TailwindCSS", "NextJS"]}
              description="Free-to-play Geoguessr clone"
              link="https://geobuddies.netlify.app"
            />
          </div>
        </section>

        <section>
          <h3 className="text-white text-xl mb-6 font-light">
            what am I up to right now?
          </h3>
          <p className="text-gray-400 max-w-4xl mb-20 text-lg">
            I am currently working as a Full Stack Developer at a startup called
            OpenOnion.
            <br />
            <br />
            Currently, in my spare time, I am getting my hands dirty with AI and
            deep learning, currently working thorough <br />
            <a
              href="https://course.fast.ai"
              target="_blank"
              className="text-gray-400 hover:text-gray-300 underline"
            >
              &quot;Practical Deep Learning for Coders&quot;
            </a>
            . It&apos;s a great course to get you started in the field of deep
            learning. The course is structured in a top-down approach, meaning
            that you start off building models using industry-standard tools and
            techniques, before moving onto the more complex inner workings of
            said tools and techniques.
            <br />
            <br />
            <span className="text-gray-400 text-sm">
              Updated 10 September 2024
            </span>
          </p>
        </section>
      </main>
    </div>
  );
}
