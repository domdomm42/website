import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { getGrind75List } from "@/lib/notion";
import Link from "next/link";
import { getDifficultyColor } from "./utils";
export default async function Grind75() {
  const problems = await getGrind75List();

  const totalSolved = problems.filter(
    (problem) => problem.status === "Published"
  ).length;

  return (
    <div className="flex flex-col min-h-screen bg-[#191a19] p-6 sm:p-8 md:p-10 lg:p-12 xl:px-24 xl:py-0 2xl:px-32 2xl:py-8 pt-0">
      <FadeIn>
        <header className="flex items-center justify-between mb-12">
          <div className="relative inline-block">
            <Logo />
          </div>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#1E1F1E] p-6 rounded-lg">
            <h3 className="text-white text-lg font-semibold mb-2">Progress</h3>
            <div className="text-3xl text-green-400">{totalSolved}/75</div>
          </div>
          <div className="bg-[#1E1F1E] p-6 rounded-lg">
            <h3 className="text-white text-lg font-semibold mb-2">
              Time Spent
            </h3>
            <div className="text-3xl text-blue-400">0 hrs</div>
          </div>
          <div className="bg-[#1E1F1E] p-6 rounded-lg">
            <h3 className="text-white text-lg font-semibold mb-2">
              Completion
            </h3>
            <div className="text-3xl text-purple-400">
              {Math.round((totalSolved / 75) * 100)}%
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select className="bg-[#1E1F1E] text-white px-4 py-2 rounded-lg">
            <option value="all">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Problems Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead className="bg-[#1E1F1E]">
              <tr>
                <th className="px-6 py-3 text-left">#</th>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Difficulty</th>
                <th className="px-6 py-3 text-left">Date Published</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {problems.map((problem) => (
                <tr
                  key={problem.number}
                  className="hover:bg-[#1E1F1E] transition-colors"
                >
                  <td className="px-6 py-4">{problem.number}</td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/grind75/${problem.slug}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      {problem.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${getDifficultyColor(
                        problem.difficulty
                      )}`}
                    >
                      {problem.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4">{problem.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
      <Footer />
    </div>
  );
}
