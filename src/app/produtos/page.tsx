'use client';

import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowLongRightIcon, ArrowLongLeftIcon } from '@heroicons/react/24/solid'
import Head from 'next/head';
import Image from 'next/image';

export default function ProdutosPage() {
    return (
        <>
            <Head>
                <title>Nome do Produto | Blog</title>
                <meta name="description" content="Descrição detalhada do produto." />
            </Head>
            <article className="max-w-7xl mx-auto p-4 md:p-8">
                {/* <div className="mb-8">
                    <Image
                        src="/caminho/para/sua/imagem.jpg"
                        alt="Descrição da Imagem"
                        width={800}
                        height={450}
                        layout="responsive"
                        className="rounded-lg"
                    />
                </div> */}
                <div>
                    <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className="text-lg mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    <div className="max-w-screen-xl mx-auto md:p-0 p-4 py-5 md:pt-12 ">
                        <p className="text-3xl mb-8 text-center font-medium leading-7 text-blue-winner">Galeria</p>
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
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                // when window width is >= 1024px
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}

                            className="swiper-container mx-auto p-4 relative"
                        >
                            {Array.from({ length: 6 }).map((_, index) => (
                                <SwiperSlide className="flex justify-center items-center" key={index}>
                                    <div key={index}>
                                        <Image
                                            src="/caminho/para/sua/imagem.jpg"
                                            alt="Descrição da Imagem"
                                            width={800}
                                            height={450}
                                            layout="responsive"
                                            className="rounded-lg"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="w-full flex justify-center bottom-0 mt-4 gap-0">
                                <div className="swiper-button-prev2 p-2 rounded-full cursor-pointer z-10">
                                    <ArrowLongLeftIcon className="h-7 w-7 text-blue-winner" aria-hidden="true" />
                                </div>
                                <div className="swiper-button-next2 p-2 rounded-full cursor-pointer z-10">
                                    <ArrowLongRightIcon className="h-7 w-7 text-blue-winner" aria-hidden="true" />

                                </div>
                            </div>
                        </Swiper>

                    </div>
                </div>
            </article>
        </>
    );
}
