import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({ project, key, index }) => {
  const { github, id, slug, title, url, description, content, image } = project
  console.log(project)

  return (
    <ProjectContainer>
      <article className="project">
        <GatsbyImage
          image={getImage(image.gatsbyImageData)}
          alt={title}
          className="project-img"
        />
      </article>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.section`
  background-color: pink;
  display: flex;
  padding: 3rem 0;

  .project {
    /* margin: 0 auto; */
    align-items: center;
  }

  .project-img {
    height: 30rem;
    width: 50rem;

    z-index: 10;
  }
`

export default Project
