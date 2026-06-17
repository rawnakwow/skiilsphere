import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">

      <h1 className="text-6xl font-bold">
        404
      </h1>

      <p className="my-4">
        Page Not Found
      </p>

      <Link
        href="/"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg"
      >
        Back Home
      </Link>
    </div>
  );
}