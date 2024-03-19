import Image from 'next/image';
import { CheckBadgeIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/solid';

interface FeatureCardProps {
    title: string;
    icon: JSX.Element;  // Assumindo que 'icon' é um componente React/JSX, como um ícone de 'react-icons' ou similar
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon, description }) => {
    return (
        <div className="text-center p-4 md:w-1/3">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-winner text-white mx-auto mb-4">
                {icon}
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default function Escolher() {
    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="mt-0 mb-2 text-3xl font-bold tracking-tight md:text-4xl text-blue-winner">Por que nos escolher?</h1>
                </div>
                <div className="flex flex-wrap">
                    <FeatureCard
                        title="PROFISSIONAIS"
                        icon={<UserGroupIcon className="h-6 w-6" />}
                        description="Equipe altamente qualificada e pronta para atender às suas necessidades."
                    />
                    <FeatureCard
                        title="CONFIABILIDADE"
                        icon={<ShieldCheckIcon className="h-6 w-6" />}
                        description="Compromisso com a entrega e a satisfação do cliente."
                    />
                    <FeatureCard
                        title="ESPECIALISTAS"
                        icon={<CheckBadgeIcon className="h-6 w-6" />}
                        description="Especialização nas mais recentes tecnologias e melhores práticas do mercado."
                    />
                </div>
            </div>
        </section>
    );
}
