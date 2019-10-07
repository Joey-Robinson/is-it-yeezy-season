import React from "react"
import "../styles/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      <main className="primary">{children}</main>
    </>
  )
}

export default Layout
