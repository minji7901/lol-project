import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col gap-5 h-full text-gray-400">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-3xl">Page Not Found</p>
      <Link href={"/"} className="border border-gray-300 text-gray-300 px-5 py-2 rounded-full font-bold hover:bg-gray-300 hover:text-main-color transition">Go To Home</Link>
    </div>
  );
}
