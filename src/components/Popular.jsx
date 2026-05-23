import React from 'react'
import productsData from '../assets/data'
import Item from './Item'


function Popular() {

  return (
    <div className='mt-1 ml-1 '>
      <h2 className='font-300 text-[2rem] text-left text-gray-700'>POPULAR IN WOMEN</h2>
      <hr className='hr-line w-[200px] mt-2 text-indigo-500' />
      <div className="items flex-wrap flex justify-between container mx-auto mt-1">
        {productsData.map((item, i) => (
          <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  )
}

export default Popular