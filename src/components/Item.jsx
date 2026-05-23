import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'

function Item(props) {
    return (
        <div className="group relative w-44 md:w-64 bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden mb-6">

            {/* Wishlist Button */}
            <button className="absolute top-3 right-3 z-10 p-2 rounded-full text-gray-400 hover:text-red-500 transition-colors">
                <FontAwesomeIcon icon={faHeart} size="sm" />
            </button>

            {/* Product Image */}
            <div className="relative overflow-hidden bg-gray-50">
                <Link to={`/Product/${props.id}`}>
                    <img
                        className="w-full h-48 md:h-54 object-cover transform group-hover:scale-105 transition-transform duration-500"
                        src={props.image}
                        alt={props.name}
                    />
                </Link>
            </div>

            {/* Content Section */}
            <div className="px-3 py-3">
                {/* Category & Rating */}
                <div className="flex items-center justify-between mb-1">
                    <span className="flex items-center text-[10px] uppercase tracking-wider text-gray-400">
                        {props.category || "Mens"}
                        <span className="text-gray-300 mx-2 text-[12px]">•</span>
                        <span className="text-[10px] font-medium text-green-500">In Stock</span>
                    </span>

                    <div className="flex items-center gap-1 text-yellow-500 text-[10px]">
                        <FontAwesomeIcon icon={faStar} />
                        <span className="text-gray-600 font-semibold">4.2</span>
                    </div>
                </div>

                {/* Title */}
                <Link to={`/Product/${props.id}`}>
                    <h1 className="text-[14px] font-semibold text-gray-700 line-clamp-1 hover:text-indigo-600 transition-colors mb-1">
                        {props.name}
                    </h1>
                </Link>

                {/* Short Description */}
                <p className="text-gray-400 text-[11px] line-clamp-1 leading-relaxed mb-3">
                    Premium quality material with modern design for a
                </p>

                {/* Price Section */}
                <div className="flex items-end gap-2">
                    <span className="text-[16px] font-bold text-gray-900">${props.new_price}</span>
                    {props.old_price && (
                        <span className="text-[11px] text-gray-400 line-through pb-0.5">${props.old_price}</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Item