"use client";
import Link from "next/link";
import { useState } from "react";
import useSound from "use-sound";
import bubbleSound from "../../public/bubble.mp3";

interface LatestBlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

export default function LatestBlogCard({
  post,
}: Readonly<{
  post: LatestBlogCardProps;
}>) {
  const [isHovered, setIsHovered] = useState(false);
  const [play] = useSound(bubbleSound);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block"
      onMouseEnter={() => {
        setIsHovered(true);
        play();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-[#1E1F1E] p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-[#2a2b2a] group">
        <h4 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">
          {post.title}
        </h4>
        <p className="text-gray-400 mb-3 text-sm">{post.date}</p>
        <p className="text-gray-300 mb-4">{post.excerpt}</p>
        <span className="text-blue-400 group-hover:text-blue-300 transition-colors flex items-center">
          Read more
          <span
            className={`ml-1 transition-transform duration-300 ${
              isHovered ? "translate-x-1" : ""
            }`}
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
