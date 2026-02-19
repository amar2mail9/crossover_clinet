import React from "react";
import { LatestBlogCard } from "../Cards/Cards";
import { latestBlog } from "@/utils/Utils";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const LatestPost = () => {
  return (
    <section className="px-4 md:px-10 bg-white py-12 md:py-16 max-w-[1440px] mx-auto">
      {/* Header Section - Stacked on mobile, side-by-side on tablet+ */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        
        {/* Title and Icon */}
        <div className="flex items-center gap-2">
          <Sparkles className="text-orange-500 w-6 h-6 md:w-8 md:h-8" />
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Latest Blog Insights
          </h1>
        </div>

        {/* Responsive Link - Full width on tiny screens, fit-content on larger */}
        <Link
          href="/blog"
          className="w-full sm:w-fit flex items-center justify-center gap-3 bg-orange-50 rounded-full px-5 py-2.5 group hover:bg-orange-500 ease-in-out hover:text-white duration-500 transition-all shadow-md"
        >
          <span className="font-medium text-sm md:text-base">View All</span>
          <GoArrowUpRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 duration-500 transition-all ease-in-out" />
        </Link>
      </div>

      {/* Grid Layout - 1 column on mobile, 2 on sm, 3 on md, 4 on lg */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {latestBlog.map((item, idx) => (
          <LatestBlogCard {...item} key={idx} />
        ))}
      </section>
    </section>
  );
};

export default LatestPost;