import * as React from "react"
import { Link, graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  const sorted = nodes.sort((a, b) => {
    // sorted from newest to oldest
    return  new Date(b.fields.lastModified) - new Date(a.fields.lastModified)
  })
  const mostRecent = sorted.slice(0, 5)
  // TODO add search
  // search results could take the place of mostRecent when search field is populated
  return (
    <div className="h-screen grid place-items-center">
      <title>David’s Notes</title>
      <main className="text-center">
        <h1 className="text-3xl font-bold mb-5">David’s Notes</h1>
        <h2 className="text-xl font-bold mb-3">recently updated</h2>
        <ul>
          {mostRecent.map(node => (
            <li className="mb-1">
              <Link to={node.fields.slug} className="hover:underline">
                {node.fields.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export const pageQuery = graphql`
  query Index {
    allMarkdownRemark {
      nodes {
        fields {
          title
          slug
          lastModified
        }
      }
    }
  }
`

export default IndexPage
