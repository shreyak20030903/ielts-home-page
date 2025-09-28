import React from "react";
import { Link } from "react-scroll"; // import Link from react-scroll

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-blue-600">IELTS Institute</div>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
              About Us
            </Link>
          </li>
          <li>
            <Link to="features" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
              Features
            </Link>
          </li>
          <li>
            <Link to="courses" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
              Courses
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="cta" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
              Join Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
