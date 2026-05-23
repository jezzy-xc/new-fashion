import React, { useContext, useRef, useState } from 'react'
import logo from '../assets/logo-2.png'
import icon from '../assets/shopping-cart.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faSearch, faSliders, faMagnifyingGlass, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { getTotalCartItems, searchTerm, setSearchTerm } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdownMenu = () => {
    menuRef.current.classList.toggle('nav-bar-on');
    setIsMenuOpen(prev => !prev);
  }

  return (
    <div className='fixed top-0 w-full z-999'>
      <div className='h-20 overflow-hidden text-[14px] mx-auto flex justify-between items-center py-4 px-[3px] bg-white border-1 border-b-gray-300 border-solid'>
        <Link to="/">
          <img className='w-25' src={logo} alt="Logo" />
        </Link>

        {/* Search Bar */}
        <div className="flex items-center w-full max-w-xs px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full focus-within:bg-white focus-within:border-indigo-500 focus-within:shadow-sm transition-all duration-300">

          {/* left side: magnifying glass) */}
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400 mr-2 text-xs" />

          {/* input */}
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent outline-none text-xs text-gray-700 placeholder-gray-400"
          />

          {/* divider */}
          <span className="h-4 w-[1px] bg-gray-300 mx-2"></span>

          {/* filter icon on right side */}
          <button
            type="button"
            className="text-gray-400 hover:text-indigo-600 active:scale-90 transition-all cursor-pointer flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faSliders} className="text-xs" />
          </button>
        </div>
        <ul className='nav-menu hidden md:flex space-x-8' ref={menuRef}>
          <li className='nav-item' onClick={() => { setMenu("shop") }}><Link to="/">Shop</Link>{menu === "shop" && <div className='active'></div>}</li>
          <li className='nav-item' onClick={() => { setMenu("mens") }}><Link to="/Mens">Mens</Link>{menu === "mens" && <div className='active'></div>}</li>
          <li className='nav-item' onClick={() => { setMenu("womens") }}><Link to="/Womens">Womens</Link> {menu === "womens" && <div className='active'></div>}</li>
          <li className='nav-item' onClick={() => { setMenu("kids") }}><Link to="/Kids">Kids</Link>{menu === "kids" && <div className='active'></div>}</li>
        </ul>
        <div className='flex items-center space-x-3 md:space-x-8'>
          <div className="flex relative">
            {/* wishlist icon */}
            <button className=' mr-3'> <FontAwesomeIcon icon={faHeart} size="xl" />
            </button>
            <div className="">
              <Link to="/Cart"><img src={icon} alt="" className='w-6 h-6' /></Link>
              <span className='absolute bottom-4 right-[-8px] rounded-full text-[12px] bg-gray-300 text-white text-center w-4 h-4 text-gray-400'>{getTotalCartItems()}</span>
            </div>
          </div>
          <Link to="/Login">
            {/* <button className='cursor-pointer rounded-full border-2 border-gray-300 px-2.5 md:px-3 py-1 hover:bg-gray-400 hover:text-white transition-all duration-[600ms]'>
              Login
            </button> */}
            <button>
              <FontAwesomeIcon icon={faUser} size="xl" />
            </button>
          </Link>
          <FontAwesomeIcon className='bar cursor-pointer text-3xl hover:text-gray-300' icon={isMenuOpen ? faXmark : faBars} onClick={dropdownMenu} />
        </div>
      </div>
    </div>
  );

}


export default Navbar