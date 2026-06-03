import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faMagnifyingGlass, faHeart, faUser, faCartShopping, faSliders } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartItems, searchTerm, setSearchTerm } = useContext(ShopContext);

  return (
    <nav className='fixed top-0 w-full z-50 bg-white border-b border-gray-100'>
      <div className='max-w-[1200px] mx-auto h-26 flex justify-between items-center px-6'>

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenu("shop")}
          className="text-[20px] font-medium tracking-[0.3em] uppercase shrink-0"
        >
          Zentryx<span className="font-bold text-gray-300">.</span>
        </Link>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex items-center w-64 lg:w-80 h-10 bg-gray-50 border border-gray-100 pl-4 pr-3 group focus-within:border-gray-300 transition-all mx-4">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-gray-300 text-[12px] group-focus-within:text-gray-500 transition-colors"
          />
          <input
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 h-full bg-transparent outline-none px-3 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-700 placeholder-gray-300"
          />
          <button className="text-gray-300 hover:text-black transition-colors px-1">
            <FontAwesomeIcon icon={faSliders} className="text-[12px]" />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8 text-[11px] font-normal uppercase tracking-[0.2em] text-gray-500'>
          {["shop", "mens", "womens", "kids"].map((item) => (
            <li key={item} className="relative cursor-pointer hover:text-black transition-all">
              <Link
                to={item === "shop" ? "/" : `/${item}`}
                onClick={() => setMenu(item)}
              >
                {item}
              </Link>
              {menu === item && <div className='absolute -bottom-1 left-0 w-full h-[2px] bg-black'></div>}
            </li>
          ))}
        </ul>

        {/* Right Side Icons */}
        <div className='flex items-center gap-5 text-[16px] text-gray-600'>
          <Link to="/Wishlist" className="hover:text-black transition-all hidden sm:block">
            <FontAwesomeIcon icon={faHeart} />
          </Link>

          {/* Cart Icon with Badge */}
          <Link to="/Cart" className="relative hover:text-black transition-all">
            <FontAwesomeIcon icon={faCartShopping} />
            {getTotalCartItems() > 0 && (
              <span className='absolute -top-2 -right-2 text-[8px] font-bold bg-black text-white min-w-[14px] h-[14px] flex items-center justify-center rounded-full px-[2px] shadow-sm'>
                {getTotalCartItems()}
              </span>
            )}
          </Link>

          <Link to="/Login" className="hover:text-black transition-all">
            <FontAwesomeIcon icon={faUser} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button className='md:hidden ml-2 focus:outline-none' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-6 px-4 flex flex-col gap-5 text-center uppercase text-[12px] tracking-widest animate-in slide-in-from-top duration-300">
          {["shop", "mens", "womens", "kids"].map((item) => (
            <Link
              key={item}
              to={item === "shop" ? "/" : `/${item}`}
              onClick={() => { setIsMenuOpen(false); setMenu(item) }}
              className={menu === item ? "text-black font-bold" : "text-gray-500"}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;