import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { css } from "styled-components"
import { theme, media } from "@styles"
import { Link } from "gatsby"
import HomePageLink from "@components/link"

const { colors, fontSizes } = theme

export default () => {
  return (
    <StaticQuery
      query={blogListQuery}
      render={data => {
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allMdx.edges
        return (
          <BlogContainer id="blog-list">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <h3 style={{}}>
                    <HomePageLink to={`blog${node.fields.slug}`}>
                      {title}
                    </HomePageLink>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              )
            })}

            <GoToBlogBtn to="/blog/">Go To My Blog</GoToBlogBtn>
          </BlogContainer>
        )
      }}
    />
  )
}

const BlogContainer = styled.div`
  font-size: ${fontSizes.medium};
  ${media.tablet`
  font-size: ${fontSizes.large};
  `};
`

const GoToBlogBtn = styled(HomePageLink)`
  font-size: ${fontSizes.xxlarge} !important;
  margin: 5rem auto;
`

const blogListQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`