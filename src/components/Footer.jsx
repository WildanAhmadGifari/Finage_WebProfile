import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#111111] px-8 py-10 border-t border-[#2e2e2e]">
            <div className="flex flex-col items-center gap-6">

                {/* Logo */}
                <div>
                    <span className="text-[#18f294] text-2xl font-bold">Fin</span>
                    <span className="text-white text-2xl font-bold">age</span>
                </div>

                {/* Social Media */}
                <div className="flex gap-6">
                    <a href="#" className="text-gray-500 hover:text-[#18f294] transition-colors duration-200 text-sm">Instagram</a>
                    <a href="#" className="text-gray-500 hover:text-[#18f294] transition-colors duration-200 text-sm">LinkedIn</a>
                    <a href="#" className="text-gray-500 hover:text-[#18f294] transition-colors duration-200 text-sm">Twitter/X</a>
                    <a href="#" className="text-gray-500 hover:text-[#18f294] transition-colors duration-200 text-sm">Facebook</a>
                </div>

                {/* Copyright */}
                <p className="text-gray-600 text-xs">© 2024 Finage. All rights reserved.</p>

            </div>
        </div>
    );
}

export default Footer;