import React from 'react';
import { Shield, Award, Heart, Target, Eye, HandHeart, TrendingUp, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

const values = [
    {
        icon: Shield,
        title: 'Confiança',
        description: 'Construímos relacionamentos baseados na transparência e na honestidade'
    },
    {
        icon: Heart,
        title: 'Cuidado',
        description: 'Tratamos cada cliente como parte da nossa família'
    },
    {
        icon: Award,
        title: 'Excelência',
        description: 'Buscamos sempre a melhor solução para cada situação'
    },
    {
        icon: HandHeart,
        title: 'Compromisso',
        description: 'Estamos aqui para você nos momentos mais importantes'
    }
];

const team = [
    {
        name: 'Daliane',
        role: 'PO',
        initials: 'D'
    },
    {
        name: 'Nathalia',
        role: 'Tester',
        initials: 'N'
    },
    {
        name: 'Vinicius',
        role: 'Desenvolvedor',
        initials: 'V'
    },
    {
        name: 'Lucas',
        role: 'Desenvolvedor',
        initials: 'L'
    },
    {
        name: 'Amanda',
        role: 'Desenvolvedora',
        initials: 'A'
    },
    {
        name: 'Marcio',
        role: 'Desenvolvedor',
        initials: 'M'
    },
    {
        name: 'Eden',
        role: 'Desenvolvedor',
        initials: 'E'
    }

];

export const SobrePage: React.FC = () => {
    return (
        <div className="space-y-12 bg-[#e0f2fe] py-12 px-4 md:px-8 lg:px-16">
            
            <div className="bg-white rounded-xl p-8 md:p-12 text-center shadow-md">
                <Shield className="h-16 w-16 text-[#38bdf8] mx-auto mb-6" />
                <h1 className="text-3xl md:text-4xl font-bold text-[#334155] mb-4">
                    Sobre a VidaProtegida
                </h1>
                <p className="text-base md:text-lg text-[#334155]/70 max-w-3xl mx-auto leading-relaxed">
                    Há mais de 15 anos, nos dedicamos a proteger o que mais importa: sua família e seu futuro.
                    Somos uma seguradora especializada em seguros de vida, comprometida em oferecer
                    tranquilidade e segurança financeira para nossos clientes.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-8 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <Target className="h-12 w-12 text-[#38bdf8] mx-auto mb-4" />
                    <h3 className="font-bold text-lg text-[#334155] mb-2">Nossa Missão</h3>
                    <p className="text-sm text-[#334155]/70">
                        Proteger famílias brasileiras oferecendo seguros de vida acessíveis,
                        transparentes e de qualidade superior.
                    </p>
                </div>

                <div className="bg-white rounded-xl p-8 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <Eye className="h-12 w-12 text-[#38bdf8] mx-auto mb-4" />
                    <h3 className="font-bold text-lg text-[#334155] mb-2">Nossa Visão</h3>
                    <p className="text-sm text-[#334155]/70">
                        Nós somos a Vida Protegida, uma seguradora criada para proteger o que é mais importante para você.
                        Sabemos que imprevistos acontecem e é por isso que oferecemos planos sob medida para garantir sua tranquilidade.
                    </p>
                </div>

                <div className="bg-white rounded-xl p-8 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <Heart className="h-12 w-12 text-[#38bdf8] mx-auto mb-4" />
                    <h3 className="font-bold text-lg text-[#334155] mb-2">Nossos Valores</h3>
                    <p className="text-sm text-[#334155]/70">
                        Confiança, transparência, inovação e compromisso com o bem-estar
                        de nossos clientes e suas famílias.
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-xl md:text-2xl font-bold text-center text-[#334155] mb-8">Nossos Valores em Ação</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                                <Icon className="h-12 w-12 text-[#38bdf8] mx-auto mb-4" />
                                <h4 className="font-semibold text-lg text-[#334155] mb-2">{value.title}</h4>
                                <p className="text-sm text-[#334155]/70">{value.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-xl p-8 text-white shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold text-center mb-8">Números que Inspiram Confiança</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-extrabold mb-1">50.000+</div>
                        <p className="opacity-90">Clientes Protegidos</p>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold mb-1">R$ 2.5B</div>
                        <p className="opacity-90">Em Coberturas</p>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold mb-1">98%</div>
                        <p className="opacity-90">Satisfação</p>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold mb-1">24h</div>
                        <p className="opacity-90">Tempo Médio de Resposta</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-xl md:text-2xl font-bold text-center text-[#334155] mb-8">Nossa Equipe</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {team.map((member, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                            <div className="w-16 h-16 bg-[#38bdf8] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                                <span className="text-2xl font-bold">{member.initials}</span>
                            </div>
                            <h4 className="font-bold text-lg text-[#334155] mb-1">{member.name}</h4>
                            <p className="text-[#38bdf8] text-sm font-semibold mb-2">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-xl md:text-2xl font-bold text-center text-[#334155] mb-8">Certificações e Prêmios</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 text-center shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                        <Award className="h-12 w-12 text-[#38bdf8] mx-auto mb-4" />
                        <h4 className="font-bold text-lg text-[#334155] mb-2">ISO 9001:2015</h4>
                        <p className="text-sm text-[#334155]/70">Certificação de qualidade</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                        <CheckCircle className="h-12 w-12 text-[#38bdf8] mx-auto mb-4" />
                        <h4 className="font-bold text-lg text-[#334155] mb-2">SUSEP</h4>
                        <p className="text-sm text-[#334155]/70">Autorizada pela SUSEP</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                        <TrendingUp className="h-12 w-12 text-[#38bdf8] mx-auto mb-4" />
                        <h4 className="font-bold text-lg text-[#334155] mb-2">Top of Mind</h4>
                        <p className="text-sm text-[#334155]/70">Marca mais lembrada 2023</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-xl md:text-2xl font-bold text-center text-[#334155] mb-8">Entre em Contato</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 text-center shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                        <Phone className="h-8 w-8 text-[#38bdf8] mx-auto mb-3" />
                        <h4 className="font-bold text-lg text-[#334155] mb-2">Telefone</h4>
                        <p className="text-[#334155]/70">0800 123 4567</p>
                        <p className="text-sm text-[#334155]/70">24 horas por dia</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                        <Mail className="h-8 w-8 text-[#38bdf8] mx-auto mb-3" />
                        <h4 className="font-bold text-lg text-[#334155] mb-2">Email</h4>
                        <p className="text-[#334155]/70">contato@vidaprotegida.com.br</p>
                        <p className="text-sm text-[#334155]/70">Resposta em 24h</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                        <MapPin className="h-8 w-8 text-[#38bdf8] mx-auto mb-3" />
                        <h4 className="font-bold text-lg text-[#334155] mb-2">Endereço</h4>
                        <p className="text-[#334155]/70">São Paulo - SP</p>
                        <p className="text-sm text-[#334155]/70">Atendimento nacional</p>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <button
                        className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-white font-semibold px-8 py-3 rounded-full transition-colors"
                    >
                        Fale Conosco
                    </button>
                </div>
            </div>
        </div>
    );
};