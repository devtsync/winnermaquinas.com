import Footer from "@/components/Footer";
import Nav from "@/components/NavBar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Nav />
            <div className="bg-blue-winner">


                <div className="container  mx-auto px-4 py-10 h-[300px] flex flex-col justify-center items-center text-center">
                    <h1 className="text-2xl font-bold mb-3 text-white">Título da Página</h1>
                    <nav aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <a href="#" className="text-gray-600 hover:text-gray-900 inline-flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a1 1 0 001-1V6h4v6a1 1 0 102 0V6a2 2 0 00-2-2H9a1 1 0 100 2h3v5a1 1 0 001 1z"></path><path d="M4 12a1 1 0 001 1h12a1 1 0 100-2H5a1 1 0 00-1 1z"></path></svg>
                                    Início
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.793 5.793a1 1 0 011.414 0L10 8.586l2.793-2.793a1 1 0 111.414 1.414L11.414 10l2.793 2.793a1 1 0 01-1.414 1.414L10 11.414l-2.793 2.793a1 1 0 01-1.414-1.414L8.586 10 5.793 7.207a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">Produtos</a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.793 5.793a1 1 0 011.414 0L10 8.586l2.793-2.793a1 1 0 111.414 1.414L11.414 10l2.793 2.793a1 1 0 01-1.414 1.414L10 11.414l-2.793 2.793a1 1 0 01-1.414-1.414L8.586 10 5.793 7.207a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium">Titulo da Página</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {children}
            <Footer />
        </>
    );
}