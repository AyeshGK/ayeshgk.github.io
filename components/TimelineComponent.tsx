"use client";

import React from 'react'
import { useInView } from 'react-intersection-observer';
import TimelineScene from '@/components/TimelineScene';

export default function TimelineComponent() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section
            ref={ref}
            className="safe-x-padding mb-[50px]"
            aria-labelledby="tech-stack-title"
        >
            {/* Visually hidden heading for accessibility */}
            <h2 id="tech-stack-title" className="sr-only">
                Technology Stack Timeline
            </h2>

            <div className="text-center">
                {/* Pass inView prop if TimelineScene supports it */}
                <TimelineScene animate={inView} />
            </div>
        </section>
    )
}
