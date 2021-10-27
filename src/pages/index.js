import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Skills from "../components/skills"
import Work from "../components/Work"
import Experience from "../components/Experience"
import About from "../components/about"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Thao Phung" />
    <Header></Header>
    <Work></Work>
    <Experience></Experience>
    <Skills></Skills>
    {/* <About></About> */}
    {/* <Promotion></Promotion> */}
    <Footer></Footer>
  </Layout>
)

export default IndexPage
