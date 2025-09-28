import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Logo & Info */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">IELTS Institute</h1>
          <p className="text-gray-300">123, Study Lane, Indore, India</p>
          <p className="text-gray-300">Email: info@ieltsinstitute.com</p>
          <p className="text-gray-300">Phone: +91 99999 99999</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <a href="#" className="hover:text-blue-300 transition duration-300">Home</a>
          <a href="#" className="hover:text-blue-300 transition duration-300">Features</a>
          <a href="#" className="hover:text-blue-300 transition duration-300">Testimonials</a>
          <a href="#" className="hover:text-blue-300 transition duration-300">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-300 transition duration-300"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-300 transition duration-300"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-300 transition duration-300"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-blue-300 transition duration-300"><FaInstagram /></a>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} IELTS Institute. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
