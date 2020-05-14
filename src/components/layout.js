/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Icon } from 'semantic-ui-react'

import Header from "./header"
// import "./layout.css"
import '../styles/main.css'
import 'semantic-ui-css/semantic.min.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main style={{}} className="shadow-md px-4 py-2 pb-20 bg-grey-lighter" >{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <Icon name='heart' />
          {/*<a href="https://www.gatsbyjs.org">Gatsby</a>*/}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
