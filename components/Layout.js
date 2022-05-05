import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css, Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import Header from './Header'

const themes = {
  light: {
    bgColor: '#ffffff',
    navBgColor: '#cd4c36',
    fontColor: '#595959',
    borderRadius: '5px',
  },
  dark: {
    bgColor: '#333333',
    navBgColor: '#cd4c36',
    fontColor: '#ffffff',
    borderRadius: '5px',
  },
}

const styles = {
  global: css`
    * {
      box-sizing: border-box;
    }

    html {
      padding: 0;
      margin: 0;
    }

    body {
      padding: 0;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .container {
      max-width: 960px;
      margin: 0 auto;
    }
  `,
  layout: theme => css`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-size: 16px;
    width: 100%;
    min-height: 100vh;
    background-color: ${theme.bgColor};
    color: ${theme.fontColor};
  `,
  content: css`
    max-width: 960px;
    margin: 0 auto;
    width: 100%;
    color: inherit;
    padding: 2rem 1rem;
  `,
}

class Layout extends Component {
  state = {
    theme: themes.dark,
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Global styles={styles.global} />
        <div css={styles.layout}>
          <Header siteTitle="Pokedex" />
          <div css={styles.content}>{this.props.children}</div>
        </div>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
