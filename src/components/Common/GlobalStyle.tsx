import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @charset 'UTF-8';

  body, button, dd, dl, dt, fieldset, figure, form, h1, h2, h3, h4, h5, h6, input, legend, li, menu, nav, ol, p, select, table, td, textarea, th, ul {
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  body, input, textarea, select, button {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Apple SD Gothic Neo, sans-serif;
  }

  body {
    background-color: #f1f2f6;
    color: #333;
  }

  ul, ol {
    list-style: none;
  }

  img, svg {
    vertical-align: top;
  }

  em, i, address {
    font-style: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  .blind {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`

const GlobalStyle: FunctionComponent = () => {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle