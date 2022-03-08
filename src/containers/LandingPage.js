import React from "react";
import "../static/LandingPage.css"

const LandingPage = function () {

    return(

        <div className="landing-container">
            <h1 className="landing-name">Stuart Milne</h1>
            <div className="cursor"></div>
            <h2 className="landing-title">Full Stack Developer &#123;</h2>
            <div className="icons">
                <div className="icon">
                    <img src="https://img.icons8.com/ios/50/ffffff/java-coffee-cup-logo--v1.png"/>
                    <p>Java</p>
                </div>
                <div className="icon">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/javascript.png"/>
                    <p>JavaScript</p>
                </div>
                <div className="icon">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/python.png"/>
                    <p>Python</p>
                </div>
                <div className="icon">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/react-native.png"/>
                    <p>React</p>
                </div>
                <div className="icon">
                    <img src="https://img.icons8.com/metro/52/ffffff/leaf.png"/>
                    <p>Spring</p>
                </div>
                <div className="icon">
                    <img src="https://img.icons8.com/external-global-made-by-made/50/ffffff/external-chillie-mexican-global-made-by-made.png"/>
                    <p>Flask</p>
                </div>
                <div className="icon">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/torii.png"/>
                    <p>Jinja</p>
                </div>
                <div className="icon">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/html-5--v2.png"/>
                    <p>HTML</p>
                </div>
                <div className="icon">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/css3.png"/>
                    <p>CSS</p>
                </div>
                <div className="icon">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/git.png"/>
                    <p>Git</p>
                </div>
                <div className="icon">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/postgreesql.png"/>
                    <p>PostgreSQL</p>
                </div>
                <div className="icon">
                    <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/ffffff/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png"/>
                    <p>MongoDB</p>
                </div>
            </div>
            <h2 className="landing-title">&#125;;</h2>
            <h3 classname="landing-experience">/* 5+ years experience in press and PR with public, private and third sector organisations */</h3>
        </div>
    )

}

export default LandingPage;