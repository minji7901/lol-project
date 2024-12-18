"use client";
import { useRouter } from "next/navigation";
import React, { startTransition, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-6xl font-bold">ERROR</h1>
      <p className="mt-5 mb-7 text-3xl">An error occurred</p>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
        className="border border-gray-300 text-gray-300 px-5 py-2 rounded-full font-bold hover:bg-gray-300 hover:text-main-color transition"
      >
        try again
      </button>
    </div>
  );
}
