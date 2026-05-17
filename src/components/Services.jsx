import React from 'react';
import { HiOutlineReceiptTax } from "react-icons/hi";
import { MdBusinessCenter } from "react-icons/md";
import { TbChartPie } from "react-icons/tb";

const Services = () => {
  const services = [
    {
      icon: <TbChartPie size={28} color="#0F6E56" />,
      title: "Financial Planning",
      desc: "We create comprehensive financial plans tailored to your unique goals — from budgeting and saving to retirement and investment strategies — so you can build a secure and prosperous future with confidence.",
    },
    {
      icon: <MdBusinessCenter size={28} color="#0F6E56" />,
      title: "Business Financial Consulting",
      desc: "Our experienced consultants work closely with your business to analyze cash flow, optimize financial operations, and develop data-driven strategies that drive sustainable growth and long-term profitability.",
    },
    {
      icon: <HiOutlineReceiptTax size={28} color="#0F6E56" />,
      title: "Tax Planning",
      desc: "We provide proactive tax planning services to help individuals and businesses minimize tax liabilities, maximize deductions, and stay fully compliant with the latest regulations — all year round, not just tax season.",
    },
  ];

  return (
    <div className="bg-[#303030] p-8">
      <h1 className="text-3xl font-bold text-[#f2fcf5] mb-6 text-center">
        SERVICES
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {services.map((s) => (
          <div
            key={s.title}
            className="items-center bg-[#f2fcf5] rounded-xl p-6 flex flex-col gap-3 border border-black/10 hover:-translate-y-1 transition-transform duration-150 cursor-default"
          >
            <div>{s.icon}</div>
            <p className="text-[#1a1a1a] font-medium text-xl">{s.title}</p>
            <p className="text-[#444441] text-lg leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;