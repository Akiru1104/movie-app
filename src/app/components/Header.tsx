"use client";

import { useState } from "react";
import GenrePicker from "@/app/components/GenrePicker";
import SearchInput from "@/app/components/SearchInput";
import SearchResultList from "../about/components/SearchResultList";

export const Header = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const handleSearch = async () => {
    const q = search.trim();
    if (!q) return;
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
        },
      },
    );

    const data = await res.json();
    setResults(data.results);
    setOpen(true);
    console.log("Search for:", search);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <img src="/HeaderLogo .png" alt="Logo" className="h-8 w-auto" />

      <div className="flex items-center gap-3">
        <GenrePicker value={genres} onChange={setGenres} />
        <SearchInput
          value={search}
          onChange={setSearch}
          onEnter={handleSearch}
        />
      </div>
    </header>
  );
};
