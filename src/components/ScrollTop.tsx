import React, { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Função para verificar se o botão deve ser mostrado
    const toggleVisibility = () => {
        if (window.pageYOffset > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Função para rolar para o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-[6rem] z-50 right-7 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700 transition duration-300"
                aria-label="Voltar ao topo"
            >
                <ChevronUpIcon className="h-6 w-6" />
            </button>
        )
    );
};

export default ScrollToTopButton;
