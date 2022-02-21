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
                logo
                mobileBackgroundImage
                title
                subtitle
              }
              main {
                contentData {
                  type
                  data {
                    title
                    text
                    url
                    alt
                    authorTitle
                    quoteImg
                    arrowDown
                    arrowWh
                    styleBack
                  }
                }
                navigationPrev {
                  navigationImage
                  title
                  text
                  direction
                }
                navigationNext {
                  navigationImage
                  title
                  text
                  direction
                }
                mobileBtnPrev {
                  text
                  image
                }
                mobileBtnNext {
                  text
                  image
                }
                imageSideMenu {
                  url
                  alt
                }
              }
            }
            secondArticlePage {
              seo {
                title
                description
                image
              }
              hero {
                backgroundImage
                logo
                mobileBackgroundImage
                title
                subtitle
              }
              main {
                contentData {
                  type
                  data {
                    title
                    text
                    url
                    alt
                    authorTitle
                    quoteImg
                    arrowDown
                    arrowWh
                    styleBack
                  }
                }
                navigationPrev {
                  navigationImage
                  title
                  text
                  direction
                }
                navigationNext {
                  navigationImage
                  title
                  text
                  direction
                }
                mobileBtnPrev {
                  text
                  image
                }
                mobileBtnNext {
                  text
                  image
                }
                imageSideMenu {
                  url
                  alt
                }
              }
            }
            thirdArticlePage {
              seo {
                title
                description
                image
              }
              hero {
                backgroundImage
                logo
                mobileBackgroundImage
                title
                subtitle
              }
              main {
                contentData {
                  type
                  data {
                    title
                    text
                    url
                    alt
                    authorTitle
                    quoteImg
                    arrowDown
                    arrowWh
                    styleBack
                  }
                }
                navigationPrev {
                  navigationImage
                  title
                  text
                  direction
                }
                navigationNext {
                  navigationImage
                  title
                  text
                  direction
                }
                mobileBtnPrev {
                  text
                  image
                }
                mobileBtnNext {
                  text
                  image
                }
                imageSideMenu {
                  url
                  alt
                }
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
