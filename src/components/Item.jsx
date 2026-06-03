import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'

function Item(props) {
    return (
        <div className="group relative w-44 md:w-64 bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden mb-6">

            {/* Wishlist Button */}
            <button className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-400 hover:text-black transition-colors shadow-sm opacity-100">
                <FontAwesomeIcon icon={faHeart} size="sm" />
            </button>

            {/* Product Image */}
            <div className="relative overflow-hidden bg-gray-50 flex items-center justify-center">
                <Link to={`/Product/${props.id}`}>
                    <img
                        loading="lazy"
                        className="w-full h-48 md:h-56 object-contain transform group-hover:scale-105 transition-transform duration-700"
                        src={props.image}
                        alt={props.name}
                    />
                </Link>
            </div>

            {/* Content Section */}
            <div className="px-3 py-3">
                {/* Category & Rating */}
                <div className="flex items-center justify-between mb-1">
                    <span className="flex text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                        {props.category || "General"}
                        <span className="text-gray-200 mx-2">•</span>
                        <span className="text-[9px] font-bold text-gray-400">
                            In Stock
                        </span>
                    </span>

                    <div className="flex items-center gap-1 bg-amber-50 text-amber-500 text-[10px] font-bold px-1.5 py-0.5 rounded-md shadow-sm border border-amber-100/50">
                        <FontAwesomeIcon icon={faStar} className="text-[9px]" />
                        <span className="text-amber-700">{props.rating || "4.2"}</span>
                    </div>
                </div>

                {/* Title */}
                <Link to={`/Product/${props.id}`}>
                    <h1 className="text-[13px] font-medium uppercase tracking-wide text-gray-800 line-clamp-1 hover:text-black transition-colors mt-2">
                        {props.name}
                    </h1>
                </Link>

                {/* Short Description */}
                <p className="text-gray-400 text-[11px] line-clamp-1 leading-relaxed mt-0.5">
                    Premium quality material with modern design.
                </p>

                {/* Price Section */}
                <div className="mt-3 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[14px] font-bold text-black">${props.new_price}</span>
                        <span className="text-[11px] text-gray-300 line-through">${props.old_price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;