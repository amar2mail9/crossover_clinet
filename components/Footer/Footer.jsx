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
    <footer className=" w-full h-full mt-24">
      <section className=" relative  ">
        <img src="/team01.png" alt="" />
        <section className="absolute w-full h-full top-0 z-10 right-0  bg-[#102a43e5]">
          <section className="w-[95%] mx-auto border-t-2 text-white  border-gray-200 mt-16 ">
            <section className=" grid-cols-5 grid py-16">
              {/* Reach us section */}
              <section>
                <h2 className="text-xl font-bold pb-5 ">Reach us</h2>
                <section className="flex items-start flex-col gap-4">
                  <section className="flex gap-2 items-center ">
                    <FaPhone className="w-6 h-6" /> <p>+91 00000 00000</p>
                  </section>
                  <section className="flex gap-2 items-center ">
                    <MdEmail className="w-6 h-6" />{" "}
                    <span>example@gmail.com</span>
                  </section>
                  <section className="flex gap-2 items-center ">
                    <MdLocationPin className="w-6 h-6 " />{" "}
                    <span>
                      B-14, Sector-01, <br /> Noida , 201301
                    </span>
                  </section>
                </section>
              </section>
              {/* pages */}
              <section>
                <h2 className="text-xl font-bold pb-5 ">Page</h2>
                <section className="flex items-start flex-col gap-4">
                  <Link href={"/"}>Home</Link>
                </section>
              </section>
              <section>
                <h2 className="text-xl font-bold pb-5 ">Reach us</h2>
                <section className="flex items-start flex-col gap-4">
                  <section className="flex gap-2 items-center ">
                    <FaPhone className="w-6 h-6" /> <p>+91 00000 00000</p>
                  </section>
                  <section className="flex gap-2 items-center ">
                    <MdEmail className="w-6 h-6" />{" "}
                    <span>example@gmail.com</span>
                  </section>
                  <section className="flex gap-2 items-center ">
                    <MdLocationPin className="w-6 h-6 " />{" "}
                    <span>
                      B-14, Sector-01, <br /> Noida , 201301
                    </span>
                  </section>
                </section>
              </section>
              <section>
                <h2 className="text-xl font-bold pb-5 ">Reach us</h2>
                <section className="flex items-start flex-col gap-4">
                  <section className="flex gap-2 items-center ">
                    <FaPhone className="w-6 h-6" /> <p>+91 00000 00000</p>
                  </section>
                  <section className="flex gap-2 items-center ">
                    <MdEmail className="w-6 h-6" />{" "}
                    <span>example@gmail.com</span>
                  </section>
                  <section className="flex gap-2 items-center ">
                    <MdLocationPin className="w-6 h-6 " />{" "}
                    <span>
                      B-14, Sector-01, <br /> Noida , 201301
                    </span>
                  </section>
                </section>
              </section>
              <section>
                <Newsletter />
              </section>
            </section>
          </section>
        </section>
      </section>

      <div className="h-[36px] w-full bg-[#fe741f]">
        <p className="text-white flex items-center  text-center justify-center h-full">
          {" "}
          <FaRegCopyright className="mr-3" /> Copyright Insure{" "}
          {new Date().getFullYear()}. All Rights Reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

export const Newsletter = () => {
  return (
    <div className="w-full  flex items-center flex-col gap-8 ">
      <div className="w-full">
        <div className="bg-gray-100 rounded-2xl py-5 px-3 flex items-start  flex-col justify-start">
          <h2 className="text-xl text-[#074e8c]">Join Our Newsletter</h2>
          <div className="flex w-[100%] h-[40px] mx-auto  rounded-2xl bg-white shadow">
            <input
              type="text"
              name=""
              id=""
              className="bg-white w-full p-1 outline-0 text-black"
              placeholder="Your email address"
            />
            <button className="bg-orange-500 px-2 rounded-r-sm ">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-[#074e8c]">
            Will send you weekly updates for your <br /> better tool
            management.{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-evenly  w-full h-full">
        {/* facebook icons */}
        <Link
          href={"#"}
          target="_blank"
          className="w-10 h-10  rounded-full bg-white text-[#074e8c]"
        >
          <IoLogoFacebook className="w-full h-full p-1" />
        </Link>

        {/* instagram */}
        <Link
          href={"#"}
          target="_blank"
          className="w-10 h-10  rounded-full bg-white text-[#074e8c]"
        >
          <IoLogoInstagram className="w-full h-full p-1" />
        </Link>

        {/* X */}
        <Link
          href={"#"}
          target="_blank"
          className="w-10 h-10 rounded-full bg-white text-[#074e8c]"
        >
          <IoLogoTwitter className="w-full h-full p-1" />
        </Link>

        {/* LinkedIn */}
        <Link
          href={"#"}
          target="_blank"
          className="w-10 h-10 rounded-full bg-white text-[#074e8c]"
        >
          <IoLogoLinkedin className="w-full h-full p-1" />
        </Link>
      </div>
    </div>
  );
};
