import React from 'react'

const page = async({params}) => {
  
  const { productId } = await params;

  return (
    <div>Product Detail Page: {productId}</div>
  )
}

export default page