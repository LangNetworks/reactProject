import React from 'react';

import BusinessList from '../BusinessList';

import SearchBar from '../components/SearchBar';
//importa app.js como otra opcion
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (<div className="App">
  <h1>ravenous</h1>
  <SearchBar />
  <BusinessList />
  </div>
);
  }
}

export default App;
