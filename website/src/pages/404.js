import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main className="grid place-content-center w-screen h-screen">
      <title>Not found</title>
      <Link to="/"><h1 className="text-7xl hover:underline decoration-8 underline-offset-8">404</h1></Link>
    </main>
  )
}

export default NotFoundPage
