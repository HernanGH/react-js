const BASE_URL = 'https://jsonplaceholder.typicode.com/'

export const getProduct = (postId, type) => fetch(`${BASE_URL}comments?postId=${postId}&type=${type}`)

export const getProducts = () => fetch(`${BASE_URL}comments`, {
  method: 'GET'
})

export const createData = () => fetch(`${BASE_URL}posts`, {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
})

export const updateData = (data) => fetch(`${BASE_URL}posts/${data.userId}`, {
  method: 'PUT',
  body: JSON.stringify(data)
})

export const deleteData = (dataId) => fetch(`${BASE_URL}posts/${dataId}`, {
  method: 'DELETE'
})

const products = [
  {id: 0, name: 'Pizza', price: '500 $', category: 'comida', image: 'https://www.lavanguardia.com/files/image_948_465/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-4663.jpeg'},
  {id: 1, name: 'Cerveza', price: '300 $', category: 'bebida', image: 'https://www.lavanguardia.com/files/image_948_465/uploads/2020/07/13/5f0c78598c987.jpeg'}
]

export const fetchProducts = () => {
  const task = new Promise((resolve) => {
    setTimeout(() => resolve(products), 2000)
  })
  return task
}

export const getItem = (itemId) => {
  const task = new Promise((resolve) => {
    setTimeout(() => resolve(products[0]), 2000)
  })
  return task
}