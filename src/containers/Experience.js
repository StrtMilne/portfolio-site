import React from "react";
import "../static/Experience.css"

const Experience = function () {

    return(
        <div class="card-container">
        <h1 className="header-exp">Experience</h1>
        <div class="card">
          <div class="card-text">
            <h3 class="head">
                Academics - Glasgow and Edinburgh
            </h3>
            <div className="divider" />
            <ul class="main-text">
                <li>5 years studying analytic philosophy</li>
                <li>University of Glasgow - MA(hons) 2:1</li>
                <li>Univeristy of Edinburgh - MSc(research) merit</li>
                <li>Extensive formal logic</li>
                <li>Developed problem solving skills</li>
                <li>Managed time efficiently to produce work</li>
            </ul>
          </div>
            <div class="line-container">
                <div class="dot top"></div>
                <div class="top-line"></div>
                <div class="bottom-line"></div>
                <div class="bottom"></div>
            </div>
        </div>
        <div class="card">
          <div class="card-text">
            <h3 class="head non-initial">
                PR - agency work
            </h3>
            <div className="divider" />
            <ul class="main-text">
                <li>Nominated for Chartered Institute of Public Relations 'Outstanding Young Communicator' award</li>
                <li>Account management of sports, consumer and care clients</li>
                <li>Reporting on identified outcomes and measurements to clients on a regular basis</li>
                <li>Integrated quickly into Scottish Water Press Office environment for cover, two or more days a week</li>
            </ul>
          </div>
          <div class="line-container">
                <div class="dot top"></div>
                <div class="top-line"></div>
                <div class="bottom-line"></div>
                <div class="bottom"></div>
            </div>
        </div>
        <div class="card">
          <div class="card-text">
            <h3 class="head non-initial">
                Media management - Scottish Rugby
            </h3>
            <div className="divider" />
            <ul class="main-text">
                <li>Responsibility for the media profile and access of the Scotland Women team during the Six Nations</li>
                <li>Working to SMART criteria with the commercial team to meet sponsor and stakeholder commitments</li>
                <li>Collaborative working with department heads to communicate effectively across media channels</li>
                <li>Briefing and communicating ideas for the production of graphics, props and broadcast content</li>
                <li>Organisation, planning and management of media for for high-profile match days and project launches</li>
                <li>Travel within Scotland on a weekly basis and in Europe with Men and Women’s national teams</li>
            </ul>
          </div>
          <div class="line-container">
                <div class="dot top"></div>
                <div class="top-line"></div>
                <div class="bottom-line"></div>
                <div class="bottom"></div>
            </div>
        </div>
        <div class="card">
          <div class="card-text">
            <h3 class="head non-initial">
                Coding - CodeClan
            </h3>
            <div className="divider" />
            <ul class="main-text">
                <li>800 hours of coding in 16 weeks across numerous languages and frameworks</li>
                <li>3 projects in Java, JavaScript and Python</li>
                <li>Paired and mob programming through team projects and labs</li>
                <li>Creating and utilising RESTful APIs, applying SOLID principles to Object Oriented Programming in planning and devlopment</li>
                <li>USing Spring, React and Flask frameworks</li>
                <li>Test and behaviour driven development</li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Experience;