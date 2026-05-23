import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Login = () => {
    const [passwordShow, setPasswordShow] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4 font-['Poppins',sans-serif]">

            <div className="w-full max-w-[360px] border border-gray-200 p-8">

                {/* Header */}
                <div className="mb-8 text-left">
                    <h1 className="text-xl font-bold text-black mb-1 uppercase tracking-wider">Login</h1>
                    <p className="text-[11px] text-gray-500 uppercase tracking-widest">Welcome back</p>
                </div>

                <form className="flex flex-col gap-4">

                    {/* Email Input */}
                    <input
                        className="w-full px-0 py-2 border-b border-gray-300 outline-none text-sm focus:border-black transition-all"
                        type="email"
                        placeholder="EMAIL ADDRESS"
                        required
                    />

                    {/* Password Input */}
                    <div className="relative">
                        <input
                            className="w-full px-0 py-2 border-b border-gray-300 outline-none text-sm focus:border-black transition-all"
                            type={passwordShow ? 'text' : 'password'}
                            placeholder="PASSWORD"
                            required
                        />
                        <FontAwesomeIcon
                            className="absolute top-2 right-0 text-gray-400 cursor-pointer text-xs hover:text-black"
                            icon={passwordShow ? faEyeSlash : faEye}
                            onClick={() => setPasswordShow(!passwordShow)}
                        />
                    </div>

                    {/* Keep Logged In */}
                    <div className="flex items-center gap-2 mt-2">
                        <input id="keep-login" type="checkbox" className="w-3 h-3 cursor-pointer" />
                        <label htmlFor="keep-login" className="text-[10px] text-gray-400 uppercase tracking-wider">Keep me logged in</label>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full bg-black text-white mt-4 py-3 text-[11px] font-bold tracking-[2px] uppercase hover:bg-red-500 transition-all cursor-pointer">
                        Login
                    </button>

                    {/* Sign Up Link */}
                    <p className="text-center text-gray-500 text-[10px] mt-2 uppercase tracking-widest">
                        Don't have an account? <Link to="/Signup" className="text-black font-bold hover:underline">Sign Up</Link>
                    </p>

                </form>
            </div>
        </div>
    );
}

export default Login;