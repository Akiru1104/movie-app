"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";

type Props = {
  value: string;
  onChange: (v: string) => void;
  onEnter: () => void;
};

export default function SearchInput({ value, onChange, onEnter }: Props) {
  return (
    <div className="flex  gap-2 items-center relative">
      <CiSearch className=" flex gap-1.5 absolute top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input
        className="flex gap-2 "
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onEnter();
          }
        }}
      />
    </div>
  );
}
