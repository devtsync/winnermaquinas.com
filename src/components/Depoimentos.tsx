'use client';

import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowLongRightIcon, ArrowLongLeftIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'

export default function Testimonials() {


    return (
        <div className='bg-blue-winner'>
            <div className="max-w-screen-xl mx-auto md:p-0 p-4 py-5 md:py-12 ">
                <p className="text-base text-center font-medium leading-7 text-gray-300">Depoimentos</p>
                <h1 className="mt-0 mb-6 text-center text-3xl font-bold tracking-tight md:text-4xl text-white">O que nossos clientes dizem sobre nós</h1>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".swiper-button-next2",
                        prevEl: ".swiper-button-prev2 ",
                    }}
                    modules={[Navigation, Autoplay]}
                    loop
                    pagination={{ clickable: true }}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}

                    className="swiper-container mx-auto p-4 relative"
                >
                    {Array.from({ length: 3 }).map((_, index) => (
                        <SwiperSlide className="flex justify-center items-center" key={index}>
                            <div key={index} className="card bg-white rounded-lg shadow-md overflow-hidden flex-1 min-w-0">
                                <figure className="p-6">
                                    <svg className="h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path>
                                    </svg>
                                    <blockquote>
                                        <p className="text-lg text-center font-medium text-gray-900 ">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. &quot;</p>
                                    </blockquote>
                                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                            <div className="pr-3 font-medium text-gray-900 ">Nome da Pessoa</div>
                                            <div className="pl-3 text-sm font-light text-gray-500 ">Empresa</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="w-full flex justify-center bottom-0 mt-4 gap-0">
                        <div className="swiper-button-prev2 p-2 rounded-full cursor-pointer z-10">
                            <ArrowLongLeftIcon className="h-7 w-7 text-white" aria-hidden="true" />
                        </div>
                        <div className="swiper-button-next2 p-2 rounded-full cursor-pointer z-10">
                            <ArrowLongRightIcon className="h-7 w-7 text-white" aria-hidden="true" />

                        </div>
                    </div>
                </Swiper>

            </div>
        </div>
    );
}
