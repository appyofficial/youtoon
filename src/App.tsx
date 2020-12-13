import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';

function App(): JSX.Element {
  return (
    <div className='App' style={{ marginTop: '100px' }}>
      <Navbar />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/product/:id' component={ProductPage} />
    </div>
  );
}

export default App;
