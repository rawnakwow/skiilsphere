"use client";

import { useParams } from "next/navigation";
import CourseDetailsComponent from "@/components/courses/CourseDetails";
import Curriculum from "@/components/courses/Curriculum";
import ProtectedRoute from "@/components/shared/ProtectedRoute";
import { FaCheckCircle } from "react-icons/fa";
import { useCourses } from "@/hooks/useCourses";

export default function CourseDetails() {
  const { id } = useParams();
  const { getCourseById } = useCourses();
  const course = getCourseById(id);

  if (!course) return null; 

  const curriculumList = [
    "Introduction to the Course",
    "Setting up the Environment",
    "Core Concepts & Fundamentals",
    "Advanced Techniques",
    "Building a Real-World Project",
    "Deployment and Best Practices"
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background pb-20">
        <CourseDetailsComponent course={course} />

        <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <Curriculum items={curriculumList} />
          </div>
          
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6">What you will learn</h2>
            <ul className="space-y-4">
              {[1, 2, 3, 4].map((_, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-success mt-1 shrink-0" />
                  <span className="text-default-600">Master the core concepts and principles of {course.category.toLowerCase()}.</span>
                </li>
              ))}
            </ul>
            
            <hr className="w-full border-t border-divider opacity-50 my-8" />
            
            <h2 className="text-2xl font-bold mb-4">Instructor</h2>
            <div className="flex items-center gap-4 bg-content1 p-4 rounded-xl border border-divider">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">
                {course.instructor.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-lg">{course.instructor}</h4>
                <p className="text-default-500 text-sm">Senior Professional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
