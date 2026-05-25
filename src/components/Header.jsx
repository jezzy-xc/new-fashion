import React from 'react';
import backGroundImage from '../assets/hero-4.png';

function Header() {
  return (
    <div className='relative w-full h-screen overflow-hidden bg-cover bg-center' style={{ backgroundImage: `url(${backGroundImage})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-[1200px] mx-auto px-4 md:px-8">
        <h5 className='text-[12px] font-light text-white uppercase tracking-[0.4em] mb-4'>
          New Arrivals Only
        </h5>
        <h1 className='text-[40px] md:text-[80px] font-light text-white leading-[1.1] tracking-tighter mb-8'>
          New Collections <br /> For Everyone
        </h1>
        <button className='w-fit px-10 py-4 border border-white text-white text-[10px] font-light uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300'>
          Latest Collection
        </button>
      </div>
    </div>
  );
}

export default Header;