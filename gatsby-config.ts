import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Subhattan`,
    siteUrl: `https://www.subhattan.com`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}

export default config
