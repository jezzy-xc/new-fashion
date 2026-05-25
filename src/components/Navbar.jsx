import React, { useContext, useState } from 'react'

import icon from '../assets/shopping-cart.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faMagnifyingGlass, faSliders, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartItems, searchTerm, setSearchTerm } = useContext(ShopContext);

  return (
    <nav className='fixed top-0 w-full z-50 bg-white border-b border-gray-100'>
      <div className='max-w-[1200px] mx-auto h-20 flex justify-between items-center px-4'>

        {/* Logo */}
<Link 
          to="/" 
          onClick={() => setMenu("shop")}
          className="text-[18px] font-bold tracking-[0.4em] uppercase"
        >
          Zentryx<span className="text-gray-300">.</span>
        </Link>
        {/* Search Bar */}
        <div className="hidden md:flex items-center w-64 bg-gray-50 border border-gray-100 px-4 py-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-300 text-[10px] mr-3" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent outline-none text-[10px] font-light uppercase tracking-[0.2em] text-gray-800 placeholder-gray-300"
          />
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-10 text-[10px] font-light uppercase tracking-[0.3em] text-gray-500'>
          {["shop", "mens", "womens", "kids"].map((item) => (
            <li key={item} className="cursor-pointer hover:text-black transition-all">
              <Link to={item === "shop" ? "/" : `/${item.charAt(0).toUpperCase() + item.slice(1)}`} onClick={() => setMenu(item)}>
                {item}
              </Link>
              {menu === item && <div className='h-[1px] bg-black mt-1'></div>}
            </li>
          ))}
        </ul>

        {/* Right Side Icons */}
        <div className='flex items-center gap-6 text-[12px] text-gray-800'>
          <Link to="/Wishlist" className="hover:text-black transition-all"><FontAwesomeIcon icon={faHeart} /></Link>

          <Link to="/Cart" className="relative">
            <img src={icon} alt="Cart" className='w-4' />
            {getTotalCartItems() > 0 && (
              <span className='absolute -top-2 -right-2 text-[8px] font-bold bg-black text-white w-3 h-3 flex items-center justify-center rounded-full'>
                {getTotalCartItems()}
              </span>
            )}
          </Link>

          <Link to="/Login" className="hover:text-black transition-all"><FontAwesomeIcon icon={faUser} /></Link>

          <button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;