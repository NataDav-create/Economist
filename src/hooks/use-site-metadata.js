import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            name
            description

            homePage {
              seo {
                title
                description
                image
              }
              hero {
                backgroundImage
                mobileBackgroundImage
                title
                subtitle
              }
              text {
                first
              }
            }
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
