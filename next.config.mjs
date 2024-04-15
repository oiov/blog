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
      "gcloud-1303456836.cos.ap-chengdu.myqcloud.com",
      "blog.myim.online",
      "img.vmail.dev"
    ],
  },
  experimental: {
    mdxRs: true,
  },
};

export default withContentlayer(nextConfig);
