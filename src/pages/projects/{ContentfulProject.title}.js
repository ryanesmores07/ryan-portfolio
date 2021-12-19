import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const ProjectTemplate = ({ pageContext: { title }, data }) => {
  const yawa = data.info.content.stack
  console.log(yawa.slice(", "))
  return (
    <Container>
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{data.info.description.description}</p>
        <div className="inline">
          {yawa.map(yaws => {
            return <span>{yaws}</span>
          })}
        </div>
      </main>
    </Container>
  )
}

const Container = styled.article`
  background: var(--clr-grey-10);
  min-height: 85vh;

  .inline {
    color: blue;
  }
  span {
    display: inline-block;
    margin-right: 5rem;
    background-color: pink;
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
