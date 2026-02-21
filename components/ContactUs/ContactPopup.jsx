"use client";
import { servicesData } from "@/utils/Utils";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdCheckbox,
} from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";

const ContactPopup = () => {
  const [chooseService, setChooseServices] = useState("");
  const [openService, setOpenServices] = useState(false);
  const [popContact, setPopContact] = useState(false);
  const pathname = usePathname();
  
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // FIX: Explicitly check both routes
    if (pathname === "/" || pathname === "/services") {
      const timer = setTimeout(() => {
        setPopContact(true);
      }, 5000);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ companyName, email, phone, chooseService, message });
    // Add your submission logic here
  };

  if (!popContact) return null;

  return (
    <div className="fixed inset-0 bg-[#102a42d2] flex items-center justify-center z-[100] p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-[500px] relative shadow-2xl">
        <button
          onClick={() => setPopContact(false)}
          className="absolute top-4 right-4 hover:text-red-500 transition-colors cursor-pointer"
        >
          <RxCrossCircled className="w-6 h-6" />
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="font-semibold text-2xl text-center text-gray-800">
            Get in Touch With Us!
          </h2>
          
          <div className="space-y-3">
            {/* Company Name */}
            <input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              type="text"
              placeholder="Company Name"
              required
              className="w-full bg-gray-100 border-b-2 border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />

            {/* Email */}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="example@gmail.com"
              required
              className="w-full bg-gray-100 border-b-2 border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />

            {/* Phone Number */}
            <div className="flex gap-2">
              <input
                type="text"
                defaultValue="+91"
                className="w-1/5 bg-gray-100 border-b-2 border-gray-300 p-3 rounded-md text-center outline-none"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="00000 00000"
                required
                className="w-4/5 bg-gray-100 border-b-2 border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenServices(!openService)}
                className="w-full flex items-center justify-between bg-white p-3 rounded-md border-2 border-gray-300 text-left"
              >
                <span className={chooseService ? "text-black" : "text-gray-400"}>
                  {chooseService || "Choose a Service"}
                </span>
                {openService ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </button>

              {openService && (
                <div className="absolute top-full mt-1 w-full max-h-60 bg-white border border-gray-200 rounded-md shadow-lg overflow-y-auto z-50">
                  {servicesData.map((category, idx) => (
                    <React.Fragment key={idx}>
                      {category.ServicesName.map((service, sIdx) => (
                        <div
                          key={`${idx}-${sIdx}`}
                          onClick={() => {
                            setChooseServices(service.name);
                            setOpenServices(false);
                          }}
                          className="p-3 text-sm hover:bg-orange-50 cursor-pointer border-b border-gray-400 last:border-0"
                        >
                          {service.name}
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>

            {/* Message */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project..."
              rows={3}
              className="w-full bg-gray-100 border-b-2 border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />

            <button
              type="submit"
              className="w-full bg-[#fd741e] hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors shadow-md"
            >
              Submit Request
            </button>

            <p className="flex items-center justify-center gap-2 text-gray-500 text-sm">
              <IoMdCheckbox className="text-green-500" /> 100% Confidential
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;