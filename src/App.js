
import NavBar from './components/NavBar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SuperForm from './components/SuperForm';
import ClassApp from './components/ClassApp';
import { useState } from 'react';
import FunctionApp from './components/FunctionApp';
import SuperButton from './components/SuperButton';

const App = () => {
  const [showFunctionApp, setShowFunctionApp] = useState(true)


  return (
    <div className="App">
      {/* <ClassApp /> */}
      {showFunctionApp && <FunctionApp />}
      <button onClick={() => setShowFunctionApp(false)}>Sacar del DOM el componente</button>
      {/* <SuperForm title='Hey!' buttonComponent={SuperButton}/> */}
      {/* <SuperButton buttonText='Aceptar' /> */}
    </div>
  );
}

export default App;


// const [flag, setFlag] = useState(true)
// setTimeout(() => setFlag(false), 4000)
// <ClassApp />


// const [defaultName, setDefaultName] = useState('Inicio')
// setTimeout(() => setDefaultName('Perdio'), 4000)
// <FunctionApp defaultName={defaultName} />
