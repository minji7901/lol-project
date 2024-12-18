import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full dark:bg-header-color bg-white">
      <div className="max-w-[1200px] w-full mx-auto p-5  text-gray-500 text-sm md:py-5 md:text-base">
        MJ's lol info site is not endorsed by Riot Games and does not reflect
        the views or opinions of Riot Games or anyone officially involved in
        producing or managing Riot Games properties. Riot Games and all
        associated properties are trademarks or registered trademarks of Riot
        Games, Inc.
      </div>
    </footer>
  );
}
