import React from "react";
import "../static/Container.css"

const Skill = function ({key, skill}) {

    return (
        <>
            <li className="list-item">
                {skill}
            </li>
            <div className="skill-line" />
        </>
    )
}

export default Skill;