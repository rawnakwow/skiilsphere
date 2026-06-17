import HeroSlider from "@/components/home/Hero";
import PopularCourses from "@/components/home/PopularCourses";
import TrendingCourses from "@/components/home/TrendingCourses";
import LearningTips from "@/components/home/LearningTips";
import TopInstructors from "@/components/home/TopInstructors";

export default function Home() {
  return (
    <div className="px-6">

      <HeroSlider />

      <PopularCourses />

      <TrendingCourses />

      <LearningTips />

      <TopInstructors />

    </div>
  );
}