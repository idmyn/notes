const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { $ } = require("zx")

const getFileLastModified = async (filepath) => {
  // would be nice to add quiet() but https://github.com/google/zx/issues/382
  const { stdout, exitCode } = await $`git log -1 --pretty="format:%aI" ${filepath}`
  if (stdout === "" && exitCode === 0) {
    // file untracked by git
    return new Date().toISOString()
  }
  return exitCode === 0 ? stdout : 0
}

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })

    const lastModified = await getFileLastModified(node.fileAbsolutePath)

    createNodeField({
      node,
      name: "lastModified",
      value: lastModified,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type MarkdownRemark implements Node {
      fields: Fields
    }
    type Fields {
      slug: String
      lastModified: Date @dateformat
    }
  `)
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const note = path.resolve(`./src/templates/note/index.js`)

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your notes`,
      result.errors
    )
    return
  }

  const { nodes } = result.data.allMarkdownRemark

  if (nodes.length > 0) {
    nodes.forEach(node => {
      createPage({
        path: node.fields.slug,
        component: note,
        context: {
          id: node.id,
        },
      })
    })
  }
}
