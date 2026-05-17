import React from 'react';

const Herosection = () => {
    return (
        <div className="flex bg-[#f2fcf5] items-center justify-center gap-5 md:gap-15 px-6 md:px-16">
            <div className="max-w-lg">
                <h1 className="text-md md:text-4xl font-bold text-[#1a1a1a] text-center">"Expert Guidance for Every 
                    <span className="text-[#18f294]"> Financial Journey."</span></h1>                
            </div>            
            <img src="/image/Finage-person.png" alt="" className="w-40 md:w-80 lg:w-auto"/>            
        </div>
    );
}

export default Herosection;