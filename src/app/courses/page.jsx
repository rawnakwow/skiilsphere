import { courses } from "@/data/courses";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">All Courses</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="border p-4 rounded">

            <img
              src={course.image}
              className="h-40 w-full object-cover"
            />

            <h2 className="font-bold mt-2">{course.title}</h2>
            <p>{course.instructor}</p>
            <p>⭐ {course.rating}</p>

            <Link
              href={`/courses/${course.id}`}
              className="text-blue-600"
            >
              Details
            </Link>

          </div>
        ))}
      </div>

    </div>
  );
}