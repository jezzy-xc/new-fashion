import React from 'react';

const Dashboard = () => {
    const stats = [
        { title: "Total Revenue", value: "$45,231" },
        { title: "Total Orders", value: "1,204" },
        { title: "Total Users", value: "8,940" },
        { title: "Active Products", value: "156" }
    ];

    return (
        <div className="space-y-10">
            {/* Header */}
            <div>
                <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] mb-2">Overview</h2>
                <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em]">Dashboard summary for your clothing brand</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="border border-gray-100 p-8 hover:border-black transition-all">
                        <h3 className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-2">{stat.title}</h3>
                        <p className="text-[20px] font-light tracking-[0.1em]">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Recent Activity Section */}
            <div className="border border-gray-100 p-8">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Recent Orders</h3>
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[9px] text-gray-400 uppercase tracking-[0.2em]">
                            <th className="pb-4">Order ID</th>
                            <th className="pb-4">Customer</th>
                            <th className="pb-4">Amount</th>
                            <th className="pb-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-[10px] uppercase tracking-[0.1em]">
                        <tr className="border-t border-gray-50">
                            <td className="py-4">#ZNT-001</td>
                            <td className="py-4">Sivam</td>
                            <td className="py-4">$120.00</td>
                            <td className="py-4 text-green-600">Delivered</td>
                        </tr>
                        <tr className="border-t border-gray-50">
                            <td className="py-4">#ZNT-002</td>
                            <td className="py-4">Pranjal Ghosh</td>
                            <td className="py-4">$85.00</td>
                            <td className="py-4 text-amber-600">Pending</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;