"use client";

// 1. Removed 'Image as HeroImage' from the HeroUI import statement
import { Card, Chip, Button } from "@heroui/react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function CourseCard({ course, hoverEffect = "scale", border = "none" }) {
  const hoverClass = hoverEffect === "scale" ? "hover:scale-105" : "hover:-translate-y-2";
  const borderClass = border === "bordered" ? "border border-divider" : "";

  return (
    <Card className={`h-full transition-transform duration-300 ${hoverClass} ${borderClass}`}>
      
      <Card.Content className="p-0">
        {/* 2. Replaced <HeroImage /> with a standard native <img> tag */}
        <img 
          src={course.image || "/fallback-course.jpg"} 
          alt={course.title} 
          className="w-full h-48 object-cover rounded-t-xl" 
        />
        <div className="p-5">
          <div className="flex justify-between items-start mb-2 gap-2">
            <Chip color={border === "bordered" ? "secondary" : "primary"} variant="flat" size="sm" className="shrink-0">
              {course.category}
            </Chip>
            <div className="flex items-center text-warning shrink-0">
              <FaStar className="mr-1" />
              <span className="font-semibold">{course.rating}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 line-clamp-2" title={course.title}>{course.title}</h3>
          <p className="text-default-500 text-sm mb-4">By {course.instructor}</p>
          
          {course.level && course.duration && (
            <div className="flex justify-between text-xs text-default-500 bg-content2 p-2 rounded-lg mt-auto">
              <span>{course.level}</span>
              <span>{course.duration}</span>
            </div>
          )}
        </div>
      </Card.Content>

      <Card.Footer className="px-5 pt-0 pb-5">
        <Link href={`/courses/${course.id}`} className="w-full">
          <Button 
            as="span"
            color={border === "bordered" ? "default" : "primary"} 
            variant={border === "bordered" ? "flat" : "solid"} 
            className={`w-full font-medium ${border === "bordered" ? "border border-divider" : ""}`}
          >
            View Details
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}
