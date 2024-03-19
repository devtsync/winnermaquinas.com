'use client'
import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, link }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md text-center">
      <a href={link}>
        <Image className="rounded-t-lg" src={imageUrl} alt="Imagem do Card" />
      </a>
      <div className="p-5">
        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        </a>

        <a href={link} className="text-sm font-semibold leading-6 text-blue-winner">
          Saiba Mais <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
};

export default Card;
