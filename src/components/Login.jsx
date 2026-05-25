import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Login = () => {
    const [passwordShow, setPasswordShow] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">

            <div className="w-full max-w-[320px] p-4">

                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-[14px] font-light uppercase tracking-[0.4em] text-black mb-2">Login</h1>
                    <p className="text-[9px] text-gray-400 uppercase tracking-[0.3em]">Welcome back to your account</p>
                </div>

                <form className="flex flex-col gap-6">

                    {/* Email Input */}
                    <input
                        className="w-full px-0 py-2 border-b border-gray-100 outline-none text-[11px] font-light tracking-[0.1em] focus:border-black transition-all placeholder-gray-300"
                        type="email"
                        placeholder="EMAIL"
                        required
                    />

                    {/* Password Input */}
                    <div className="relative">
                        <input
                            className="w-full px-0 py-2 border-b border-gray-100 outline-none text-[11px] font-light tracking-[0.1em] focus:border-black transition-all placeholder-gray-300"
                            type={passwordShow ? 'text' : 'password'}
                            placeholder="PASSWORD"
                            required
                        />
                        <FontAwesomeIcon
                            className="absolute top-2 right-0 text-gray-300 cursor-pointer text-[10px] hover:text-black"
                            icon={passwordShow ? faEyeSlash : faEye}
                            onClick={() => setPasswordShow(!passwordShow)}
                        />
                    </div>

                    {/* Keep Logged In */}
                    <div className="flex items-center gap-3 mt-2">
                        <input id="keep-login" type="checkbox" className="w-3 h-3 appearance-none border border-gray-300 checked:bg-black cursor-pointer" />
                        <label htmlFor="keep-login" className="text-[9px] text-gray-400 uppercase tracking-[0.2em] cursor-pointer">Keep me logged in</label>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full border border-black text-black mt-4 py-3 text-[10px] font-light tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all cursor-pointer">
                        Login
                    </button>

                    {/* Sign Up Link */}
                    <p className="text-center text-gray-400 text-[9px] mt-4 uppercase tracking-[0.2em]">
                        Don't have an account? <Link to="/Signup" className="text-black font-light hover:underline">Sign Up</Link>
                    </p>

                </form>
            </div>
        </div>
    );
}

export default Login;