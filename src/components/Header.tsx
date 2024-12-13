import Link from "next/link";

interface HeaderProps {
  juaClass: string;
}

export default function Header({ juaClass }: HeaderProps) {
  return (
    <header
      className={`${juaClass} fixed top-0 left-0 w-full py-5 bg-[rgba(0,0,0,0.3)]`}
    >
      <div className="flex items-center justify-between gap-10 max-w-[1200px] w-full mx-auto text-xl uppercase">
        <Link href={"/"} className="flex items-center gap-3 text-blue-500 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span className="pt-1">lol info</span>
        </Link>
        <nav className="flex items-center gap-5  text-gray-500">
          <Link
            href={"/items"}
            className="hover:text-white transition duration-150"
          >
            items
          </Link>
          <Link
            href={"/champions"}
            className="hover:text-white transition duration-150"
          >
            champion
          </Link>
          <Link
            href={"/rotation"}
            className="hover:text-white transition duration-150"
          >
            champion rotation
          </Link>
        </nav>
      </div>
    </header>
  );
}
