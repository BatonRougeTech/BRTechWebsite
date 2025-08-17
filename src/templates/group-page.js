import React from "react"
// import Image from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/SEO"
import { rhythm } from "../utils/typography"
import { graphql, Link } from "gatsby";

class GroupPageTemplate extends React.Component {
  render() {
    const group = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={group.frontmatter.name}
          description={group.excerpt}
        />
        <div className="group">
          <div className="group__image">
            <GatsbyImage
              image={getImage(group.frontmatter.icon)}
              alt={`${group.frontmatter.name} logo`}
              className="group__image"
            />
          </div>
          <h1
            className="group__name"
            style={{
              textAlign: `center`,
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {group.frontmatter.name}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: group.html }} style={{
            marginTop: rhythm(1),
            marginBottom: rhythm(1),
            textAlign: `justify`
          }}
            class="group__copy"
          />
            <p>
              <span class="t-bold">Meeting Frequency:</span> {group.frontmatter.frequency}<br/>
              <span class="t-bold">Next Meeting:</span> {group.frontmatter.next_meeting}<br/>
            </p>
            <p>
              <a class="t-link group__link" href={group.frontmatter.group_url} target="_blank" rel="noopener noreferrer">Visit Group Website</a>
            </p>
          </div>
        <nav role="navigation" aria-label="Pagination">
          <ul
            class="group__pagination"
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0
            }}
          >
            <li>
              {previous && (
                <Link to={previous.frontmatter.slug} rel="prev">
                  ← {previous.frontmatter.name}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.frontmatter.slug} rel="next">
                  {next.frontmatter.name} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default GroupPageTemplate

export const pageQuery = graphql`
  query GroupPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        name
        next_meeting(formatString:"MMMM DD, YYYY @ hh:mm a")
        group_url
        icon {
          childImageSharp {
            gatsbyImageData(
              width: 216
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        topics
        frequency
      }
    }
  }
`