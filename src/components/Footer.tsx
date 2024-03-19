import Logo from '@/assets/logoWinner.png'
import Image from 'next/image'

export default function Footer() {
    return (


        <footer className="bg-blue-winner">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Image src={Logo} className="w-full contrast-0" alt="Winner Logo" />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Informações</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Política de Privacidade</a>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Siga-nos</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.instagram.com/winnermaquinas" className="hover:underline ">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/winnermaquinas" className="hover:underline">Facebook</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contatao</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <p className="hover:underline">(28) 99989 - 9870</p>
                                </li>
                                <li className="">
                                    <p className="hover:underline">winner@winnermaquinas.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://tsync.com.br/" className="hover:underline">Winner Máquinas e Usinagem</a> - Todos os direitos reservados.
                    </span>

                </div>
            </div>
        </footer>

    )
}