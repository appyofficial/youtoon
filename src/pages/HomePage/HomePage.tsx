import React from 'react';
import ProductCard from '../../components/ProductCard';
import products from '../../data/products';

const HomePage = (): JSX.Element => {
  return (
    <section>
      {products.map(({ id, name, img, price }) => (
        <ProductCard key={id} cardTitle={name} imageUrl={img} price={price} id={id} />
      ))}
    </section>
  );
};

export default HomePage;
