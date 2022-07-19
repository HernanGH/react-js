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
    console.log('componentDidMount')
    return () => console.log('componentWillUnmount')
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

