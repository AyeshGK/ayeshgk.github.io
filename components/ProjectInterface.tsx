export interface Project {
    slug: string;
    title: string;
    images: { src: any; alt: string }[]; 
    repositoryUrl: string;
    demoUrl: string;
    descriptions: ({ description: string; topic?: undefined } | { topic: string; description: string })[];
    contributors: { name: string; email: string }[];
    projectType: { slug: string; name: string };
    category: { slug: string; name: string }; // Update the type of category
    techStacks: { imageUrl: string; name: string ;use:string ;webUrl:string}[];
}
