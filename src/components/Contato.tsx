// Exemplo de um componente de página em Next.js
import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'

const Contato = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto md:p-0 p-4 py-0 mt-5 md:mt-0 md:py-8">
                <div className="flex flex-wrap justify-center items-start -mx-4">

                    <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
                        <p className="text-base font-medium leading-7 text-gray-500">Contato</p>
                        <h1 className="mt-0 mb-2 text-3xl font-bold tracking-tight md:text-4xl text-blue-winner">Canais Winner</h1>
                        <p className="mb-6">Se você tem um projeto, ideias, dúvidas, contacte-nos pelos nossos canais ou use o formulário ao lado.</p>



                        <div className="flex items-center mb-4">
                            <div className="flex-shrink-0 bg-blue-winner rounded-full p-4">
                                <PhoneIcon className="h-8 w-8 text-white" aria-hidden="true" />
                            </div>
                            <div className="ml-3">
                                <p className="text-lg font-semibold text-gray-900">Telefones</p>
                                <p className="text-md text-gray-600">(28) 3528 - 1665</p>
                                <p className="text-md text-gray-600">(28) 99989 - 9870</p>
                                <p className="text-md text-gray-600">(28) 99945 - 1953</p>

                            </div>
                        </div>

                        <div className="flex items-center mb-4">
                            <div className="flex-shrink-0 bg-blue-winner rounded-full p-4">
                                <EnvelopeIcon className="h-8 w-8 text-white" aria-hidden="true" />
                            </div>
                            <div className="ml-3">
                                <p className="text-lg font-semibold text-gray-900">Email</p>
                                <p className="text-md text-gray-600">winner@winnermaquinas.com</p>
                                <p className="text-md text-gray-600">nfewinner@winnermaquinas.com</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4">
                            <div className="flex-shrink-0 bg-blue-winner rounded-full p-4">
                                <MapPinIcon className="h-8 w-8 text-white" aria-hidden="true" />
                            </div>
                            <div className="ml-3">
                                <p className="text-lg font-semibold text-gray-900">Localização</p>
                                <p className="text-md text-gray-600">Fazenda São Izidoro, S/N, Vargem Grande, Vargem Alta -ES CEP.:29.295-000</p>
                                <a href="https://www.google.com/maps/dir//Winner+Maquinas+e+Usinagem+-+Rod.+Jorge+F%C3%A9res,+101+-+Vargem+Alta,+ES,+29295-000/@-20.665715,-40.9949507,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0xb97306c4f58cb7:0xdbee8abb15ab52d1!2m2!1d-40.9949507!2d-20.665715?entry=ttu" className="text-sm text-blue-600 hover:underline">Encontre no Google Mapas</a>
                            </div>
                        </div>

                    </div>

                    <div className="w-full lg:w-1/2 p-10 bg-blue-winner rounded-none md:rounded-lg mb-0 shadow-none md:shadow-md">
                        <h2 className="text-3xl font-bold mb-6 text-white">Entre em contato</h2>
                        <p className="mb-6 text-slate-300">Depois de colhermos algumas informações suas, agendaremos para discutir suas necessidades em detalhes.</p>
                        <form>
                            <div className="mb-4">
                                <input className="w-full p-2 border border-gray-300  rounded focus:outline-none focus:shadow-outline" type="text" placeholder="Nome" />
                            </div>
                            <div className="mb-4">
                                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline" type="email" placeholder="Email" />
                            </div>
                            <div className="mb-4">
                                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline" type="text" placeholder="Telefone" />
                            </div>
                            <div className="mb-6">
                                <textarea className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline" placeholder="Mensagem" ></textarea>
                            </div>
                            <div >
                                <button
                                    type="submit"
                                    className="block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Enviar Mensagem
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14932.379871291307!2d-40.9949507!3d-20.665715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb97306c4f58cb7%3A0xdbee8abb15ab52d1!2sWinner%20Maquinas%20e%20Usinagem!5e0!3m2!1spt-BR!2sbr!4v1710810274177!5m2!1spt-BR!2sbr" className='w-full' height="450"  loading="lazy" ></iframe></>
    );
};

export default Contato;
