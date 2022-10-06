import React from 'react'
import { useParams } from 'react-router-dom'
import fetchProductItem from '../hooks/fetchProductItem'
import '../pages/pagesStyles/SingleItem.scss'

const SingleItem = () => {
  const { id } = useParams()
  const dataItem = fetchProductItem(id)
  // console.log(dataItem.productSingleItem)
  return (
    <div className='center'>
      <section className='product'>
        <div className='images'>
          <img src={dataItem.productSingleItem.image} alt='' width='250px' />
        </div>
        <div className='product_data'>
          <h1 className='product_name'>{dataItem.productSingleItem.product_name}</h1>
          <div className='subtitle'>
            <p className='product_brand'>{dataItem.productSingleItem.brand}</p>
            <p className='price'>${dataItem.productSingleItem.price}</p>
          </div>
          <div className='description rte'>
            <p>{dataItem.productSingleItem.description}</p>
          </div>
        </div>
      </section>
    </div>

  )
}

export default SingleItem
