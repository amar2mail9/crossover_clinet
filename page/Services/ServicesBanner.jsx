"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import FloatingIconsSection from "./FloatingIconsSection";
import Link from "next/link";

const serviceData = {
  title: "IT, Finance & BPO Solutions",
  headline: "Empowering Businesses with Smart Infrastructure",
  description:
    "From scalable MERN stack development to secure financial support and 24/7 BPO services, we provide the backbone for your company's growth.",
  tags: ["Managed IT", "Financial Services", "BPO Solutions"],
};

export const ServicesBanner = () => {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full h-[70vh] md:h-[80vh] relative overflow-hidden font-sans">
      {/* Background Image */}
      <motion.img
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src="/tech.jpg"
        alt="Kraviona Services"
        className="absolute inset-0 brightness-[20%] w-full h-full object-cover"
      />

      {/* Shapes & Overlays */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 h-full w-[85%] md:w-[65%] bg-[#ff6b00] z-0 opacity-20"
          style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
        />
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="absolute top-0 left-0 h-full w-[80%] md:w-[60%] bg-[#102a43] z-10"
          style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
        />
        <div className="absolute inset-0 bg-black z-20 md:hidden" />{" "}
        {/* Mobile Overlay */}
      </div>

      {/* Content Area */}
      <div className="absolute inset-0 w-full h-full z-30 flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-white">
          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Tag Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 mb-6"
            >
              {serviceData.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] md:text-xs font-bold tracking-widest bg-orange-500 border border-orange-500 px-3 py-1 rounded-full"
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-start leading-[1.1] mb-6"
            >
              Empowering <br />{" "}
              <span className="text-orange-500 animate-pulse">Businesses</span>{" "}
              with <br /> Smart{" "}
              <span className="text-[#fd741e]">Infrastructure</span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-200 mb-10 max-w-xl text-start leading-relaxed"
            >
              {serviceData.description}
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="flex items-start">
             <Link href={'/contact'}>
              <button className="group relative overflow-hidden flex items-center bg-[#ff6b00] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-[#e65c00] shadow-xl">
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project{" "}
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </button> </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[500px] aspect-square relative">
            <div>
              <FloatingIconsSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
