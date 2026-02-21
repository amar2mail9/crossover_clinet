"use client";
import Link from "next/link";
import React from "react";
import { FaPhone, FaRegCopyright } from "react-icons/fa6";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io";
import { MdEmail, MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full mt-24">
      {/* Main Footer Section with Background */}
      <section className="relative min-h-[400px]">
        {/* Background Image */}
        <img 
          src="/team01.png" 
          alt="Team background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay with Content */}
        <section className="relative z-10 bg-[#102a43e5] w-full h-full py-16 px-6">
          <div className="max-w-7xl mx-auto border-t border-gray-400 pt-12">
            
            {/* Grid Container: Responsive columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-white">
              
              {/* Reach us section */}
              <section>
                <h2 className="text-xl font-bold pb-5 border-b-2 border-orange-500 w-fit mb-5">Reach Us</h2>
                <div className="flex flex-col gap-4">
                  <a href="tel:+910000000000" className="flex gap-3 items-center hover:text-orange-400 transition-colors">
                    <FaPhone className="w-5 h-5 text-orange-500" /> <p>+91 00000 00000</p>
                  </a>
                  <a href="mailto:example@gmail.com" className="flex gap-3 items-center hover:text-orange-400 transition-colors">
                    <MdEmail className="w-5 h-5 text-orange-500" /> <span>example@gmail.com</span>
                  </a>
                  <div className="flex gap-3 items-start">
                    <MdLocationPin className="w-6 h-6 text-orange-500" /> 
                    <span>B-14, Sector-01, <br /> Noida, UP 201301</span>
                  </div>
                </div>
              </section>

              {/* Quick Pages */}
              <section>
                <h2 className="text-xl font-bold pb-5 border-b-2 border-orange-500 w-fit mb-5">Pages</h2>
                <nav className="flex flex-col gap-3">
                  <Link href="/" className="hover:text-orange-400 transition-all hover:translate-x-1">Home</Link>
                  <Link href="/services" className="hover:text-orange-400 transition-all hover:translate-x-1">Services</Link>
                  <Link href="/about-us" className="hover:text-orange-400 transition-all hover:translate-x-1">About Us</Link>
                  <Link href="/contact-us" className="hover:text-orange-400 transition-all hover:translate-x-1">Contact</Link>
                </nav>
              </section>

              {/* Services (Short) */}
              <section>
                <h2 className="text-xl font-bold pb-5 border-b-2 border-orange-500 w-fit mb-5">Services</h2>
                <nav className="flex flex-col gap-3 text-sm">
                  <Link href="#" className="hover:text-orange-400 transition-all">• Financial Solution</Link>
                  <Link href="#" className="hover:text-orange-400 transition-all">• Business Support</Link>
                  <Link href="#" className="hover:text-orange-400 transition-all">• Technical Services</Link>
                </nav>
              </section>

              {/* Legal */}
              <section>
                <h2 className="text-xl font-bold pb-5 border-b-2 border-orange-500 w-fit mb-5">Legal</h2>
                <nav className="flex flex-col gap-3 text-sm">
                  <Link href="#" className="hover:text-orange-400 transition-all">Privacy Policy</Link>
                  <Link href="#" className="hover:text-orange-400 transition-all">Terms & Conditions</Link>
                  <Link href="#" className="hover:text-orange-400 transition-all">Cookies Policy</Link>
                </nav>
              </section>

              {/* Newsletter & Socials */}
              <section className="lg:col-span-1 sm:col-span-2 lg:mt-0">
                <Newsletter />
              </section>

            </div>
          </div>
        </section>
      </section>

      {/* Bottom Copyright bar */}
      <div className="py-4 w-full bg-[#fe741f]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-2 text-white text-sm font-medium">
          <FaRegCopyright /> 
          <span>Copyright Insure {new Date().getFullYear()}. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export const Newsletter = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
        <h2 className="text-lg font-bold text-white mb-3">Join Our Newsletter</h2>
        <div className="flex w-full h-[45px] overflow-hidden rounded-lg bg-white shadow-inner mb-3">
          <input
            type="email"
            className="bg-transparent w-full px-3 outline-none text-black text-sm"
            placeholder="Your email address"
          />
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors px-4 text-white text-sm font-bold">
            Subscribe
          </button>
        </div>
        <p className="text-[10px] text-gray-300 leading-tight">
          We send weekly updates for your tool management. No spam, ever.
        </p>
      </div>

      <div className="flex items-center justify-start gap-4">
        {[
          { icon: <IoLogoFacebook />, href: "#" },
          { icon: <IoLogoInstagram />, href: "#" },
          { icon: <IoLogoTwitter />, href: "#" },
          { icon: <IoLogoLinkedin />, href: "#" },
        ].map((social, index) => (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#102a43] hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1"
          >
            <span className="text-xl">{social.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};