import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

  return (
    <div className={container}>
      <header className={siteTitle}>
        <Link to="/"
            style={{
            color: `white`,
            textDecoration: `none`,
          }}>
          {"Pokedex Site"}
        </Link>

      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout