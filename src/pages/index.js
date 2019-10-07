import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="home">
      <h1 className="home--heading">Is It Yeezy Season?</h1>
      <h2 className="home--answer">Yes</h2>
    </section>
  </Layout>
)

export default IndexPage
