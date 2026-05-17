import React from 'react';

const Contact = () => {
    return (
        <div className="bg-[#1a1a1a] px-8 py-16">
            <h1 className="text-white text-3xl font-bold text-center mb-2">CONTACT US</h1>
            <p className="text-gray-500 text-center mb-12">Get in touch with us, we're happy to help</p>

            <div className="flex flex-col md:flex-row gap-12 max-w-4xl mx-auto">

                {/* Info Kontak */}
                <div className="flex flex-col gap-6 md:w-1/2">
                    <div className="flex items-start gap-4">
                        <span className="text-2xl">📧</span>
                        <div>
                            <h2 className="text-[#18f294] font-semibold">Email</h2>
                            <p className="text-gray-500 text-sm">Finage@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="text-2xl">📞</span>
                        <div>
                            <h2 className="text-[#18f294] font-semibold">Phone / WhatsApp</h2>
                            <p className="text-gray-500 text-sm">08xxxxxxxx</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="text-2xl">📍</span>
                        <div>
                            <h2 className="text-[#18f294] font-semibold">Address</h2>
                            <p className="text-gray-500 text-sm">Jl. Alamat No. 5</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="text-2xl">🕐</span>
                        <div>
                            <h2 className="text-[#18f294] font-semibold">Office Hours</h2>
                            <p className="text-gray-500 text-sm">Monday - Friday, 09.00 - 18.00</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="flex flex-col gap-4 md:w-1/2">
                    <input type="text" placeholder="Your Name" className="bg-[#242424] border border-[#2e2e2e] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#18f294]" />
                    <input type="email" placeholder="Your Email" className="bg-[#242424] border border-[#2e2e2e] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#18f294]" />
                    <textarea rows={5} placeholder="Your Message" className="bg-[#242424] border border-[#2e2e2e] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#18f294] resize-none" />
                    <button className="bg-[#18f294] text-black font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity duration-200">Send Message</button>
                </div>

            </div>
        </div>
    );
}

export default Contact;