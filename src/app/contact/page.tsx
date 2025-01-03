"use client";
import React, { useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiLocationMarker, HiMail } from 'react-icons/hi';
import { IoPhonePortraitOutline } from 'react-icons/io5';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send form data to server)
    console.log(formData);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We`&apos;`d love to hear from you! Reach out for any inquiries, feedback, or just to say hello. We`&apos;`re here to help!
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition-transform transform hover:scale-105">
            <div className="text-3xl text-indigo-600 mb-4">
              <HiLocationMarker />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
            <p className="text-gray-600">1234 Nazimabad, Karachi, Pakistan</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition-transform transform hover:scale-105">
            <div className="text-3xl text-indigo-600 mb-4">
              <IoPhonePortraitOutline />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Phone Number</h3>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition-transform transform hover:scale-105">
            <div className="text-3xl text-indigo-600 mb-4">
              <HiMail />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600">contact@ourcompany.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Connect with Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-3xl hover:text-indigo-800 transition-all duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-3xl hover:text-indigo-800 transition-all duration-300">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-3xl hover:text-indigo-800 transition-all duration-300">
              <FaInstagram />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-3xl hover:text-indigo-800 transition-all duration-300">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_URL"
            width="100%"
            height="100%"
            className="absolute top-0 left-0"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
