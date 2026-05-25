import React from 'react';

const Orders = () => {
    const orderList = [
        { id: "#ZNT-8492", date: "May 22, 2026", total: "$120.00", status: "Delivered", items: "Essential Crewneck, Basic Denim" },
        { id: "#ZNT-8510", date: "May 24, 2026", total: "$85.00", status: "Processing", items: "Oversized Hoodie" },
    ];

    return (
        <div className="max-w-[1000px] mx-auto px-4 py-20">
            <h1 className="text-[14px] font-light uppercase tracking-[0.4em] text-black mb-12 text-center">Order History</h1>

            <div className="space-y-6">
                {orderList.map((order) => (
                    <div key={order.id} className="border border-gray-100 p-8 hover:border-black transition-all">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

                            {/* Order Info */}
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em]">{order.id}</p>
                                <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em]">{order.date}</p>
                            </div>

                            {/* Items */}
                            <div className="text-[10px] text-gray-600 uppercase tracking-[0.1em]">
                                {order.items}
                            </div>

                            {/* Status & Price */}
                            <div className="flex items-center gap-8">
                                <p className={`text-[9px] uppercase tracking-[0.2em] font-bold ${order.status === 'Delivered' ? 'text-green-600' : 'text-amber-600'}`}>
                                    {order.status}
                                </p>
                                <p className="text-[12px] font-light">{order.total}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;