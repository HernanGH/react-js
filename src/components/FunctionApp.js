import { useEffect, useState } from "react";
import Hello from "./Hello";

const FunctionApp = () => {
  const [name, setName] = useState('ReactClass')
  const [showHello, setShowHello] = useState(true)
  // name = 'pepito' NO SE HACE

  const updateName = () => {
    // setName('ReactFunction')
    setShowHello(false)
  }

  useEffect(() => {
    console.log('componentDidMount FunctionApp')
    console.log('El component ya esta montado en el DOM');
    console.log('Momento perfecto para hacer llamadas asincronicas y obtener datos');
  
    return () => {
      console.log('componentWillUnmount FunctionApp');
      console.log('El component esta apunto de salir del DOM');
      console.log('Momento perfecto para hacer limpieza');
      console.log('timeouts, intervals y listeners');
    }
  }, [])

  console.log('FunctionApp se va a renderizar...')
  return (
    <div onClick={updateName}>
      {showHello && <Hello name={name} />}
    </div>
  );
}

export default FunctionApp;

// useEffect(() => {
//   console.log('Received prop: ', defaultName)
//   return () => console.log('Will receive new prop: defaultName')
// }, [defaultName])

