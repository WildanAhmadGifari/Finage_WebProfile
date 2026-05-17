'use client';
import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <div className="flex justify-between items-center bg-[#1a1a1a] p-6">

            {/* Logo */}
            <div className="flex items-center">
                <FaMoneyBillWave className="text-[#18f294] text-3xl mr-2" />
                <span className="text-[#18f294] text-3xl font-bold">Fin</span>
                <span className="text-white text-3xl font-bold">age</span>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-10">
                <a href="" className="text-white hover:text-[#18f294]">Home</a>
                <a href="" className="text-white hover:text-[#18f294]">About</a>

                <div className="relative">
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="flex items-center text-white hover:text-[#18f294]"
                    >
                        Service
                        <IoMdArrowDropdown className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {showDropdown && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#333] text-white py-2 px-4 w-50 rounded-lg">
                            <a className="block py-1 px-2 hover:bg-[#555] rounded-md">Financial Planning</a>
                            <a className="block py-1 px-2 hover:bg-[#555] rounded-md">Business Financial Consulting</a>
                            <a className="block py-1 px-2 hover:bg-[#555] rounded-md">Tax Planning</a>
                        </div>
                    )}
                </div>

                <a href="" className="text-white hover:text-[#18f294]">Why us</a>
                <a href="" className="text-black bg-[#18f294] px-5 py-2 rounded">Contact</a>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
                <button onClick={() => setOpenSidebar(true)}>
                    <IoMenu className="text-white text-3xl" />
                </button>
            </div>

            {/* MOBILE SIDEBAR */}
            {openSidebar && (
                <div className="fixed inset-0 z-50">

                    {/* Background overlay */}
                    <div
                        className="absolute inset-0 bg-black/60"
                        onClick={() => setOpenSidebar(false)}
                    />

                    {/* Sidebar */}
                    <div className="absolute left-0 top-0 h-full w-64 bg-[#1a1a1a] p-6 flex flex-col gap-6">

                        {/* Close button */}
                        <button
                            onClick={() => setOpenSidebar(false)}
                            className="text-white text-2xl self-end"
                        >
                            ✕
                        </button>

                        <a href="" className="text-white hover:text-[#18f294]">Home</a>
                        <a href="" className="text-white hover:text-[#18f294]">About</a>

                        {/* Dropdown */}
                        <div>
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="flex items-center text-white gap-1"
                            >
                                Service
                                <IoMdArrowDropdown className={`${showDropdown ? 'rotate-180' : ''} transition`} />
                            </button>

                            {showDropdown && (
                                <div className="ml-4 mt-2 flex flex-col gap-2">
                                    <a className="text-white hover:text-[#18f294]">Financial Planning</a>
                                    <a className="text-white hover:text-[#18f294]">Business Financial Consulting</a>
                                    <a className="text-white hover:text-[#18f294]">Tax Planning</a>
                                </div>
                            )}
                        </div>

                        <a href="" className="text-white hover:text-[#18f294]">Why us</a>
                        <a href="" className="text-black bg-[#18f294] px-4 py-2 rounded">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;