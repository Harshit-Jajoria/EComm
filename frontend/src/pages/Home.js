import React from 'react';
import Navbar from '../features/navbar/Navbar';
import ProductList from '../features/product/component/ProductList';
const Home = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
    </div>
  );
};

export default Home;
