'use client'
// components/HeroSlider.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5500 }}
      className="h-[540px]"
    >
      <SwiperSlide className="flex justify-center items-center bg-gray-500">
        <Image src="/path/to/image1.jpg" alt="Image 1" layout="fill" objectFit="cover" />
      </SwiperSlide>
      {/* <SwiperSlide className="flex justify-center items-center bg-gray-700">
        <Image src="/path/to/image2.jpg" alt="Image 2" layout="fill" objectFit="cover" />
      </SwiperSlide> */}
    </Swiper>
  );
}
