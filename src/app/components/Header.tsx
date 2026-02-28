"use client";

import { useState, useEffect } from "react";
import GenrePicker from "@/app/components/GenrePicker";
import SearchInput from "@/app/components/SearchInput";
import SearchResultList from "@/app/about/components/SearchResultList";
import { TbMovie } from "react-icons/tb";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";

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
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const TOKEN = process.env.NEXT_PUBLIC_MOVIE_KEY;

  // Бичих бүрт 400ms хүлээгээд API дуудна
  useEffect(() => {
    const q = search.trim();

    if (!q) {
      setResults([]);
      setOpen(false);
      return;
    }

    const timeout = setTimeout(async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(q)}&language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: "application/json",
          },
        },
      );

      if (!res.ok) {
        setResults([]);
        setOpen(false);
        return;
      }

      const data = await res.json();
      setResults(data?.results ?? []);
      setOpen(true);
    }, 400);

    return () => clearTimeout(timeout);
  }, [search]);

  // Enter дарахад /search page руу шилжих
  const handleEnter = () => {
    const q = search.trim();
    if (!q) return;
    setOpen(false);
    router.push(`/search?query=${encodeURIComponent(q)}`);
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-20 py-4 border-b gap-2">
      <Link
        href={`/`}
        className="flex items-center gap-2 italic text-indigo-700 font-bold"
      >
        <TbMovie />
        <p>Movie Z</p>
      </Link>

      <div className="flex items-center gap-3">
        <div className="hidden md:block">
          <GenrePicker value={genres} onChange={setGenres} />
        </div>

        <div className="relative flex items-center">
          <SearchInput
            value={search}
            onChange={(v) => setSearch(v)}
            onEnter={handleEnter}
          />

          {open && (
            <SearchResultList
              word={search}
              results={results}
              onClose={() => setOpen(false)}
              onNavigate={() => {
                setOpen(false);
                setSearch("");
              }}
            />
          )}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="h-9 w-9 border-2 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {theme === "dark" ? (
            <MdOutlineLightMode className="text-xl" />
          ) : (
            <MdOutlineDarkMode className="text-xl" />
          )}
        </button>
      </div>
    </header>
  );
};
