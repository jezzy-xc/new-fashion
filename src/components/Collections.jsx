import React from 'react'
import newCollection from '../assets/newCollection'
import Item from './Item'

function Collections() {
  return (
    <div>
      <h1 className='font-400 text-[2rem] text-l'>MEN COLLECTION</h1>
      <hr className='hr-line w-[200px] ml-1 mt-2 text-indigo-500' />
      <div className="itmes flex-wrap flex justify-between container mx-auto mt-1">
        {newCollection.map((item, i) => (
          <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  )
}

export default Collections