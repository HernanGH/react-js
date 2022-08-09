import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Loader from './components/Loader';
import CartContainer from './components/CartContainer';

const App = () => {
  const [value, setValue] = useState('')

  const handleInput = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  return (
    <BrowserRouter basename='/react-js'>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greetings='CoderHouse' />} />
          <Route path='/item/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
        </Routes>
      </CartProvider>
      <input type='text' value={value} onInput={handleInput} />
      <Loader />
    </BrowserRouter>
  );
}

export default App;
