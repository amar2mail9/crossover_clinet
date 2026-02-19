import { dateFormate } from "@/utils/UseFuncation";
import { Divider } from "@mui/material";
import Link from "next/link";
import { FaArrowRight, FaCalendar, FaUber, FaUser } from "react-icons/fa6";

export const ServiceCard = ({
  servicesName,
  category,
  image,
  description,
  link,
  icon,
}) => {
  return (
    <div className="group bg-white shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden relative flex flex-col h-full ">
      {/* Image Section */}
      <div className="relative h-[240px] overflow-hidden">
        <img
          src={image}
          alt={servicesName}
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
        />
        {/* Overlay logic for smoother look */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

      {/* Floating Icon Container - Adjusted for [240px] image height */}
      <div className="absolute top-[210px] right-6 bg-white p-3 rounded-lg shadow-xl border border-gray-50 group-hover:-translate-y-3 transition-transform duration-500 z-10">
        <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
      </div>

      {/* Content Section */}
      <div className="p-6 pt-10 flex flex-col flex-grow text-left">
        <h3 className="text-xl font-bold text-[#102a43] mb-3 group-hover:text-orange-500 transition-colors duration-300">
          {servicesName}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-50">
          <Link
            href={link}
            className="inline-flex items-center text-[#102a43] hover:text-orange-500 font-bold text-sm transition-colors group/btn"
          >
            EXPLORE MORE
            <span className="ml-2 transform group-hover/btn:translate-x-2 transition-transform duration-300 text-orange-500">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="h-1.5 w-0 group-hover:w-full bg-orange-500 transition-all duration-500"></div>
    </div>
  );
};

export const LatestBlogCard = ({
  title,
  image,
  author,
  createAt,
  slug,
  category,
}) => {
  // image:
  //     "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
  //   author: {
  //     name: "by Admin",
  //     email: "admin@gmail.com",
  //   },
  //   title: "What is Blockchain Technology How to Use in Future?",
  //   createAt: "2026-02-03T02:51:06.067+00:00",
  //   slug: "what-is-blockchain-technology-future-use",
  //   category: "Technology",
  return (
    <section
      style={{
        boxShadow: "0 0 20px 1px #a9a9a9",
      }}
      className=" h-[400px] group   cursor-pointer bg-white  rounded-lg "
    >
      <div className="w-full h-1/2 overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover overflow-hidden transition-all  ease-in-out duration-500 group-hover:scale-125 rounded-t-lg"
        />
      </div>

      {/* detail */}
      <section className="p-3">
        <section className="flex items-center justify-between w-full pt-3 pb-2">
          <h3 className="text-md font-medium capitalize text-[#102a43e2] flex items-center gap-2">
            <FaUser className="w-5 h-5 p-0.5 border rounded-full" />{" "}
            {author.name}
          </h3>
          <p className="text-md font-medium capitalize text-[#102a43e2] flex items-center gap-2">
            <FaCalendar /> {dateFormate(createAt)}
          </p>
        </section>
        <Divider />
        <section className="py-3 flex items-start justify-between w-full h-full flex-col">
          <h2 className="text-xl font-semibold line-clamp-2">{title}</h2>
          <Link
            href={`/blog/${slug}`}
            className="flex items-center gap-2 mt-6 text-[#fc731e]   group-hover:text-blue-600 transition-all ease-in-out duration-500 hover:scale-105 "
          >
            View More{" "}
            <span>
              {" "}
              <FaArrowRight className="group-hover:scale-150 transition-all ease-in-out duration-500 group-hover:ml-3" />{" "}
            </span>
          </Link>
        </section>
      </section>
    </section>
  );
};
