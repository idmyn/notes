import * as React from "react"
import { Link, graphql } from "gatsby"
import Fuse from "fuse.js"

const NoteLinks = ({ notes, limit }) => {
  return notes.slice(0, limit).map(note => (
    <li key={note.fields.slug} className="mb-1">
      <Link to={note.fields.slug} className="hover:underline">
        {note.fields.title}
      </Link>
    </li>
  ))
}

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  const sortedByDate = nodes.sort((a, b) => {
    // sorted from newest to oldest
    return  new Date(b.fields.lastModified) - new Date(a.fields.lastModified)
  })

  const fuse = new Fuse(sortedByDate, { keys: [ "fields.title" ] });

  const [searchTerm, setSearchTerm] = React.useState("")
  const [searchResults, setSearchResults] = React.useState([])
  const handleChange = event => {
    setSearchTerm(event.target.value)
    setSearchResults(fuse.search(searchTerm).map(result => result.item))
  };

  const isSearching = searchTerm.length > 0

  return (
    <div className="lg:mt-[25vh] mt-[20vh]">
      <title>David’s Notes</title>
      <main className="text-center">
        <h1 className="text-3xl font-bold mb-5">David’s Notes</h1>
        <input autoFocus type="text" placeholder="search note titles" value={searchTerm} onChange={handleChange} className="mb-4 px-1 border-black border-solid border-2 rounded placeholder:text-neutral-500 placeholder:text-center text-black" />
        <h2 className="text-xl font-bold mb-3">{isSearching ? 'search results' : 'recently updated'}</h2>
        <ul>
          <NoteLinks notes={isSearching ? searchResults : sortedByDate} limit={isSearching ? 10 : 5} />
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
