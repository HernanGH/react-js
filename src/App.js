import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { useEffect } from 'react';

const App = () => {
  // const handleClick = (event) => {
  //   event.stopPropagation()
  //   console.log('button click:')
  // }

  // const divClick = () => {
  //   console.log('div click:')
  // }

  // const handleResize = (event) => {
  //   console.log(event)
  // }

  // useEffect(() => {
  //     console.log('mount...');
  //     window.addEventListener('resize', handleResize)

  //   return () => {
  //     console.log('Dismount...');
  //     window.removeEventListener(handleResize)
  //   }
  // }, [])

  return (
    <BrowserRouter basename='/react-js'>
      {/* <div onClick={divClick}>
        <button onClick={(event) => handleClick(event)}>Button</button>
        <p>Pressed?</p>
      </div> */}
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greetings='CoderHouse' />} />
        <Route path='/item/:productId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<h1>Carrito</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
