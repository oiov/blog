import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "mggg.cloud",
      "zhulijun.club",
      "www.aitimi.cn",
    ],
  },
  experimental: {
    mdxRs: true,
  },
};

export default withContentlayer(nextConfig);
