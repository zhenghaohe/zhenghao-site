import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { theme, mixins, media } from "@styles"
import Img from "gatsby-image"

const { colors } = theme

export default () => {
  return (
    <StaticQuery
      query={bioQuery2}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <AboutSection id="about-section">
            <PicContainer>
              <Link to="/blog/">
                <AvatarContainer>
                  <Avatar
                    fluid={data.avatar.childImageSharp.fluid}
                    backgroundColor={colors.red}
                    loading="eager"
                    alt={author}
                  />
                </AvatarContainer>
              </Link>
            </PicContainer>
            <div
              className="bio"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="300"
            >
              <p>
                Hi, I a front end software engineer working at Amazon AWS IoT
                based in Vancouver.
              </p>
            </div>
            <div
              className="socialmedia"
              data-sal="slide-up"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              <a href="" className="socialmedia-link">
                linkedin
              </a>
              <a href="" className="socialmedia-link">
                github
              </a>
              <a href="" className="socialmedia-link">
                instagram
              </a>
            </div>
          </AboutSection>
        )
      }}
    />
  )
}

const Avatar = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  /* filter: grayscale(50%) contrast(1); */
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`

const AvatarContainer = styled.div`
  img {
    display: block;
  }
  ${mixins.boxShadow};
  width: 90%;
  ${media.tablet`
  max-width: 40rem;
    margin: 3rem auto;
  `};
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.lightNavy};
  margin-left: 2.5rem;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${Avatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  ${media.tablet`
  ${Avatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  `};
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.lightNavy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors.red};
    top: 20px;
    left: 20px;
    z-index: -2;
  }
`

const AboutSection = styled.section`
  -webkit-transform: translate3d(0, 0, 0);
  grid-column: content-start / content-end;
  ${media.tablet`grid-column: 1 / -1;
  `};
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: ${colors.lightNavy};
  z-index: 100;
  display: grid;
  grid-template-columns:
    minmax(min-content, 50rem) 1fr minmax(min-content, 50rem)
    1fr;
  ${media.tablet`
  flex-direction: column;
    justify-content: space-around;
    display: flex;
  `};
  .bio {
    grid-column: 3 / span 1;
    font-size: 2rem;
    align-self: center;
    ${media.tablet`
        margin-left: 2rem;
  `};
  }

  .socialmedia {
    font-weight: bold;
    justify-self: start;
    font-size: 3rem;
    grid-column: 3 / span 1;
    ${media.tablet`
    margin-left: 2rem;
  `};
  }

  .socialmedia-link:link,
  .socialmedia-link:visited {
    margin-top: 1rem;
    color: inherit;
    text-decoration: none;
    display: block;
  }

  .socialmedia-link:hover,
  .socialmedia-link:active {
    color: ${colors.red};
  }
`

const bioQuery2 = graphql`
  query BioQuery2 {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          linkedin
        }
      }
    }
  }
`

const PicContainer = styled.div`
  margin-left: 4rem;
  margin-top: 10rem;
  margin-right: 5rem;
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  ${media.tablet`
    /* grid-column: 1 / -1;
    grid-row: 1 / 1; */
    margin-left: 5rem;
  `};
  a {
    color: inherit;
  }
`
