"use client";

import { use, useState ,useEffect} from "react";

import { getProjectBySlug } from "@/constant/projects";
import ProjectInfo from "@/components/ProjectInfo";
import { Project } from "@/components/ProjectInterface";

const projectSlug = 'world-happiness-report';

export default function Project() {
    // const [project, setProject] = useState({});
    const [project, setProject] = useState<Project | undefined>(undefined);



    useEffect(() => {
        const getProjectData = getProjectBySlug(projectSlug);

        // Check if getProjectData is not null before setting the state
        if (getProjectData !== null) {
            setProject(getProjectData);
        }
    }, []);

    return (
        <>
            {project && <ProjectInfo project={project} />}
        </>
    )
}
