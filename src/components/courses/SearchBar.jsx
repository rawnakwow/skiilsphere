"use client";

import { TextField, Input } from "@heroui/react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <TextField name="search" className="w-full max-w-xl">
      <div className="relative flex items-center w-full">
        <span className="absolute left-3 z-10 text-default-400 pointer-events-none">
          <FaSearch className="shrink-0" />
        </span>
        
        <Input
          id="course-search-input"
          type="text"
          placeholder="Search courses by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-11 pl-10 pr-4 bg-transparent border-2 border-default-200 rounded-xl outline-none transition-colors focus:border-primary text-white"
        />
      </div>
    </TextField>
  );
}
