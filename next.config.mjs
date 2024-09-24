import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/_next/static/sounds/",
          outputPath: "static/sounds/",
        },
      },
    });
    return config;
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

export default withMDX({
  ...nextConfig,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
