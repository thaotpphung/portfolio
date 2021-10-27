import React from "react"

import PlayIconSvg from '../../images/play-circle.svg'
import CodeIconSvg from '../../images/code.svg'

const Card = ({ heading, paragraph, imgUrl, codeLink, demoLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <div className="actions">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Demo <img src={PlayIconSvg} style={{ width: 20, marginBottom: '-5px' }} alt="icons"></img>
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Code  <img src={CodeIconSvg} style={{ width: 20, marginBottom: '-5px' }} alt="css"></img>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
