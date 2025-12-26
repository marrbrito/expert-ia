import { ClockIcon, MessageSquare, BarChart2, FileTextIcon, UserPlusIcon, CreditCardIcon, SettingsIcon, LogOut, Headphones, ChartPieIcon, LucideIcon, MessagesSquareIcon, NewspaperIcon, MegaphoneIcon, LineChartIcon, MessageSquareTextIcon, UsersIcon } from 'lucide-react';

type Link = {
    href: string;
    label: string;
    icon: LucideIcon;
}

export const SIDEBAR_LINKS: Link[] = [
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: ChartPieIcon,
    },
    {
        href: "/dashboard/campaigns",
        label: "Campaigns",
        icon: MegaphoneIcon
    },
    {
        href: "/dashboard/analytics",
        label: "Analytics",
        icon: LineChartIcon
    },
    {
        href: "/dashboard/posts",
        label: "Posts",
        icon: MessageSquareTextIcon
    },
    {
        href: "/dashboard/engagement",
        label: "Engagement",
        icon: UsersIcon
    },
    {
        href: "/dashboard/billing",
        label: "Billing",
        icon: CreditCardIcon
    },
    {
        href: "/dashboard/settings",
        label: "Settings",
        icon: SettingsIcon
    },
];

export const FOOTER_LINKS = [
    {
        title: "Serviços",
        links: [
            { name: "Consultoria IA", href: "#services" },
            { name: "Machine Learning", href: "#services" },
            { name: "Automação", href: "#services" },
            { name: "Analytics", href: "#services" },
        ],
    },
    {
        title: "Empresa",
        links: [
            { name: "Sobre Nós", href: "/about" },
            { name: "Cases", href: "/cases" },
            { name: "Blog", href: "/blog" },
            { name: "Contato", href: "#contact" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacidade", href: "/privacy" },
            { name: "Termos", href: "/terms" },
        ],
    },
    {
        title: "Contato",
        links: [
            { name: "WhatsApp", href: "#" },
            { name: "Email", href: "mailto:contato@decisiononeia.com" },
            { name: "LinkedIn", href: "#" },
        ],
    },
];
