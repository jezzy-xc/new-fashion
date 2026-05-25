import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../context/ShopContext';

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 mt-15">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-16">

        {/* Left Side Photo Section */}
        <div className="flex gap-4 md:w-1/2">
          <div className="flex flex-col gap-3">
            <img className='w-20 h-24 object-cover border border-gray-100 cursor-pointer hover:border-black transition-all' src={product.image} alt={product.name} />
            <img className='w-20 h-24 object-cover border border-gray-100 cursor-pointer hover:border-black transition-all' src={product.image} alt={product.name} />
            <img className='w-20 h-24 object-cover border border-gray-100 cursor-pointer hover:border-black transition-all' src={product.image} alt={product.name} />
          </div>
          <div className="flex-1">
            <img className='w-full h-auto object-cover border border-gray-100' src={product.image} alt={product.name} />
          </div>
        </div>

        {/* Right Side Product description */}
        <div className="flex flex-col md:w-1/2">

          <h1 className='font-light text-gray-900 text-2xl md:text-3xl mb-4 uppercase tracking-[0.1em]'>
            {product.name}
          </h1>

          <p className='text-[13px] font-light text-gray-400 mb-3 leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero iusto omnis veritatis delectus inventore voluptatum!
          </p>

          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-[10px] font-light uppercase tracking-[0.2em] text-green-600">In Stock</span>
          </div>

          <p className="text-gray-500 text-[11px] mb-2 uppercase font-light tracking-[0.2em]">
            Fabrics: <span className="font-normal text-gray-800">Premium Cotton</span>
          </p>

          <p className="text-gray-500 text-[11px] mb-6 uppercase font-light tracking-[0.2em]">
            GSM: <span className="font-normal text-gray-800">220 GSM</span>
          </p>

          <div className="mb-5">
            <p className='font-light text-gray-900 text-[11px] mb-3 uppercase tracking-[0.2em]'>Select Size</p>
            <div className='flex gap-3 text-gray-600'>
              {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button key={size} className='w-10 h-10 border border-gray-200 hover:border-black transition-all cursor-pointer text-[11px] font-light flex items-center justify-center'>
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-3">
            <p className='text-gray-300 line-through text-lg font-light'>${product.old_price}</p>
            <p className='text-2xl font-light text-black'>${product.new_price}</p>
          </div>

          <div className="flex items-center gap-1 mb-6">
            <FontAwesomeIcon className='text-amber-500 text-[10px]' icon={faStar} />
            <FontAwesomeIcon className='text-amber-500 text-[10px]' icon={faStar} />
            <FontAwesomeIcon className='text-amber-500 text-[10px]' icon={faStar} />
            <FontAwesomeIcon className='text-amber-500 text-[10px]' icon={faStar} />
            <FontAwesomeIcon className='text-amber-500 text-[10px]' icon={faStarHalfStroke} />
            <span className="ml-2 text-[9px] font-light text-gray-400 uppercase tracking-[0.2em]">(122 Reviews)</span>
          </div>

          <button
            className='border border-black text-black px-8 py-3 w-full md:w-2/3 font-light text-[11px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all'
            onClick={() => { addToCart(product.id) }}
          >
            ADD TO CART
          </button>

        </div>
      </div>
    </div>
  )
}

export default ProductDisplay;