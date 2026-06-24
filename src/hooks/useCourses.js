import { useState, useMemo } from "react";
import coursesData from "@/data/courses.json";
import { searchCourses } from "@/utils/searchCourses";
import { getTopCourses } from "@/utils/getTopCourses";

export function useCourses() {
  const [courses, setCourses] = useState(coursesData);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    return searchCourses(courses, searchQuery);
  }, [courses, searchQuery]);

  const getCourseById = (id) => {
    return courses.find((c) => c.id.toString() === id.toString());
  };

  const getPopularCourses = (limit = 3) => {
    return getTopCourses(courses, limit);
  };

  return {
    courses,
    setCourses,
    searchQuery,
    setSearchQuery,
    filteredCourses,
    getCourseById,
    getPopularCourses,
  };
}
