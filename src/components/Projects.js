import React, { useState } from 'react'
import { useSelectedProjectValue, useProjectsValue } from '../context'

import { IndividualProject } from './IndividualProject'

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue)
  const { setSelectedProject } = useSelectedProjectValue()
  const { projects } = useProjectsValue()

  return (
    projects && projects.map(project => (
      <li
        key={project.projectId}
        data-testid="project-action-parent"
        data-doc-id={project.docId}
        className={
          active === project.projectId
          ? "active sidebar__project"
          : "sidebar__project"
        }
      > 
        <div
          data-testid="project-action"
          role="button"
          tabIndex={0}
          aria-label={`Select ${project.name} as the task project`}
          onKeyDown={() => {
            setActive(project.projectId)
            setSelectedProject(project.projectId)
          }}
          onClick={() => {
            setActive(project.projectId)
            setSelectedProject(project.projectId)
          }}
        >
          <IndividualProject project={project}/>
        </div>  
      </li>
    ))
  )
}