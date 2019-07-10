const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const groupPage = path.resolve(`src/templates/group-page.js`)
  return graphql(
    `
      {
        allMarkdownRemark(filter: {frontmatter: {name: {ne: null}}}, sort: {fields: frontmatter___next_meeting, order: DESC}) {
          edges {
            node {
              frontmatter {
                name
                slug                
                next_meeting(formatString: "MMMM DD, YYYY @ hh:mm a")
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const groups = result.data.allMarkdownRemark.edges

    groups.forEach((group, index) => {
      const previous = index === groups.length - 1 ? null : groups[index + 1].node
      const next = index === 0 ? null : groups[index - 1].node
      
      createPage({
        path: group.node.frontmatter.slug,
        component: groupPage,
        context: {
          slug: group.node.frontmatter.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}