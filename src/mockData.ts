
interface Project
{
    id: number
    title: string
    description: string
    category: string
    technologies: string[]
    link: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A modern shopping experience built with Next.js",
        category: "Web",
        technologies: ["Next.js", "TypeScript", "Tailwind"],
        link: "https://example.com/ecommerce"
    },
    {
        id: 2,
        title: "Mobile Banking App",
        description: "Secure banking application for iOS and Android",
        category: "Mobile",
        technologies: ["React Native", "Redux", "Node.js"],
        link: "https://example.com/banking"
    },
    {
        id: 3,
        title: "Data Analytics Dashboard",
        description: "Real-time analytics visualization platform",
        category: "Analytics",
        technologies: ["D3.js", "Python", "AWS"],
        link: "https://example.com/analytics"
    },
    {
        id: 4,
        title: "Social Media Manager",
        description: "Schedule and analyze social media posts",
        category: "Web",
        technologies: ["React", "GraphQL", "PostgreSQL"],
        link: "https://example.com/social"
    },
    {
        id: 5,
        title: "Fitness Tracking App",
        description: "Track workouts and nutrition goals",
        category: "Mobile",
        technologies: ["Flutter", "Firebase", "TensorFlow"],
        link: "https://example.com/fitness"
    },
    {
        id: 6,
        title: "Business Intelligence Tool",
        description: "Enterprise reporting and analytics suite",
        category: "Analytics",
        technologies: ["Angular", "Python", "SQL"],
        link: "https://example.com/bi"
    }
]