import React from 'react';

import BusinessList from './components/BusinessList/BusinessList';

import SearchBar from './components/SearchBar/SearchBar';
//importa app.js como otra opcion
import './App.css';

let business = {

  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends React.Component {
//Ravenous III: step 16 - 18
searchYelp(term, location, sortBy) {
  console.log(`Search Yelp with ${term}, ${location}, ${sortBy} `);
}

  render() {
    return (<div className="App">
  <h1>ravenous</h1>
  <SearchBar />
  <BusinessList businesses={businesses}/>
  </div>
);
  }
}

export default App;
