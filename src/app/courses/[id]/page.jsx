"use client";

import { courses } from "@/data/courses";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function CourseDetails({ params }) {
  const router = useRouter();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 🔐 PROTECTION
    if (!token) {
      router.push("/signin");
      return;
    }

    const found = courses.find(
      (c) => c.id === parseInt(params.id)
    );

    setCourse(found);
  }, []);

  if (!course) return <p>Loading...</p>;

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold">{course.title}</h1>

      <Image
        src={course.image}
        alt={course.title}
        className="w-full h-60 object-cover mt-4"
      />

      <p className="mt-4">{course.description}</p>

      <h2 className="mt-4 font-bold">Curriculum</h2>
      <ul className="list-disc ml-6">
        <li>Introduction</li>
        <li>Core Concepts</li>
        <li>Practical Projects</li>
        <li>Final Exam</li>
      </ul>

    </div>
  );
}