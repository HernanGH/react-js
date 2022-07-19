import { Component } from "react";
import Hello from "./Hello";

class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'ReactClass'
    }
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


  // componentDidMount() {
  //   console.log('componentDidMount');
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }