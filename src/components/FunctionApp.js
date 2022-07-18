import { useEffect, useState } from "react";
import Hello from "./Hello";

const FunctionApp = ({ defaultName }) => {
  const [name, setName] = useState('ReactClass')

  const updateName = () => setName('ReactFunction')

  useEffect(() => {
    console.log('Received prop: ', defaultName)
    return () => console.log('Will receive new prop: defaultName')
  }, [defaultName])

  return (
    <div onClick={updateName}>
      <Hello name={name} />
    </div>
  );
}
 
export default FunctionApp;


// useEffect(() => {
//   console.log('componentDidMount')
//   return () => console.log('componentWillUnmount')
// })