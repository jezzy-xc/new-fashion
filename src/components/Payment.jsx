import React from 'react';

const Payment = () => {
    return (
        <div className="max-w-[600px] mx-auto px-4 py-20">
            <h1 className="text-[14px] font-light uppercase tracking-[0.4em] text-black mb-12 text-center">Select Payment Method</h1>

            <div className="flex flex-col gap-6">
                {/*card payment */}
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

        </div>
    );
}

export default Payment;