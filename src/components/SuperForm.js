const SuperForm = (props) => {
  console.log({props})
  const { title, buttonComponent } = props
  console.log({title})

  return (
    <>
      <h1>{title}</h1>
      {buttonComponent({ buttonText: 'Ok' })}
      {/* <ButtonComponent buttonText='Cancelar' /> */}
    </>
  )
}
 
export default SuperForm