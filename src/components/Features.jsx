import React from "react";
import { FaMicrophone, FaFileAlt, FaRobot, FaChalkboardTeacher } from "react-icons/fa";

const features = [
  { title: "Speaking Practice", desc: "Improve fluency with daily speaking sessions.", icon: <FaMicrophone className="text-blue-600 text-4xl mb-4 transition duration-300 hover:text-blue-800" /> },
  { title: "Mock Tests", desc: "Full-length practice tests with real exam patterns.", icon: <FaFileAlt className="text-blue-600 text-4xl mb-4 transition duration-300 hover:text-blue-800" /> },
  { title: "AI Band Score", desc: "Get instant band predictions using AI tools.", icon: <FaRobot className="text-blue-600 text-4xl mb-4 transition duration-300 hover:text-blue-800" /> },
  { title: "Expert Tutors", desc: "Learn from certified IELTS trainers.", icon: <FaChalkboardTeacher className="text-blue-600 text-4xl mb-4 transition duration-300 hover:text-blue-800" /> },
];

const Features = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12" data-aos="fade-down">
          Our Features
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
