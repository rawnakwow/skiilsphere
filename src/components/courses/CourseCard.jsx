"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Button } from "@heroui/react";

export default function CourseCard({ course }) {
  return (
    <Card className="h-full">
      <CardBody>
        <Image
          src={course.image}
          alt={course.title}
          width={500}
          height={300}
          className="w-full h-52 object-cover rounded-lg"
        />

        <h2 className="text-xl font-bold mt-4">
          {course.title}
        </h2>

        <p className="text-default-500">
          {course.instructor}
        </p>

        <p className="mt-2">
          ⭐ {course.rating}
        </p>

        <Link href={`/courses/${course.id}`}>
          <Button
            color="primary"
            className="mt-4 w-full"
          >
            View Details
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}