import React, { useEffect, useState } from 'react';
// সঠিক পাথ: src/service/supabaseClient.js
import { supabase } from '../../service/supabaseClient';

const ListProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            // Supabase থেকে প্রোডাক্ট ডাটা আনা
            const { data, error } = await supabase
                .from('products')
                .select('*');

            if (error) {
                console.error("Error fetching products:", error);
            } else {
                setProducts(data || []);
            }
        } catch (err) {
            console.error("Unexpected error:", err);
        }
    };

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
                    {products.length > 0 ? (
                        products.map((item) => (
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
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="py-10 text-center text-gray-400 uppercase tracking-[0.2em]">
                                No products found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListProduct;