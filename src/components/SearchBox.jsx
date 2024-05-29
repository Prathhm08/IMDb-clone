"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="flex justify-between px-4 max-w-6xl lg:ml-auto g-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full h-7 rounded-md placeholder-gray-500 outline-none bg-slate-100 flex-1 mx-4 px-2 text-slate-900"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-700 border dark:text-slate-50 border-black px-2 hover:bg-slate-500 rounded-md"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
}
