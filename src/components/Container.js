import Title from './Title'
import Item from './Item'
import Input from './Input'
import Button from './Button'

const Container = () => {
  const title = 'CoderHouse'
  const placeholder1 = 'Ingrese nombre'
  const placeholder2 = 'Ingrese apellido'
  const placeholder3 = 'Ingrese edad'
  const link1 = 'Favoritos'
  const link2 = 'Tienda'
  const link3 = 'Contacto'

  const greeting = () => console.log('HOLA')

  return (
    <div>
      <Title title={title} />
      <Title title={1+2} />
      <Item link={link1} />
      <Item link={link2} />
      <Item link={link3} />
      <Input placeholder={placeholder1} />
      <Input placeholder={placeholder2} />
      <Input placeholder={placeholder3} />
      <Button callback={greeting}>
        <h1>
          Aceptar
        </h1>
      </Button>
    </div>
  );
}
 
export default Container;