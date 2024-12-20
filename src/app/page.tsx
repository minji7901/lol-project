import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const LINK_NAME = ["items", "champions", "rotation"];
  return (
    <div className="h-full mt-70 overflow-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Welcome to League Of Legend Info!
        </h1>
        <p className="mt-2">
          You can find information about champions, items, and champion
          rotation.
        </p>
      </div>
      <div className="mt-7 flex justify-between gap-5 flex-col md:flex-row">
        {LINK_NAME.map((item) => (
          <div
            key={item}
            className={`p-2 rounded-lg ${
              item === "rotation" ? "col-span-2" : ""
            } 
    bg-gradient-to-tr from-[#3b82f6] via-[#6366F1] to-[#FBBF24] 
    bg-[length:400%_400%] animate-gradient-animation
  `}
            style={{
              clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, -52% 100%)",
            }}
          >
            <Link href={`/${item}`} className="block">
              <div className="relative group">
                <img
                  src={`/images/${item}.jpg`}
                  alt={item}
                  className="w-full h-40 object-cover rounded-lg"
                  style={{
                    clipPath:
                      "polygon(10% 0%, 100% 0%, 100% 100%, 100% 100%, -30% 100%)",
                  }}
                />
              </div>
              <p className="uppercase mt-5 font-semibold text-center">{item}</p>
              <div className="flex items-center justify-center gap-2 mt-2 mb-4">
                <p className="text-sm">Explore Now</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
