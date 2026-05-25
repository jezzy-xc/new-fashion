import React from 'react'
import Item from './Item';
import Data from '../assets/data'

export default function RelatedProduct() {
    return (
        <div className='max-w-[1200px] mx-auto px-4 py-20'>
            {/* Header */}
            <h2 className='text-[16px] font-light uppercase tracking-[0.4em] text-center text-black mb-6'>
                Related Products
            </h2>
            <div className='w-[60px] h-[1px] bg-black mx-auto mb-16'></div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Data.map((item, i) => (
                    <div key={i} onClick={() => window.scrollTo(0, 0)}>
                        <Item
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}