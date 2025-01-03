"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const DealPage = () => {
  const [selectedDeal, setSelectedDeal] = useState<string | null>(null);

  const deals = [
    {
      title: "Exclusive Winter Offer",
      description:
        "Get 50% off on all winter clothing! Limited time only, hurry up and grab your favorite items!",
      price: "$50",
      originalPrice: "$100",
      link: "#",
      image:
        "jj.jpg",
    },
    {
      title: "Summer Sale",
      description:
        "Up to 70% off on all summer essentials, from swimwear to beach gear. Don't miss out on the hottest deals!",
      price: "$30",
      originalPrice: "$100",
      link: "#",
      image: "/AA.jpg",
    },
    {
      title: "Black Friday Extravaganza",
      description:
        "Unbeatable prices on electronics, home appliances, and more. Limited stock, shop now!",
      price: "$199",
      originalPrice: "$400",
      link: "#",
      image:
        "/nn.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-teal-50 to-blue-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold  text-gray-900 mb-4">
            Sensational Deals Await!
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Get ready to save big on the best offers of the season! Limited-time deals that you can&apos;t afford to miss!
          </p>
        </div>

        {/* Deals Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {deals.map((deal, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-2xl hover:scale-105 transition-all duration-500 transform"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <Image
                src={deal.image}
                alt={deal.title}
                className="w-full h-64 object-cover rounded-md mb-6 transform transition-all duration-500 hover:scale-110"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{deal.title}</h3>
              <p className="text-gray-600 mb-6">{deal.description}</p>
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-indigo-600">{deal.price}</span>
                <span className="text-sm text-gray-500 line-through">{deal.originalPrice}</span>
              </div>
              <a
                href={deal.link}
                className="block text-center bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-all duration-500 ease-in-out transform"
                onClick={() => setSelectedDeal(deal.title)}
              >
                Claim Deal
              </a>
            </motion.div>
          ))}
        </div>

        {/* Selected Deal Info */}
        {selectedDeal && (
          <div className="mt-16 bg-white p-8 rounded-lg shadow-xl text-center transform transition-all duration-500 ease-in-out">
            <motion.h2
              className="text-3xl font-semibold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              You Selected: {selectedDeal}
            </motion.h2>
            <p className="text-lg text-gray-600">
              Congratulations! You&apos;ve selected a fantastic deal. Click the button below to grab it before it`&apos;`s gone!
            </p>
            <motion.a
              href="#"
              className="mt-6 text-center bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition-all duration-500 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              Redeem Your Deal Now
            </motion.a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DealPage;
