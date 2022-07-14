const Button = ({ callback, children }) => {
  console.log({children})
  return (
    <button onClick={callback}>
      {children}
    </button>
  );
}
 
export default Button;