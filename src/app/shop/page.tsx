import ProductCard from "@/components/Product";
import Image from "next/image";
import React from "react";

// const products = [
//   { id: 1, name: "Floral Summer Dress", price: "$49.99", image: "/images/dress1.jpg" },
//   { id: 2, name: "Elegant Evening Gown", price: "$89.99", image: "/images/dress2.jpg" },
//   { id: 3, name: "Casual Denim Jacket", price: "$59.99", image: "/images/jacket1.jpg" },
//   { id: 4, name: "Cozy Winter Coat", price: "$129.99", image: "/images/coat1.jpg" },
//   { id: 5, name: "Chic Blazer", price: "$69.99", image: "/images/blazer1.jpg" },
//   { id: 6, name: "Trendy T-Shirt", price: "$29.99", image: "/images/tshirt1.jpg" },
//   { id: 7, name: "Classic Black Heels", price: "$79.99", image: "/images/heels1.jpg" },
//   { id: 8, name: "Modern Handbag", price: "$119.99", image: "/images/handbag1.jpg" },
// ];

const featuredProducts = [
  { id: 1, name: "Limited Edition Dress", price: "$99.99", image: "/F2.jpg" },
  { id: 2, name: "Designer Handbag", price: "$159.99", image: "/F4.jpg" },
  { id: 3, name: "Stylish Shirt", price: "$139.99", image: "/f5.jpg" },
  { id: 3, name: "Stylish Skirt", price: "$139.99", image: "/FF.jpg" },

];

const ShopPage = () => {
  return (
    <main className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="w-full h-{calc(100vh-80px} text-center mb-12">
          <div className="bg-black/50 p-8 rounded-lg">
            <h1 className="text-5xl font-extrabold text-yellow-400 mb-2">
              Discover Your Style
            </h1>
            <p className="text-2xl font-medium text-white">
              Handpicked collections for a modern lifestyle.
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
  <button className="bg-yellow-400 text-gray-800 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-all">
    New Arrivals
  </button>
  <button className="bg-blue-400 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all">
    On Sale
  </button>
  <button className="bg-green-400 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all">
    Best Sellers
  </button>
  <button className="bg-gray-400 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-all">
    All Products
  </button>
</div>


        {/* Featured Products Section */}
        <section className="mb-16 px-4">
  <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
    Featured Products
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {featuredProducts.map((product) => (
      <div
        key={product.id}
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
      >
        <div className="relative w-full h-72">
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="p-6 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-lg text-gray-600 mb-4">{product.price}</p>
          <button className="w-full bg-yellow-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all">
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* Product Grid
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Shop All Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                  <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section> */}
        <ProductCard/>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <button className="mx-1 py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
            Previous
          </button>
          <button className="mx-1 py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900">
            1
          </button>
          <button className="mx-1 py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
            2
          </button>
          <button className="mx-1 py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
            3
          </button>
          <button className="mx-1 py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;
