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

  const subMenuList = [
    { name: "Financial Services", href: "/financial-solution" },
    { name: "Business Support", href: "/business-support" },
    { name: "Technical Services", href: "/technical-solution" },
  ];

  const careerSubMenu = [
    { name: "Current Opening", href: "/career" },
    { name: "Internship", href: "/career" },
  ];

  const insSightsMenu = [
    { name: "Blog", href: "/blog" },
    { name: "Industry Updates", href: "/updates" },
    { name: "Hiring Trend", href: "/careers" },
  ];

  return (
    <header className="w-full sticky top-0 right-0 z-50">
      {/* Top Navbar */}
      <nav className="bg-[#102a43] w-full py-2 flex items-center justify-between text-white px-[10px] md:px-[40px]">
        <section className="flex items-center md:justify-start md:w-1/2 w-full justify-between md:gap-4">
          <span className="flex items-center gap-2">
            <MdEmail className="w-[20px] h-[20px]" />
            <h3 className="text-xs md:text-sm">example@gmail.com</h3>
          </span>
          <span className="flex items-center gap-2">
            <MdPhone className="w-[20px] h-[20px]" />
            <h3 className="text-xs md:text-sm">+91 00000 00000</h3>
          </span>
        </section>

        <section className="hidden md:flex md:w-1/2 justify-end items-center gap-4">
          <Link href={"/"} target="_blank">
            <MdFacebook className="w-[20px] h-[20px]" />
          </Link>
          <Link href={"/"} target="_blank">
            <IoLogoYoutube className="w-[20px] h-[20px]" />
          </Link>
          <Link href={"/"} target="_blank">
            <RiInstagramFill className="w-[20px] h-[20px]" />
          </Link>
          <Link href={"/"} target="_blank">
            <IoLogoLinkedin className="w-[20px] h-[20px]" />
          </Link>
        </section>
      </nav>

      {/* Main Navbar */}
      <nav className="w-full h-[80px] items-center justify-between flex px-[10px] md:px-[40px] bg-[#f9f0eb] shadow-lg relative">
        <section>
          <Link href="/">
            <Image
              src={"/logo.png"}
              width={150}
              height={70}
              className="md:block hidden"
              alt="logo"
            />
            <Image
              src={"/favicon.ico"}
              width={40}
              height={40}
              className="block md:hidden"
              alt="logo"
            />
          </Link>
        </section>

        {/* Desktop Menu */}
        <menu className="hidden md:flex items-center gap-8 h-full relative">
          {/* Services */}
          <div
            className="h-full flex items-center relative group"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/services"
              className={`flex items-center gap-1 font-semibold text-[#102a43] h-full border-b-4 transition-all ${activeDropdown === "services" ? "border-[#fd741e] text-[#fd741e]" : "border-transparent"}`}
            >
              Services{" "}
              {activeDropdown === "services" ? (
                <IoIosArrowUp className="text-xs" />
              ) : (
                <IoIosArrowDown className="text-xs" />
              )}
            </Link>
            {activeDropdown === "services" && (
              <div className="absolute top-[80px] left-0 p-6 w-[500px]  bg-white shadow-xl  flex flex-col gap-3 rounded-b-lg border-t-2 border-[#fd741e]">
                <div
                  className={`${servicesData.length > 2 ? "grid-cols-2" : "grid-cols-1"} grid grid-cols-1 gap-4`}
                >
                  {servicesData.map((item, i) => (
                    <div key={i}>
                      <h2 className="text-xl text-[#fd741e] font-bold">
                        {item.mainServiceName}
                      </h2>
                      <div className="flex flex-col gap-y-3">
                        {item.ServicesName.map((item, idx) => {
                          return (
                            <Link
                              key={idx}
                              href={item.link}
                              className="text-gray-600 text-sm lg:text-base font-medium hover:text-orange-600 hover:translate-x-2 transition-all"
                            >
                              • {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries (Fixed Href) */}
          <Link
            href="/industries"
            className="font-semibold text-[#102a43] hover:text-[#fd741e]"
          >
            Industries
          </Link>

          {/* Insights (Fixed Arrow Logic) */}
          <div
            className="h-full flex items-center relative group"
            onMouseEnter={() => setActiveDropdown("insights")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/insight"
              className={`flex items-center gap-1 font-semibold text-[#102a43] h-full border-b-4 transition-all ${activeDropdown === "insights" ? "border-[#fd741e] text-[#fd741e]" : "border-transparent"}`}
            >
              Insight{" "}
              {activeDropdown === "insights" ? (
                <IoIosArrowUp className="text-xs" />
              ) : (
                <IoIosArrowDown className="text-xs" />
              )}
            </Link>
            {activeDropdown === "insights" && (
              <div className="absolute top-[80px] left-0 w-56 bg-white shadow-xl p-4 flex flex-col gap-3 rounded-b-lg border-t-2 border-[#fd741e]">
                {insSightsMenu.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href || "#"}
                    className="text-[#102a43] hover:text-[#fd741e] font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Careers (Fixed Href) */}
          <div
            className="h-full flex items-center relative group"
            onMouseEnter={() => setActiveDropdown("careers")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/career"
              className={`flex items-center gap-1 font-semibold text-[#102a43] h-full border-b-4 transition-all ${activeDropdown === "careers" ? "border-[#fd741e] text-[#fd741e]" : "border-transparent"}`}
            >
              Careers{" "}
              {activeDropdown === "careers" ? (
                <IoIosArrowUp className="text-xs" />
              ) : (
                <IoIosArrowDown className="text-xs" />
              )}
            </Link>
            {activeDropdown === "careers" && (
              <div className="absolute top-[80px] left-0 w-56 bg-white shadow-xl p-4 flex flex-col gap-3 rounded-b-lg border-t-2 border-[#fd741e]">
                {careerSubMenu.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="text-[#102a43] hover:text-[#fd741e] font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about-us"
            className="font-semibold text-[#102a43] hover:text-[#fd741e]"
          >
            About Us
          </Link>
        </menu>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button className="w-[160px] h-[40px] md:flex hidden text-white font-semibold bg-[#FD741E] items-center justify-center gap-2 rounded-3xl hover:bg-[#e66316] transition-all shadow-md">
            Get A Quote <FaLocationArrow />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-3xl text-[#102a43] p-2"
          >
            <IoMdMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[100] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicking the overlay
        >
          {/* Added stopPropagation so clicking inside the menu doesn't close it prematurely */}
          <div
            className="w-[280px] h-full bg-[#f9f0eb] p-6 flex flex-col gap-6 animate-in slide-in-from-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b pb-4 border-gray-300">
              <Image src="/favicon.ico" width={40} height={40} alt="logo" />
              <MdClose
                className="text-3xl text-[#102a43] cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>

            {/* Added onClick to links so navigation closes the menu */}
            <nav className="flex flex-col gap-4 overflow-y-auto">
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-bold text-[#102a43]"
              >
                Services
              </Link>
              <Link
                href="/career"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-bold text-[#102a43]"
              >
                Careers
              </Link>
              <Link
                href="/industries"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-bold text-[#102a43]"
              >
                Industries
              </Link>
              <Link
                href="/insight"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-bold text-[#102a43]"
              >
                Insight
              </Link>
              <Link
                href="/about-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-bold text-[#102a43]"
              >
                About Us
              </Link>
            </nav>
            <button className="bg-[#FD741E] text-white py-3 rounded-xl font-bold mt-auto">
              Get A Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
