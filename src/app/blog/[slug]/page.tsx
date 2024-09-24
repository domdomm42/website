import { getPostData, getPostsData } from "../../../lib/blog";
import { FadeIn } from "../../../components/FadeIn";
import { notFound } from "next/navigation";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = getPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const postData = await getPostData(params.slug);

  if (!postData) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#191a19] p-6 sm:p-8 md:p-10 lg:p-12 xl:px-24 xl:py-0 2xl:px-32 2xl:py-8 pt-0">
      <FadeIn>
        <header className="flex items-center mb-8 space-x-4">
          <div className="relative inline-block">
            <Logo />
          </div>
        </header>

        <article className="mt-8 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">
            {postData.title}
          </h1>
          <p className="text-gray-400 mb-8">- posted {postData.date}</p>
          <div className="prose prose-invert prose-lg max-w-none">
            <MDXRemote source={postData.content} />
          </div>
        </article>
      </FadeIn>
      <Footer />
    </div>
  );
}
