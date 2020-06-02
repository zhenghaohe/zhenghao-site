import React from "react"

import Layout from "@components/newLayout"
import Main from "@components/main"
import About from "@components/about"
import Footer from "@components/footer"
import Contact from "@components/contact"

import { GlobalStyle } from "@styles"

export default () => (
  <Layout>
    <GlobalStyle />
    <Main />
    <About />
    <Contact />
    <Footer />
  </Layout>
)
