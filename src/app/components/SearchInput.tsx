"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type Props = {
  value: string;
  onChange: (v: string) => void;
  onEnter: () => void;
};

export default function SearchInput({ value, onChange, onEnter }: Props) {
  return (
    <Input
      placeholder="Search movie"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onEnter();
        }
      }}
    />
  );
}
