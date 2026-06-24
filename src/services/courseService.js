export const getCourses = async () => {
  const res = await fetch("http://localhost:8000/models");
  return res.json();
};