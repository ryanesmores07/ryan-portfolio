import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const ProjectTemplate = ({ pageContext: { title }, data }) => {
  const stacks = data.info.content.stack

  return (
    <Container>
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{data.info.description.description}</p>
        <div className="project-stack">
          {stacks.map(stack => {
            return <span>{stack}</span>
          })}
        </div>
      </main>
    </Container>
  )
}

const Container = styled.article`
  background: var(--clr-grey-10);
  min-height: 85vh;

  .project-stack {
    margin: 1rem;
  }

  span {
    display: inline-block;
    margin: 1rem;
    display: inline-block;
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.2rem;
  }
  .project-template-page {
    padding-top: 12rem;
    text-align: center;
  }
  .project-template-page h2 {
    text-transform: uppercase;
  }
  .project-template-page p {
    max-width: 35em;
    margin: 0 auto;
    margin-top: 2rem;
  }
`

export const query = graphql`
  query getSingleProject($title: String) {
    info: contentfulProject(title: { eq: $title }) {
      description {
        description
      }
      title
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      content {
        stack
      }
    }
  }
`

export default ProjectTemplate
