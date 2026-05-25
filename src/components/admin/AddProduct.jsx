import React, { useState } from 'react';

const AddProduct = () => {
    const [product, setProduct] = useState({ name: "", price: "", category: "Mens", image: "" });

    return (
        <div className="max-w-[500px]">
            <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] mb-10">Add New Product</h2>
            <div className="flex flex-col gap-8">
                <input className="w-full border-b border-gray-200 py-3 outline-none text-[10px] uppercase tracking-[0.2em]" placeholder="Product Name" onChange={(e) => setProduct({ ...product, name: e.target.value })} />
                <input className="w-full border-b border-gray-200 py-3 outline-none text-[10px] uppercase tracking-[0.2em]" placeholder="Price" onChange={(e) => setProduct({ ...product, price: e.target.value })} />
                <select className="w-full border-b border-gray-200 py-3 outline-none text-[10px] uppercase tracking-[0.2em] bg-transparent">
                    <option>Mens</option>
                    <option>Womens</option>
                    <option>Kids</option>
                </select>
                <button className="bg-black text-white py-4 text-[9px] font-bold tracking-[0.3em] uppercase hover:bg-gray-800 transition-all">
                    Add Product
                </button>
            </div>
        </div>
    );
}
export default AddProduct;