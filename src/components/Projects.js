import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Title from "./Title"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import Project from "./Project"

const Projects = ({ title, projects }) => {
  return (
    <ProjectsContainer>
      <Title title={title} />
      <div className="section-center">
        {projects.map(project => {
          const { github, id, slug, title, url, description, content, image } =
            project

          return (
            <article key={id} className="project">
              <h4>{title.toUpperCase()}</h4>
              <div className="underline thin"></div>
              <Link to={`/projects/${slug}`}>
                <GatsbyImage
                  image={getImage(image.gatsbyImageData)}
                  className="image-style"
                  alt={title}
                />
              </Link>

              {/* <p className="project-desc">{description.description}</p>
              <div className="project-stack">
                <span key={id}>{content.stack}</span>
              </div> */}
            </article>
          )
        })}
      </div>
    </ProjectsContainer>
  )
}

const ProjectsContainer = styled.section`
  padding-top: 6rem;
  padding-bottom: 8rem;
  background: var(--clr-grey-10);
  width: 100%;
  /* height: 90vh; */

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  .project {
    background: var(--clr-white);
    padding: 3rem 1.5rem;
    padding-bottom: 0;
    margin: 2rem 1rem;
    border-radius: var(--radius);
    text-align: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }

  .thin {
    margin: 1rem auto;
    height: 0.2rem;
    width: 5rem;
  }

  .image-style {
    height: 30rem;
    margin-bottom: 2rem;
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
  }
  .image-style::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
    opacity: 0.85;
    transition: var(--transition);
  }
  .project:hover .image-style::after {
    opacity: 0;
  }

  .project-desc {
    color: var(--clr-grey-3);
  }

  .project-stack span {
    display: inline-block;
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    margin: 0.25rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.5rem;
  }
`

export default Projects
