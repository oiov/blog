import Link from "next/link";

export default async function NotFound() {
  return (
    <>
      <div className="h-screen bg-[#1f2023] text-white flex w-screen flex-col items-center justify-center">
        哦豁，页面不见了！
        <Link href="/">
          <button className="mt-4 rounded-md border px-4 py-2 text-sm hover:border-gray-800">
            回到首页
          </button>
        </Link>
      </div>
    </>
  );
}
