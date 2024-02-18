"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Giscus from "@giscus/react";

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto py-24">
        <Giscus
          id="comments"
          repo="yesmore/blogv2"
          repoId="R_kgDOLTw5nQ"
          category="Announcements"
          categoryId="DIC_kwDOLTw5nc4CdTjI"
          mapping="url"
          term="Welcome to @giscus/react component!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="dark_protanopia"
          lang="zh-CN"
          loading="lazy"
        />
      </div>
    </div>
  );
}
