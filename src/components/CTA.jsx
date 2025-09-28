import React from "react";

const CTA = () => {
  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-down">
          Ready to Achieve Your IELTS Goal?
        </h2>
        <p className="text-lg md:text-xl mb-8" data-aos="fade-up" data-aos-delay="100">
          Join thousands of students who improved their band scores with our expert guidance and AI tools.
        </p>
        <button className="px-10 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
  Join Now
</button>

      </div>
    </section>
  );
};

export default CTA;
