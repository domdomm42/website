import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

// type Problem = {
//   id: number;
//   title: string;
//   difficulty: "Easy" | "Medium" | "Hard";
//   category: string;
//   slug: string;
//   completed?: boolean;
// };

export default async function Grind75() {
  // You'll need to implement this function
  // const problems = await getGrind75List();

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
            <div className="text-3xl text-green-400">0/75</div>
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
            <div className="text-3xl text-purple-400">0%</div>
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
          <select className="bg-[#1E1F1E] text-white px-4 py-2 rounded-lg">
            <option value="all">All Categories</option>
            <option value="array">Array</option>
            <option value="string">String</option>
            {/* Add more categories */}
          </select>
          <select className="bg-[#1E1F1E] text-white px-4 py-2 rounded-lg">
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
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
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {/* NEED TO MAP THROUGH PROBLEMS */}
              <tr className="hover:bg-[#1E1F1E] transition-colors">
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">
                  <a
                    href="/grind75/two-sum"
                    className="text-blue-400 hover:underline"
                  >
                    Two Sum
                  </a>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full text-sm bg-green-900 text-green-300">
                    Easy
                  </span>
                </td>
                <td className="px-6 py-4">Array</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full text-sm bg-gray-700 text-gray-300">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </FadeIn>
      <Footer />
    </div>
  );
}
