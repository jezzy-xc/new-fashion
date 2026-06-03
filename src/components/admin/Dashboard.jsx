import React, { useEffect, useState } from 'react';
import { supabase } from '../../service/supabaseClient';

const Dashboard = () => {
    const [statsData, setStatsData] = useState({
        revenue: 0,
        orders: 0,
        users: 0,
        products: 0
    });

    useEffect(() => {
        const fetchDashboardStats = async () => {
            try {
                // Supabase থেকে ডাটা ফেচ করা
                const { count: orderCount } = await supabase.from('orders').select('*', { count: 'exact', head: true });
                const { count: userCount } = await supabase.from('users').select('*', { count: 'exact', head: true });
                const { count: productCount } = await supabase.from('products').select('*', { count: 'exact', head: true });

                const { data: ordersData } = await supabase.from('orders').select('amount');
                const totalRevenue = ordersData?.reduce((sum, order) => sum + (order.amount || 0), 0) || 0;

                setStatsData({
                    revenue: totalRevenue.toFixed(2),
                    orders: orderCount || 0,
                    users: userCount || 0,
                    products: productCount || 0
                });
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchDashboardStats();
    }, []);

    return (
        <div className="space-y-10">
            <div>
                <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] mb-2">Overview</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border border-gray-100 p-8">
                    <h3 className="text-[9px] uppercase tracking-[0.2em] text-gray-400">Total Revenue</h3>
                    <p className="text-[20px]">${statsData.revenue}</p>
                </div>
                <div className="border border-gray-100 p-8">
                    <h3 className="text-[9px] uppercase tracking-[0.2em] text-gray-400">Total Orders</h3>
                    <p className="text-[20px]">{statsData.orders}</p>
                </div>
                <div className="border border-gray-100 p-8">
                    <h3 className="text-[9px] uppercase tracking-[0.2em] text-gray-400">Total Users</h3>
                    <p className="text-[20px]">{statsData.users}</p>
                </div>
                <div className="border border-gray-100 p-8">
                    <h3 className="text-[9px] uppercase tracking-[0.2em] text-gray-400">Active Products</h3>
                    <p className="text-[20px]">{statsData.products}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;