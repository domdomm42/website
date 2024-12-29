export const getDifficultyColor = (difficulty: string) => {
  if (difficulty === "Easy") return "bg-green-900 text-green-300";
  if (difficulty === "Medium") return "bg-yellow-900 text-yellow-300";
  if (difficulty === "Hard") return "bg-red-900 text-red-300";
  return "bg-gray-900 text-gray-300";
};
