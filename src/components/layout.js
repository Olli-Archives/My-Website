/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
          }
        }
      }
    `}
    render={tomato => (
      <>
        <Header siteTitle={tomato.site.siteMetadata.title} />
        <div
          css={{
            margin: `0`,
            
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer css={{height:'50px', backgroundColor:'#99CC00', marginTop:'30px'}}>
         <div css={{display:'flex', justifyContent:'center', height:'100%', alignItems:'center'}}> Last Updated: 5/28/2019 </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
