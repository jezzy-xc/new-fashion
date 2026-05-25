import React from 'react'
import backgroundImage from '../assets/hero-3.png'

function Offer() {
    return (
        <div className='relative w-full h-[500px] bg-cover bg-center my-20' style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full max-w-[1200px] mx-auto px-4 md:px-8">
                <h1 className='text-[40px] md:text-[60px] font-light text-white leading-[1.1] tracking-tighter mb-4'>
                    Exclusive <br /> Offers For You
                </h1>
                <h2 className='text-[10px] font-light text-white uppercase tracking-[0.4em] mb-10'>
                    Only on best sellers products
                </h2>
                <button className='w-fit px-10 py-4 border border-white text-white text-[10px] font-light uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300'>
                    Check Now
                </button>
            </div>
        </div>
    )
}

export default Offer