"use client";

import { assets } from '@/constant/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import styles from "@/assets/css/home.module.css";

const interestSet = [
    {
        name: 'Machine Learning',
        image: assets.home.interests.ml,
        officialSite: 'https://nextjs.org/',
    },
    {
        name: 'Natural Language Processing',
        image: assets.home.interests.nlp,
        officialSite: 'https://laravel.com/',
    },
    {
        name: 'Big Data & Cloud Computing',
        image: assets.home.interests.bigdata,
        officialSite: 'https://expo.dev/',
    },
    {
        name: 'System Design',
        image: assets.home.interests.sd,
        officialSite: 'https://www.prisma.io/',
    },
    {
        name: "Web Development",
        image: assets.home.interests.wd,
        officialSite: 'https://expressjs.com/',
    },
    {
        name: "Data Science",
        image: assets.home.interests.ds,
        officialSite: 'https://planetscale.com/',
    },
]

export default function InterestedOn() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section ref={ref} className={`safe-x-padding mb-[50px]`}>
            <div className='text-center'>
                <motion.h2 initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }} className={styles.sectionTitle}>
                    Areas of Expertise
                </motion.h2>
            </div>
            <div className='flex items-center justify-center mt-12'>
                <div className='flex flex-row gap-[50px] max-w-[864px] flex-wrap justify-center items-center'>
                    {interestSet.map((item, index) => (
                        <div key={index.toString()} className='relative h-full'>
                            <motion.div
                                className="flex justify-center items-center w-[100px] h-[100px] transition-all duration-150 ease-in-out"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image
                                    className='w-auto h-[100px]'
                                    src={item.image}
                                    width={0}
                                    height={100}
                                    alt={item.name}
                                />
                                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full p-1 text-white transition-all duration-300 bg-opacity-50 opacity-0 gradient-bg hover:opacity-100 rounded-xl">
                                    <p className='font-semibold text-center line-clamp-3'>
                                        {item.name}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    )
}
