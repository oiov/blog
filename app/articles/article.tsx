import type { Article } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye, Pin, View } from "lucide-react";

type Props = {
  article: Article;
  views: number;
};

export const ArticleWarpper: React.FC<Props> = ({ article, views }) => {
  return (
    <Link href={`/articles/${article.slug}`}>
      <article className="p-4 md:p-8">
        <div className="flex justify-between gap-2 items-center">
          <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
            {article.date ? (
              <time dateTime={new Date(article.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                  new Date(article.date)
                )}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </span>

          <span className="text-zinc-500 text-xs flex items-center gap-1 ml-auto">
            <Eye className="w-4 h-4" />{" "}
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
          </span>
          {article.top > 0 && (
            <span className="text-zinc-400 text-xs flex items-center">
              <Pin className="w-4 h-4" />
            </span>
          )}
        </div>
        <h2 className="z-20 mt-1 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {article.title}
        </h2>
        <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {article.description}
        </p>
      </article>
    </Link>
  );
};
