"use client";

import { Card } from "@heroui/react";
import { FaPlayCircle } from "react-icons/fa";

export default function Curriculum({ items }) {
  const curriculumItems = Array.isArray(items) ? items : [];

  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
      <Card className="border border-divider shadow-none">
        <Card.Content className="p-0">
          {curriculumItems.map((item, index) => (
            <div key={index} className="flex items-center p-4 hover:bg-content2 transition-colors border-b border-divider last:border-b-0 cursor-pointer">
              <div className="mr-4 text-default-400">
                <FaPlayCircle size={24} />
              </div>
              <div className="flex-grow">
                <h4 className="font-medium text-lg">Module {index + 1}: {item}</h4>
              </div>
              <div className="text-sm text-default-500 font-mono">
                10:00
              </div>
            </div>
          ))}
        </Card.Content>
      </Card>
    </>
  );
}
