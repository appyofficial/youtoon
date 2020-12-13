import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import img from './assets/1.jpg';
import products from './data/products';

function App(): JSX.Element {
  return (
    <div className='App' style={{ marginTop: '100px' }}>
      <Navbar />
      <section>
        {products.map(({ id, name, img, price }) => (
          <ProductCard key={id} cardTitle={name} imageUrl={img} price={price} />
        ))}
      </section>
    </div>
  );
}

export default App;
