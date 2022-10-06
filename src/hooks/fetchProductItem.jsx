import { useState, useEffect } from 'react'
import { getSingleItem } from '../services/userServices'

const fetchProductItem = (id) => {
  const [productSingleItem, setProductSingleItem] = useState([])

  useEffect(() => {
    getSingleItem(id)
      .then((res) => {
        setProductSingleItem(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return {
    productSingleItem
  }
}

export default fetchProductItem
