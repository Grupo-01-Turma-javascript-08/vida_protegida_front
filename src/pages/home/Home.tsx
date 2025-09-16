import React from 'react';
import { Shield, Heart, Users, TrendingUp, Star, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const features = [
        {
            icon: Shield,
            title: 'Proteção Completa',
            description: 'Cobertura abrangente para você e sua família'
        },
        {
            icon: Heart,
            title: 'Cuidado Personalizado',
            description: 'Planos adaptados às suas necessidades específicas'
        },
        {
            icon: Users,
            title: 'Suporte Especializado',
            description: 'Equipe qualificada para orientar suas decisões'
        },
        {
            icon: TrendingUp,
            title: 'Investimento Inteligente',
            description: 'Rentabilidade garantida para seu futuro'
        }
    ];

    const testimonials = [
        {
            name: 'Maria Silva',
            text: 'O melhor investimento que já fiz. Tranquilidade para toda a família.',
            rating: 5
        },
        {
            name: 'João Santos',
            text: 'Atendimento excepcional e planos que cabem no meu orçamento.',
            rating: 5
        },
        {
            name: 'Ana Costa',
            text: 'Recomendo para todos que buscam segurança financeira.',
            rating: 5
        }
    ];

    return (
        <div className="space-y-12 bg-[#e0f2fe] py-12 px-4 md:px-8 lg:px-16">

            <div className="bg-white rounded-xl p-8 md:p-12 text-center shadow-md relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 backdrop-blur-xs"
                    style={{
                        backgroundImage: 'url("https://www.theva.com.br/img/blog/grande/family-running-through-beach-1583517192.jpg")'
                    }}
                ></div>

                <div className="relative z-10">
                    <Shield className="h-16 w-16 text-[#38bdf8] mx-auto mb-6" />
                    <h1 className="text-3xl md:text-4xl font-bold text-[#334155] mb-4">
                        Proteja seu futuro com a VidaProtegida
                    </h1>
                    <p className="text-base md:text-lg text-[#334155]/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                        O seguro de vida que oferece tranquilidade e segurança financeira para você e sua família.
                        Planos flexíveis, coberturas amplas e o melhor atendimento do mercado.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/cadastro')}
                            className="cursor-pointer bg-[#38bdf8] hover:bg-[#0ea5e9] text-white font-semibold px-8 py-3 rounded-full transition-colors"
                        >
                            Começar Agora
                        </button>
                        <button
                            onClick={() => navigate('/login')}
                            className="cursor-pointer border border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8] hover:text-white font-semibold px-8 py-3 rounded-full transition-colors"
                        >
                            Fazer Login
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-8 text-center transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                        >
                            <Icon className="h-16 w-16 text-[#38bdf8] mx-auto mb-4" />
                            <h3 className="text-[#334155] font-semibold text-lg mb-2">{feature.title}</h3>
                            <p className="text-[#334155]/70 text-sm">{feature.description}</p>
                        </div>
                    );
                })}
            </div>

           <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-xl md:text-2xl font-bold text-center text-[#334155] mb-8">
                    Números que Inspiram Confiança
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="text-[#38bdf8] text-4xl font-extrabold mb-1">+50.000</div>
                        <p className="text-[#334155]/70">Clientes Protegidos</p>
                    </div>
                    <div>
                        <div className="text-[#38bdf8] text-4xl font-extrabold mb-1">15 Anos</div>
                        <p className="text-[#334155]/70">de Experiência</p>
                    </div>
                    <div>
                        <div className="text-[#38bdf8] text-4xl font-extrabold mb-1">98%</div>
                        <p className="text-[#334155]/70">Satisfação dos Clientes</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-xl md:text-2xl font-bold text-center text-[#334155] mb-8">
                    O que nossos clientes dizem
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6">
                            <div className="flex items-center mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-[#334155]/70 mb-4">"{testimonial.text}"</p>
                            <p className="text-[#334155] font-semibold">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-lg p-8 text-center text-white shadow-lg">
                <Award className="h-12 w-12 mx-auto mb-4" />
                <h2 className="text-xl md:text-2xl font-bold mb-4">Pronto para proteger seu futuro?</h2>
                <p className="mb-6 opacity-90">
                    Junte-se a milhares de famílias que já escolheram a segurança da VidaProtegida.
                </p>
                <button
                    onClick={() => navigate('/cadastro')}
                    className="bg-white text-[#38bdf8] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full"
                >
                    Começar Agora
                </button>
            </div>
        </div>
    );
};
export default HomePage;