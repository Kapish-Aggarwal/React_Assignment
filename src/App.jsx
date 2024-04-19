import React from 'react';
import PropertyList from './PropertyList';
import './App.css';

// Sample data
const properties = [
  {
    id: 1,
    name: 'Beautiful Villa',
    price: '$500,000',
    description: 'Spacious villa with a stunning view',
    location: 'City A',
    image: 'https://static8.depositphotos.com/1392258/871/i/380/depositphotos_8716836-stock-photo-modern-gray-brick-home.jpg',
  },
  {
    id: 2,
    name: 'Luxury Apartment',
    price: '$300,000',
    description: 'Modern apartment with top-notch amenities',
    location: 'City B',
    image: 'https://st2.depositphotos.com/1041088/5192/i/380/depositphotos_51925277-stock-photo-american-house-with-beautiful-landscape.jpg',
  },
  {
    id: 3,
    name: 'Cozy Cottage',
    price: '$200,000',
    description: 'Charming cottage in a peaceful countryside',
    location: 'City C',
    image: 'https://static7.depositphotos.com/1005592/720/i/380/depositphotos_7201190-stock-photo-tranquil-swimming-pool.jpg',
  },
  {
    id: 3,
    name: 'Buss Cottage',
    price: '$250,000',
    description: 'Charming cottage away from city noise',
    location: 'City K',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600',
  },

];

const App = () => {
  return (
    <div className="app">
      <h1>Real Estate Listings</h1>
      <PropertyList properties={properties} />
    </div>
  );
};

export default App;
