"use client";

import { assets } from "@/constant/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedImage = motion(Image);

export default function SectionHero(): JSX.Element {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="safe-x-padding mt-10 mb-[50px]"
      aria-label="Hero Section"
    >
      <div className="grid grid-flow-row gap-10 xl:grid-cols-2 xl:grid-flow-col xl:gap-0">
        {/* first */}
        <div className="flex flex-col items-center justify-center order-2 xl:items-start xl:order-1">
          <motion.p
            className="font-montserrat font-bold text-2xl md:text-[28px] lg:text-[32px] text-accent mb-3 text-center xl:text-left"
          >
            Hello 👋 I am,
          </motion.p>
          <motion.h2
            className="font-montserrat font-extrabold text-5xl md:text-[64px] md:leading-[56px] lg:text-[66px] lg:leading-[88px] gradient-text mb-6 text-center xl:text-left"
            aria-label="Web Developer | AI Enthusiast"
          >
            Ayesh Vininda
          </motion.h2>
          <motion.p
            className="text-base font-medium text-center md:text-xl lg:text-2xl text-accent xl:text-left"
            aria-label="Software Engineer. Former Software Engineer at MIT ESP. UOM CSE graduate. Passionate about AI/ML, Web Development, Cloud Computing, Blockchain, and Cryptocurrency."
          >
            Software Engineer | ex-SE @ MIT ESP | UOM CSE | AI/ML & Web Dev Enthusiast | Cloud, Blockchain & Crypto Explorer
          </motion.p>
        </div>
        {/* second */}
        <div className="xl:order-2">
          <div className="relative flex items-center justify-center order-1 xl:justify-end">
            <div className="relative">
              <motion.div
                role="img" aria-label="Smiling avatar of Ayesh Vininda"
                className="relative w-[280px] h-[280px] md:w-[330px] md:h-[330px] lg:w-[400px] lg:h-[480px] bg-gray rounded-3xl overflow-clip">
                <AnimatedImage
                  className="w-[280px] h-[280px] md:w-[330px] md:h-[330px] lg:w-[400px] lg:h-[480px] absolute top-0 bottom-0 left-0 right-0"
                  src={assets.home.hero.avatarSmile}
                  width={400}
                  height={480}
                  alt="Ayesh Vininda smiling avatar illustration"
                  priority
                  initial={{ opacity: 0.1, y: 500 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 1 }}
                  aria-label="ayesh's Avatar"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
