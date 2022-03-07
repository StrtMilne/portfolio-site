import React from "react";
import Skill from "./Skill";
import "../static/Container.css"

const SkillsList = function () {

    const skills = ["Java", "JavaScript", "Python", "HTML", "CSS", "React", "Spring", "Flask", "Jinja", "PostgreSQL", "MongoDB", "Node", "Express", "TDD & BDD", "Mocha", "Cypress", "Git & GitHub", "OOP", "SOLID principles", "RESTful APIs", "Agile methodology"];

    const skillItems = skills.map((skill, index) => {
        return <Skill key={index} skill={skill} />
    });

    return(

        <ul className="list">
            {skillItems}      
        </ul>

    )
}

export default SkillsList;