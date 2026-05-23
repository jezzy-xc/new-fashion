import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Signup() {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4 font-['Poppins',sans-serif]">

      {/* card*/}
      <div className="w-full max-w-[360px] border border-gray-200 p-8">

        {/* Header */}
        <div className="mb-8 text-left">
          <h1 className="text-xl font-bold text-black mb-1 uppercase tracking-wider">Sign Up</h1>
          <p className="text-[11px] text-gray-500 uppercase tracking-widest">Create your account</p>
        </div>

        <form className="flex flex-col gap-4">

          <input className="w-full px-0 py-2 border-b border-gray-300 outline-none text-sm focus:border-black transition-all" type="text" placeholder="FULL NAME" required />
          <input className="w-full px-0 py-2 border-b border-gray-300 outline-none text-sm focus:border-black transition-all" type="email" placeholder="EMAIL ADDRESS" required />

          <div className="relative">
            <input className="w-full px-0 py-2 border-b border-gray-300 outline-none text-sm focus:border-black transition-all" type={passwordShow ? 'text' : 'password'} placeholder="PASSWORD" required />
            <FontAwesomeIcon className="absolute top-2 right-0 text-gray-400 cursor-pointer text-xs hover:text-black" icon={passwordShow ? faEyeSlash : faEye} onClick={() => setPasswordShow(!passwordShow)} />
          </div>

          <div className="relative">
            <input className="w-full px-0 py-2 border-b border-gray-300 outline-none text-sm focus:border-black transition-all" type={confirmPasswordShow ? 'text' : 'password'} placeholder="CONFIRM PASSWORD" required />
            <FontAwesomeIcon className="absolute top-2 right-0 text-gray-400 cursor-pointer text-xs hover:text-black" icon={confirmPasswordShow ? faEyeSlash : faEye} onClick={() => setConfirmPasswordShow(!confirmPasswordShow)} />
          </div>

          <div className="flex items-center gap-2 mt-2">
            <input id="terms" type="checkbox" className="w-3 h-3 cursor-pointer" required />
            <label htmlFor="terms" className="text-[10px] text-gray-400 uppercase tracking-wider">I agree to terms</label>
          </div>

          <button className="w-full bg-black text-white mt-4 py-3 text-[11px] font-bold tracking-[2px] uppercase hover:bg-red-500 transition-all cursor-pointer">
            Sign Up
          </button>

          <p className="text-center text-gray-500 text-[10px] mt-2 uppercase tracking-widest">
            Already have an account? <Link to="/Login" className="text-black font-bold hover:underline">Login</Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Signup;