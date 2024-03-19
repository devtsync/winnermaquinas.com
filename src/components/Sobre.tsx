import Card from "./Card";

export default function Sobre() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto md:p-0 p-4 py-0 md:py-8">
                <div className="flex-1 mb-8 md:mb-0 md:mr-4">

                    <div className="md:block order-1 lg:order-2 h-auto w-full relative">
                        {/* <Image
                                src={suaimagem}
                                alt="Analu Fassarela"
                                objectFit="cover"
                            /> */}
                    </div>
                </div>

                {/* Container do Texto */}
                <div className="flex-1">
                    <p className="text-base font-medium leading-7 text-gray-500">A Empresa</p>
                    <h1 className="mt-0 mb-2 text-3xl font-bold tracking-tight md:text-4xl text-blue-winner">Sobre nós</h1>
                    <p className="text-lg leading-7">
                        Desde 2008 a Winner Máquinas e Usinagem atua no mercado nacional oferecendo serviços para o ramo de metalurgia, produção de máquinas e equipamentos, além de serviços de manutenção em diversos segmentos que vão desde siderúrgicas à padarias.
                    </p>
                    <p className="mt-4 text-lg leading-7">
                        Hoje a empresa tem como principal segmento a fabricação de Carregador de Contêiner (Bin Laden) para a movimentação e armazenamento de rochas ornamentais, cavaletes, ponte rolante, pórtico para blocos, bancada para resinagem, carroça e implementos agrícolas, entre outros.
                    </p>



                </div>

            </div>


        </>
    );
}