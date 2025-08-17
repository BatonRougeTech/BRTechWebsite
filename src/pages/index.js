import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/SEO"
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
          <h2 className="cards__title">Local User Groups</h2>
        </div>
        <section className="cards">
        {userGroups.map(({ node }) => {
          const name = node.frontmatter.name
          const imageData = getImage(node.frontmatter.icon)
          return (
            <Link to={node.frontmatter.slug}  key={node.frontmatter.slug} className="card">
              <div className="card-image">
                <GatsbyImage
                  image={imageData}
                  alt={`${name} logo`}
                  className="card-image-image"
                />
              </div>
              <div className="card-content">
                <h3
                  className="card__title"
                  style={{
                  marginBottom: rhythm(1 / 10),
                }}
                >
                  {name}
                </h3>
                {/* TODO Q: convert to span and create type class to represent small tag */}
                <span className="t-caption card__next-meeting">
                  {node.frontmatter.next_meeting}
                </span>
              </div>
            </Link>
          )
        })}
        </section>
        <section className="contribute">
          <a href="https://github.com/BatonRougeTech/BRTechWebsite" className="button">Add Your Group / Maintain this List</a>
        </section>
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
  allMarkdownRemark(
    filter: {frontmatter: {name: {ne: null}}}
    sort: {frontmatter: {next_meeting: DESC}}
  ) {
    edges {
      node {
        frontmatter {
          name
          slug
          icon {
            childImageSharp {
              gatsbyImageData(width: 216, 
              placeholder: BLURRED, 
              formats: [AUTO, WEBP, AVIF])
            }
          }
          next_meeting(formatString: "MMMM DD, YYYY @ hh:mm a")
        }
      }
    }
  }
}`
