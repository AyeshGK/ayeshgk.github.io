"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const initialPublications = [
    {
        title: 'FusionRepair: Iterative Multi-Line APR via Fusion',
        link: 'https://ieeexplore.ieee.org/document/11029657', // replace with actual DOI or URL if available
        publisher: 'IEEE',
        summary:
            `𝐂𝐨𝐧𝐟𝐞𝐫𝐞𝐧𝐜𝐞 2025 𝘐𝘌𝘌𝘌/𝘈𝘊𝘔 𝘐𝘯𝘵𝘦𝘳𝘯𝘢𝘵𝘪𝘰𝘯𝘢𝘭 𝘞𝘰𝘳𝘬𝘴𝘩𝘰𝘱 𝘰𝘯 𝘈𝘶𝘵𝘰𝘮𝘢𝘵𝘦𝘥 𝘗𝘳𝘰𝘨𝘳𝘢𝘮 𝘙𝘦𝘱𝘢𝘪𝘳 (𝘈𝘗𝘙), 𝘖𝘵𝘵𝘢𝘸𝘢, 𝘊𝘢𝘯𝘢𝘥𝘢 
            𝐀𝐛𝐬𝐭𝐫𝐚𝐜𝐭 Learning-based APR techniques continue to face challenges in generating multi-line patches. We identified two fundamental limitations in existing learning-based APR tools. First, the length of the input sequence in existing APR tools is limited, restricting them from gathering information from compacted code contexts. Second, they fail to capture semantic dependencies among generated patches. We introduce Fusion-repair,a transformer-based approach designed to capture additional context information from broader contexts and fix bugs by knowledge transfer-based patch generation. For this purpose, we have adapted the Fusion-in-Decoder(FiD) architecture to provide an expanded context. We utilize an iterative program repair paradigm to generate patches based on the knowledge of previously generated patches. Our experiment with Defects4J v2.0, shows Fusionrepair can produce 55 single-line fixes and 28 multi-line fixes, identical to the developer patch. Comparison with state-of-the-art tools such as ITER and DEAR shows 35% and 18% improvements respectively. Our results show that Fusionrepair has signifi-cantly outperformed current state-of-the-art tools in addressing bugs that require multi-line patches.`,
        year: '2025',
        location: 'IEEE/ACM International Workshop on Automated Program Repair (APR), Ottawa, Canada',
        keywords: ['Automated Program Repair', 'Transformer', 'Multi-Line Patch', 'Fusion-in-Decoder', 'Defects4J'],
    },
];



export default function Publications() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section ref={ref} className="safe-x-padding mt-[38px] overflow-y-hidden">
            <div className="text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.2 }}
                    className="mb-6 text-5xl font-extrabold lg:text-6xl font-montserrat gradient-text"
                >
                    Academic Publications
                </motion.h2>
            </div>

            <div className="my-[50px]">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4 }}
                    className="grid grid-flow-row grid-cols-4 gap-6 md:grid-cols-8 xl:grid-cols-12"
                >
                    {initialPublications.map((pub, index) => (
                        <div
                            key={index}
                            className="col-span-4 shadow-md hover:shadow-2xl hover:scale-[1.01] rounded-2xl transition-all duration-500 ease-in-out"
                        >
                            <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-full bg-white block p-6 rounded-2xl"
                            >
                                <h5 className="mb-2 text-base font-bold text-primary">
                                    {pub.title}
                                </h5>
                                <p className="text-sm text-gray-600 mb-2">
                                    {pub.summary}
                                </p>
                                <div className="text-xs font-medium text-gray-500">
                                    {pub.publisher} • {pub.year}
                                </div>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {pub.keywords.map((kw, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 bg-gray-100 border border-gray-300 rounded-full text-xs text-gray-800"
                                        >
                                            {kw}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
