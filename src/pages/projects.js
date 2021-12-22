import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Title from "../components/Title"

const Projects = ({
  data: {
    info: { nodes: datas },
  },
}) => {
  return (
    <Container>
      <Title title="My Projects" />
      {datas.map((data, index) => {
        return (
          <article key={index} className="project">
            <GatsbyImage
              image={getImage(data.image)}
              className="project-img"
              alt={data.title}
            />
            <div className="project-info">
              <span className="project-number">0{index + 1}.</span>
              <Link to={`/projects/${data.slug}`} className="project-slug">
                <h3>{data.title}</h3>
              </Link>
              <p className="project-desc">{data.description.description}</p>
              <div className="project-stack">
                {data.content.stack.map(yawa => {
                  return <span>{yawa}</span>
                })}
              </div>
              <div className="project-links">
                <a href={data.github}>
                  <FaGithubSquare className="project-icon"></FaGithubSquare>
                </a>
                <a href={data.url}>
                  <FaShareSquare className="project-icon"></FaShareSquare>
                </a>
              </div>
            </div>
          </article>
        )
      })}
    </Container>
  )
}

const Container = styled.main`
  background: var(--clr-grey-10);
  min-height: calc(100vh - 5rem - 9rem);
  padding: 10rem;

  .project {
    display: grid;
    margin-bottom: 4rem;
  }
  .project-img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 19rem;
    z-index: 1;
  }
  .project-img::after {
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
  .project:hover .project-img::after {
    opacity: 0;
  }
  .project-info {
    background: var(--clr-white);
    padding: 1rem 2rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .project-number {
    display: inline-block;
    font-size: 2rem;
    color: var(--clr-primary-5);
    margin-bottom: 0.75rem;
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
    word-spacing: 15px;
    color: var(--clr-grey-3);
  }
  .project-stack {
    margin-bottom: 1rem;
  }

  .project-stack span {
    display: inline-block;
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    margin: 0.25rem;
    margin-right: 1rem;
    padding: 0.25rem 0.5rem;
    font-weight: 400;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.25rem;
  }

  .project-icon {
    color: var(--clr-primary-5);
    font-size: 2rem;
    margin-right: 1rem;
    transition: var(--transition);
  }
  .project-icon:hover {
    color: var(--clr-primary-1);
  }
  @media screen and (min-width: 576px) {
    .project-img {
      height: 19rem;
    }
  }
  @media screen and (min-width: 768px) {
    .project-img {
      height: 22rem;
    }
  }
  @media screen and (min-width: 992px) {
    .project {
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
    }
    .project-img {
      grid-column: 1 / span 8;
      /* grid-column-end: 8; */
      grid-row: 1 / 1;
      height: 50rem;
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);
    }
    .project-info {
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);

      z-index: 1;
      grid-column: 5 /12;
      grid-row: 1 / 1;
    }
    .project:nth-of-type(even) .project-img {
      grid-column: 5 / -1;
      grid-row: 1 / 1;
    }
    .project:nth-of-type(even) .project-info {
      grid-column: 2 / span 7;
      grid-row: 1 / 1;
      text-align: left;
    }
  }

  /* background: var(--clr-grey-10);
  min-height: calc(100vh - 5rem - 9rem);
  

  .project {
    grid-template-columns: repeat(12, 1fr);
    display: grid;
    align-items: center;
   

    padding-top: 10rem;
  }

  .project-img {
    grid-column: 3 / 8;

    
    height: 30rem;
    margin-bottom: 3rem;
  }

  .project-info {
    background: var(--clr-white);
    grid-column: 5 / 11;
    height: 30rem;
    
    z-index: 1;
    padding: 1rem 2rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }

  .project-img,
  .project-info {
    grid-row: 1 / 2;
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
    font-size: 1.5rem;
    margin-bottom: 2rem;
  } */
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

{
  /* <ProjectContainer>
      <article className="project">
        {datas.map((data, index) => {
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
    </ProjectContainer> */
}
