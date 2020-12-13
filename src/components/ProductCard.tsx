import React, { FunctionComponent } from 'react';
import { Card } from '@material-ui/core';

type PropductCardProps = {
  imageUrl: string;
  imageAlt?: string;
  cardTitle: string;
  price: number;
};

const ProductCard: FunctionComponent<PropductCardProps> = ({ imageUrl, imageAlt, cardTitle, price }): JSX.Element => {
  return (
    <Card style={{ maxWidth: '300px' }}>
      <img src={imageUrl} alt={imageAlt} style={{ width: '100%' }} />
      <section>
        <h4>{cardTitle}</h4>
        <h5>{price}</h5>
      </section>
    </Card>
  );
};

export default ProductCard;
