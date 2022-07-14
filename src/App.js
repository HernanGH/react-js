import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Input from './components/Input';
import Container from './components/Container';

function App() {
  const name = 'CoderHouse'

  // operador ternario
  const condition = false
  if (condition) {
    console.log('VERDADERO')
  } else {
    console.log('FALSO')
  }

  condition ? console.log('VERDADERO') : console.log('FALSO')

  console.log( condition ? 'verdadero' : 'falso' )

  // spread operator
  const numeros = [1, 2, 3, 4, 5, 6]
  const letras = ['a', 'b', 'c', 'd']
  
  const alfanumericosVersionVieja = numeros.concat(letras)
  
  const alfanumericosVersionSugar = [...numeros, ...letras]

  console.log({ alfanumericosVersionVieja })

  console.log({ alfanumericosVersionSugar })

  // propiedad dinamica
  const keyDinamica = 'plataforma'

  const object = {
    'nombre': 'coderhouse',
    [keyDinamica + 'asd']: 'Zoom'
  }

  console.log(object)

  // deep matching
  const { a: value } = { a: 2 } 
  const data = { a: 2 } 

  const { a: valorDeLaPropiedadA } = data

  console.log(value)
  console.log(valorDeLaPropiedadA)
  console.log(data.a)

  // asignacion en la destructuracion 

  const persona = {
    nombre: 'pepe',
    edad: 35,
    nacionalidad: 'asd'
  }

  const { nombre, edad, nacionalidad = 'indefinida' } = persona
  const { edad: edadConNuevoNombre } = persona

  console.log(nombre)
  console.log(edad)
  console.log(nacionalidad)

  console.log(persona.edad)
  console.log(edadConNuevoNombre)

  return (
    <>
      <NavBar />
      <Container />
    </>

  );
}

export default App;
