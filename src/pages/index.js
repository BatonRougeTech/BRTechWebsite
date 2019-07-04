import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const userGroups = data.allMarkdownRemark.edges    

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All User Groups" />
        <Bio />
        <div style={{
          textAlign: `center`
        }}
        >
          <h2>Local User Groups</h2>
        </div>
        <div class="container">          
        {userGroups.map(({ node }) => {
          const name = node.frontmatter.name
          return (
            <div key={node.frontmatter.slug} class="card">
              <div class="card-container">
                <div class="card-image">
                  <Image sizes={node.frontmatter.icon.childImageSharp.sizes}/>
                </div>
                <div class="card-content">
                  <h4 style={{
                    marginBottom: rhythm(1 / 4),                
                  }}
                  >
                    {name}
                  </h4>
                  <small>{node.frontmatter.next_meeting}</small>
                </div>
              </div>              
            </div>
          )
        })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {name: {ne: null}}}, sort: {fields: frontmatter___next_meeting, order: DESC}) {
      edges {
        node {
          frontmatter {
            name
            slug
            icon {
              childImageSharp {
                sizes(maxWidth: 216) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            next_meeting(formatString: "MMMM DD, YYYY @ hh:mm a")
          }
        }
      }
    }
  }
`
