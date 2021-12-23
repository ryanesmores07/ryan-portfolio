import React from "react"
import styled from "styled-components"
import Title from "../components/Title"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"

const About = ({ data }) => {
  const images = data.allFile.nodes

  return (
    <AboutContainer>
      <Title title={"About me"} />
      <section className="section-center">
        <div className="about-info">
          Hi, my name is Ryan Esmores, I am 29 years old born in the
          Philippines. I like to lift heavy things up and put them back down.{" "}
          <span>
            It was year 2020, the year COVID hit the world, when I decided to
            change my life and start learning web development.
          </span>
        </div>
        <div className="about-img">
          {images.map((image, index) => {
            const img = image.childrenImageSharp[0].gatsbyImageData
            return (
              <GatsbyImage
                key={index}
                image={getImage(img)}
                alt="ryan"
                className="img"
              />
            )
          })}
        </div>
      </section>
    </AboutContainer>
  )
}

const AboutContainer = styled.main`
  background: var(--clr-grey-10);
  min-height: calc(100vh - 5rem - 9rem);
  padding: 10rem 0 10rem;
  /* display: grid; */

  .section-center {
    /* background-color: pink; */
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
  }

  .about-info {
    background-color: transparent;
    grid-column: 1 / span 8;
    align-self: center;
    z-index: 1;
    margin-left: 1rem;
    padding: 1rem 2rem;
    background: var(--clr-white);
  }

  .about-info span {
    color: var(--clr-primary-4);
  }

  .about-img {
    grid-column: 7 / -1;
  }

  .about-info,
  .about-img {
    grid-row: 1/1;
  }

  .img {
    max-width: 50rem;
  }
`

export const query = graphql`
  {
    allFile(filter: { name: { eq: "photo" } }) {
      nodes {
        childrenImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default About
