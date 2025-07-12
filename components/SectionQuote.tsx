"use client";

import React from 'react'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { suarte } from '@/constant/font';
import styles from "@/assets/css/home.module.css";

export default function SectionQuote() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section ref={ref} className={`safe-x-padding mb-[50px]`} aria-label="Quote Section">
            <div className="relative my-12 px-4 md:px-16 lg:px-24">
                <motion.blockquote
                    role="blockquote"
                    aria-label="Inspirational quote"
                    initial={{ y: 100, opacity: 0, scale: 0.95, letterSpacing: '0.05em' }}
                    animate={inView ? { y: 0, opacity: 1, scale: 1, letterSpacing: 'normal' } : {}}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="relative text-center text-lg md:text-xl lg:text-2xl font-medium italic text-[#222] max-w-4xl mx-auto"
                >
                    <span className="text-5xl align-top mr-2 text-gray-400">“</span>
                    The only way to discover the limits of the possible is to go beyond them into the impossible.
                    <span className="text-5xl align-bottom ml-2 text-gray-400">”</span>
                </motion.blockquote>
            </div>
            <motion.cite
                className={`${styles.creatorQuotesName} mt-4 block italic text-gray-600`}
                style={suarte.style}
                aria-label="Quote author"
                initial={{ y: 100, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                - Arthur C. Clarke
            </motion.cite>
        </section>

    )
}
