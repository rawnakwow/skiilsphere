"use client";

import { motion } from "framer-motion";
import { Card } from "@heroui/react";
import instructorsData from "@/data/instructors.json";
import { FaStar } from "react-icons/fa";

import Image from "next/image";


export default function TopInstructors() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">⭐ Top Instructors</h2>
          <p className="text-default-500 text-lg">Learn from industry experts who have years of real-world experience.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {instructorsData.map((instructor, index) => (
            <div key={instructor.id || index}>
              <Card className="h-full border border-divider shadow-sm">
                <Card.Content className="p-6 flex flex-col items-center text-center">
                 <Image 
    src={instructor.image} 
    alt={instructor.name} 
    width={112} 
    height={112} 
    className="w-28 h-28 object-cover rounded-full mb-4 border-2 border-primary/20" 
  />
                  <h3 className="text-lg font-bold mb-1">{instructor.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{instructor.specialty}</p>
                  
                  <div className="flex items-center gap-1 text-warning text-sm bg-warning/10 px-2 py-1 rounded-full mt-auto">
                    <FaStar />
                    <span className="font-semibold">{instructor.rating}</span>
                    <span className="text-default-500">({instructor.students} students)</span>
                  </div>
                </Card.Content>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
