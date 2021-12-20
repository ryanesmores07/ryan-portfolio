import React from "react"
import styled from "styled-components"
import pageLinks from "../constants/links"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-links">
          {pageLinks.map(link => {
            const { text, url, id } = link
            return (
              <Link key={id} to={url}>
                {text}
              </Link>
            )
          })}
        </div>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-white);
  /* background: transparent; */
  .nav-center {
    /* background-color: pink; */
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-links {
    /* background-color: yellow; */
    width: 50vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .nav-links a {
    margin-right: 2rem;
    font-size: 1.8rem;
    text-transform: capitalize;
    color: var(--clr-grey-1);
    font-weight: 400;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    padding: 0.5rem 0;
  }
  .nav-links a:hover {
    color: var(--clr-primary-5);
    box-shadow: 0px 2px var(--clr-primary-5);
  }
`

export default Navbar
