import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const socialLinks = [
        { icon: faFacebookF, link: '#' },
        { icon: faInstagram, link: '#' },
        { icon: faXTwitter, link: '#' },
        { icon: faTiktok, link: '#' },
    ];

    return (
        <footer className="bg-white text-gray-800 pt-16 px-[5%] pb-8 border-t border-gray-200 font-['Poppins',sans-serif]">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 max-w-[1200px] mx-auto">

                {/* Column 1: Brand */}
                <div className="flex flex-col">
                    <a href="#" className="text-2xl font-bold tracking-wider mb-4 text-black">
                        XC<span className="text-red-500">.</span>
                    </a>
                    <p className="text-[13px] leading-relaxed text-gray-500 mb-6">
                        Elevating streetwear culture since 2026. Premium quality and the spirit of the streets.
                    </p>
                    <div className="flex gap-4">
                        {socialLinks.map((item, index) => (
                            <a key={index} href={item.link} className="text-gray-400 hover:text-black transition-colors">
                                <FontAwesomeIcon icon={item.icon} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Column 2: Shop */}
                <div className="flex flex-col">
                    <h4 className="text-[11px] font-bold tracking-[2px] mb-6 text-black uppercase">Shop</h4>
                    <ul className="flex flex-col gap-3">
                        {['New Arrivals', 'Best Sellers', 'Oversized Tees', 'Limited Drops'].map((link) => (
                            <li key={link}>
                                <a href="#" className="text-[13px] text-gray-500 hover:text-red-500 transition-colors">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Help */}
                <div className="flex flex-col">
                    <h4 className="text-[11px] font-bold tracking-[2px] mb-6 text-black uppercase">Help</h4>
                    <ul className="flex flex-col gap-3">
                        {['Order Tracking', 'Shipping Policy', 'Returns', 'FAQs'].map((link) => (
                            <li key={link}>
                                <a href="#" className="text-[13px] text-gray-500 hover:text-red-500 transition-colors">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Newsletter */}
                <div className="flex flex-col">
                    <h4 className="text-[11px] font-bold tracking-[2px] mb-6 text-black uppercase">Newsletter</h4>
                    <p className="text-[13px] text-gray-500 mb-4">Subscribe for early access.</p>
                    <form className="flex border-b border-gray-300 pb-2 focus-within:border-black transition-colors">
                        <input
                            type="email"
                            placeholder="YOUR EMAIL"
                            className="bg-transparent border-none outline-none text-[12px] w-full placeholder:text-gray-400"
                        />
                        <button type="submit" className="text-[11px] font-bold tracking-[1px] hover:text-red-500">JOIN</button>
                    </form>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
                <p className="text-[10px] tracking-[2px] text-gray-400 uppercase">
                    &copy; 2026 XC STUDIO. ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    );
}