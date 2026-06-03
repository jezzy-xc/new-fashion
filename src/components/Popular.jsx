import React from 'react'
import productsData from '../assets/data'
import Item from './Item'

function Popular() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 pt-10">
      {/* Title */}
      <h2 className='text-[16px] font-light uppercase tracking-[0.4em] text-black mb-3'>
        POPULAR IN WOMEN
      </h2>

      {/* Divider */}
      <div className='w-[60px] h-[1px] bg-black mb-5'></div>

      {/* Items Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {productsData.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular