import React, { useState } from 'react';

function DescriptionBox() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 mb-2 font-['Poppins',sans-serif]">

      {/* === Premium Tab Header === */}
      <div className="flex justify-center md:justify-start gap-8 md:gap-12 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('description')}
          className={`relative pb-4 text-lg md:text-xl font-medium tracking-wide transition-colors duration-300 cursor-pointer ${activeTab === 'description'
            ? 'text-gray-900'
            : 'text-gray-400 hover:text-gray-600'
            }`}
        >
          Description
          {/* Animated Underline */}
          <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-gray-900 transform origin-left transition-transform duration-300 ${activeTab === 'description' ? 'scale-x-100' : 'scale-x-0'
            }`}></span>
        </button>

        <button
          onClick={() => setActiveTab('reviews')}
          className={`relative pb-4 text-lg md:text-xl font-medium tracking-wide transition-colors duration-300 cursor-pointer ${activeTab === 'reviews'
            ? 'text-gray-900'
            : 'text-gray-400 hover:text-gray-600'
            }`}
        >
          Reviews <span className="text-sm align-top ml-1 opacity-70">(122)</span>
          {/* Animated Underline */}
          <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-gray-900 transform origin-left transition-transform duration-300 ${activeTab === 'reviews' ? 'scale-x-100' : 'scale-x-0'
            }`}></span>
        </button>
      </div>

      {/* === Tab Content (With Fade-in Effect) === */}
      <div className="mt-10 md:mt-4 transition-all duration-500 ease-in-out">

        {activeTab === 'description' ? (
          /* === Description Premium Layout === */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-gray-600 leading-loose text-base md:text-lg animate-[fadeIn_0.5s_ease-in-out]">
            <div>
              <p className="mb-6">
                <span className="text-4xl text-gray-900 font-bold float-left mr-3 leading-none mt-1">A</span>
                n e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual storefront where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence.
              </p>
              <p>
                These platforms have gained immense popularity due to their convenience, accessibility, and the global reach they offer to modern consumers.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-gray-900 font-semibold text-xl mb-4">Product Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-black"></span> Premium Quality Fabrics
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-black"></span> Modern & Minimalist Design
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-black"></span> Highly Durable & Breathable
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-black"></span> Easy to Wash & Maintain
                </li>
              </ul>
            </div>
          </div>
        ) : (
          /* === Reviews Premium Layout === */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-[fadeIn_0.5s_ease-in-out]">

            {/* Review Card 1 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-lg">
                    AI
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                      Ariful Islam
                      <span className="border border-green-500 text-green-600 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold">
                        Verified
                      </span>
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">May 20, 2026</p>
                  </div>
                </div>
                {/* 5 Star SVG */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic">"The fabric quality is absolutely amazing and it fits perfectly! Honestly exceeded my expectations. Highly recommended."</p>
            </div>

            {/* Review Card 2 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-lg">
                    JD
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">John Doe</h4>
                    <p className="text-xs text-gray-400 mt-1">April 15, 2026</p>
                  </div>
                </div>
                {/* 4 Star SVG */}
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
              </div>
              <p className="text-gray-600 italic">"Loved the minimal design. The delivery was also very fast. Would definitely buy again."</p>
            </div>

          </div>
        )}

      </div>

      {/* Tailwind Custom Animation Injection */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}

export default DescriptionBox;