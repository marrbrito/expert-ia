type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "starter",
        title: "Starter",
        desc: "Consultoria inicial para empresas começando com IA",
        monthlyPrice: 0,
        yearlyPrice: 0,
        buttonText: "Agendar Reunião",
        features: [
            "Diagnóstico inicial gratuito",
            "Avaliação de maturidade em IA",
            "Roadmap básico de implementação",
            "1 hora de consultoria",
            "Relatório de oportunidades",
            "Suporte por email"
        ],
        link: "#contact"
    },
    {
        id: "professional",
        title: "Professional",
        desc: "Implementação completa de soluções de IA para seu negócio",
        monthlyPrice: 2500,
        yearlyPrice: 25000,
        badge: "Mais Popular",
        buttonText: "Contratar",
        features: [
            "Desenvolvimento de modelos customizados",
            "Integração com sistemas existentes",
            "Suporte prioritário",
            "Até 3 projetos simultâneos",
            "Treinamento da equipe",
            "Dashboards de analytics",
            "Reuniões semanais",
            "Documentação completa"
        ],
        link: "#contact"
    },
    {
        id: "enterprise",
        title: "Enterprise",
        desc: "Transformação digital completa com IA para grandes empresas",
        monthlyPrice: 5000,
        yearlyPrice: 50000,
        badge: "Fale Conosco",
        buttonText: "Falar com Especialista",
        features: [
            "Soluções de IA ilimitadas",
            "Arquitetura enterprise-grade",
            "Gerente de conta dedicado",
            "Projetos ilimitados",
            "Analytics e BI avançados",
            "Segurança e compliance",
            "SLA garantido",
        ],
        link: "#contact"
    }
];
