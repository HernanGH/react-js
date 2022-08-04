import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <BrowserRouter basename='/react-js'>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greetings='CoderHouse' />} />
          <Route path='/item/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<h1>Carrito</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
