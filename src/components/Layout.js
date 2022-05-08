import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import {
  container,
  siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <header className={siteTitle}>
        <Link to="/"
            style={{
            color: `white`,
            textDecoration: `none`,
          }}>
          {data.site.siteMetadata.title}
        </Link>

      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout