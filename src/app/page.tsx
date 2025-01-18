"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: {
    asset?: {
      _ref?: string;
    };
  };
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://hackathon-apis.vercel.app/api/products");
        console.log(response.data); // Add a console log to inspect the response data
        setProducts(response.data);
      } catch (err) {
        setError("Error fetching products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Shop</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-16">
        <h2 className="text-3xl font-semibold">Welcome to My Shop!</h2>
        <p className="mt-4 text-lg">Explore our amazing products.</p>
      </section>

   
      {/* Product List Section */}
      <section className="container mx-auto p-6">
        {loading ? (
          <p className="text-center text-lg">Loading products...</p>
        ) : error ? (
          <p className="text-center text-lg text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white p-4 rounded-md shadow-lg hover:shadow-2xl transition"
              >
                {/* Check if image and image.asset._ref are defined */}
                {product.image?.asset?._ref ? (
                  <Image
                    className="w-full h-48 object-cover rounded-md mb-4"
                    src={`https://cdn.sanity.io/images/<projectId>/production/${product.image.asset._ref}.webp`} // Replace <projectId> with your actual project ID
                    alt={product.name}
                    width={500}
                    height={300}
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-300 rounded-md mb-4 flex items-center justify-center">
                    <span>No Image Available</span>
                  </div>
                )}
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <p className="font-bold text-xl mt-4">${product.price}</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white text-center py-6">
        <p>&copy; 2025 My Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}
