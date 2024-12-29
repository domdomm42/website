import { getGrind75Data, getGrind75List } from "@/lib/notion";
import { FadeIn } from "@/components/FadeIn";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { getDifficultyColor } from "@/app/grind75/utils";

export async function generateStaticParams() {
  const problems = await getGrind75List();
  return problems.map((problem) => ({
    slug: problem.id,
  }));
}

export default async function Grind75Problem({
  params,
}: {
  params: { slug: string };
}) {
  const problemData = await getGrind75Data(params.slug);

  if (!problemData) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#191a19] p-6 sm:p-8 md:p-10 lg:p-12 xl:px-24 xl:py-0 2xl:px-32 2xl:py-8 pt-0">
      <FadeIn>
        <header className="flex items-center space-x-4">
          <div className="relative inline-block">
            <Logo />
          </div>
        </header>

        <article className="mt-8 max-w-[110em] mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">
            {problemData.title}
          </h1>
          <div className="text-gray-400 mb-8">
            <span>Problem # {problemData.number}</span>
            <span className="mx-4">•</span>
            <span
              className={`px-2 py-1 rounded-full text-sm ${getDifficultyColor(
                problemData.difficulty ?? ""
              )}`}
            >
              {problemData.difficulty}
            </span>
          </div>
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={problemData.content} />
          </div>
        </article>
      </FadeIn>
      <Footer />
    </div>
  );
}
