import React from 'react';
import { Button } from '@material-ui/core';
import products from '../../data/products';

const ProductPage = (props: { match: { params: { id: string | number } } }) => {
  // Finding product in the database.
  // We match the params with product id.
  const product = products.find(product => product.id == props.match.params.id);

  // If product not found in data base - We return product not found.
  // We will make a new component for Product not found.
  if (!product) {
    return (
      <div>
        <p>Product not avilabel</p>
      </div>
    );
  }

  // If product is there in data base, we return product page with details
  return (
    <>
      <div>
        <div>
          <img src={product?.img} />
        </div>
        <div>
          <h2>{product?.name}</h2>
          <p>{product?.discription}</p>
        </div>
      </div>
      <Button>Add to cart</Button>
    </>
  );
};

export default ProductPage;
