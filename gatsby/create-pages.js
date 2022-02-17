'use strict';

const path = require('path');

const createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const {
    data: {
      site: {
        siteMetadata: { homePage },
      },
    },
  } = await graphql(`
    {
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
            main {
              contentData {
                textOne {
                  text
                }
                textTwo {
                  title
                  text
                }
                textThree {
                  text
                }
                textFour {
                  title
                  text
                }
                textFive {
                  title
                  text
                }
                textSix {
                  text
                }
                textSeven {
                  title
                  text
                }
                textEight {
                  text
                }
                imageOne {
                  url
                  alt
                }
                imageTwo {
                  url
                  alt
                }
                imageThree {
                  url
                  alt
                }
                imageSideMenu {
                  url
                  alt
                }
                quoteOne {
                  text
                  authorTitle
                  quoteImg
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
              }
            }
            common {
              arrowDown
              arrowWhite
              prevArrow
              nextArrow
            }
            body {
              text {
                first
              }
            }
          }
        }
      }
    }
  `);

  createPage({
    path: '/',
    component: path.resolve('./src/templates/HomePageTemplate/HomePageTemplate.jsx'),
    context: {
      PageData: homePage,
    },
  });
};

module.exports = createPages;
