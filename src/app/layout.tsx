import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from 'next/font/google'
 
const poppins = Poppins({
  weight: ['100','300', '400', '500', '700','900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Winner Máquinas",
  description: "Oferecendo serviços para o ramo de metalurgia, produção de máquinas e equipamentos. Desde 2008 a Winner Máquinas e Usinagem atua no mercado nacional oferecendo serviços para o ramo de metalurgia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
