import React from "react";

export default function Title({ children }: { children: string }) {
  return (
    <h1 className="text-3xl font-bold text-center mb-5 text-secondly md:mb-10">
      {children}
    </h1>
  );
}
