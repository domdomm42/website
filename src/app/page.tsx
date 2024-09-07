import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#191a19] p-8 sm:p-6 md:p-8 lg:p-12 xl:p-36">
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

        <p className="text-gray-400 max-w-2xl mb-12 text-lg">
          I am a recent UNSW graduate and a lover of learning and technology.
          I&apos;ve studied and worked across diverse fields ranging from AI to
          Cybersecurity. Beyond tech, I&apos;m into perfecting my craft through
          BJJ, Muay Thai, Boxing, and weightlifting. I find that keeping active
          helps me not only physically but also improves my mood and mental
          clarity.
        </p>

        <section>
          <h3 className="text-white text-xl mb-6 font-light">
            selected projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <ProjectCard
              title="Project 1"
              image=""
              tags={["React", "TailwindCSS", "NextJS"]}
            />
            <ProjectCard
              title="Project 2"
              image=""
              tags={["React", "TailwindCSS", "NextJS"]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
