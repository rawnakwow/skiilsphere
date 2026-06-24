/**
 * Returns the top N courses sorted by rating (descending).
 * @param {Array} courses - Array of course objects.
 * @param {number} count - Number of top courses to return.
 * @returns {Array} - Top rated courses.
 */
export function getTopCourses(courses, count = 3) {
  if (!Array.isArray(courses)) return [];
  return [...courses].sort((a, b) => b.rating - a.rating).slice(0, count);
}

/**
 * Returns courses sorted by a given field.
 * @param {Array} courses
 * @param {"rating"|"title"} field
 * @param {"asc"|"desc"} order
 * @returns {Array}
 */
export function sortCourses(courses, field = "rating", order = "desc") {
  if (!Array.isArray(courses)) return [];
  return [...courses].sort((a, b) => {
    if (order === "asc") return a[field] > b[field] ? 1 : -1;
    return a[field] < b[field] ? 1 : -1;
  });
}
