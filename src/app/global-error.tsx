"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-6xl font-bold">ERROR</h1>
          <p className="mt-5 mb-7 text-3xl">An error occurred</p>
          <button
            onClick={() => reset()}
            className="border border-gray-300 text-gray-300 px-5 py-2 rounded-full font-bold hover:bg-gray-300 hover:text-main-color transition"
          >
            try again
          </button>
        </div>
      </body>
    </html>
  );
}
