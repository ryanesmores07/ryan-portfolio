import React from "react"
import styled from "styled-components"

const Contact = () => {
  return (
    <ContactContainer>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/mwkykqqo" method="POST">
            <div className="form-group">
              {/* <label htmlFor="firstName">Name : </label> */}
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                id="email"
                name="firstName"
                placeholder="email"
                className="form-control"
              />
              <textarea
                placeholder="message"
                rows="5"
                id="message"
                name="firstName"
                className="form-control"
              />
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </ContactContainer>
  )
}

const ContactContainer = styled.article`
  display: grid;
  background: var(--clr-grey-10);
  min-height: calc(100vh - 5rem - 9rem);
  place-items: center;
  padding: 2rem;

  .contact-form {
    background: var(--clr-white);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 90vw;
    max-width: 50rem;
  }
  .contact-form:hover {
    box-shadow: var(--dark-shadow);
  }
  .contact-form h3 {
    padding-top: 2rem;
    color: var(--clr-grey-5);
  }

  .form-group {
    padding: 1rem 1.5rem 1rem 1.5rem;
  }

  .form-control {
    display: block;
    width: 97%;
    padding: 1rem 0 1rem 1.5rem;

    border: none;
    margin-bottom: 1.25rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    /* text-transform: uppercase; */
    letter-spacing: var(--spacing);
  }

  .form-control::placeholder {
    font-family: var(--ff-primary);
    color: var(--clr-grey-1);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }

  .submit-btn {
    display: block;
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`

export default Contact
