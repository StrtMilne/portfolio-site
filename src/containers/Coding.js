import React from "react";
import ProjectsList from "../components/ProjectsList";
import SkillsList from "../components/SkillsList";
import "../static/Container.css"

const Coding = function () {

    return(
        <div className="page-container">
            <h1 className="header">Coding</h1>
            <SkillsList className="skills-container" />
            <ProjectsList className="projects-container" />
        </div>
    )
}

export default Coding;