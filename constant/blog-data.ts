import { assets } from "./assets";

const categories = [
    {
        slug: 'app',
        name: 'App',
    },
    {
        slug: 'design',
        name: 'Design',
    }
];

const blogTypes = [
    {
        slug: 'web-dev',
        name: 'Web Development',
    },
    {
        slug: 'ai_n_ml',
        name: 'AI & ML',
    },
    {
        slug: 'os',
        name: 'Operating Systems',
    }
]

export const initialBlogs = [
    {
        slug: 'is-this-username-taken-at-scale',
        title: '“Is This Username Taken?” — Answered in a Millisecond',
        image: assets.home.blogs.blog10, // Replace with correct image
        repositoryUrl: "",
        link: "https://medium.com/@ayeshgk/is-this-username-taken-answered-in-a-millisecond-abc123", // Replace with actual link
        summary: "Exploring the engineering challenge of checking username availability at billion-user scale. Learn how distributed caching, Redis sharding, and smart endpoint strategies enable millisecond responses.",
        keywords: [
            { name: 'Scalability' },
            { name: 'Redis Cluster' },
            { name: 'Username Availability' },
        ],
        blogType: blogTypes[0],
        category: categories[0],
    },
    {
        slug: 'mcp-ai-limits-and-breakthroughs',
        title: 'All Eyes on MCP',
        image: assets.home.blogs.blog9,
        repositoryUrl: "",
        link: "https://medium.com/@ayeshgk/all-eyes-on-mcp-ai-future-xyz456",
        summary: "Artificial Intelligence continues to grow, but key limitations remain. This article explores how MCP architecture addresses context length and memory bottlenecks in modern AI systems.",
        keywords: [
            { name: 'Artificial Intelligence' },
            { name: 'Architecture' },
            { name: 'MCP' },
        ],
        blogType: blogTypes[0],
        category: categories[0],
    },
    {
        slug: 'rest-idempotency-design-guide',
        title: 'REST Idempotency',
        image: assets.home.blogs.blog8,
        repositoryUrl: "",
        link: "https://medium.com/@ayeshgk/rest-idempotency-guide-pqr789",
        summary: "Idempotency in REST APIs ensures safe retries and consistent behavior. This post breaks down practical strategies for implementing idempotent POST, PUT, and DELETE endpoints.",
        keywords: [
            { name: 'REST API' },
            { name: 'Idempotency' },
            { name: 'System Design' },
        ],
        blogType: blogTypes[0],
        category: categories[0],
    },
    {
        slug: 'modernizing-monoliths-strangler-pattern',
        title: 'Modernizing Monoliths with the Strangler Pattern',
        image: assets.home.blogs.blog7,
        repositoryUrl: "",
        link: "https://medium.com/@ayeshgk/modernizing-monoliths-strangler-pattern-lmn321",
        summary: "Migrating from monoliths to microservices is tough. This blog explores the Strangler Fig pattern and how it allows gradual, safe modernization of legacy systems without downtime.",
        keywords: [
            { name: 'Monolith' },
            { name: 'Strangler Pattern' },
            { name: 'Microservices' },
        ],
        blogType: blogTypes[0],
        category: categories[0],
    },
    {
        slug: 'a-guide-to-essential-design-patterns-for-microservices',
        title: 'Design Patterns for Microservices',
        image: assets.home.blogs.blog6,
        repositoryUrl: "",
        link: "https://medium.com/@ayeshgk/a-guide-to-essential-design-patterns-for-microservices-5b28020640d9",
        summary: "Microservices architectures involve a collection of services working together to achieve business goals. Design patterns in microservices offer standardized solutions, ensuring uniformity, scalability, and maintainability in distributed systems.",
        keywords: [
            {
                name: 'Microservices',
            },
            {
                name: 'Design Patterns',
            },
            {
                name: 'System Design',
            },
        ],
        blogType: blogTypes[0],
        category: categories[0]
    },
    {
        slug: 'finetuining',
        title: 'Finetuning 🧐',
        image: assets.home.blogs.blog5,
        repositoryUrl: "",
        link: "https://medium.com/@ayeshgk/finetuning-155807d4840a",
        summary: "Finetuning is taking a pre-trained model and further training it on a more specific dataset or task.",
        keywords: [
            {
                name: 'LLMs',
            },
            {
                name: 'Finetuining',
            },
            {
                name: 'Prompting',
            },
        ],
        blogType: blogTypes[1],
        category: categories[0]
    },
    {
        slug: 'beyound-forward-and-reverse-proxies',
        title: 'Beyound Forward and Reverse Proxies',
        image: assets.home.blogs.blog1,
        repositoryUrl: "",
        link: "https://medium.com/@ayeshgk/beyond-forward-and-reverse-proxies-d8f24a28e3ed",
        summary: "Proxy is an intermediate server which acts as a bridge between client and servers. Different types of proxies work in between client and server communication. Different types of proxies have different types of functionalities such as Caching, Anonymity and privacy, Content filtering, Access control, Load balancing and Firewall protection.",
        keywords: [
            {
                name: 'Proxy',
            },
            {
                name: 'API Gateway',
            },
            {
                name: 'Load Balancing',
            },
        ],
        blogType: blogTypes[0],
        category: categories[0]
    },
    {
        slug: 'all-the-things-you-need-to-know-about-web-rendering',
        title: 'All the things you need to know about web rendering.',
        image: assets.home.blogs.blog2,
        repositoryUrl: "",
        link: "https://medium.com/@ayeshgk/all-the-things-you-need-to-know-about-web-rendering-8e44a1b5fa30",
        summary: "Website rendering is the process of displaying content of the web page on user’s device. Web browsers retrieves HTML,CSS and JavaScript for the relevant web page then combine those things together and show it nicely in user’s device. Other than that it includes text formatting's, images and other media.",
        keywords: [
            {
                name: 'Web Rendering',
            },
            {
                name: 'Website',
            },
        ],
        blogType: blogTypes[0],
        category: categories[0]
    },
    {
        slug: 'cpu-scheduler-in-linux-operating-system',
        title: 'CPU scheduler in Linux operating system',
        image: assets.home.blogs.blog3,
        repositoryUrl: "",
        link: "https://medium.com/@ayeshgk/cpu-scheduler-in-linux-operating-system-b233e94ec6a9",
        summary: "CPU scheduler is the main division in the Operating system, and it is part of the OS kernel. It schedules tasks and with searching resources availability. Here I’m going to explain the Linux OS CPU scheduler",
        keywords: [
            {
                name: 'Linux',
            },
            {
                name: 'Operating Systems',
            },
            {
                name: 'CPU Scheduler',
            },
        ],
        blogType: blogTypes[2],
        category: categories[0]
    },
    {
        slug: 'knn-in-simple',
        title: 'KNN in simple',
        image: assets.home.blogs.blog4,
        repositoryUrl: "",
        link: "https://medium.com/@ayeshgk/knn-in-simple-36abeaeb76a7",
        summary: "KNN is a supervised learning algorithm. It can be used in both classification and regression. But most use it as a classification algorithm. It classified new data into one of the available categories.",
        keywords: [
            {
                name: 'KNN',
            },
            {
                name: 'Machine Learning',
            },
            {
                name: "Classification",
            }
        ],
        blogType: blogTypes[1],
        category: categories[0]
    },
]