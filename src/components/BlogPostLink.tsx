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
    <Link href={`/blog/${slug}`} className="block" onMouseEnter={() => play()}>
      <h2 className="text-2xl text-white mb-2 hover:text-gray-300 transition-colors">
        {title}
      </h2>
      <p className="text-gray-400 mb-3 text-sm">{date}</p>
      <p className="text-gray-300">{excerpt}</p>
    </Link>
  );
};

export default BlogPostLink;
