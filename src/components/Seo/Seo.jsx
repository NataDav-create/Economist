import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * @param description - used as property for metadata description
 * @param lang - used as property to add language to html attributes
 * @param meta - used as property to add extra metadata
 * @param title - used as property for metadata title
 * @param image - used as property for metadata image
 * @returns {JSX.Element}
 * @constructor
 */

const Seo = ({ description, lang, meta, title, image }) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={title}
    meta={[
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:image',
        content: image,
      },
      {
        name: 'og:image',
        content: image,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
    ].concat(meta)}
  />
);

Seo.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

export default Seo;
