import React from "react"
import styled from "styled-components"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <Container>
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Ryan</h1>
            <h4>Self-taught Web developer and I love fitness!</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                const { id, icon, url } = link
                return (
                  <a href={url} key={id} className="social-link">
                    {icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </Container>
  )
}

const Container = styled.header`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  background: var(--clr-primary-10);
  position: relative;
  letter-spacing: var(--spacing);

  h1 {
    color: var(--clr-grey-1);
  }

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .hero-center {
    /* background-color: pink; */
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    height: 100vh;
    align-items: center;
  }
  .hero-info {
    grid-column: 1 / span 6;
  }

  .underline {
    width: 8rem;
    height: 0.4rem;
    margin-bottom: 1.25rem;
    background: var(--clr-primary-5);
    margin-left: 0;
    margin-right: auto;
  }
  .hero-img {
    display: block;
    grid-row: 1/1;
    grid-column: 7/-1;
  }
  .btn {
    margin-top: 2rem;
  }

  .social-links {
    margin-top: 2rem;
    width: 24rem;
    display: flex;
    justify-content: space-between;
  }
  .social-link {
    font-size: 3rem;
    color: var(--clr-grey-1);
    transition: var(--transition);
  }
  .social-link:hover {
    color: var(--clr-primary-5);
  }
`

export default Hero
