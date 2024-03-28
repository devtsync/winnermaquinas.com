'use client'
import { useState } from "react";
import Logo from '@/assets/logoWinner.png'
import Image from "next/image";
import { PhoneIcon, EnvelopeIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/solid'
import WhatsAppButton from "./WhatsAppButton";



export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = (href: string) => {
        if (href === "#") {
            // Rolagem suave para o topo da página
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (href.startsWith("#")) {
            const sectionId = href.substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                // Rolagem suave para a seção específica
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            <div className="bg-blue-winner text-white text-sm hidden md:block">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3">
                    <div className="flex cursor-pointer">
                        <PhoneIcon className="h-5 w-5 mr-1" aria-hidden="true" />
                        <a href="https://wa.me/5528999899870" className="mr-0 hover:underline">(28) 99989-9870 </a>
                        <p className="px-3">|</p>
                        <EnvelopeIcon className="h-5 w-5 mr-1" aria-hidden="true" />
                        <a href="mailto:winner@winnermaquinas.com" className="hover:underline">winner@winnermaquinas.com</a>
                    </div>

                    <div className="flex">
                        <a href="https://www.instagram.com/winnermaquinas" className="cursor-pointer mr-2">
                            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#fff] ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </span>
                        </a>

                        <a href="https://www.facebook.com/winnermaquinaseusinagem" className="cursor-pointer">
                            <span className="[&>svg]:h-7 [&>svg]:w-7">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <nav className="bg-white border-gray-200 shadow-sm">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:p-0 md:py-6">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={Logo} className="w-full md:w-[75%] " alt="Winner Logo" />
                    </a>
                    <button
                        data-collapse-toggle="navbar-dropdown"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-dropdown"
                        aria-expanded={isOpen ? "true" : "false"}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                    <div className={`${isOpen ? 'block ' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 uppercase">
                            <li>
                                <a href="/" className="block py-2 px-3 md:px-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700" >Início</a>
                            </li>
                            <li>
                                <a href="#aempresa" onClick={(e) => { e.preventDefault(); handleLinkClick('#aempresa'); }} className="block py-2 px-3 md:px-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 ">A Empresa</a>
                            </li>
                            <li>
                                <a href="#produtos" onClick={(e) => { e.preventDefault(); handleLinkClick('#produtos'); }} className="block py-2 px-3 md:px-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 ">Produtos</a>
                            </li>
                            <li>
                                <a href="#contato" onClick={(e) => { e.preventDefault(); handleLinkClick('#contato'); }} className="block py-2 px-3 md:px-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 ">Contato</a>
                            </li>
                            <li className="">
                                <a href="#" className=" flex justify-center w-full py-2 px-3 bg-blue-winner text-white rounded hover:bg-blue-winner/80 md:border-0 hover:text-white"> <MagnifyingGlassPlusIcon className="h-5 w-5 mr-1" aria-hidden="true" />Orçamento</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <WhatsAppButton />
        </>
    );
}