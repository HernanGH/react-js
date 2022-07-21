import { useEffect, useState } from "react";
import Hello from "./Hello";

const FunctionApp = () => {
  const [name, setName] = useState('ReactClass')
  // name = 'pepito' NO SE HACE

  const updateName = () => {
    setName('ReactFunction')
  }

  useEffect(() => {
    console.log('componentDidMount FunctionApp')
    console.log('El component ya esta montado en el DOM');
    console.log('Momento perfecto para hacer llamadas asincronicas y obtener datos');
    // fetch().

    console.log('inicio')
    // PROMISE
    const task = new Promise((resolve, reject) => {
      reject(false)
      //resolve(true)
    })

    task.then((result) => {
      console.log( result )
    }).catch((error) => console.log(error))

    return () => {
      console.log('componentWillUnmount FunctionApp');
      console.log('El component esta apunto de salir del DOM');
      console.log('Momento perfecto para hacer limpieza');
      console.log('timeouts, intervals y listeners');
    }
  }, [])

  useEffect(() => {
    console.log(name)
  }, [name])

  console.log('FunctionApp se va a renderizar...')
  return (
    <div onClick={updateName}>
      <Hello name={name} />
    </div>
  );
}

export default FunctionApp;

// useEffect(() => {
//   console.log('Received prop: ', defaultName)
//   return () => console.log('Will receive new prop: defaultName')
// }, [defaultName])

