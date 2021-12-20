import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Projects = ({
  data: {
    info: { nodes: datas },
  },
}) => {
  return (
    <ProjectContainer>
      <article className="project">
        {datas.map((data, index) => {
          return (
            <GatsbyImage
              image={data.image.gatsbyImageData}
              className="project-img"
              alt={data.title}
            />
          )
        })}
      </article>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.main`
  background: var(--clr-grey-10);
  min-height: calc(100vh - 5rem - 9rem);
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  .project {
    grid-column: 2 / 5;
    padding-top: 10rem;
  }

  .project-img {
    height: 50rem;
    margin-bottom: 3rem;
  }
`

export const query = graphql`
  {
    info: allContentfulProject {
      nodes {
        title
        slug
        url
        github
        content {
          stack
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default Projects
