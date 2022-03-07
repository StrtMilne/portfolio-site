import React from "react";
import Project from "./Project"
import "../static/Container.css"

const ProjectsList = function () {

    const projects = [
        {
            name: "Monacode | 9 days | Java, JavaScript",
            link: "https://github.com/StrtMilne/poker-development",
            blurb: "Mobile game designed so players on different devices can create or join a poker table and play Texas Hold'em. The project entailed learning the use of WebSockets and the React Native library for mobile development. Utilising Java, Spring and H2 back-end with a JavaScript and React Native front-end. Extensive logic produced for game mechanism with calculator coded for passing in lists of card objects and returning a winning hand. Players are able to log in, create tables or join tables already created."
        
        },
        {
            name: "Mine Your Business | 7 days | JavaScript",
            link: "https://github.com/StrtMilne/E53-Mine-Your-Business",
            blurb: "Browser game where players accumulate points by finding gems on a grid. Players have three ‘lives’ and update a running score which is reset to zero if a mine is hit. Users can view a list of high scores and data visualisations on a separate page. Utilising JavaScript, React, CSS, HTML and PostgreSQL. The team extensively used Git and GitHub to coordinate branching, merging and resolving conflicts in work. React Router was used to display multiple responsive pages while selectable themes with integrated audio and animated visuals were implemented in JS. React Charts used to display persistent high score data"
        },
        {
            name: "Gymini | 7 days | Python",
            link: "https://github.com/StrtMilne/e53-python-project-gym",
            blurb: "Web application that enables gym admins to view and add members and classes in a booking system. Utilising Python, Flask, Jinja, CSS, HTML and PostgreSQL, implementing RESTful routes to create, retrieve, update and delete data in a relational database. Users can add and remove single or multiple members to classes and vice versa. Search classes and members or set member status to inactive and block ability to book onto classes. Users can also set member status to premium to enable booking onto peak time classes."
        }
    ];

    const ProjectItems = projects.map((project, index) => {
        return <Project key={index} project={project} />
    });

    return(

        <ul className="list projects">
            {ProjectItems}      
        </ul>

    )
}

export default ProjectsList;