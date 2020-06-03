import React from "react"
import styled from "styled-components"
import { css } from "styled-components"
import { theme } from "@styles"
import scrollTo from "gatsby-plugin-smoothscroll"

const { colors } = theme

export default () => (
  <DotContainer data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
    <Dot
      onClick={() => {
        scrollTo("#main-section")
      }}
    />
  </DotContainer>
)

const DotContainer = styled.div`
  position: fixed;
  z-index: 200;
  display: block;
  width: 109px;
  height: 45px;
  margin-top: 3%;
  margin-left: 3%;
`

const Dot = styled.a`
  height: 4rem;
  width: 4rem;
  background-color: ${colors.red};
  opacity: 0.7;
  border-radius: 50%;
  display: inline-block;
`
