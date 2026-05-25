import React from 'react'

function BreadCrum(props) {
  const { product } = props;
  return (
    <div className="breadcrum ml-2 mt-20vc">
      Home {">"} Shop {">"} {product.category} {">"} {product.name}
    </div>
  )
}

export default BreadCrum