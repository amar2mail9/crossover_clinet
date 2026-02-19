
"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { BannerCustomer, BannerFinTech, BannerITservices } from './Banner';

export default function SwiperBanner() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <BannerFinTech/>
        </SwiperSlide>
        {/* <SwiperSlide>
            <BannerCustomer/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerITservices/>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
