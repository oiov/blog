import Link from "next/link";
import React from "react";
import { allArticles } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { ArticleWarpper } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import { siteData } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = siteData("随手记 | yesmore");

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allArticles.map((p) => ["pageviews", "projects", p.slug].join(":"))
    )
  ).reduce((acc, v, i) => {
    acc[allArticles[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const sorted = allArticles
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    )
    .sort((a, b) => b.top - a.top);

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            随手记
          </h2>
          <p className="mt-4 text-zinc-400">
            我们都在同一片星空下，寻找各自的答案
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <ArticleWarpper
                    article={project}
                    views={views[project.slug] ?? 0}
                  />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <ArticleWarpper
                    article={project}
                    views={views[project.slug] ?? 0}
                  />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <ArticleWarpper
                    article={project}
                    views={views[project.slug] ?? 0}
                  />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
