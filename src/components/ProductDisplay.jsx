import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../context/ShopContext';

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    // Main Container
    <div className="max-w-7xl mx-auto p-4 md:p-8 mt-15">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-16">

        {/* left side photo sectioj */}
        <div className="flex gap-4 md:w-1/2">
          {/* veriaties image */}
          <div className="flex flex-col gap-3">
            <img className='w-20 h-24 object-cover border border-gray-200 rounded cursor-pointer hover:border-black transition-all' src={product.image} alt={product.name} />
            <img className='w-20 h-24 object-cover border border-gray-200 rounded cursor-pointer hover:border-black transition-all' src={product.image} alt={product.name} />
            <img className='w-20 h-24 object-cover border border-gray-200 rounded cursor-pointer hover:border-black transition-all' src={product.image} alt={product.name} />
          </div>
          {/* product image */}
          <div className="flex-1">
            <img className='w-full h-auto object-cover border border-gray-200 rounded-md' src={product.image} alt={product.name} />
          </div>
        </div>

        {/*Right Side Prodict image & description */}
        <div className="flex flex-col md:w-1/2">

          {/*  Product Name */}
          <h1 className='font-bold text-gray-900 text-2xl md:text-3xl mb-4'>
            {product.name}
          </h1>

          {/* Description */}
          <p className='text-base text-gray-600 mb-3 leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero iusto omnis veritatis delectus inventore voluptatum!
          </p>

          {/* Available Status */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            <span className="text-lg font-medium text-green-600 tracking-wide">In Stock / Available</span>
          </div>

          {/*Fabrics */}
          <p className="text-gray-700 text-base mb-2">
            <span className="font-semibold text-gray-900">Fabrics:</span> Premium Cotton XXXX
          </p>

          {/*GSM */}
          <p className="text-gray-700 text-base mb-6">
            <span className="font-semibold text-gray-900">GSM:</span> 220 GSM
          </p>

          {/*Size */}
          <div className="mb-5">
            <p className='font-semibold text-gray-900 text-lg mb-3'>Select Size</p>
            <div className='flex gap-3 text-gray-600'>
              {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button key={size} className='w-11 h-11 border border-gray-300 rounded hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer text-sm font-medium flex items-center justify-center'>
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-3">
            <p className='text-gray-400 line-through text-2xl font-medium'>${product.old_price}</p>
            <p className='text-3xl font-bold text-[#ff4141]'>${product.new_price}</p>
          </div>

          {/*Rating */}
          <div className="flex items-center gap-1 mb-6">
            <FontAwesomeIcon className='text-amber-500 text-sm' icon={faStar} />
            <FontAwesomeIcon className='text-amber-500 text-sm' icon={faStar} />
            <FontAwesomeIcon className='text-amber-500 text-sm' icon={faStar} />
            <FontAwesomeIcon className='text-amber-500 text-sm' icon={faStar} />
            <FontAwesomeIcon className='text-amber-500 text-sm' icon={faStarHalfStroke} />
            <span className="ml-2 text-sm text-gray-500">(122 Reviews)</span>
          </div>

          {/* Add to Cart Button */}
          <button
            className='bg-black text-white px-8 py-3 w-full md:w-2/3 font-semibold text-lg cursor-pointer hover:bg-gray-800 transition-colors rounded-sm active:scale-95'
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