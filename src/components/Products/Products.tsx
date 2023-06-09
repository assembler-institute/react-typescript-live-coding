import React, { FC } from 'react'
import Owner from '../Owner/Owner';
import Counter from '../Counter/Counter';

interface Props { 
  id: number
  title: string
  price: number
  counter: number
  location?: string
  owner?: string
}

const Products:FC<Props> = ({ title, price, counter, owner }) => {

  return (
    <>
      <p>{title}</p>
      <p>{price}</p>
      <Owner propietario={owner}/>
      <Counter counter={counter} />
    </>
  )
}

export default Products