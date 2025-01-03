import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
       
<section className="bg-gray-50 py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Us</h1>
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
        We are a team of passionate professionals dedicated to delivering the best products to help you express your unique style. With years of experience in fashion and design, we pride ourselves on offering top-tier quality, craftsmanship, and customer service. Join us on our journey!
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
      <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/b3.jpg"
          alt="About Us Image"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Our mission is simple: to empower individuals by providing high-quality, fashion-forward pieces that make them feel confident and stylish. We believe that fashion is a form of self-expression, and we aim to help our customers create their own unique style with our curated collection.
        </p>
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
          <li>Quality: We prioritize exceptional quality in every product we offer.</li>
          <li>Customer Satisfaction: Our customers are at the heart of everything we do.</li>
          <li>Innovation: We embrace creativity and strive to bring fresh, bold designs to the market.</li>
          <li>Sustainability: We are committed to reducing our environmental impact and supporting ethical practices.</li>
        </ul>
      </div>
    </div>

    <div className="text-center mt-20">
      <h2 className="text-4xl font-semibold text-gray-800 mb-12">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src="/1.png"
              alt="Team Member 1"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src="/2.png"
              alt="Team Member 2"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
            <p className="text-gray-600">Head of Design</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src="/3.png"
              alt="Team Member 3"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">Emily Johnson</h3>
            <p className="text-gray-600">Marketing Specialist</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
    </div>
  )
}

export default page
