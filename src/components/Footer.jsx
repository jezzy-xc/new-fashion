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
        <footer className="bg-white text-black pt-24 px-4 pb-12 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-[1200px] mx-auto">

                {/* Brand */}
                <div className="flex flex-col">
                    <a href="#" className="text-[18px] font-bold tracking-[0.4em] mb-6 uppercase">
                        Zentryx<span className="text-gray-300">.</span>
                    </a>
                    <p className="text-[11px] font-light leading-loose text-gray-400 mb-8 max-w-[200px] tracking-[0.1em]">
                        Elevating streetwear culture since 2026. Premium quality and the spirit of the streets.
                    </p>
                    <div className="flex gap-6">
                        {socialLinks.map((item, index) => (
                            <a key={index} href={item.link} className="text-gray-400 hover:text-black transition-all">
                                <FontAwesomeIcon icon={item.icon} size="xs" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Shop & Help Links */}
                {[
                    { title: 'Shop', links: ['New Arrivals', 'Best Sellers', 'Oversized Tees', 'Limited Drops'] },
                    { title: 'Help', links: ['Order Tracking', 'Shipping Policy', 'Returns', 'FAQs'] }
                ].map((section) => (
                    <div key={section.title} className="flex flex-col">
                        <h4 className="text-[10px] font-bold tracking-[0.3em] mb-8 uppercase text-black">{section.title}</h4>
                        <ul className="flex flex-col gap-4">
                            {section.links.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-[11px] font-light text-gray-400 hover:text-black transition-all tracking-[0.1em]">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Newsletter */}
                <div className="flex flex-col">
                    <h4 className="text-[10px] font-bold tracking-[0.3em] mb-8 uppercase text-black">Newsletter</h4>
                    <p className="text-[11px] font-light text-gray-400 mb-6 tracking-[0.1em]">Subscribe for early access.</p>
                    <form className="flex border-b border-gray-100 pb-2 focus-within:border-black transition-all">
                        <input
                            type="email"
                            placeholder="YOUR EMAIL"
                            className="bg-transparent border-none outline-none text-[10px] font-light w-full placeholder:text-gray-300 tracking-[0.2em]"
                        />
                        <button type="submit" className="text-[10px] font-bold tracking-[0.3em] hover:text-black transition-all">JOIN</button>
                    </form>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-24 pt-8 border-t border-gray-100 text-center">
                <p className="text-[9px] tracking-[0.4em] text-gray-400 font-light uppercase">
                    &copy; 2026 Zentryx. ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    );
}