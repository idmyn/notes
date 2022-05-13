import * as React from "react"
import { Link, graphql } from "gatsby"
import "./style.css"

const Backlink = ({ title, slug }) => {
  return <li><Link to={slug}>{title}</Link></li>
}

const BacklinksSection = ({ backlinks }) => {
  return (
    <aside>
      <hr />
      <div>
        <h2>Backlinks</h2>
        <ul>
          {backlinks.map(backlink => <Backlink key={backlink.id} {...backlink.fields} />)}
        </ul>
      </div>
    </aside>
  )
}

const NotePageTemplate = ({ data }) => {
  const note = data.markdownRemark
  const backlinks = note.inboundReferences

  return (
    <main id="note">
      <title>{note.fields.title}</title>
      <article
        dangerouslySetInnerHTML={{ __html: note.html }}
      />
      {backlinks.length > 0 ? (
        <BacklinksSection backlinks={backlinks} />
      ) : null}
    </main>
  )
}

export default NotePageTemplate

export const pageQuery = graphql`
  query NotePageBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        # date(formatString: "MMMM DD, YYYY")
      }
      fields {
        title
      }
      inboundReferences {
        id
        fields {
          title
          slug
        }
      }
    }
  }
`
