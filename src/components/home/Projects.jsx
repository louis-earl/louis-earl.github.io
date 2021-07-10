import React from 'react'
import ProjectsGridInterest from './ProjectsGridInterest'
import ProjectsGridMajor from './ProjectsGridMajor'

function Projects() {
  return (
    <div className="section">
      <div className="projects">
        <h3>Major Projects</h3>
        <ProjectsGridMajor cardType="major"/>
      </div>

      <div className="projects">
        <h3>Interest Projects</h3>
        <ProjectsGridInterest cardType="interest"/>
      </div>
    </div>
  )
}

export default Projects
