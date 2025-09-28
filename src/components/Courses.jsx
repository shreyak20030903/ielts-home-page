import React from "react";
import { FaClock, FaCertificate, FaBookOpen } from "react-icons/fa";

const courses = [
  { title: "General IELTS", duration: "4 Weeks", features: "Speaking + Listening + Reading + Writing", icon: <FaBookOpen className="text-blue-600 text-4xl mb-4 transition duration-300 hover:text-blue-800" /> },
  { title: "Academic IELTS", duration: "6 Weeks", features: "Advanced Academic Preparation", icon: <FaCertificate className="text-blue-600 text-4xl mb-4 transition duration-300 hover:text-blue-800" /> },
  { title: "Crash Course", duration: "2 Weeks", features: "Quick Revision & Tips", icon: <FaClock className="text-blue-600 text-4xl mb-4 transition duration-300 hover:text-blue-800" /> },
];

const Courses = () => {
  return (
    <section className="py-20 bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12" data-aos="fade-down">Our Courses</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <div
              key={i}
              className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex justify-center">{c.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{c.title}</h3>
              <p className="text-gray-600 mb-2">{c.features}</p>
              <p className="text-blue-700 font-semibold">{c.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
