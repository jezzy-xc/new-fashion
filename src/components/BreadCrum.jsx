import React from 'react'

function BreadCrum(props) {
  const { product } = props;
  return (
    <div className="breadcrum ml-2 mt-6 text-[12px] text-gray-600 uppercase tracking-[0.2em]">
      Home {">"} Shop {">"} {product.category} {">"} {product.name}
    </div>
  )
}

export default BreadCrum