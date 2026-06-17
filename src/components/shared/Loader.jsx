import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-content2 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold">
              SkillSphere
            </h2>

            <p className="mt-3 text-default-500">
              Learn modern skills from industry experts
              and accelerate your career growth.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/courses">
                  Courses
                </Link>
              </li>

              <li>
                <Link href="/my-profile">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Contact
            </h3>

            <p>Email: support@skillsphere.com</p>

            <div className="flex gap-4 mt-4 text-2xl">
              <a href="#">
                <FaFacebook />
              </a>

              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>

        <hr className="my-6" />

        <div className="flex flex-col md:flex-row justify-between gap-3">

          <p>
            © 2026 SkillSphere. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link href="#">
              Terms & Conditions
            </Link>

            <Link href="#">
              Privacy Policy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}