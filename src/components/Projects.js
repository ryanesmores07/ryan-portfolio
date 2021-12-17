import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Title from "./Title"

const Projects = ({ title }) => {
  return (
    <ProjectsContainer>
      <Title title={title} />
      <div className="section-center">
        <h4>Projects</h4>
      </div>
    </ProjectsContainer>
  )
}

const ProjectsContainer = styled.section`
  padding-top: 6rem;
  background: var(--clr-grey-10);
  width: 100%;
  height: 90vh;

  .section-center {
    background-color: pink;
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
`

export default Projects
