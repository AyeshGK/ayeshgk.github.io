import { timelineEvents } from '@/constant/timeline-data';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

interface TimelineSceneProps {
  animate?: boolean;
}

export default function TimelineScene({ animate = false }: TimelineSceneProps) {
  return (
    <motion.div
      className="w-full px-4 md:px-16 lg:px-24 xl:px-32 bg-[#f9f9f9]"
      initial={{ opacity: 0, y: 50 }}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      role="region"
      aria-label="Professional timeline"
    >
      <VerticalTimeline>
        {timelineEvents.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${event.type || 'work'}`}
            date={event.date}
            iconStyle={{ background: event.color, color: '#fff' }}
            contentStyle={{ background: event.color, color: '#fff' }}
            contentArrowStyle={{ borderRight: `7px solid ${event.color}` }}
            dateClassName="timeline-date-text-color"
            icon={event.icon ? <event.icon /> : undefined}
          >
            {event.title && <h3 className="vertical-timeline-element-title">{event.title}</h3>}
            {event.subtitle && <h4 className="vertical-timeline-element-subtitle">{event.subtitle}</h4>}
            {event.description && <p>{event.description}</p>}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.div>
  );
}
