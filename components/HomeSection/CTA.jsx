import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go"; // Staying consistent with your previous icon style

const CTA = () => {
  return (
    <div className="w-full h-[500px] relative overflow-hidden">
      {/* Background Image */}
      <img 
        src="/CTA.jpg" 
        alt="CTA Background" 
        className="absolute inset-0 w-full h-full object-cover" 
      />

      {/* Overlay - Using a linear gradient for better text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#121212fb] to-[#121212c3] flex items-center justify-center px-4">
        
        <div className="max-w-4xl flex flex-col items-center text-center">
          {/* Text Content */}
          <div className="space-y-6 mb-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Smart IT, Finance & <span className="text-orange-500">BPO Solutions</span> That Drive Growth
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              We deliver scalable IT services, secure financial solutions, 
              and reliable BPO support to help businesses grow faster.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Primary Button */}
            <button className="flex items-center gap-2 cursor-pointer bg-orange-500 hover:bg-[#102a43] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-100/20 group">
              Get Free Consultation 
              <MdKeyboardArrowRight className="text-2xl group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Button - Matching your "View All" style */}
            <button className="flex cursor-pointer items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 group">
              Our Services 
              <GoArrowUpRight className="group-hover:rotate-45 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;