import { Component } from "react";
import Hello from "./Hello";

class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'ReactClass'
    }
  }

  componentDidMount() {
    console.log('componentDidMount ClassApp');
    console.log('El component ya esta montado en el DOM');
    console.log('Momento perfecto para hacer llamadas asincronicas  y obtener datos');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount ClassApp');
    console.log('El component esta apunto de salir del DOM');
    console.log('Momento perfecto para hacer limpieza');
    console.log('timeouts, intervals y listeners');
  }
  
  updateName = () => {
    // this.state.name = 'pepito' NO SE HACE
    this.setState({
      name: 'ReactFunction'
    })
  }

  render() { 
    return (
      <div onClick={this.updateName}>
        <Hello name={this.state.name} />
      </div>
    );
  }
}
 
export default ClassApp;




