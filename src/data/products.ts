interface productProps {
  id: number | string;
  name: string;
  category?: string;
  img: string;
  price: number;
  rating?: number | string;
  numOfReviews?: number;
  discription: string;
}

const products: Array<productProps> = [
  {
    id: 23003,
    name: 'Rick and morty',
    img:
      'https://basementrejects.com/wp-content/uploads/2016/04/rick-and-morty-season-1-1-pilot-travel-to-dimension-35-c-eyes-review-episode-guide-list.jpg',
    price: 900,
    rating: '4.5',
    numOfReviews: 10,
    discription: 'Rick and morty world is waiting for you',
  },
  {
    id: 23004,
    name: 'Cirature portrait',
    img: 'https://www.bralin.com/wp-content/uploads/2018/08/Rabia-Caricature-square.jpg',
    price: 700,
    rating: '3.5',
    numOfReviews: 9,
    discription: 'Make toon out of yourself and become famous in social media',
  },
  {
    id: 23005,
    name: 'Flat colorful portrait',
    img:
      'https://media.istockphoto.com/vectors/seamless-background-with-people-flat-design-cartoon-characters-men-vector-id1219890091?k=6&m=1219890091&s=170667a&w=0&h=m7f5ASLC4GLAEAzikt29_dsKOBEmYWnAociN1HMuyG4=',
    price: 1900,
    rating: '4.2',
    numOfReviews: 15,
    discription: 'See yourself in a flat colorful way',
  },
];

export default products;
