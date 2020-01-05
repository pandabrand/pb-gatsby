import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`, `pandabrand`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Hey it's pandabrand here but if you see me out in these streets you can just call me Fred.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.pandaGrass.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>This may or may not be me in the wild</figcaption>
          </figure>
          <h3 id="dynamic-styles">Who am i? What's this all about?</h3>
          <p>
            I live and work in Chicago and when left to my own devices, I will build some pretty useless things.
          </p>
          <p>
            You can catch me playing bass with <a href="https://ikongku.lt">I Kong Kult</a>.
          </p>
          <p>
            You can find my animations at <a href="https://www.megillatbreakdown.com">Megillat Breakdown</a>.
          </p>
          <p>
            And if you're into that sort of thing follow me on <a href={data.site.siteMetadata.social.twitter}>Twitter</a>, <a href={data.site.siteMetadata.social.instagram}>Instagram</a>, and <a href={data.site.siteMetadata.social.github}>Github</a>.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
          instagram
          github
        }
      }
    }
    pandaGrass: file(
      relativePath: { eq: "panda-grass.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
