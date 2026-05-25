import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Item from './Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function ShopCategory(props) {
  const { allProducts } = useContext(ShopContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [localTime, setLocalTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setLocalTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = localTime.getHours().toString().padStart(2, '0');
  const minutes = localTime.getMinutes().toString().padStart(2, '0');
  const seconds = localTime.getSeconds().toString().padStart(2, '0');

  const filteredProducts = allProducts.filter(item =>
    props.category === item.category &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCategoryProducts = allProducts.filter(item => props.category === item.category).length;

  return (
    <div className='container mx-auto px-4 md:px-8 pt-20'>
      {/* Banner */}
      <div className="w-full h-[400px] bg-gray-50 relative flex items-center overflow-hidden mb-12">
        <div className="relative z-10 px-8 md:px-16">
          <h1 className='text-[30px] md:text-[60px] font-light tracking-[0.2em] uppercase text-black mb-4'>Flat 50% Off</h1>
          <h2 className='text-[10px] md:text-[14px] font-light text-gray-500 uppercase tracking-[0.3em] mb-8'>
            {hours} : {minutes} : {seconds} Remaining
          </h2>
          <button className='px-10 py-3 border border-black text-black text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all'>Explore Now</button>
        </div>
        <img className='absolute right-0 h-full object-cover opacity-80' src={props.banner} alt="Banner" />
      </div>

      {/* Filter Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <p className='text-[11px] text-gray-400 uppercase tracking-[0.2em]'>
          Showing {filteredProducts.length} out of {totalCategoryProducts} products
        </p>

        <div className="flex items-center border-b border-gray-200 px-2 py-1 focus-within:border-black transition-all">
          <FontAwesomeIcon className='text-gray-300 mr-3 text-[12px]' icon={faMagnifyingGlass} />
          <input
            className='outline-none text-[11px] font-light uppercase tracking-[0.2em] placeholder-gray-300'
            type="text"
            placeholder='Search Products'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {filteredProducts.map((item, i) => (
          <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center py-20 text-[12px] text-gray-400 uppercase tracking-[0.3em]">No products found matching "{searchTerm}"</p>
      )}

      <div className="text-center mb-20">
        <button className='border border-gray-200 px-12 py-4 text-[10px] uppercase tracking-[0.3em] text-gray-500 hover:border-black hover:text-black transition-all'>Explore More</button>
      </div>
    </div>
  );
}

export default ShopCategory;