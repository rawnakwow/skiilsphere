import Hero from "@/components/home/Hero";
import PopularCourses from "@/components/home/PopularCourses";
import TrendingCourses from "@/components/home/TrendingCourses";
import TopInstructors from "@/components/home/TopInstructors";
import LearningTips from "@/components/home/LearningTips";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <PopularCourses />
      <TrendingCourses />
      <TopInstructors />
      <LearningTips />
    </div>
  );
}
