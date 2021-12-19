import React from "react"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Footer from "../components/Footer"
import { graphql } from "gatsby"

const IndexPage = ({
  data: {
    info: { nodes: projects },
  },
}) => {
  return (
    <div>
      <Hero />
      <Projects title="My Projects" projects={projects} />
    </div>
  )
}

export const query = graphql`
  {
    info: allContentfulProject {
      nodes {
        github
        id
        slug
        title
        url
        description {
          description
        }
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

export default IndexPage
