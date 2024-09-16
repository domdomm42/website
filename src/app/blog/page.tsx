import { FadeIn } from "../../components/FadeIn";
import { getPostsData } from "../../lib/blog";
import BlogPostLink from "../../components/BlogPostLink";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo";

export default function BlogPage() {
  const posts = getPostsData();

  return (
    <div className="flex flex-col min-h-screen bg-[#191a19] p-6 sm:p-8 md:p-10 lg:p-12 xl:px-24 xl:py-0 2xl:px-32 2xl:py-8 pt-0">
      <FadeIn>
        <header className="mb-12 relative">
          <div className="relative inline-block">
            <Logo />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">blog</h1>
          <p className="text-gray-400 text-lg">my thoughts and musings</p>
        </header>
      </FadeIn>

      <main className="flex-grow">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 100}>
              <BlogPostLink
                slug={post.slug}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
              />
            </FadeIn>
          ))}
        </div>
      </main>

      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
}
