import { useState, useEffect } from 'react'
import { getItems } from '../services/userServices'

function fetchProducts () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getItems()
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return {
    products
  }
}

export default fetchProducts
