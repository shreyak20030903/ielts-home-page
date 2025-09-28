import React from "react";

const AboutUs = () => {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* Image */}
        <div className="flex-1" data-aos="fade-right">
          <img
            src="/1.jpg"
            alt="About IELTS Institute"
            className="rounded-xl shadow-2xl w-full max-w-md mx-auto transform transition duration-500 hover:scale-105"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left" data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About IELTS Institute
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            At IELTS Institute, we have trained over 10,000 students to achieve their desired band scores. Our expert tutors, interactive courses, and AI-based tools ensure every student is prepared for real exam conditions.
          </p>
          <p className="text-gray-700 text-lg">
            With years of experience and a proven track record, we help students improve their English skills effectively and confidently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
