"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdEmail, MdFacebook, MdPhone, MdClose } from "react-icons/md";
import {
  IoLogoLinkedin,
  IoLogoYoutube,
  IoMdMenu,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { servicesData } from "@/utils/Utils";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  const insSightsMenu = [
    { name: "Blog", href: "/blog" },
    { name: "Industry Updates", href: "/updates" },
    { name: "Hiring Trend", href: "/careers" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileSubMenu(null);
  };

  return (
    <header className="w-full sticky top-0 right-0 z-50">
      {/* --- Top Navbar --- */}
      <nav className="bg-[#102a43] w-full py-2 flex items-center justify-between text-white px-4 md:px-10">
        <section className="flex items-center justify-between w-full md:w-auto md:gap-6">
          <a href="mailto:example@gmail.com" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
            <MdEmail className="w-4 h-4" />
            <span className="text-xs md:text-sm">example@gmail.com</span>
          </a>
          <a href="tel:+910000000000" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
            <MdPhone className="w-4 h-4" />
            <span className="text-xs md:text-sm">+91 00000 00000</span>
          </a>
        </section>

        <section className="hidden md:flex items-center gap-4">
          <Link href="/"><MdFacebook className="w-5 h-5 hover:text-orange-400" /></Link>
          <Link href="/"><IoLogoYoutube className="w-5 h-5 hover:text-orange-400" /></Link>
          <Link href="/"><RiInstagramFill className="w-5 h-5 hover:text-orange-400" /></Link>
          <Link href="/"><IoLogoLinkedin className="w-5 h-5 hover:text-orange-400" /></Link>
        </section>
      </nav>

      {/* --- Main Navbar --- */}
      <nav className="w-full h-20 items-center justify-between flex px-4 md:px-10 bg-[#f9f0eb] shadow-lg relative">
        <Link href="/">
          <Image src="/logo.png" width={150} height={70} className="hidden md:block" alt="logo" />
          <Image src="/favicon.ico" width={40} height={40} className="md:hidden" alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <menu className="hidden md:flex items-center gap-8 h-full">
          {/* Services Dropdown */}
          <div 
            className="h-full flex items-center relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link href="/services" className={`flex items-center gap-1 font-semibold text-[#102a43] h-full border-b-4 transition-all ${activeDropdown === "services" ? "border-[#fd741e] text-[#fd741e]" : "border-transparent"}`}>
              Services {activeDropdown === "services" ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </Link>
            {activeDropdown === "services" && (
              <div className="absolute top-20 left-0 p-6 w-[500px] bg-white shadow-xl rounded-b-lg border-t-2 border-[#fd741e] grid grid-cols-2 gap-6">
                {servicesData.map((item, i) => (
                  <div key={i}>
                    <h2 className="text-sm font-bold text-[#fd741e] uppercase tracking-wider mb-2">{item.mainServiceName}</h2>
                    <ul className="space-y-2">
                      {item.ServicesName.map((sub, idx) => (
                        <li key={idx}>
                          <Link href={sub.link} className="text-gray-600 text-sm hover:text-orange-600 hover:translate-x-1 inline-block transition-transform">• {sub.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/industries" className="font-semibold text-[#102a43] hover:text-[#fd741e]">Industries</Link>

          {/* Insights Dropdown */}
          <div 
            className="h-full flex items-center relative"
            onMouseEnter={() => setActiveDropdown("insights")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link href="/insight" className={`flex items-center gap-1 font-semibold text-[#102a43] h-full border-b-4 transition-all ${activeDropdown === "insights" ? "border-[#fd741e] text-[#fd741e]" : "border-transparent"}`}>
              Insight {activeDropdown === "insights" ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </Link>
            {activeDropdown === "insights" && (
              <div className="absolute top-20 left-0 w-56 bg-white shadow-xl p-4 flex flex-col gap-3 rounded-b-lg border-t-2 border-[#fd741e]">
                {insSightsMenu.map((item, i) => (
                  <Link key={i} href={item.href} className="text-[#102a43] hover:text-[#fd741e] font-medium text-sm">{item.name}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/career" className="font-semibold text-[#102a43] hover:text-[#fd741e]">Careers</Link>
          <Link href="/about-us" className="font-semibold text-[#102a43] hover:text-[#fd741e]">About Us</Link>
        </menu>

        <div className="flex items-center gap-4">
          <Link href="/contact-us" className="hidden md:flex w-40 h-10 text-white font-semibold bg-[#FD741E] items-center justify-center gap-2 rounded-full hover:bg-[#e66316] transition-all shadow-md">
            Get A Quote <FaLocationArrow />
          </Link>
          <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-3xl text-[#102a43]">
            <IoMdMenu />
          </button>
        </div>
      </nav>

      {/* --- Mobile Sidebar --- */}
      <div className={`fixed inset-0 bg-black/60 z-[100] transition-opacity md:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={closeMobileMenu}>
        <aside 
          className={`w-[80%] max-w-[300px] h-full bg-white transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-5 flex justify-between items-center border-b">
            <Image src="/logo.png" width={120} height={50} alt="logo" />
            <MdClose className="text-2xl cursor-pointer" onClick={closeMobileMenu} />
          </div>

          <nav className="p-6 flex flex-col gap-5 overflow-y-auto h-[calc(100vh-160px)]">
            {/* Mobile Services */}
            <div>
              <button 
                onClick={() => setMobileSubMenu(mobileSubMenu === "services" ? null : "services")}
                className="flex items-center justify-between w-full font-bold text-[#102a43]"
              >
                Services {mobileSubMenu === "services" ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {mobileSubMenu === "services" && (
                <div className="pl-4 mt-3 flex flex-col gap-3 border-l-2 border-orange-200">
                  {servicesData.map((item, i) => (
                    <div key={i} className="mb-2">
                      <p className="text-xs font-bold text-orange-500 uppercase">{item.mainServiceName}</p>
                      {item.ServicesName.map((sub, idx) => (
                        <Link key={idx} href={sub.link} onClick={closeMobileMenu} className="block py-1 text-sm text-gray-600">{sub.name}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/industries" onClick={closeMobileMenu} className="font-bold text-[#102a43]">Industries</Link>

            {/* Mobile Insights */}
            <div>
              <button 
                onClick={() => setMobileSubMenu(mobileSubMenu === "insights" ? null : "insights")}
                className="flex items-center justify-between w-full font-bold text-[#102a43]"
              >
                Insights {mobileSubMenu === "insights" ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {mobileSubMenu === "insights" && (
                <div className="pl-4 mt-3 flex flex-col gap-3 border-l-2 border-orange-200">
                  {insSightsMenu.map((item, i) => (
                    <Link key={i} href={item.href} onClick={closeMobileMenu} className="text-sm text-gray-600">{item.name}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/career" onClick={closeMobileMenu} className="font-bold text-[#102a43]">Careers</Link>
            <Link href="/about-us" onClick={closeMobileMenu} className="font-bold text-[#102a43]">About Us</Link>
          </nav>

          <div className="p-6 mt-auto">
            <Link href="/contact-us" onClick={closeMobileMenu} className="block w-full text-center bg-[#FD741E] text-white py-3 rounded-xl font-bold">
              Get A Quote
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;