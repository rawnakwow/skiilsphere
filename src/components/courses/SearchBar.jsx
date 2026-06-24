"use client";

import { Input } from "@heroui/react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <Input
      id="course-search-input"
      type="text"
      placeholder="Search courses by title..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      startContent={<FaSearch className="text-default-400" />}
      variant="bordered"
      size="lg"
      classNames={{
        inputWrapper: "border-2 hover:border-primary focus-within:border-primary transition-colors"
      }}
    />
  );
}
