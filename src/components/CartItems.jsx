import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus, faMinus, faTag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CartItems = () => {
    const context = useContext(ShopContext);

    if (!context) return <div className="text-center py-20">Loading Cart...</div>;

    const { allProducts, cartItems, addToCart, removeFromCart, getTotalCartAmount } = context;

    const totalAmount = typeof getTotalCartAmount === 'function' ? getTotalCartAmount() : 0;

    return (
        <div className="max-w-[1200px] mx-auto px-4 py-20">
            <div className="mb-16">
                <h1 className="text-[14px] font-light uppercase tracking-[0.4em] text-black mb-2">Shopping Cart</h1>
                <p className="text-[9px] text-gray-400 uppercase tracking-[0.3em]">Review your selections</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-20">
                <div className="w-full lg:w-2/3">
                    <div className="hidden md:flex justify-between pb-6 border-b border-gray-100 text-[9px] font-light uppercase tracking-[0.3em] text-gray-400">
                        <p className="w-1/2">Product</p>
                        <p className="w-1/6 text-center">Price</p>
                        <p className="w-1/6 text-center">Qty</p>
                        <p className="w-1/6 text-right">Total</p>
                    </div>

                    <div className="flex flex-col">
                        {allProducts && allProducts.map((e) => {
                            if (cartItems[e.id] > 0) {
                                return (
                                    <div key={e.id} className="group flex flex-col md:flex-row items-center justify-between py-10 border-b border-gray-100 relative">
                                        <div className="flex items-center gap-8 w-full md:w-1/2">
                                            <img src={e.image} alt={e.name} className="w-16 h-20 object-cover" />
                                            <div>
                                                <h3 className="text-[11px] font-light uppercase tracking-[0.1em] text-black">{e.name}</h3>
                                                <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] mt-1">Premium Quality</p>
                                            </div>
                                        </div>
                                        <p className="hidden md:block w-1/6 text-center text-[11px] font-light text-gray-500">${e.new_price?.toFixed(2)}</p>
                                        <div className="w-full md:w-1/6 flex justify-start md:justify-center mt-4 md:mt-0">
                                            <div className="flex items-center border border-gray-100">
                                                <button onClick={() => removeFromCart(e.id)} className="w-8 h-8 hover:bg-black hover:text-white transition-all"><FontAwesomeIcon icon={faMinus} className="text-[9px]" /></button>
                                                <span className="w-10 text-center text-[11px] font-light">{cartItems[e.id]}</span>
                                                <button onClick={() => addToCart(e.id)} className="w-8 h-8 hover:bg-black hover:text-white transition-all"><FontAwesomeIcon icon={faPlus} className="text-[9px]" /></button>
                                            </div>
                                        </div>
                                        <p className="hidden md:block w-1/6 text-right font-light text-[11px]">${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                                        <button onClick={() => removeFromCart(e.id)} className="absolute top-10 right-0 md:static hover:text-black transition-colors text-gray-300">
                                            <FontAwesomeIcon icon={faXmark} />
                                        </button>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>

                <div className="w-full lg:w-1/3">
                    <div className="border border-gray-100 p-10 sticky top-24">
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-black">Summary</h2>
                        <div className="flex justify-between mb-6 text-[10px] uppercase font-light text-gray-400 tracking-[0.2em]">
                            <p>Subtotal</p>
                            <p className="text-black">${totalAmount.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between mb-10 text-[10px] uppercase font-light text-gray-400 tracking-[0.2em]">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <div className="flex justify-between border-t border-gray-100 pt-8 mb-10 font-bold text-[12px] uppercase tracking-[0.2em]">
                            <p>Total</p>
                            <p>${totalAmount.toFixed(2)}</p>
                        </div>
                        <Link
                            to="/checkout"
                            className="w-full block text-center border border-black text-black py-4 text-[9px] font-light tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all mb-10"
                        >
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;