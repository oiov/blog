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
      mapping="title"
      term="Hi"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="bottom"
      theme="noborder_dark"
      lang="zh-CN"
      loading="lazy"
    />
  );
}
