"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: (
      <>
        Upgrade Your <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Skills</span> Today 🚀
      </>
    ),
    description: "Take your career to the next level with our premium online courses.",
    primaryBtn: { text: "Explore Courses", href: "/courses" },
    secondaryBtn: { text: "Join for Free", href: "/signup" },
    gradient: "from-violet-500/10 to-fuchsia-500/10",
  },
  {
    id: 2,
    title: (
      <>
        Learn from <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Industry Experts</span> 🎓
      </>
    ),
    description: "Gain real-world knowledge from top-tier professionals working in leading tech companies.",
    primaryBtn: { text: "Browse Courses", href: "/courses" },
    secondaryBtn: { text: "Meet Instructors", href: "/#instructors" },
    gradient: "from-emerald-500/10 via-cyan-500/10 to-blue-500/10",
  },
  {
    id: 3,
    title: (
      <>
        Flexible Learning, <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">Anywhere</span> 📱
      </>
    ),
    description: "Study at your own pace on desktop or mobile. Lifetime access to all course materials.",
    primaryBtn: { text: "Start Learning", href: "/courses" },
    secondaryBtn: { text: "Sign In", href: "/signin" },
    gradient: "from-amber-500/10 to-rose-500/10",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section 
      className="relative overflow-hidden bg-background pt-24 pb-36 min-h-[500px] flex items-center justify-center transition-colors duration-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-all duration-1000 z-0`}></div>
      
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center max-w-4xl mx-auto flex flex-col items-center justify-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              {slide.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-xl md:text-2xl text-default-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {slide.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex flex-wrap justify-center gap-4 w-full"
            >
              <Link href={slide.primaryBtn.href}>
                <Button as="span" color="primary" size="lg" variant="shadow" className="font-semibold px-8 py-6 text-lg cursor-pointer">
                  {slide.primaryBtn.text}
                </Button>
              </Link>
              <Link href={slide.secondaryBtn.href}>
                <Button as="span" color="default" size="lg" variant="bordered" className="font-semibold px-8 py-6 text-lg border-2 cursor-pointer">
                  {slide.secondaryBtn.text}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-content1/50 border border-divider hover:bg-content1/80 text-foreground transition-all z-20 focus:outline-none focus:ring-2 focus:ring-primary md:flex hidden"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-content1/50 border border-divider hover:bg-content1/80 text-foreground transition-all z-20 focus:outline-none focus:ring-2 focus:ring-primary md:flex hidden"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-8 bg-primary" : "w-3 bg-default-300 hover:bg-default-400"}`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
