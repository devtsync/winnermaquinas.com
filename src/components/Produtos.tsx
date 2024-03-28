import Card from "./Card";
import Img from '@/assets/image-1.jpg'

export default function Produtos() {
    return (
        <>
            <div className="">
                <div className="max-w-screen-xl mx-auto md:p-0 p-4 py-5 md:py-12" id="produtos">
                    <div className="text-left md:text-center">
                        <p className="text-base font-medium leading-7 text-gray-500">Produtos</p>
                        <h1 className="mt-0 md:mt-[-10px] mb-4 text-3xl font-bold tracking-tight md:text-4xl text-blue-winner">Conheça nossos produtos</h1>
                    </div>
                    <div className="container mx-auto">
                        <div className="flex flex-wrap justify-center -mx-2">
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-4" >
                                <Card
                                    title={`Bandeira`}
                                    imageUrl="https://flowbite.com/docs/images/blog/image-1.jpg"
                                    link="/produtos"
                                />
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-4" >
                                <Card
                                    title={`Cavaletes`}
                                    imageUrl="https://flowbite.com/docs/images/blog/image-1.jpg"
                                    link="/produtos"
                                />
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-4" >
                                <Card
                                    title={`Carro Transportador`}
                                    imageUrl="https://flowbite.com/docs/images/blog/image-1.jpg"
                                    link="/produtos"
                                />
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-4" >
                                <Card
                                    title={`Ponte Rolante`}
                                    imageUrl="https://flowbite.com/docs/images/blog/image-1.jpg"
                                    link="/produtos"
                                />
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-4" >
                                <Card
                                    title={`Carregador de Contêiner`}
                                    imageUrl="https://flowbite.com/docs/images/blog/image-1.jpg"
                                    link="/produtos"
                                />
                            </div>
                            {/* {Array.from({ length: 5 }).map((_, index) => (
                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-4" key={index}>
                                    <Card
                                        title={`Título ${index + 1}`}
                                        imageUrl="https://flowbite.com/docs/images/blog/image-1.jpg"
                                        link="#"
                                    />
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}