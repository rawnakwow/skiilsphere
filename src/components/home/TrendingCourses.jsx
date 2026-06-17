import  courses  from "@/data/courses";
import Link from "next/link";

export default function TrendingCourses() {
  const trending = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">
        🔥 Trending Courses
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {trending.map((course) => (
          <div key={course.id} className="border p-4 rounded-lg">

            <h3 className="font-bold">{course.title}</h3>
            <p className="text-sm">{course.instructor}</p>
            <p>⭐ {course.rating}</p>

            <Link
              href={`/courses/${course.id}`}
              className="text-blue-600"
            >
              View Details
            </Link>

          </div>
        ))}
      </div>
    </section>
  );
}