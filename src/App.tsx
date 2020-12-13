import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import img from './assets/1.jpg';

function App(): JSX.Element {
  return (
    <div className='App' style={{ marginTop: '100px' }}>
      <Navbar />
      <ProductCard imageUrl={img} cardTitle='Cirature art' price={20} />
    </div>
  );
}

export default App;
