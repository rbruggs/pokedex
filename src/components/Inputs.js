import React from 'react'
import { css } from '@emotion/core'

const styles = {
  input: theme => css`
    width: 100%;
    border: none;
    background-color: #1e1e1e;
    font-size: 1rem;
    color: ${theme.fontColor};
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: ${theme.borderRadius};
    &:focus {
      outline: 0;
    }
  `,
}

const Input = props => <input css={styles.input} {...props} />

export default Input
