
export function formatRating(rating) {
  if (typeof rating !== "number") return "N/A";
  return rating.toFixed(1);
}

export function getRatingStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return { full, half, empty };
}
