
import NavBar from './components/NavBar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Button id='btnPrimary' variant="primary">Primary</Button>
    </div>
  );
}

export default App;
