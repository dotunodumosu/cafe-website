import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import { useSpring, animated } from "react-spring"
import "./layout.css"

const Layout = ({ children }) => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

  return (
    <animated.div style={fade}>
      <Header />
      <main>{children}</main>
      <Footer />
    </animated.div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
