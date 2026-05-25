import React from 'react'
import newCollection from '../assets/newCollection'
import Item from './Item'

function Collections() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-20">
      {/* Title */}
      <h1 className='text-[16px] font-light uppercase tracking-[0.4em] text-black mb-4'>
        MEN COLLECTION
      </h1>

      {/* Divider */}
      <div className='w-[60px] h-[1px] bg-black mb-16'></div>

      {/* Items Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {newCollection.map((item, i) => (
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

export default Collections