import { getPostData, getPostsData } from "../../../lib/blog";
import { FadeIn } from "../../../components/FadeIn";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    <div className="min-h-screen bg-[#191a19] p-6 sm:p-8 md:p-10 lg:p-12 xl:px-24 xl:py-16 2xl:px-32 2xl:py-24">
      <FadeIn>
        <Link
          href="/blog"
          className="text-gray-400 hover:text-white transition-colors duration-200 mb-8 inline-block"
        >
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Blog
          </span>
        </Link>

        <article className="mt-8 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">
            {postData.title}
          </h1>
          <p className="text-gray-400 mb-8">{postData.date}</p>
          <div
            className="prose prose-invert prose-lg"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </FadeIn>
    </div>
  );
}
