import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Experience = () => {
  return (
    <div className="section" id="experience">
      <div className="container">
        <div className="experience-wrapper">
          <Fade bottom>
            <h1>Experience</h1>
          </Fade>
          {data.experiences.map((experience, index) => (
            <div key={index} className="flex-container">
              <div className="item left">
                <h2>{experience.company}</h2>
                <div className="location">📍 St.Louis, MO</div>
                <img className="image" src={experience.logo}></img>
              </div>
              <div className="item right">
                <h2>{experience.title}</h2>
                <span>🗓 May 2021 - Aug 2021</span>
                <ul className="job-description">
                  {experience.responsibilities.map((line, idx) => {
                    return <li>{line}</li>
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
