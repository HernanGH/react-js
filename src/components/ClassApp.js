import { Component } from "react";
import Hello from "./Hello";

class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'ReactClass'
    }
  }
  static interval; 

  componentDidMount() {
    console.log('componentDidMount ClassApp');
    console.log('El componente ya esta montado en el DOM');
    console.log('Momento perfecto para hacer llamadas asincronicas y obtener datos');
    this.interval = setInterval(() => console.log('asd'), 4000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount ClassApp');
    console.log('El componente esta apunto de salir del DOM');
    console.log('Momento perfecto para hacer limpieza');
    console.log('timeouts, intervals y event listeners');
    clearInterval(this.interval)
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




