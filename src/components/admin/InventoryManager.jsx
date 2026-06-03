import React, { useState } from 'react';

const InventoryManager = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Essential Crewneck", category: "Mens", price: "45.00", stock: 15, image: "https://via.placeholder.com/50" }
    ]);
    const [product, setProduct] = useState({ name: "", price: "", category: "Mens", stock: "", image: "" });
    const [isEditing, setIsEditing] = useState(null);

    const handleAddOrUpdate = () => {
        if (isEditing) {
            setProducts(products.map(p => p.id === isEditing ? { ...product, id: isEditing } : p));
            setIsEditing(null);
        } else {
            setProducts([...products, { ...product, id: Date.now() }]);
        }
        setProduct({ name: "", price: "", category: "Mens", stock: "", image: "" });
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            setProducts(products.filter(item => item.id !== id));
        }
    };

    const handleEdit = (item) => {
        setIsEditing(item.id);
        setProduct(item);
    };

    return (
        <div className="flex gap-16 p-10">
            {/* Left Side: Product List */}
            <div className="w-2/3">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] mb-8">Product Inventory</h2>
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[9px] text-gray-400 uppercase border-b">
                            <th className="pb-4">Image</th>
                            <th className="pb-4">Name</th>
                            <th className="pb-4">Category</th>
                            <th className="pb-4">Price</th>
                            <th className="pb-4">Stock</th>
                            <th className="pb-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(item => (
                            <tr key={item.id} className="border-b text-[10px] uppercase">
                                <td className="py-2"><img src={item.image} className="w-10 h-10 object-cover" alt="" /></td>
                                <td className="py-4">{item.name}</td>
                                <td className="py-4 text-gray-500">{item.category}</td>
                                <td className="py-4">${item.price}</td>
                                <td className="py-4">{item.stock}</td>
                                <td className="py-4 text-right flex justify-end gap-3 items-center">
                                    <button onClick={() => handleEdit(item)} className="text-blue-500 underline">Edit</button>
                                    <button onClick={() => handleDelete(item.id)} className="text-red-500 text-[14px]">✕</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Right Side: Add/Edit Form */}
            <div className="w-1/3 border-l pl-10">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] mb-8">
                    {isEditing ? "Edit Product" : "Add New Product"}
                </h2>
                <div className="flex flex-col gap-4">
                    <input className="w-full border-b py-2 outline-none text-[10px]" placeholder="Product Name" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
                    <input className="w-full border-b py-2 outline-none text-[10px]" placeholder="Price" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />
                    <input className="w-full border-b py-2 outline-none text-[10px]" placeholder="Stock" value={product.stock} onChange={(e) => setProduct({ ...product, stock: e.target.value })} />
                    <input className="w-full border-b py-2 outline-none text-[10px]" placeholder="Image URL" value={product.image} onChange={(e) => setProduct({ ...product, image: e.target.value })} />
                    <select className="w-full border-b py-2 outline-none text-[10px] bg-white" value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })}>
                        <option>Mens</option>
                        <option>Womens</option>
                        <option>Kids</option>
                    </select>
                    <button onClick={handleAddOrUpdate} className="bg-black text-white py-3 text-[10px] uppercase font-bold tracking-[0.2em]">
                        {isEditing ? "Update Product" : "Add Product"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InventoryManager;