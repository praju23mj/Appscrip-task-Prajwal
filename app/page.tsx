

// app/page.tsx
import React from 'react';
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import Filter from "@/components/Filter";
import Footer from '@/components/Footer';

// Define the type for a product
interface Product {
  id: number;
  title: string;
  image: string;
}

// Fetch products on the server-side using the server component
const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

const Home = async () => {
  const products: Product[] = await fetchProducts(); // Fetch products

  return (
    <div>
      <Header />
      <ProductList />
      <Filter products={products} />
      <Footer/>
    </div>
  );
};

export default Home;
