import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from '@material-ui/core';

type PropductCardProps = {
  id: string | number;
  imageUrl: string;
  imageAlt?: string;
  cardTitle: string;
  price: number;
};

const ProductCard: FunctionComponent<PropductCardProps> = ({ imageUrl, imageAlt, cardTitle, price, id }): JSX.Element => {
  const history = useHistory();
  const handleClick = () => history.push(`/product/${id}`);
  return (
    <Card style={{ maxWidth: '300px' }} onClick={handleClick}>
      <img src={imageUrl} alt={imageAlt} style={{ width: '100%' }} />
      <section>
        <h4>{cardTitle}</h4>
        <h5>{price}</h5>
      </section>
    </Card>
  );
};

export default ProductCard;
