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
          console.log(data.description)
          return (
            <>
              <GatsbyImage
                image={getImage(data.image.gatsbyImageData)}
                className="project-img"
                alt={data.title}
              />
              <div className="project-info">
                <Link to={`/projects/${data.slug}`} className="project-slug">
                  <h3>{data.title}</h3>
                </Link>
                <p className="project-desc">{data.description.description}</p>
              </div>
            </>
          )
        })}
      </article>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.main`
  background: var(--clr-grey-10);
  min-height: calc(100vh - 5rem - 9rem);
  /* display: grid; */
  /* grid-template-columns: repeat(8, 1fr); */

  .project {
    grid-template-columns: repeat(12, 1fr);
    display: grid;
    align-items: center;
    /* grid-column: 2 / 6; */
    padding-top: 10rem;
  }

  .project-img {
    grid-column: 3 / 8;
    /* grid-row: 1 / 1; */
    height: 30rem;
    margin-bottom: 3rem;
  }

  .project-info {
    background: var(--clr-white);
    padding: 1rem 2rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }

  .project-slug h3 {
    font-weight: 500;
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    color: var(--clr-grey-1);
    transition: var(--transition);
  }
  .project-slug h3:hover {
    color: var(--clr-primary-5);
  }

  .project-desc {
    font-size: 1rem;
    margin-bottom: 2rem;
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
        description {
          description
        }
      }
    }
  }
`

export default Projects
