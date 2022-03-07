import React from "react";

const Skill = function ({key, project}) {

    return (
        <>
            <li>
                <h1>{project.name}</h1>
            </li>
            <li>
                <a href={project.link}>See the project on GitHub</a>
            </li>
            <li>
                <p>{project.blurb}</p>
            </li>
        </>
    )
}

export default Skill;