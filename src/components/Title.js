import React from "react"
import styled from "styled-components"

const Title = ({ title }) => {
  return (
    <TitleContainer>
      <h2>{title || "default title"}</h2>
      <div className="underline"></div>
    </TitleContainer>
  )
}

const TitleContainer = styled.div`
  margin: 4rem auto 5rem;
  text-align: center;

  .underline {
    margin: 1rem auto;
  }
`

export default Title
