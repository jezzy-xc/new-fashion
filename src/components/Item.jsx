import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons'

function Item(props) {
    return (
        <div className="group relative w-44 md:w-64 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden mb-6">

            {/* Wishlist Button (Floating) */}
            <button className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm opacity-100">
                <FontAwesomeIcon icon={faHeart} size="sm" />
            </button>

            {/* Product Image */}
            <div className="relative overflow-hidden object-cover bg-gray-50">
                <Link to={`/Product/${props.id}`}>
                    <img
                        className="w-full h-48 md:h-54 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        src={props.image}
                        alt={props.name}
                    />
                </Link>
            </div>

            {/* Content Section */}
            <div className="px-3 py-[3px]">
                {/* Category & Rating */}
                <div className="flex items-center justify-between mb-[3px]">
                    <span className="text-[11px] font-300 uppercase tracking-wider text-gray-400  px-[2px] py-0.5 rounded">
                        {props.category || "Mens"}
                    </span>

                    <div className="flex items-center gap-1 text-yellow-500 text-xs">
                        <FontAwesomeIcon icon={faStar} />
                        <span className="text-gray-600 font-semibold">4.2</span>
                    </div>
                </div>

                {/* Title */}
                <Link to={`/Product/${props.id}`}>
                    <h1 className="text-[15px] font-semibold text-gray-600 line-clamp-1 hover:text-indigo-600 transition-colors">
                        {props.name}
                    </h1>
                </Link>

                {/* Short Description */}
                <p className="text-gray-500 text-[12px]  line-clamp-1 leading-relaxed">
                    Premium quality material with modern design for a
                </p>

                {/* Price & Stock Section */}
                <div className="mt-[3px] flex items-center justify-between">
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-medium text-green-500 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            In Stock
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-gray-900">${props.new_price}</span>
                        <span className="text-xs text-gray-400 line-through">${props.old_price}</span>
                    </div>


                </div>
            </div>
        </div >
    )
}

export default Item