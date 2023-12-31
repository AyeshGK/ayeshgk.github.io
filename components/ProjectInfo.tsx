"use client";


import { motion } from "framer-motion";
import Image from "next/image";
import { BsDribbble, BsGithub ,BsGear,BsPerson} from "react-icons/bs";
import { IoMdOpen } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { Project } from "./ProjectInterface";

export default function ProjectInfo ({project}:{project:Project}) {
   const { title, images, repositoryUrl, demoUrl, descriptions, contributors, techStacks } = project;

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section ref={ref} className='safe-x-padding mt-[38px] overflow-y-hidden lg:min-h-[1000px]'>
            <div className='text-center'>
                <motion.h2
                    initial={{ opacity: 0 }} 
                    animate={inView ? { opacity: 1 } : {}} 
                    transition={{ duration: 0.2 }} 
                    className='mb-6 text-3xl font-extrabold lg:text-3xl font-montserrat gradient-text'>
                    {title}
                </motion.h2>
            </div>


            {images?.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4 }}
                    className='mt-[50px]'
                >
                    <h3 className='mb-4 text-2xl font-bold font-montserrat'>Project Images</h3>
                    <div className='grid grid-flow-row grid-cols-1 gap-6'>
                    {images?.map((image, index) => (
                        <div key={index} className='relative overflow-hidden rounded-2xl'>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            layout='responsive'
                            width={600} // Set your desired width
                            height={400} // Set your desired height
                            unoptimized
                        />
                        </div>
                    ))}
                    </div>
                </motion.div>
            )}

            <div>
                {descriptions?.length >0 &&
                    <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }} className='mt-[50px]'>
                        <h3 className='mb-4 text-2xl font-bold font-montserrat'>Project Description</h3>
                        { descriptions.map(({topic , description},index) => (<>
                            {topic && <h4 className='mb-4 text-xl font-bold font-montserrat'>{topic}</h4>}
                            <p className='text-base font-medium text-black/70'>
                                {description}
                            </p>
                        </>))}
                    </motion.div>
                }

                <div className='flex flex-wrap gap-6'>
                    {contributors?.length > 0 && (
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.4 }}
                        className='mt-[50px] flex-1'
                        >
                        <h3 className='mb-4 text-2xl font-bold font-montserrat'>
                            Project Contributors
                        </h3>
                        <ul className='list-disc pl-6'>
                            {contributors.map((contributor, index) => (
                            <li key={index} className='flex items-center gap-2'>
                                <BsPerson className='text-xl' />
                                <span className='text-sm font-bold font-montserrat'>{contributor.name}</span>
                                {contributor.email && (
                                <span className='text-xs font-medium text-black/70'>{contributor.email}</span>
                                )}
                            </li>
                            ))}
                        </ul>
                        </motion.div>
                    )}

                    {techStacks?.length > 0 && (
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.4 }}
                        className='mt-[50px] flex-1'
                        >
                        <h3 className='mb-4 text-2xl font-bold font-montserrat'>
                            Tech Stack
                        </h3>
                        <div className='grid grid-flow-row grid-cols-1 gap-6'>
                            {techStacks.map((techStack, index) => (
                            <div key={index} className='flex items-center gap-2'>
                                <BsGear className='text-xl' />
                                <span className='text-sm font-bold font-montserrat'>{techStack.name}</span>
                                {techStack.use && (
                                <span className='text-xs font-medium text-black/70'>{techStack.use}</span>
                                )}
                            </div>
                            ))}
                        </div>
                        </motion.div>
                    )}
                </div>          
            </div>

            <div className='flex items-center justify-center mt-[50px]'>
                {repositoryUrl && (
                    <div
                    onClick={() => window.open(repositoryUrl, '_blank')}
                    className='flex items-center gap-2 px-4 py-2 text-sm font-bold text-white rounded-md gradient-bg cursor-pointer mr-4'
                    >
                    <BsGithub className='text-xl' />
                    <span>View Source Code</span>
                    </div>
                )}
                {demoUrl && (
                    <div
                    onClick={() => window.open(demoUrl, '_blank')}
                    className='flex items-center gap-2 px-4 py-2 text-sm font-bold text-white rounded-md gradient-bg cursor-pointer'
                    >
                    <IoMdOpen className='text-xl' />
                    <span>View Demo</span>
                    </div>
                )}
            </div>
        </section>

    )
}
