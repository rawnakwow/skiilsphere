import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Upgrade Your Skills Today 🚀
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Learn from industry experts and build the
            skills needed for your dream career.
          </p>

          <Link href="/courses">
            <Button
              color="default"
              size="lg"
              className="font-semibold"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          🔥 Popular Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold mb-2">
              Web Development
            </h3>

            <p className="text-default-500 mb-4">
              Learn HTML, CSS, JavaScript, React and
              Node.js.
            </p>

            <Link href="/courses">
              <Button color="primary">
                View Details
              </Button>
            </Link>
          </div>

          <div className="border rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold mb-2">
              UI/UX Design
            </h3>

            <p className="text-default-500 mb-4">
              Create beautiful and user-friendly
              interfaces.
            </p>

            <Link href="/courses">
              <Button color="primary">
                View Details
              </Button>
            </Link>
          </div>

          <div className="border rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold mb-2">
              Digital Marketing
            </h3>

            <p className="text-default-500 mb-4">
              Master SEO, Ads and social media
              marketing.
            </p>

            <Link href="/courses">
              <Button color="primary">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Tips */}
      <section className="bg-gray-100 dark:bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            📌 Learning Tips
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">
                Set Daily Goals
              </h3>

              <p>
                Study consistently for better
                retention and productivity.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">
                Practice Regularly
              </h3>

              <p>
                Apply concepts through projects and
                exercises.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">
                Manage Time Wisely
              </h3>

              <p>
                Create a schedule and stick to it for
                maximum progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Instructors */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          🏆 Top Instructors
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border p-6 rounded-xl text-center shadow">
           <Image
      src="https://i.pravatar.cc/200?img=1"
      alt="Instructor"
       width={112}
  height={112}
  className="rounded-full mx-auto mb-4"
    />

            <h3 className="font-bold">
              John Doe
            </h3>

            <p>Web Development Expert</p>
          </div>

          <div className="border p-6 rounded-xl text-center shadow">
            <Image
              src="https://i.pravatar.cc/200?img=2"
              alt="Instructor"
               width={112}
  height={112}
  className="rounded-full mx-auto mb-4"
            />

            <h3 className="font-bold">
              Sarah Smith
            </h3>

            <p>UI/UX Designer</p>
          </div>

          <div className="border p-6 rounded-xl text-center shadow">
            <Image
              src="https://i.pravatar.cc/200?img=3"
              alt="Instructor"
               width={112}
  height={112}
  className="rounded-full mx-auto mb-4"
            />

            <h3 className="font-bold">
              David Wilson
            </h3>

            <p>Marketing Specialist</p>
          </div>
        </div>
      </section>

      {/* Trending Courses */}
      <section className="bg-gray-100 dark:bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            📈 Trending Courses
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow">
              React JS Masterclass
            </div>

            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow">
              Python for Data Science
            </div>

            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow">
              AI & Prompt Engineering
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}