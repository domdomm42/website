"use client";
import React from "react";
import Link from "next/link";
import useSound from "use-sound";
import switchOn from "../../public/switch-on.mp3";

interface BlogPostLinkProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const BlogPostLink: React.FC<BlogPostLinkProps> = ({
  slug,
  title,
  date,
  excerpt,
}) => {
  const [play] = useSound(switchOn);

  return (
    <Link
      href={`/blog/${slug}`}
      className="block group"
      onMouseEnter={() => play()}
    >
      <div className="bg-[#1E1F1E] p-8 rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-2xl border border-gray-800 group-hover:border-gray-700">
        <h2 className="text-2xl text-white mb-3 group-hover:text-blue-400 transition-colors">
          {title}
        </h2>
        <p className="text-gray-400 mb-4 text-sm">{date}</p>
        <p className="text-gray-300 line-clamp-3">{excerpt}</p>
        <div className="mt-4 text-blue-400 group-hover:text-blue-300 transition-colors">
          Read more →
        </div>
      </div>
    </Link>
  );
};

export default BlogPostLink;
