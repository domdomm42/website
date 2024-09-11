import ProjectCard from "../components/ProjectCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#191a19] p-8 sm:p-6 md:p-8 lg:p-12 xl:px-48 xl:py-24 2xl:px-96 2xl:py-32">
      <header className="mb-12 flex justify-between items-center">
        <h1 className="text-2xl text-white">LOGO</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/blog"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact me
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <h2 className="text-5xl text-white mb-8">
          welcome to
          <span className="block">
            my part of <span className="gradient-text">the web</span>
          </span>
        </h2>

        <p className="text-gray-400 max-w-4xl mb-40 text-lg">
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
            🚀 what am I up to right now?
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

      <footer className="mt-20 border-t border-gray-800 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; 2024 Oudom Lim. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
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
              href="mailto:your.email@example.com"
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
      </footer>
    </div>
  );
}
