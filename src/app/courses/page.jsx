"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import CourseCard from "@/components/courses/CourseCard";
import SearchBar from "@/components/courses/SearchBar";
import PageTitle from "@/components/shared/PageTitle";
import { useCourses } from "@/hooks/useCourses";

export default function CoursesPage() {
  const { searchQuery, setSearchQuery, filteredCourses } = useCourses();

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <PageTitle 
            title="Explore All Courses" 
            subtitle="Find the perfect course to advance your skills." 
          />
          
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="w-full md:w-96">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </motion.div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <CourseCard course={course} border="bordered" hoverEffect="translate" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-content1 rounded-xl border border-divider">
            <h3 className="text-2xl font-bold mb-2">No courses found</h3>
            <p className="text-default-500">Try adjusting your search query.</p>
            <Button 
              color="primary" 
              variant="flat" 
              className="mt-6"
              onClick={() => setSearchQuery("")}
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
