import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
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
        <div>
          <h1
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
          }} />
          <p>
            <strong>Meeting Frequency:</strong> {group.frontmatter.frequency}<br/>
            <strong>Next Meeting:</strong> {group.frontmatter.next_meeting}<br/>            
          </p>          
          <p>
            <a href={group.frontmatter.group_url} target="_blank" rel="noopener noreferrer">Visit Group Website</a>
          </p>
        </div>
        <hr 
          style={{
            marginBottom: rhythm(1)          
          }}
        />
        <ul
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
        topics
        frequency
      }
    }
  }
`