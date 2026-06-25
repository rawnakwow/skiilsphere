"use client";

import { motion } from "framer-motion";
import { Card } from "@heroui/react";
import { FaClock, FaCheckCircle, FaLightbulb } from "react-icons/fa";

export default function LearningTips() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">📌 Learning Tips</h2>
          <p className="text-default-500 text-lg">Maximize your potential with these study techniques.</p>
        </motion.div>
        

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-background/60 backdrop-blur-md">
            <Card.Content className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 text-primary text-2xl">
                <FaClock />
              </div>
              <h3 className="text-xl font-bold mb-3">Time Management</h3>
              <p className="text-default-500">Dedicate specific blocks of time for learning. The Pomodoro technique (25 min study, 5 min break) is highly effective.</p>
            </Card.Content>
          </Card>

          <Card className="bg-background/60 backdrop-blur-md">
            <Card.Content className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6 text-secondary text-2xl">
                <FaCheckCircle />
              </div>
              <h3 className="text-xl font-bold mb-3">Active Recall</h3>
              <p className="text-default-500">Test yourself frequently instead of just rereading. Create flashcards and summarize concepts in your own words.</p>
            </Card.Content>
          </Card>

          <Card className="bg-background/60 backdrop-blur-md">
            <Card.Content className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-warning/20 flex items-center justify-center mx-auto mb-6 text-warning text-2xl">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-bold mb-3">Build Projects</h3>
              <p className="text-default-500">Apply what you learn immediately by building small projects. Practical application solidifies theoretical knowledge.</p>
            </Card.Content>
          </Card>
        </div>
      </div>
    </section>
  );
}
