import React from "react"
import styled from "styled-components"
import socialLinks from "../constants/social_links"

const Footer = () => {
  return (
    <FooterContainer>
      <div className="section-center">
        {socialLinks.map(link => {
          const { id, icon, url } = link
          return (
            <a href={url} key={id} className="social-link">
              {icon}
            </a>
          )
        })}
        <h5>Made with Gatsby ❤️</h5>
      </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.section`
  background-color: var(--clr-grey-1);
  padding-bottom: 3rem;
  /* height: 10rem; */
  display: grid;
  text-align: center;
  color: var(--clr-white);

  h5 {
    font-weight: 300;
  }

  .section-center {
    padding-top: 3rem;
    margin-right: 3rem;
    /* justify-content: center; */

    align-items: center;
    /* justify-items: center; */
  }

  .social-link {
    margin-right: 3rem;
    font-size: 2.75rem;
    color: var(--clr-white);
    transition: var(--transition);
  }

  .social-link:hover {
    color: var(--clr-primary-5);
  }
`

export default Footer
