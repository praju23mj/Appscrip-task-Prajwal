// import React from 'react';
// import Header from "@/components/Header";
// import ProductList from "@/components/ProductList";
// import Filter from "@/components/Filter";
// import { Product } from './types';


// // Fetching products using getServerSideProps
// export async function getServerSideProps() {
//   let products: Product[] = []; // Specify the type for products
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     products = await response.json();
//     console.log("Fetched products:", products);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }

//   return {
//     props: {
//       products: products || [], // Ensure products is an array
//     },
//   };
// }

// const Home: React.FC<{ products: Product[] }> = ({ products }) => {
// return (
//     <div>
//       <Header />
//       <ProductList />
//       <Filter products={products} />
//     </div>
//   );
// };
// export default Home;

// app/page.tsx
import React from 'react';
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import Filter from "@/components/Filter";

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
    </div>
  );
};

export default Home;
