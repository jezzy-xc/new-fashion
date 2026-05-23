import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus, faMinus, faTag } from '@fortawesome/free-solid-svg-icons';

const CartItems = () => {
    const { allProducts, cartItems, addToCart, removeFromCart, getTotalCartAmonut } = useContext(ShopContext);

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 font-['Poppins',sans-serif]">

            {/*  Page Header  */}
            <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-6">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Your Cart</h1>
                    <p className="text-gray-500 mt-2 text-sm md:text-base">Review your items and proceed to checkout</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                {/*  Left Side: Cart Items Section */}
                <div className="w-full lg:w-2/3">
                    {/* Header Row (Desktop Only) */}
                    <div className="hidden md:flex justify-between items-center pb-4 text-gray-400 font-semibold text-xs uppercase tracking-widest border-b border-gray-100">
                        <p className="w-1/2">Product Details</p>
                        <p className="w-1/6 text-center">Price</p>
                        <p className="w-1/6 text-center">Quantity</p>
                        <p className="w-1/6 text-right">Total</p>
                        <div className="w-8"></div>
                    </div>

                    {/* Items List */}
                    <div className="flex flex-col mt-4">
                        {allProducts.map((e) => {
                            if (cartItems[e.id] > 0) {
                                return (
                                    <div
                                        key={e.id}
                                        className="group flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-300 rounded-xl px-2 relative"
                                    >

                                        {/*  Product Image, Title & Description */}
                                        <div className="flex items-start gap-6 w-full md:w-1/2">
                                            <div className="overflow-hidden rounded-lg border border-gray-100 shadow-sm shrink-0">
                                                <img
                                                    src={e.image}
                                                    alt={e.name}
                                                    className="w-24 h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="flex flex-col justify-center h-full pt-1">
                                                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">{e.name}</h3>

                                                {/* Short Description (Dynamic or Fallback) */}
                                                <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                                                    {e.description || "Premium quality fabric tailored for ultimate comfort and modern style. Designed to elevate your everyday wardrobe."}
                                                </p>

                                                {/* Mobile Price Display */}
                                                <p className="md:hidden text-lg font-bold text-gray-900 mt-4">
                                                    ${e.new_price.toFixed(2)}
                                                </p>
                                            </div>
                                        </div>

                                        {/*  Unit Price (Desktop Only) */}
                                        <p className="hidden md:block w-1/6 text-center text-gray-600 font-medium text-lg">
                                            ${e.new_price.toFixed(2)}
                                        </p>

                                        {/*  Quantity Controls */}
                                        <div className="w-full md:w-1/6 flex justify-start md:justify-center mt-6 md:mt-0">
                                            <div className="flex items-center border border-gray-200 rounded-full bg-white shadow-sm hover:border-gray-300 transition-colors">
                                                <button
                                                    onClick={() => removeFromCart(e.id)}
                                                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-black rounded-l-full transition-colors cursor-pointer active:bg-gray-100"
                                                >
                                                    <FontAwesomeIcon icon={faMinus} className="text-xs" />
                                                </button>
                                                <span className="w-10 text-center font-bold text-gray-900 text-sm">
                                                    {cartItems[e.id]}
                                                </span>
                                                <button
                                                    onClick={() => addToCart(e.id)}
                                                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-black rounded-r-full transition-colors cursor-pointer active:bg-gray-100"
                                                >
                                                    <FontAwesomeIcon icon={faPlus} className="text-xs" />
                                                </button>
                                            </div>
                                        </div>

                                        {/*  Total Price (Desktop Only - mobile uses CSS layout adjustments) */}
                                        <p className="hidden md:block w-1/6 text-right font-bold text-gray-900 text-lg">
                                            ${(e.new_price * cartItems[e.id]).toFixed(2)}
                                        </p>

                                        {/*  Remove Icon */}
                                        <button
                                            onClick={() => removeFromCart(e.id)}
                                            className="absolute top-6 right-2 md:relative md:top-0 w-8 h-8 flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all cursor-pointer opacity-100 md:opacity-0 md:group-hover:opacity-100"
                                            title="Remove Item"
                                        >
                                            <FontAwesomeIcon icon={faXmark} className="text-lg" />
                                        </button>

                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>

                {/* Right Side: Order Summary */}
                <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 sticky top-10">
                        <h2 className="font-bold text-2xl text-gray-900 mb-6">Order Summary</h2>

                        <div className="flex flex-col gap-4 mb-6">
                            <div className="flex justify-between items-center text-gray-600">
                                <p className="text-base">Subtotal</p>
                                <p className="text-base font-medium text-gray-900">${getTotalCartAmonut()}</p>
                            </div>

                            <div className="flex justify-between items-center text-gray-600">
                                <p className="text-base">Shipping Estimate</p>
                                <p className="text-xs font-bold text-green-700 bg-green-100/80 px-3 py-1.5 rounded-full uppercase tracking-wider">Free Delivery</p>
                            </div>
                        </div>

                        {/* Dashed Divider */}
                        <div className="w-full h-[1px] border-t border-dashed border-gray-300 my-6"></div>

                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <p className="text-xl text-gray-900 font-bold">Total</p>
                                <p className="text-xs text-gray-500 mt-1">Includes all taxes</p>
                            </div>
                            <p className="text-3xl text-gray-900 font-black">${getTotalCartAmonut()}</p>
                        </div>

                        <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95 cursor-pointer flex justify-center items-center gap-2">
                            PROCEED TO CHECKOUT
                        </button>

                        {/* Promo Code Section Integrated */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <p className="text-sm text-gray-500 font-medium mb-3 flex items-center gap-2">
                                <FontAwesomeIcon icon={faTag} /> Have a promo code?
                            </p>
                            <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:border-black focus-within:ring-1 focus-within:ring-black transition-all bg-white">
                                <input
                                    type="text"
                                    className="flex-1 px-4 py-3 outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent uppercase"
                                    placeholder="ENTER CODE"
                                />
                                <button className="bg-gray-900 text-white px-6 py-3 text-sm font-bold hover:bg-black transition-colors cursor-pointer">
                                    APPLY
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default CartItems;