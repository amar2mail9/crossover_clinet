"use client";
import { Button } from "@mui/material";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const BannerFinTech = () => {
  // Existing state (preserved for your future use)
  const [items, setItems] = useState([
    { id: 1, text: "Learn Framer Motion" },
    { id: 2, text: "Animate UI changes" },
  ]);

  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      text: `New Data Point ${items.length + 1}`,
    };
    setItems((prev) => [...prev, newItem]);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const ClientImage = [
    {
      link: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
      alt: "Amar Kumar",
    },
    {
      link: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
      alt: "Amar Kumar",
    },
    {
      link: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
      alt: "Amar Kumar",
    },
  ];

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each text element appearing
        delayChildren: 0.5, // Wait for the background shapes to slide in first
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full h-[80vh] relative overflow-hidden font-sans">
      {/* Background Image - Cinematic Zoom Out */}
      <motion.img
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src="/Herosection_Bg.webp"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay & Polygon Shape */}
      <div className="absolute inset-0 w-full h-full">
        {/* Orange Border/Accent Polygon (Slides in first) */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 10 }} // Replaces the static CSS transform
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} // Smooth deceleration
          className="absolute top-0 left-0 h-full w-[60%] bg-[#ff6b00] z-0"
          style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" }}
        ></motion.div>

        {/* Main Dark Blue Polygon (Slides in slightly after) */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="absolute top-0 left-0 h-full w-[60%] bg-[#102a43] z-10"
          style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" }}
        ></motion.div>

        {/* Full Screen Overlay for better text readability */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[#102a43] z-20"
        ></motion.div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 w-full h-full z-30 flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-white">
          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.section
              variants={itemVariants}
              className="flex gap-3 items-center mb-6"
            >
              {/* badge */}
              <section className="bg-transparent animate-bounce border border-[#FE741F] p-1 w-12 h-6 justify-center rounded-full flex items-center">
                <section className="w-8 h-4 rounded-full  bg-[#FE741F]"></section>
              </section>
              {/* data */}
              <h3 className="text-lg font-medium tracking-wide">
                IT SERVICES & DIGITAL TRANSFORMATION
              </h3>
            </motion.section>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-start leading-tight mb-6"
            >
              Scalable IT Solutions
              <br />
              Powering Digital Enterprise
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-lg opacity-90 mb-10 max-w-2xl text-start "
            >
              We provide managed IT services, cloud infrastructure, and
              cybersecurity
              <br /> solutions that optimize workflow and secure your digital
              future.
            </motion.p>

            {/* Button */}
            <motion.div variants={itemVariants} className=" flex items-start animate-bounce ">
              <button className="group cursor-pointer flex items-center bg-[#ff6b00] hover:bg-[#e65c00] text-white font-bold py-2 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                <span className="mr-3 text-lg transition-all duration-300">
                  Explore More
                </span>
                <FaArrowRight className="text-xl transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
