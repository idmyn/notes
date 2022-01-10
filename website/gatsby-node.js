const { createFilePath } = require("gatsby-source-filesystem")
const { $ } = require("zx")

const getFileLastModified = async (filepath) => {
  const { stdout, exitCode } = await $`git log -1 --pretty="format:%ct" ${filepath}`
  return exitCode === 0 ? Number(stdout) : 0
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
