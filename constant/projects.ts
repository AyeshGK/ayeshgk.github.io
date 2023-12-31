import { assets } from "./assets";
import { Project } from "@/components/ProjectInterface";

const categories = [
    {
        slug: 'app',
        name: 'App',
    },
    {
        slug: 'design',
        name: 'Design',
    },
    {
        slug: 'service',
        name: 'Web Service',
    }
];

const projectTypes = [
    {
        slug: 'case-study',
        name: 'Case Study',
    },
    {
        slug: 'real-project',
        name: 'Real Project',
    },
    {
        slug: 'semester-project',
        name: 'Semester Project'
    },
    {
        slug:'research',
        name:'research-project'
    },
    {
        slug:'external-project',
        name:'External Project'
    },
    {
        slug:'personal-project',
        name:'Personal Project'
    }
]

const initialProjects = [
    {
        slug: 'lseg-flower-exchange',
        title: 'LSEG Flower Exchange',
        images:[
            {
                src: assets.home.myLatestProject.projects.flowerExchange,
                alt: 'LSEG Flower Exchange',
            }
        ],
        repositoryUrl: "https://github.com/AyeshGK/lseg_flower_exchange",
        demoUrl: "",
        descriptions:[
            {
                description : 'Flower Exchange Project developed for London Stock Exchange Group (LSEG) which  designed to streamline the flower exchange process using C++. Project aimed to facilitate transactions between buyers and sellers.'
            },
        ],
        techStacks: [
            {
                name: 'C++',
                imageUrl: 'https://img.icons8.com/?size=512&id=40669&format=png',
                webUrl: 'https://www.cplusplus.com/',
                use : "Base Language"
            },
        ],
        contributors: [
            {
                name: 'Ayesh Vininda',
                email: 'ayeshgk@gmail.com'
            },
            {
                name: 'Prasad Darshana',
                email: 'Prasaddarshana1999@gmail.com'
            }
        ],
        projectType: projectTypes[4],
        category: categories[0]
    },
    {
        slug: 'world-happiness-report',
        title: 'World Happiness Report',
        images:[
            {
                src: assets.projects.happiness[1],
                alt: 'World Happiness Report',
            }
        ],
        repositoryUrl: "",
        demoUrl: "https://datalore.jetbrains.com/report/static/WMusuL1p8wFKqLJUPl9qDa/YKq9ycK2HNR06gP1ggm6JV",
        descriptions:[
            {
                description :"The World Happiness Report is a comprehensive and ongoing initiative aimed at understanding and measuring the global well-being and happiness of people . Conducted annually, this project assesses and ranks countries based on various factors contributing to happiness, including GDP per capita, social support, life expectancy, freedom, generosity, and corruption.\nThrough rigorous data analysis and in-depth research, the World Happiness Report provides valuable insights into the evolving trends and determinants of happiness worldwide. Policymakers, governments, and organizations use these findings to identify areas for improvement, implement positive changes, and enhance the overall quality of life for their citizens."
            }
        ],
        techStacks: [
            {
                name: 'Datalore-Jetbrains',
                imageUrl: 'https://img.icons8.com/?size=512&id=FrYBY9mulFTb&format=png',
                webUrl: 'https://datalore.jetbrains.com/',
                use: "Data Analytical Tool"
            },
            {
                name: 'Plotly',
                imageUrl: 'https://img.icons8.com/?size=512&id=80255&format=png',
                // https://icons8.com/icon/80255/bar-chart
                webUrl: 'https://plotly.com/',
                use: "Data Visualization library"
            },
            {
                name:'Python',
                imageUrl:'https://img.icons8.com/?size=512&id=l75OEUJkPAk4&format=png',
                webUrl:'https://www.python.org/',
                use: "Programming Language"
            },
        ],
        contributors: [
            {
                name: 'Ayesh Vininda',
                email: 'ayeshgk@gmail.com'
            },
            {
                name: 'Prasad Darshana',
                email: 'Prasaddarshana1999@gmail.com'
            }
        ],
        projectType: projectTypes[2],
        category: categories[0]
    },
    {
        slug: 'api-gateway-monitoring-system',
        title: 'API Gateway Monitoring System',
        images:[
            {
                src: assets.projects.api_monitoring[1],
                alt: 'API Gateway Monitoring System',
            },
            {
                src: assets.projects.api_monitoring[2],
                alt: 'API Gateway Monitoring System',
            }
            
        ],
        repositoryUrl: "https://github.com/Arc-Anoma-Intelligence",
        demoUrl: "",
        descriptions:[
            {
                description :"API Gateway performance monitoring system, integrated with anomaly detection models with comprehensive web based application to understand  valuable insights, system behaviours and potential issues.Combining tailored anomaly detection models for diverse parameter sets, implementing a cross-feature analysis to enhance accuracy."
            },
        ],
        techStacks: [
            {
                name: 'NextJS',
                imageUrl: 'https://img.icons8.com/?size=512&id=MWiBjkuHeMVq&format=png',
                webUrl: 'https://nextjs.org/',
                use: "Web Application"
            },
            {
                name: 'pyQt5',
                imageUrl: 'https://img.icons8.com/?size=512&id=13407&format=png',
                webUrl:  'https://www.qt.io/',
                use: "Desktop Application"
            },
            {
                name: 'Tensorflow',
                imageUrl: 'https://img.icons8.com/?size=512&id=n3QRpDA7KZ7P&format=png',
                webUrl: 'https://www.tensorflow.org/',
                use : "Model Building"
            },
            {
                name: 'MongoDB',
                imageUrl: 'https://img.icons8.com/?size=512&id=74402&format=png',
                webUrl: 'https://www.mysql.com/',
                use : "Database"
            },
        ],
        contributors: [
            {
                name: 'Ayesh Vininda',
                email: 'ayeshgk@gmail.com'
            },
            {
                name: 'Nishanthini',
                email: ''
            },
            {
                name: 'Bimsara Bodaragama',
                email: ''
            },
        ],
        projectType: projectTypes[2],
        category: categories[0]
    },
    {
        slug: 'spring-security',
        title: 'Spring Security',
        images:[
            {
                src: assets.projects.spring_security[1],
                alt: 'Spring Security',
            },
        ],
        repositoryUrl: "https://github.com/AyeshGK/spring_security",
        demoUrl: "",
        descriptions:[
            {
                description : "Study of Spring Security spring-boot V3.0.4"
            },
        ],
        techStacks: [
            {
                name: 'Postgres',
                imageUrl: 'https://img.icons8.com/?size=512&id=38561&format=png',
                webUrl: 'https://reactjs.org/',
                use: "Database"
                
            },
            {
                name: 'JPA',
                imageUrl: 'https://img.icons8.com/?size=512&id=7qNIPfDbudRB&format=png',
                webUrl: 'https://nodejs.org/en/',
                use: "ORM"
            },
            {
                name:'Java',
                imageUrl:'https://img.icons8.com/?size=512&id=13679&format=png',
                webUrl:'https://www.python.org/',
                use: "Programming Language"
            },
            {
                name:'Spring Boot',
                imageUrl: 'https://img.icons8.com/?size=512&id=90519&format=png',
                webUrl:'https://www.mongodb.com/',
                use: "Framework"
            }
        ],
        contributors: [
            {
                name: 'Ayesh Vininda',
                email: 'ayeshgk@gmail.com'
            },
        ],
        projectType: projectTypes[5],
        category: categories[2]
    },
    {
        slug: 'spring-microservices',
        title: 'Spring Microservices',
        images:[
            {
                src: assets.projects.spring_microservices[1],
                alt: 'Spring Microservices',
            },
        ],
        repositoryUrl: "https://github.com/AyeshGK/spring_microservices",
        demoUrl: "",
        descriptions:[
            {
                description : "Case study of Spring Cloud Microservices spring-boot"
            },
            {
                topic: "Specifications",
                description: "Spring Cloud Config Server, Spring Cloud Eureka Server, Spring Cloud Gateway, Spring Cloud Zipkin, Spring Cloud OpenFeign, AMQP",
            }
        ],
        techStacks: [
            {
                name: 'Postgres',
                imageUrl: 'https://img.icons8.com/?size=512&id=38561&format=png',
                webUrl: 'https://reactjs.org/',
                use: "Database"
            },
            {
                name: 'JPA',
                imageUrl: 'https://img.icons8.com/?size=512&id=7qNIPfDbudRB&format=png',
                webUrl: 'https://nodejs.org/en/',
                use: "ORM"
            },
            {
                name:'Java',
                imageUrl:'https://img.icons8.com/?size=512&id=13679&format=png',
                webUrl:'https://www.python.org/',
                use: "Programming Language"
            },
            {
                name:'Spring Boot',
                imageUrl: 'https://img.icons8.com/?size=512&id=90519&format=png',
                webUrl:'https://www.mongodb.com/',
                use: "Framework"
            },
            {
                name: "Spring Cloud",
                imageUrl: "https://img.icons8.com/?size=512&id=2oBx9FpXcbLa&format=png",
                webUrl: "https://spring.io/projects/spring-cloud",
                use: "Microservices",
            },
            {
                name:'RabbitMQ',
                imageUrl: 'https://img.icons8.com/?size=512&id=3X5J8dZc7jg2&format=png',
                webUrl:'https://www.mongodb.com/',
                use: "Message Broker"
            },
            
        ],
        contributors: [
            {
                name: 'Ayesh Vininda',
                email: 'ayeshgk@gmail.com'
            },
        ],
        projectType: projectTypes[5],
        category: categories[2]
    },
    {
        slug: 'parkinson-disease-detection-system',
        title: 'Parkinson Disease Detection System',
        images:[
            {
                src: assets.projects.pdds[1],
                alt: 'Parkinson Disease Detection System',
            },
            {
                src: assets.projects.pdds[2],
                alt: 'Parkinson Disease Detection System',
            },
            {
                src: assets.projects.pdds[3],
                alt: 'Parkinson Disease Detection System',
            },
            {
                src: assets.projects.pdds[4],
                alt: 'Parkinson Disease Detection System',
            },
            {
                src: assets.projects.pdds[5],
                alt: 'Parkinson Disease Detection System',
            },
            {
                src: assets.projects.pdds[6],
                alt: 'Parkinson Disease Detection System',
            },
            {
                src: assets.projects.pdds[7],
                alt: 'Parkinson Disease Detection System',
            },
            {
                src: assets.projects.pdds[8],
                alt: 'Parkinson Disease Detection System',
            },
            {
                src: assets.projects.pdds[9],
                alt: 'Parkinson Disease Detection System',
            },
        ],
        repositoryUrl: "https://github.com/team-hexagon-6",
        demoUrl: "",
        descriptions:[
            {
                description :"For the 4th semester Software Engineering module project we developed a Parkinson’s Disease Detection System which is a machine learning based testing system proposed to diagnose Parkinson's disease among the community, manage reports and recovery progress of the patients suffering from the disease. The system consists of 3 user types as doctor, examiner and the admin user. Examiners can register and perform tests for patients and generate test reports. A doctor can view the test records of a registered patient having completed his/her testing. In the system, a patient is subjected to two types of tests as spiral and wave. For each test, a hand drawn scanned image is required as input which then sends through the machine learning model and generate the result mentioning whether the patient is having the disease or not. "
             },
            {
                topic: "My Contribution",
                description:"In this comprehensive health diagnostic system, we employ Flask, a lightweight web framework, to develop a RESTful API that integrates two machine learning models for discerning health conditions from hand-drawn spiral and wave images. The backend is powered by a MySQL database implemented through the Prisma ORM, ensuring efficient data management. Simultaneously, a Node.js application, leveraging the Express framework, handles user authentication and authorization while orchestrating disease detection for patients and providing access to their medical reports. The integration of React on the frontend, connected to the Node.js backend via Axios, facilitates a seamless and responsive user interface. To make this powerful system accessible to a wider audience, we deploy three servers on Heroku, ensuring scalability, reliability, and accessibility for users seeking accurate health assessments based on their hand-drawn imagery."
            }
        ],
        techStacks: [
            {
                name: 'React JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/',
                use: "Frontend"
            },
            {
                name: 'Node JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/',
                use: "Backend"
            },
            {
                name:'Python',
                imageUrl:'https://img.icons8.com/?size=512&id=l75OEUJkPAk4&format=png',
                webUrl:'https://www.python.org/',
                use: "Machine Learning"
            },
            {
                name: 'MySQL',
                imageUrl: 'https://img.icons8.com/?size=512&id=UFXRpPFebwa2&format=png',
                webUrl: 'https://www.mysql.com/',
                use : "Database"
            },
            {
                name: 'Prisma',
                imageUrl: "https://img.icons8.com/?size=512&id=YKKmRFS8Utmm&format=png",
                webUrl: "https://www.prisma.io/",
                use: "ORM"
            }
        ],
        contributors: [
            {
                name: 'Ayesh Vininda',
                email: 'ayeshgk@gmail.com'
            },
            {
                name: 'Nipun Pramuditha',
                email: ''
            },
            {
                name: 'Thushalya Weerasuriya',
                email: ''
            },
            {
                name:'Deshan Lakshitha',
                email:''
            },
            {
                name:'Thinira Wanasinghe',
                email:''
            },
            {
                name:'VINOJITH .G',
                email:''
            }
        ],
        projectType: projectTypes[2],
        category: categories[0]
    },
    {
        slug: 'customer-churn-dashboard',
        title: 'Customer Churn Dashboard',
        images:[
            {
                src: assets.projects.churn[1],
                alt: 'Customer Churn Dashboard',
            },
            {
                src: assets.projects.churn[2],
                alt: 'Customer Churn Dashboard',
            },
            {
                src: assets.projects.churn[3],
                alt: 'Customer Churn Dashboard',
            },
            {
                src: assets.projects.churn[4],
                alt: 'Customer Churn Dashboard',
            },
            {
                src: assets.projects.churn[5],
                alt: 'Customer Churn Dashboard',
            },
            {
                src: assets.projects.churn[6],
                alt: 'Customer Churn Dashboard',
            },
            {
                src: assets.projects.churn[7],
                alt: 'Customer Churn Dashboard',
            },
            {
                src: assets.projects.churn[8],
                alt: 'Customer Churn Dashboard',
            },
        ],
        repositoryUrl: "https://github.com/ayeshgk-machine-learning/data-science-project",
        demoUrl: "",
        descriptions:[
            {
                topic:"",
                description:'This dashboard helps to identify valuable insights for making decisions to company managers'
            },
            {
                topic:"My Contribution",
                description:"I have developed this dashboard using React JS and PowerBI. React JS is used for frontend and PowerBI is used for data visualization and analytical purposes. I have used Firebase as the database for mange decisions."
            }
        ],
        techStacks: [
            {
                name: 'React JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/',
                use : "Frontend"
            },
            {
                name:'PowerBI',
                imageUrl:'https://img.icons8.com/?size=512&id=qYfwpsRXEcpc&format=png',
                webUrl:'https://powerbi.microsoft.com/en-us/',
                use : "Data Visualization & Analytical Tool"
            },
            {
                name:'Firebase',
                imageUrl:'https://img.icons8.com/?size=512&id=62452&format=png',
                webUrl:'https://firebase.google.com/',
                use : "Database"
            },
            {
                name:'Flask',
                imageUrl:'https://img.icons8.com/?size=512&id=MHcMYTljfKOr&format=png',
                webUrl:'https://flask.palletsprojects.com/en/2.0.x/',
                use : "Backend - ML Model"
            }
        ],
        contributors: [
            {
                name: 'Ayesh Vininda',
                email: 'ayeshgk@gmail.com'
            },
        ],
        projectType: projectTypes[2],
        category: categories[0]
    },
    {
        slug: 'bank-transactions-and-loan-processing-system',
        title: 'Bank Transactions and Loan Processing System',
        images:[
            {
                src: assets.projects.bank[1],
                alt: 'Bank Transactions and Loan Processing System',
            },
            {
                src: assets.projects.bank[2],
                alt: 'Bank Transactions and Loan Processing System',
            },
            {
                src: assets.projects.bank[3],
                alt: 'Bank Transactions and Loan Processing System',
            },
            {
                src: assets.projects.bank[4],
                alt: 'Bank Transactions and Loan Processing System',
            },
            {
                src: assets.projects.bank[5],
                alt: 'Bank Transactions and Loan Processing System',
            },
            {
                src: assets.projects.bank[6],
                alt: 'Bank Transactions and Loan Processing System',
            },
            {
                src: assets.projects.bank[7],
                alt: 'Bank Transactions and Loan Processing System',
            },
            {
                src: assets.projects.bank[8],
                alt: 'Bank Transactions and Loan Processing System',
            },
            {
                src: assets.projects.bank[9],
                alt: 'Bank Transactions and Loan Processing System',
            },
        ],
        repositoryUrl: "https://github.com/section117/bank-system-sem-4",
        demoUrl: "",
        descriptions:[
            {
                description:"For the 4th semester Database Systems module we developed Bank Transaction and Loan Processing web Application which can be accessed all branches their customers and employees. This is database project which consists on advanced SQL queries for optimized data selections, events for automation, triggers for data manipulation, indexing for fast data access and transactions ."
            },
            {
                topic:"Functionalities",
                description:"Functionalities Customer and employee regulation with different user type levels. Bank accounts and Fixed Deposits administrations. Various types of transactions between accounts. Loan management and processing. Email system for banking services."
            }
        ],
        contributors: [
            {
                name: 'Ayesh Vininda',
                email: 'ayeshgk@gmail.com',
            },
            {
                name: 'Prasad Darshana',
                email: ''
            },
            {
                name: 'Dasun Nimantha',
                email: ''
            },
            {
                name:'Dinuka Nimantha',
                email:''
            },
            {
                name:'Pamudu Palinda',
                email:''
            }
        ],
        techStacks: [
            {
                name: 'EJS',
                imageUrl: 'https://img.icons8.com/?size=512&id=Pxe6MGswB8pX&format=png',
                webUrl: 'https://ejs.co/',
                use : "Frontend"
            },
            {
                name: 'MySQL',
                imageUrl: 'https://img.icons8.com/?size=512&id=UFXRpPFebwa2&format=png',
                webUrl: 'https://www.mysql.com/',
                use : "Database"
            },
            {
                name: 'Node JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/',
                use : "Backend"
            },
        ],
        projectType: projectTypes[2],
        category: categories[0]
    },
    {
        slug: 'clinical-trial-management-system',
        title: 'Clinical Trial Management System',
        images:[
            {
                src: assets.projects.clinic[1],
                alt: 'Clinical Trial Management System',
            },
            {
                src: assets.projects.clinic[2],
                alt: 'Clinical Trial Management System',
            },
            {
                src: assets.projects.clinic[3],
                alt: 'Clinical Trial Management System',
            },
            {
                src: assets.projects.clinic[4],
                alt: 'Clinical Trial Management System',
            },
            {
                src: assets.projects.clinic[5],
                alt: 'Clinical Trial Management System',
            },
        ],
        contributors: [
            {
                name: 'Ayesh Vininda',
                email: 'ayeshgk@gmail.com',
            },
            {
                name: 'Prasad Darshana',
                email: ''
            },
            {
                name: 'Dasun Nimantha',
                email: ''
            },
            {
                name:'Dinuka Nimantha',
                email:''
            }
        ],
        repositoryUrl: "https://github.com/AyeshGK/clinical_trial_mangement_system_test",
        demoUrl: "",
        descriptions:[
            {
                description:"For the Object-Oriented Software Development module, we developed a website for Clinical Trial Management.This is a Web application built using PHP, MySQL with MVC for backend and HTML, CSS, Bootstrap for Frontend."
            },
            {
                topic:"Functionalities",
                description:"A company can add/edit/delete clinical trials.A client can apply and participate in clinical trials.Developed a web application for pharmaceutical companies to manage clinical trials.Provides a common platform for both companies and clients to meet."
            }
        ],
        techStacks: [
            {
                name: 'Bootstrap',
                imageUrl: 'https://img.icons8.com/?size=512&id=PndQWK6M1Hjo&format=png',
                webUrl: 'https://getbootstrap.com/',
                use : "Styling"
            },
            {
                name: 'MySQL',
                imageUrl: 'https://img.icons8.com/?size=512&id=UFXRpPFebwa2&format=png',
                webUrl: 'https://www.mysql.com/',
                use : "Database"
            },
            {
                name: 'PHP',
                imageUrl: 'https://img.icons8.com/?size=512&id=anECpXcEIboQ&format=png',
                webUrl: 'https://www.php.net/',
                use : "Backend"
            },
        ],
        projectType: projectTypes[2],
        category: categories[0]
    },
    {
        slug: 'web-application-for-vehicle-rentle-service',
        title: 'Web application for vehicle rentle service',
        images:[
            {
                src: assets.projects.rental[1],
                alt: 'Web application for vehicle rentle service',
            }
        ],
        repositoryUrl: "https://github.com/Cyber-Synced",
        demoUrl: "",
        descriptions:[
            {
                description:"Contributed to the development of web application for a vehicle rental service, with frontend responsibilities using React."
            }
        ],
        contributors: [
            {
                name : 'Ayesh Vininda',
                email: 'ayeshgk@gmail.com'
            },
            {
                name : 'Prasad Darshana',
                email: ''
            },
            {
                name : 'Dasun Nimantha',
                email: ''
            },
            {
                name : 'Dinuka Nimantha',
                email: ''
            },
        ],
        techStacks: [
            {
                name: 'Tailwind CSS',
                imageUrl: 'https://img.icons8.com/?size=512&id=4PiNHtUJVbLs&format=png',
                webUrl: 'https://tailwindcss.com/',
                use : "Styling"
            },
            {
                name: 'React JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/',
                use : "Frontend"
            },
            {
                name: 'Redux JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png',
                webUrl: 'https://redux.js.org/',
                use : "State Management"
            },
            {
                name: 'Spring Boot',
                imageUrl: 'https://img.icons8.com/?size=512&id=90519&format=png',
                webUrl: 'https://spring.io/projects/spring-boot',
                use : "Backend"
            },
        ],
        projectType: projectTypes[4],
        category: categories[0]
    },
    {
        slug: 'audirea-music-generator',
        title: 'Audirea - Music generator',
        images:[
            {
                src: assets.projects.audira[1],
                alt: 'Audirea - Music generator',
            }
        ],
        repositoryUrl: "https://github.com/Audirea/music-generator",
        demoUrl: "",
        descriptions:[
            {
                description:"Developed a music-generator, utilizing deep learning techniques with LSTM  in TensorFlow."
            }
        ],
        contributors: [{
            name: 'Ayesh Vininda',
            email: 'ayeshgk@gmail.com'
        }],
        techStacks: [
            {
                name:'Python',
                imageUrl:'https://img.icons8.com/?size=512&id=l75OEUJkPAk4&format=png',
                webUrl:'https://www.python.org/',
                use: "Programming Language"
            },
            {
                name: 'Tensorflow',
                imageUrl: 'https://img.icons8.com/?size=512&id=n3QRpDA7KZ7P&format=png',
                webUrl: 'https://www.tensorflow.org/',
                use : "Model Building"
            },
        ],
        projectType: projectTypes[5],
        category: categories[0]
    },
]

// function getProjectBySlug(slug: string) {
//     const foundProject = initialProjects.find((project) => project.slug === slug);
//     return foundProject || null; // Provide a default value when the project is not found
//   }
// fix above with the return type Project
function getProjectBySlug(slug: string): Project | null {
    const foundProject = initialProjects.find((project) => project.slug === slug);
    return foundProject || null; // Provide a default value when the project is not found
} 

export {initialProjects,getProjectBySlug}