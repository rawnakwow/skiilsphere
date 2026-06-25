
export function getTopCourses(courses, count = 3) {
  if (!Array.isArray(courses)) return [];
  return [...courses].sort((a, b) => b.rating - a.rating).slice(0, count);
}




export function sortCourses(courses, field = "rating", order = "desc") {
  if (!Array.isArray(courses)) return [];
  return [...courses].sort((a, b) => {
    if (order === "asc") return a[field] > b[field] ? 1 : -1;
    return a[field] < b[field] ? 1 : -1;
  });
}
