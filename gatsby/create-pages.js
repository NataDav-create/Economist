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
            common {
              arrowDown
              arrowWhite
              prevArrow
              nextArrow
            }
            introArticle {
              text
            }
            articleOne {
              title
              text
              articleImage
              conclusion
            }
            articleTwo {
              title
              text
              articleImage
            }
            articleThree {
              title
              text
              articleImage
              conclusion
            }
            articleFour {
              title
              text
              conclusion
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
