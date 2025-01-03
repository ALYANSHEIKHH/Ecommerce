import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 py-12 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 py-6 px-8 rounded-lg shadow-md">
          {/* Logo */}
          <h3 className="text-3xl font-extrabold text-gray-800 mb-4 lg:mb-0">
            Bandage
          </h3>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-blue-600 text-2xl hover:text-blue-800 transition-transform transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-pink-600 text-2xl hover:text-pink-800 transition-transform transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-blue-400 text-2xl hover:text-blue-600 transition-transform transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-300 my-10"></div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Company Info</h4>
            <ul className="text-gray-600 space-y-3">
              <li>About Us</li>
              <li>Careers</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Legal</h4>
            <ul className="text-gray-600 space-y-3">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Accessibility</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Features</h4>
            <ul className="text-gray-600 space-y-3">
              <li>Business Marketing</li>
              <li>User Analytics</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Resources</h4>
            <ul className="text-gray-600 space-y-3">
              <li>iOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Get in Touch</h4>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 shadow-sm focus:ring focus:ring-blue-200"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">
              Stay updated with our latest news and offers.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-600 text-sm">
          <p>
            Made With <span className="text-red-500">♥</span> By Finland &copy;{" "}
            {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
