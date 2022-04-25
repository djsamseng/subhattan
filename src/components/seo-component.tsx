import React from "react";

import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, title, titleTemplate }: {
  description?: string;
  lang?: string;
  meta?: Array<Record<string,unknown>>;
  title: string;
  titleTemplate?: string;
}) {

  const site = {
    siteMetadata: {
      title: "Subhattan",
      description: "You should move from NYC to the suburbs. Life awaits you. You can afford to spoil yourself now.",
    }
  }

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  if (!titleTemplate) {
    titleTemplate =  defaultTitle ? `%s | ${defaultTitle}` : null;
  }
  meta = meta || [];
  lang = lang || "en";
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        }
      ].concat(meta)}
    >
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#111827" />
    </Helmet>
  )
}

export default SEO;