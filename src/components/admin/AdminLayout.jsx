import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className="flex min-h-screen bg-white">
            {/* Sidebar */}
            <div className="w-64 border-r border-gray-100 p-10">
                <h1 className="text-[14px] font-bold tracking-[0.3em] uppercase mb-16">Zentryx Admin</h1>
                <nav className="flex flex-col gap-6 text-[10px] uppercase tracking-[0.2em] text-gray-500">
                    <Link to="/admin/dashboard" className="hover:text-black">Dashboard</Link>
                    <Link to="/admin/addproduct" className="hover:text-black">Add Product</Link>
                    <Link to="/admin/listproduct" className="hover:text-black">Product List</Link>
                    <Link to="/admin/inventorymanager" className="hover:text-black">Inventory</Link>
                    <Link to="/admin/orders" className="hover:text-black">Orders</Link>
                </nav>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-10 bg-gray-50">
                <Outlet />
            </div>
        </div>
    );
}
export default AdminLayout;