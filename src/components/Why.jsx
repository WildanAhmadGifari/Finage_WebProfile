import React from 'react';

const WhyUs = () => {
    const reasons = [
        {
            icon: "📅",
            title: "4 Years of Experience",
            desc: "With over 4 years in the industry, we have the expertise to handle any financial challenge you face."
        },
        {
            icon: "🏛️",
            title: "Trusted by State-Owned Enterprises",
            desc: "We have proudly collaborated with state-owned enterprises, proving our credibility and professionalism."
        },
        {
            icon: "👥",
            title: "Personalized Approach",
            desc: "We tailor our financial solutions to fit your unique goals, whether you're an individual, UMKM, or corporation."
        },
        {
            icon: "🔒",
            title: "Integrity & Transparency",
            desc: "We operate with full transparency, ensuring you always know where your finances stand."
        },
        {
            icon: "📈",
            title: "Proven Track Record",
            desc: "Hundreds of satisfied clients trust Finage to guide them toward smarter financial decisions."
        },
    ];

    return (
        <div className="bg-[#1a1a1a] px-8 py-16">
            <h1 className="text-white text-3xl font-bold text-center mb-2">WHY US</h1>
            <p className="text-gray-500 text-center mb-12">Here's why clients choose Finage</p>

            {/* Desktop */}
            <div className="hidden md:grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                {reasons.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-[#242424] border border-[#2e2e2e] rounded-xl p-6 hover:border-[#18f294] transition-colors duration-300">
                        <span className="text-3xl mt-1">{item.icon}</span>
                        <div>
                            <h2 className="text-[#18f294] font-semibold text-lg mb-1">{item.title}</h2>
                            <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Mobile */}
            <div className="grid grid-cols-2 md:hidden gap-3 max-w-4xl mx-auto">
                {reasons.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2 bg-[#242424] border border-[#2e2e2e] rounded-xl p-3 hover:border-[#18f294] transition-colors duration-300">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                            <h2 className="text-[#18f294] font-semibold text-xs mb-1">{item.title}</h2>
                            <p className="text-gray-500 text-xs leading-5">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhyUs;