/**
 * spread operator
 * 1 copiar arrays
 * 2 fusion de arrays
 * 3 invocando funciones
 * 4 rest operator, obtener con el spread operator los parametros de una funcion en un solo array
 * 5 spread en objetos
 */

/**
 * 1 copiar arrays
 */

// const firstNumbers = [1, 2, 3]

// const firstNumbersCopy = [...firstNumbers]

// console.log({ firstNumbersCopy })

/**
 * 2 fusion de arrays
 */

// const firstNumbers = [1, 2, 3]
// const lastNumbers = [4, 5]

// const allNumbers = [...firstNumbers, ...lastNumbers, 6, 7, 8]

// console.log({ allNumbers })

/**
 * 3 invocando funciones
 */

// const list = [1, 2, 3]

// const sum = (numero1, numero2, numero3) => {
//   return numero1 + numero2 + numero3
// }

// const result = sum(...list)
// console.log('El resultado de la suma es: ', result);

/**
 * 4 rest operator
 */

// const genericSum = (...allParameters) => {
//   let total = 0
//   console.log(allParameters)
//   allParameters.forEach((parameter) => {
//     total+= parameter
//   })
//   return total
// }
 
// const result = genericSum(1, 2, 3, 4 , 5, 6, 100)
// console.log('El resultado de la suma es: ', result);

/**
 * 5 spread en objetos
 */

const person = {
  name: 'Lionel',
  lastname: 'Messi',
  dni: 10000000
}

const contactData = {
  mail: 'lmessi@mail.com',
  phone: '1122334455',
  password: 'lmessi10',
  username: 'lmessi',
  address: {
    country: 'France',
    state: 'Paris'
  }
}

const personCopy = { ...person }

const user = {
  ...person,
  ...contactData
}

const userExtended = {
  ...user,
  age: 35,
  weight: '85kg'
}

user.name = 'Ronaldo'
// user.address.country = 'Inglaterra'
user.address = {
  ...user.address,
  country: 'Inglaterra'
}
console.log({ user })
console.log({ userExtended })