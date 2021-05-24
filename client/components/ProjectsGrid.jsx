import React from 'react'

function ProjectsGrid({ cardType }) {
  return (
    <div className="projects__grid">
      <div className={"project__card project__card--" + cardType}>
        <h4>Project Name</h4>
      </div>
      <div className={"project__card project__card--" + cardType}>
        <h4>Project Name</h4>
      </div>
      <div className={"project__card project__card--" + cardType}>
        <h4>Project Name</h4>
      </div>
    </div>
  )
}

export default ProjectsGrid
