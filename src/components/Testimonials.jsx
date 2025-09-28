import React from "react";

const testimonials = [
  { name: "Yashika Malhotra", review: "IELTS Institute helped me score 8.0 bands in my first attempt!", img: "/3.jpg" },
  { name: "Priya Verma", review: "Amazing teachers and great practice materials.", img: "/4.jpg" },
  { name: "Vaishnavi Singh", review: "The AI Band Score tool really helped me focus on my weak areas.", img: "/5.jpg" },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12" data-aos="fade-down">
          What Our Students Say
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {t.img && (
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover transform transition duration-300 hover:scale-110"
                />
              )}
              <p className="text-gray-600 italic mb-4">"{t.review}"</p>
              <h4 className="text-blue-700 font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
