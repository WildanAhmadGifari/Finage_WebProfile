import React from 'react';

const About = () => {
    return (        
        <div className="bg-[#1a1a1a] p-8">
            <h1 className="text-white text-3xl font-bold text-center mb-8">ABOUT US</h1>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-8">
                <img src="/image/About.jpg" alt="About Us" className="w-80 rounded-[25px] border-4 border-[#f2fcf5] shadow-lg shadow-[#18f294] flex-shrink-0" />
                <p className="text-gray-500 leading-8 text-justify text-2xl">
                    Founded in 2020, Finage is a financial consulting firm with over 4 years of experience serving individuals, businesses, and corporations. We have proudly collaborated with state-owned enterprises, and we are committed to being your trusted partner in every financial decision. Our team of experts is dedicated to providing personalized financial solutions that align with your goals and aspirations. Whether you're looking for investment advice, retirement planning, or business financial strategies, Finage is here to guide you every step of the way.
                </p>
            </div>

            {/* Mobile */}
            <div className="block md:hidden overflow-hidden">
                <img src="/image/About.jpg" alt="About Us" className="float-left w-40 rounded-[25px] border-4 border-[#f2fcf5] shadow-lg shadow-[#18f294] mr-4 mb-2" />
                <p className="text-gray-500 leading-7 text-justify text-sm">
                    Founded in 2020, Finage is a financial consulting firm with over 4 years of experience serving individuals, businesses, and corporations. We have proudly collaborated with state-owned enterprises, and we are committed to being your trusted partner in every financial decision. Our team of experts is dedicated to providing personalized financial solutions that align with your goals and aspirations. Whether you're looking for investment advice, retirement planning, or business financial strategies, Finage is here to guide you every step of the way.
                </p>
            </div>
        </div>
    );
}

export default About;