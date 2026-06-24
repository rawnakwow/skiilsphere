"use client";

import { motion } from "framer-motion";
import { Card, Chip, Button } from "@heroui/react";
import { FaStar, FaClock, FaSignal } from "react-icons/fa";

export default function CourseDetails({ course }) {
  if (!course) return null;

  return (
    <div className="bg-content1 border-b border-divider py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex gap-3 mb-4">
              <Chip color="primary" variant="flat">{course.category}</Chip>
              <div className="flex items-center text-warning bg-warning/10 px-2 py-1 rounded-full text-sm font-semibold">
                <FaStar className="mr-1" /> {course.rating}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{course.title}</h1>
            <p className="text-xl text-default-500 mb-6">{course.description}</p>
            
            <div className="flex flex-wrap gap-6 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <FaClock />
                </div>
                <div>
                  <p className="text-default-500 text-xs">Duration</p>
                  <p>{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <FaSignal />
                </div>
                <div>
                  <p className="text-default-500 text-xs">Level</p>
                  <p>{course.level}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="md:col-span-1 relative">
          <Card className="border-2 border-primary shadow-2xl shadow-primary/20 overflow-visible">
            <Card.Content className="p-2">
              
              {/* FIXED RUNTIME ERROR: Lowercase <img> tag accepts arbitrary text arrays safely */}
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-auto aspect-video object-cover rounded-lg" 
              />
              
              <Button color="primary" size="lg" className="w-full mt-4 font-bold text-lg" shadow="true">
                Enroll Now
              </Button>
              <p className="text-center text-xs text-default-400 mt-3">30-Day Money-Back Guarantee</p>
            </Card.Content>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
