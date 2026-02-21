import CareerDetails from "@/page/career/CareersDetails/CareerDetails";
import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  console.log("Server ",slug);

  return (
    <div className="">
      <CareerDetails slug={slug} />
    </div>
  );
};
export default page;
