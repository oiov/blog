import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { siteData } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = siteData("oiov");

const navigation = [
  { name: "项目集", href: "/projects" },
  { name: "随手记", href: "/articles" },
  { name: "关于我", href: "/about" },
  { name: "留言板", href: "/comment" },
  { name: "GPT", href: "https://chat.sorapi.dev" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-slate-500 hover:text-zinc-300">
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        𝒐𝒊𝒐𝒗.
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 mb-1">
          你做出一个很酷的东西出来，想给他起什么名都可以
        </h2>
        <div className="text-sm text-zinc-500">
          Copyright © oiov 2021-2024
          <Link
            className="text-gray-300 text-sm hover:text-gray-500 mx-1"
            href="https://status.wr.do"
            target="_blank">
            · Status
          </Link>
        </div>
      </div>
    </div>
  );
}
