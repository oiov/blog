import { Navigation } from "../components/nav";
import { siteData } from "@/config/site";
import { Metadata } from "next";
import { Card } from "../components/card";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import DefaultIcon from "../components/avatar-icon";
import TwikooComment from "./twikoo";

export const metadata: Metadata = siteData("留言板 | oiov");

const links = [
  {
    title: "Chaoszhu'Blog",
    url: "https://chaoszhu.com",
    icon: "https://chaoszhu.com/avatar.png",
  },
  {
    title: "mggg's Blog",
    url: "https://mggg.cloud",
    icon: "",
  },
  {
    title: "伴夜",
    url: "https://www.aitimi.cn",
    icon: "https://www.aitimi.cn/favicon.ico",
  },
  {
    title: "royalknight",
    url: "https://vtron.site/blog/index.html",
    icon: "",
  },
  {
    title: "Blackcell",
    url: "https://next.blackcell.fun/",
    icon: "/friends/blackcell.ico",
  },
  {
    title: "lezhi blog",
    url: "https://zlzzlzlz.github.io",
    icon: "",
  },
  {
    title: "Gholts' Blog",
    url: "https://blog.gholts.top",
    icon: "https://avatars.githubusercontent.com/u/104642670?v=4",
  },
];

export default function Comment() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex flex-col items-center min-h-screen px-4 mx-auto py-24">
        <h2 className="text-zinc-200 font-bold text-xl mb-6">友情链接</h2>
        <div className="grid grid-cols-2 gap-4 mx-auto lg:mx-0 md:grid-cols-3 mb-10">
          {links.map((link) => (
            <Card key={link.title}>
              <a
                href={link.url}
                target="_blank"
                className="p-3 block w-40 md:w-56">
                <div className="mb-1 flex justify-between items-start">
                  {link.icon ? (
                    <Image
                      src={link.icon}
                      alt={link.title}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <DefaultIcon />
                  )}
                  <ExternalLink className="text-zinc-500" size={16} />
                </div>
                <p className="text-zinc-200 text-sm ml-1">{link.title}</p>
              </a>
            </Card>
          ))}
        </div>

        <h2 className="text-zinc-200 font-bold text-xl mb-6">留言区</h2>
        <div className="max-w-screen-md w-full text-white">
          <TwikooComment />
        </div>
      </div>
    </div>
  );
}
