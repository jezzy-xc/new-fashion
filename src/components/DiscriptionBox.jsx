import React, { useState } from 'react';

function DescriptionBox() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 mb-20">

      {/* === Tab Header (Minimalist) === */}
      <div className="flex justify-center md:justify-start gap-12 border-b border-gray-100">
        <button
          onClick={() => setActiveTab('description')}
          className={`relative pb-4 text-[12px] font-light uppercase tracking-[0.3em] transition-all duration-300 cursor-pointer ${activeTab === 'description'
            ? 'text-black'
            : 'text-gray-400 hover:text-black'
            }`}
        >
          Description
          <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-black transform transition-transform duration-300 ${activeTab === 'description' ? 'scale-x-100' : 'scale-x-0'}`}></span>
        </button>

        <button
          onClick={() => setActiveTab('reviews')}
          className={`relative pb-4 text-[12px] font-light uppercase tracking-[0.3em] transition-all duration-300 cursor-pointer ${activeTab === 'reviews'
            ? 'text-black'
            : 'text-gray-400 hover:text-black'
            }`}
        >
          Reviews <span className="text-[10px] opacity-50">(122)</span>
          <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-black transform transition-transform duration-300 ${activeTab === 'reviews' ? 'scale-x-100' : 'scale-x-0'}`}></span>
        </button>
      </div>

      {/* === Tab Content === */}
      <div className="mt-12 transition-all duration-500 ease-in-out">

        {activeTab === 'description' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 animate-[fadeIn_0.5s_ease-in-out]">
            <div className="text-[13px] font-light text-gray-500 leading-loose tracking-wide">
              <p className="mb-6">
                An e-commerce platform is a sophisticated virtual storefront designed to streamline the buying and selling process. It offers a seamless bridge between high-quality products and the modern consumer, ensuring a global reach with unparalleled convenience.
              </p>
              <p>
                Crafted for those who appreciate minimalism and premium standards, this platform facilitates secure transactions and an elegant browsing experience.
              </p>
            </div>

            <div className="bg-gray-50 p-10 border border-gray-100">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-black mb-6">Product Highlights</h3>
              <ul className="space-y-4 text-[12px] font-light text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-black"></span> Premium Quality Fabrics
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-black"></span> Modern & Minimalist Design
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-black"></span> Highly Durable & Breathable
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-black"></span> Easy to Wash & Maintain
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-[fadeIn_0.5s_ease-in-out]">
            {/* Review Cards */}
            {[1, 2].map((_, i) => (
              <div key={i} className="p-8 border border-gray-100 transition-all hover:border-black">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-black flex items-center justify-center font-light text-[12px]">AI</div>
                    <div>
                      <h4 className="font-bold text-[12px] uppercase tracking-widest">Ariful Islam</h4>
                      <p className="text-[9px] text-gray-400 mt-1 uppercase tracking-widest">May 20, 2026</p>
                    </div>
                  </div>
                </div>
                <p className="text-[12px] font-light text-gray-500 italic">"The fabric quality is absolutely amazing and it fits perfectly! Honestly exceeded my expectations. Highly recommended."</p>
              </div>
            ))}
          </div>
        )}
      </div>

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