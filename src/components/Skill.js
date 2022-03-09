import React from "react";
import "../static/Container.css"

const Skill = function ({key, skill}) {

    return (
        <>
            <li className="list-item">
                {skill}
            </li>
        </>
    )
}

export default Skill;