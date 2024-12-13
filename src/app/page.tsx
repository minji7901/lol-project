import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const TITLE = ["items", "champion", "CHAMPION RATATION"];
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome to League Of Legend Info!</h1>
        <p className="mt-2 text-gray-300">
          You can find information about champions, items, and champion
          rotation.
        </p>
      </div>
      <div className="grid grid-cols-2 mt-7 gap-5">
        {TITLE.map((item) => (
          <div
            key={item}
            className={`p-2 rounded-lg bg-[rgba(57,117,142,0.2)] ${
              item === "CHAMPION RATATION" ? "col-span-2" : ""
            }`}
          >
            <Link href={`"/${item}"`}>
              <p>{item}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
