import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

const styles = {
  nav: theme => css`
    background-color: ${theme.navBgColor};
  `,
  navContent: css`
    padding: 1.5rem 1rem;
    max-width: 960px;
    margin: 0 auto;
    width: 100%;
  `,
}

const Header = ({ siteTitle }) => (
  <header css={styles.nav}>
    <div css={styles.navContent}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header