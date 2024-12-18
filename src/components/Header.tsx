"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
interface HeaderProps {
  juaClass: string;
}

export default function Header({ juaClass }: HeaderProps) {
  const [isNavVisible, setNavVisible] = useState(false);

  //mo일시 햄버거토글
  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  //mo일시 햄버거버튼 닫기
  const closeNav = () => {
    setNavVisible(false);
  };

  //네비이름명
  const navLinks = [
    { href: "/items", label: "items" },
    { href: "/champions", label: "champion" },
    { href: "/rotation", label: "champion rotation" },
  ];
  return (
    <header
      className={`${juaClass} fixed top-0 left-0 w-full p-5 dark:bg-header-color bg-white md:py-5`}
    >
      <div className="flex items-center md:justify-between gap-5 max-w-[1200px] w-full mx-auto text-xl uppercase">
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
          <span className="hidden md:block pt-1">lol info</span>
        </Link>
        <button type="button" className="ml-auto md:hidden" onClick={toggleNav}>
          <div className="w-6 h-1 bg-black dark:bg-white mb-1"></div>
          <div className="w-6 h-1 bg-black dark:bg-white mb-1"></div>
          <div className="w-6 h-1 bg-black dark:bg-white mb-1"></div>
        </button>
        {/* nav 메뉴: 모바일에서만 보이도록 설정 (md:block, md:hidden) */}
        <nav
          className={`absolute top-[60px] right-[20px] flex items-center p-3 gap-2 flex-col text-gray-500 mx-auto rounded-md bg-black dark:bg-white md:static md:gap-5 md:flex-row md:dark:bg-transparent ${
            isNavVisible ? "block" : "hidden" // 모바일에서만 표시
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href} // 각 Link에 고유한 key를 부여
              href={link.href}
              className="hover:text-main-color transition duration-150"
              onClick={closeNav} // Link 클릭 시 nav 숨기기
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 데스크탑에서만 보이는 nav 메뉴 */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-main-color transition duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
