import './Title.css'

const Title = (props) => {
  console.log(props)
  return (
    <h1>{props.title}</h1>
  );
}
 
export default Title;