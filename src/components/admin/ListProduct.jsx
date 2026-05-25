import React, { useEffect, useState } from 'react';

const ListProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // স্যাম্পল ডেটা (API এর পরিবর্তে এটি দিয়ে টেস্ট করুন)
        const sampleProducts = [
            { id: 1, name: "ESSENTIAL CREWNECK", new_price: "45.00", category: "Mens" },
            { id: 2, name: "OVERSIZED HOODIE", new_price: "65.00", category: "Mens" },
            { id: 3, name: "BASIC DENIM JACKET", new_price: "85.00", category: "Womens" },
            { id: 4, name: "MINIMALIST TEE", new_price: "25.00", category: "Kids" },
            { id: 5, name: "CASHMERE SWEATER", new_price: "120.00", category: "Womens" }
        ];

        // যদি API থেকে ডেটা না আসে, তবে স্যাম্পল ডেটা সেট করবে
        setProducts(sampleProducts);

        /* প্রোডাকশন মোডে API কল করার জন্য এটি ব্যবহার করবেন:
        fetch('http://localhost:5000/api/products')
            .then(res => res.json())
            .then(data => setProducts(data));
        */
    }, []);

    return (
        <div className="w-full">
            <div className="mb-12">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] mb-2">Inventory</h2>
                <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em]">Manage your product catalog</p>
            </div>

            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="text-[9px] text-gray-400 uppercase tracking-[0.2em]">
                        <th className="pb-6 border-b border-gray-100">Product Name</th>
                        <th className="pb-6 border-b border-gray-100">Category</th>
                        <th className="pb-6 border-b border-gray-100">Price</th>
                        <th className="pb-6 border-b border-gray-100 text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="text-[10px] uppercase tracking-[0.1em]">
                    {products.map((item) => (
                        <tr key={item.id} className="group hover:bg-gray-50 transition-all">
                            <td className="py-6 border-b border-gray-50">{item.name}</td>
                            <td className="py-6 border-b border-gray-50 text-gray-500">{item.category}</td>
                            <td className="py-6 border-b border-gray-50">${item.new_price}</td>
                            <td className="py-6 border-b border-gray-50 text-right">
                                <button className="text-gray-400 hover:text-black transition-all underline decoration-1 underline-offset-4">
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default ListProduct;