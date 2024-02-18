import { Navigation } from "../components/nav";
import { siteData } from "@/config/site";
import { Metadata } from "next";
import GiscusComment from "./giscus";

export const metadata: Metadata = siteData("留言板 | yesmore");

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto py-24">
        <GiscusComment />
      </div>
    </div>
  );
}
