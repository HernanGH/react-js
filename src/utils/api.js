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
  {id: 0, name: 'asd', username: 'asd', email: 'asdasd'}
]

export const mock = () => {
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