import React from "react";
import "../static/Experience.css"

const Experience = function () {

    return(
        <div class="card-container">
        <h1 className="header-exp">Experience</h1>
        <div class="card">
          <div class="card-text">
            <h3 class="head">
                Software Development - CodeClan
            </h3>
            <div className="divider" />
            <ul class="main-text">
                <li>800 hours of coding in 16 weeks across numerous languages and frameworks</li>
                <li>3 projects in Java, JavaScript and Python</li>
                <li>Paired and mob programming through team projects and labs</li>
                <li>Creating and utilising RESTful APIs, applying SOLID principles to Object Oriented Programming in planning and implementation</li>
                <li>USing Spring, React and Flask frameworks</li>
                <li>Test and behaviour driven development</li>
            </ul>
          </div>
        </div>
        <div class="card">
            <div class="line-container">
                    <div class="dot top"></div>
                    <div class="top-line"></div>
                    <div class="bottom-line"></div>
                    <div class="bottom"></div>
                </div>
            <div class="card-text">
                <h3 class="head non-initial">
                    Press Officer - MS Society Scotland
                </h3>
                <div className="divider" />
                <ul class="main-text">
                    <li>Management of MS Society Scotland’s media profile and image in print, online and broadcast</li>
                    <li>Communication and team-working skills developed liaising with colleagues and directors to agree output of the press department</li>
                    <li>Managing relationships with other organisations to create content and schedule media</li>
                    <li>Organisational abilities developed through media events, photoshoots and spokesperson interviews</li>
                    <li>Interpersonal skills employed and developed speaking to ambassadors living with the condition</li>
                </ul>
            </div>
        </div>
        <div class="card">
        <div class="line-container">
                <div class="dot top"></div>
                <div class="top-line"></div>
                <div class="bottom-line"></div>
                <div class="bottom"></div>
            </div>
          <div class="card-text">
            <h3 class="head non-initial">
                Media manager - Scottish Rugby
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
        </div>
        <div class="card">
            <div class="line-container">
                <div class="dot top"></div>
                <div class="top-line"></div>
                <div class="bottom-line"></div>
                <div class="bottom"></div>
            </div>
          <div class="card-text">
            <h3 class="head non-initial">
                Senior Account Executive - Holyrood PR
            </h3>
            <div className="divider" />
            <ul class="main-text">
                <li>Nominated for Chartered Institute of Public Relations 'Outstanding Young Communicator' award</li>
                <li>Account management of sports, consumer and care clients</li>
                <li>Reporting on identified outcomes and measurements to clients on a regular basis</li>
                <li>Integrated quickly into Scottish Water Press Office environment for cover, two or more days a week</li>
            </ul>
          </div>
        </div>
        <div class="card">
            <div class="line-container">
                <div class="dot top"></div>
                <div class="top-line"></div>
                <div class="bottom-line"></div>
                <div class="bottom"></div>
            </div>
          <div class="card-text">
            <h3 class="head non-initial">
                Academics - Glasgow and Edinburgh
            </h3>
            <div className="divider" />
            <ul class="main-text">
                <li>5 years studying analytic philosophy</li>
                <li>University of Glasgow - MA(hons) 2:1</li>
                <li>University of Edinburgh - MSc(research) merit</li>
                <li>Extensive formal logic</li>
                <li>Developed problem solving skills</li>
                <li>Managed time efficiently to produce work</li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Experience;
