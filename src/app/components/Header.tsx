"use client";

import { useState } from "react";
import GenrePicker from "@/app/components/GenrePicker";
import SearchInput from "@/app/components/SearchInput";
import SearchResultList from "@/app/about/components/SearchResultList";
import { TbMovie } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

type Movie = {
  id: number;
  title: string;
  release_date?: string;
  poster_path?: string | null;
  vote_average?: number;
};

export const Header = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const [open, setOpen] = useState(false);

  const TOKEN = process.env.NEXT_PUBLIC_MOVIE_KEY;

  const handleSearch = async () => {
    const q = search.trim();
    if (!q) return;

    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      q,
    )}&language=en-US&page=1`;

    console.log("FETCH:", url);

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: "application/json",
      },
    });

    console.log("STATUS:", res.status);

    if (!res.ok) {
      const errText = await res.text();
      console.log("ERROR BODY:", errText);
      setResults([]);
      setOpen(false);
      return;
    }

    const data = await res.json();
    setResults(data?.results ?? []);
    setOpen(true);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <div className="flex items-center gap-2 italic text-indigo-700 font-semibold">
        <TbMovie />
        <p>Movie Z</p>
      </div>

      <div className="flex items-center gap-3">
        <GenrePicker value={genres} onChange={setGenres} />

        <div className="relative flex items-center gap-1">
          <SearchInput
            value={search}
            onChange={(v) => {
              setSearch(v);
              setOpen(true);
            }}
            onEnter={handleSearch}
          />

          {open && (
            <SearchResultList
              word={search}
              results={results}
              onClose={() => setOpen(false)}
            />
          )}
        </div>
      </div>
      <div>Icon</div>
    </header>
  );
};
