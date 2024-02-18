"use client";
import Giscus from "@giscus/react";

export default function GiscusComment() {
  return (
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
  );
}
