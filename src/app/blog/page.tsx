import Link from "next/link";
import { FadeIn } from "../../components/FadeIn";
import Logo from "../../components/Logo";
import { getPostsData } from "../../lib/blog";

export default function BlogPage() {
  const posts = getPostsData();

  return (
    <div className="min-h-screen bg-[#191a19] p-6 sm:p-8 md:p-10 lg:p-12 xl:px-24 xl:py-16 2xl:px-32 2xl:py-24">
      <Link
        href="/"
        className="text-gray-400 hover:text-white transition-colors duration-200 mb-8 inline-block"
      >
        <Logo />
      </Link>

      <FadeIn>
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">Blog</h1>
          <p className="text-gray-400">Thoughts and musings</p>
        </header>
      </FadeIn>

      <main className="space-y-12">
        {posts.map((post) => (
          <FadeIn key={post.slug}>
            <article className="border-b border-gray-800 pb-8">
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-2xl text-white mb-2 hover:text-gray-300 transition-colors">{post.title}</h2>
                <p className="text-gray-400 mb-3 text-sm">{post.date}</p>
                <p className="text-gray-300">{post.excerpt}</p>
              </Link>
            </article>
          </FadeIn>
        ))}
      </main>

      <FadeIn>
        <footer className="mt-16 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Oudom Lim. All rights reserved.</p>
        </footer>
      </FadeIn>
    </div>
  );
}
