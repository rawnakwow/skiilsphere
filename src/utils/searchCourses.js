
 
export function searchCourses(courses, query = "") {
  if (!Array.isArray(courses)) return [];
  if (!query.trim()) return courses;
  return courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );
}

export function filterByCategory(courses, category) {
  if (!category || category === "All") return courses;
  return courses.filter((course) => course.category === category);
}

export function filterByLevel(courses, level) {
  if (!level || level === "All") return courses;
  return courses.filter((course) => course.level === level);
}
