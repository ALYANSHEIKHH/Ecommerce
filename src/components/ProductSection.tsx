"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Floral Summer Dress",
    description: "Light and breezy dress for the perfect summer look.",
    price: "$49.99",
    img: "/F7.jpg",
    bg: "bg-gradient-to-r from-pink-100 to-pink-50",
  },
  {
    id: 2,
    name: "Chic Denim Jacket",
    description: "A versatile piece for every wardrobe.",
    price: "$69.99",
    img: "https://images.pexels.com/photos/1139284/pexels-photo-1139284.jpeg?auto=compress&cs=tinysrgb&w=800",
    bg: "bg-gradient-to-r from-pink-50 to-white",
  },
  {
    id: 3,
    name: "Elegant Party Gown",
    description: "Shine bright in this beautiful evening gown.",
    price: "$129.99",
    img: "/images.jpg",
    bg: "bg-gradient-to-r from-white to-pink-100",
  },
];

const ProductSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden relative">
      {/* Product Carousel */}
      <div
        className="w-max h-full flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className={`${product.bg} w-screen h-full flex flex-col xl:flex-row gap-8 items-center justify-center`}
          >
            {/* Product Details */}
            <div className="text-center xl:w-1/2 p-8">
              <h2 className="text-xl xl:text-3xl text-gray-700">
                {product.description}
              </h2>
              <h1 className="mt-4 text-4xl xl:text-6xl font-bold text-pink-800">
                {product.name}
              </h1>
              <p className="mt-2 text-2xl font-semibold text-pink-600">
                {product.price}
              </p>
              <button className="mt-6 bg-pink-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-pink-600 transition">
                Add to Cart
              </button>
            </div>

            {/* Product Image */}
            <div className="relative xl:w-1/2 h-1/2 xl:h-full">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover rounded-md shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex gap-4">
        {products.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ring-1 ring-pink-500 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-pink-500 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
