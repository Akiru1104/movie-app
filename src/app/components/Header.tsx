"use client"

import { useState } from "react"
import GenrePicker from "@/app/components/GenrePicker"
import SearchInput from "@/app/components/SearchInput"

export const Header = () => {
  const [genres, setGenres] = useState<string[]>([])
  const [search, setSearch] = useState("")

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <img src="/HeaderLogo .png" alt="Logo" className="h-8 w-auto" />

      <div className="flex items-center gap-3">
        <GenrePicker value={genres} onChange={setGenres} />
        <SearchInput value={search} onChange={setSearch} />
      </div>
    </header>
  )
}

