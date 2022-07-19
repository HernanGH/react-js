const SuperButton = ({ buttonText }) => {
  const doSomething = () => console.log('Hey Coders!');

  return (
    <button type='button' onClick={doSomething}>
      {buttonText}
    </button>
  )
}
 
export default SuperButton;