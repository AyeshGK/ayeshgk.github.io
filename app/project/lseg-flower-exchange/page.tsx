"use client";

import { use, useState ,useEffect} from "react";

import { getProjectBySlug } from "@/constant/projects";
import ProjectInfo from "@/components/ProjectInfo";

const projectSlug = 'lseg-flower-exchange';

export default function Project() {
    const [project, setProject] = useState({});


    useEffect(() => {
        const getProject = getProjectBySlug(projectSlug);
        setProject(getProject);
    }, []);

    return (
        <>
            {project && <ProjectInfo project={project} />}
        </>
    )
}
