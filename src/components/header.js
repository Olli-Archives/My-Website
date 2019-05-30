import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"

const Header = () => (
  <header
    css={{
      background: '#99CC00',
      marginBottom: `1.45rem`,
      display: 'flex',
      flexDirection: 'row',
      position:'fixed',
      zIndex: '75',
      width: '100%',
      '@media (min-width: 720px)': {
        display: 'none',
      }
    }}
  >
 
  <div>
    <Logo
    style={{
      height: '50px',
      width: '180px'
    }}
    />
  </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  logo: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  logo: ``
}

export default Header
