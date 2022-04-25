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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Subhattan`,
        short_name: `Subhattan`,
        start_url: `/`,
        // background_color: `#111827`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#111827`,
        // display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

export default config
