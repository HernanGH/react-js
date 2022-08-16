import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useEffect, useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Loader from './components/Loader';
import CartContainer from './components/CartContainer';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { products } from './utils/api';

const App = () => {
  return (
    <BrowserRouter basename='/react-js'>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greetings='CoderHouse' />} />
          <Route path='/:category' element={<ItemListContainer greetings='CoderHouse' />} />
          <Route path='/item/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
        </Routes>
      </CartProvider>
      <Loader />
    </BrowserRouter>
  );
}

export default App;
