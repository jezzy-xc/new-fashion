import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Checkout = () => {
    const { getTotalCartAmount } = useContext(ShopContext);
    const total = typeof getTotalCartAmount === 'function' ? getTotalCartAmount() : 0;

    return (
        <div className="max-w-[1000px] mx-auto px-4 py-20">
            <h1 className="text-[14px] font-light uppercase tracking-[0.4em] text-black mb-12 text-center">Checkout & Payment</h1>

            <div className="flex flex-col lg:flex-row gap-20">
                {/* Left Side: Shipping & Payment */}
                <div className="w-full lg:w-2/3">
                    {/* Shipping Info */}
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black"> Shipping Information</h2>
                    <form className="flex flex-col gap-6 mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="FIRST NAME" className="border-b border-gray-200 py-3 text-[10px] uppercase tracking-[0.2em] outline-none focus:border-black" />
                            <input type="text" placeholder="LAST NAME" className="border-b border-gray-200 py-3 text-[10px] uppercase tracking-[0.2em] outline-none focus:border-black" />
                        </div>
                        <input type="text" placeholder="STREET ADDRESS" className="border-b border-gray-200 py-3 text-[10px] uppercase tracking-[0.2em] outline-none focus:border-black" />
                        <input type="email" placeholder="EMAIL ADDRESS" className="border-b border-gray-200 py-3 text-[10px] uppercase tracking-[0.2em] outline-none focus:border-black" />
                    </form>

                    {/* Payment Options */}
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black"> Payment Method</h2>
                    <div className="flex flex-col gap-6">
                        {/* CArd Payment*/}
                        <div className="border border-gray-100 p-6 cursor-pointer hover:border-black transition-all">
                            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Credit / Debit Card</h3>
                            <p className="text-[9px] text-gray-400 uppercase tracking-[0.1em]">Pay securely with Visa, Mastercard, or Amex</p>
                        </div>

                        {/*Payment app*/}
                        <div className="border border-gray-100 p-6 cursor-pointer hover:border-black transition-all">
                            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Mobile Banking</h3>
                            <p className="text-[9px] text-gray-400 uppercase tracking-[0.1em]">Payemts Via Googlr Pay, Phone pe or Bharat Pe</p>
                        </div>

                        {/*Cash on delivery */}
                        <div className="border border-gray-100 p-6 cursor-pointer hover:border-black transition-all">
                            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Cash On Delivery</h3>
                            <p className="text-[9px] text-gray-400 uppercase tracking-[0.1em]">Pay in cash when you receive your order</p>
                        </div>
                    </div>

                    <button className="w-full bg-black text-white py-4 mt-10 text-[9px] font-bold tracking-[0.3em] uppercase hover:bg-gray-800 transition-all">
                        Complete Purchase
                    </button>
                </div>

                {/* Right Side: Order Summary */}
                <div className="w-full lg:w-1/3">
                    <div className="border border-gray-100 p-10 sticky top-24">
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black">Order Summary</h2>
                        <div className="flex justify-between mb-4 text-[10px] uppercase font-light text-gray-400 tracking-[0.2em]">
                            <p>Subtotal</p>
                            <p className="text-black">${total.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between mb-8 text-[10px] uppercase font-light text-gray-400 tracking-[0.2em]">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <div className="flex justify-between border-t border-gray-100 pt-8 mb-10 font-bold text-[12px] uppercase tracking-[0.2em]">
                            <p>Total</p>
                            <p>${total.toFixed(2)}</p>
                        </div>
                        <button className="w-full bg-black text-white py-4 text-[9px] font-bold tracking-[0.3em] uppercase hover:bg-gray-800 transition-all">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Checkout;