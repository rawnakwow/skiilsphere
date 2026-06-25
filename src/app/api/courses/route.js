import { NextResponse } from "next/server";
import coursesData from "@/data/courses.json";

export async function GET(request) {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    
    let courses = coursesData;
    
    if (search) {
      courses = courses.filter(course => 
        course.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}