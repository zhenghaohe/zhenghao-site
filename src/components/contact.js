import React from "react"
import styled from "styled-components"
import { css } from "styled-components"
import { theme, media } from "@styles"

const { colors } = theme

export default () => {
  return (
    <ContactSection id="contact-section">
      <h1 class="heading-1">contact</h1>
      <div class="contact-info">
        <p class="address">vancouver, bc</p>
        <p class="email">zhenghaohe17@gmail.com</p>
        <p class="phone">778 862 1508</p>
      </div>
    </ContactSection>
  )
}

const ContactSection = styled.section`
  padding: 2.5rem;
  color: ${colors.offWhite};
  grid-column: content-start / content-end;
  ${media.tablet`grid-column: 1 / -1;`};
  width: 100%;
  min-height: 50vh;
  background-color: ${colors.navy};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .contact-info {
    font-size: 1.6rem;
  }

  .contact-info > * {
    margin: 1rem 0;
  }
`
