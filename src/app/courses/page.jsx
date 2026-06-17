"use client";

import { useState } from "react";
import courses from "@/data/courses.json";
import CourseCard from "@/components/courses/CourseCard";

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold mb-6">
        All Courses
      </h1>

      <input
        type="text"
        placeholder="Search course..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full border p-3 rounded-lg mb-8"
      />

      <div className="grid md:grid-cols-3 gap-6">

        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}

      </div>
    </div>
  );
}