"use client";

import { motion } from "framer-motion";
import CourseCard from "@/components/courses/CourseCard";
import coursesData from "@/data/courses.json";
import { FaFire } from "react-icons/fa";

export default function TrendingCourses() {
  const trendingCourses = [...coursesData].slice(3, 6);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 flex justify-center items-center gap-3"><FaFire className="text-danger" /> Trending Now</h2>
          <p className="text-default-500 text-lg">Courses that are currently popular among learners.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingCourses.map((course, index) => (
            <motion.div key={course.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } } }}>
              <CourseCard course={course} hoverEffect="translate" border="bordered" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
