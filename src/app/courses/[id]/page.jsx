import courses from "@/data/courses.json";
import { notFound } from "next/navigation";

export default function CourseDetails({
  params,
}) {
  const course = courses.find(
    (item) =>
      item.id === Number(params.id)
  );

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto p-6">

      <img
        src={course.image}
        alt={course.title}
        className="w-full rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6">
        {course.title}
      </h1>

      <p className="mt-4">
        {course.description}
      </p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">
          Curriculum
        </h2>

        <ul className="list-disc ml-6 mt-4">
          <li>Introduction</li>
          <li>Core Concepts</li>
          <li>Hands-on Projects</li>
          <li>Advanced Topics</li>
          <li>Final Assessment</li>
        </ul>
      </div>
    </div>
  );
}