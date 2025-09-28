import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-20"
      style={{
        backgroundImage: "url('/10.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gradient-to-r from-blue-200/70 to-blue-50/70">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          
          {/* Text */}
          <div
            className="flex-1 text-center md:text-left"
            data-aos="fade-right"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" data-aos="fade-right">
               Crack IELTS with Confidence
                      </h2>

            <p className="text-gray-700 mb-6 text-lg">
              Join thousands of students improving their English with expert guidance and AI-based Band Score prediction.
            </p>
            <button className="px-8 py-3 bg-blue-700 text-white rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 transform hover:scale-105 animate-pulse">
              Join Now
            </button>
          </div>

          {/* Image */}
          <div
            className="flex-1"
            data-aos="fade-left"
          >
            <img
              src="/8.jpg"
              alt="IELTS Banner"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto transform transition duration-500 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
