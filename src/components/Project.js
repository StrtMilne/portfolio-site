import React from "react";
import "../static/Project.css"

const Skill = function ({key, project}) {

    return (
        <div className="project-container">
            <div className="head-container">
                <form action={project.link} target="_blank" className="project-link">
                    <input type="image" src="https://img.icons8.com/ios-glyphs/60/ffffff/github.png" className="project-link"/>
                </form>
                <h1 className="project-name">{project.name}</h1>
            </div>
            <p className="project-blurb">{project.blurb}</p>
          
        </div>
    )
}

export default Skill;