'use strict';

const path = require('path');

const createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const {
    data: {
      site: {
        siteMetadata: { homePage, common, secondArticlePage, thirdArticlePage },
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
          common {
            menuData {
              link
              title
            }
            futureMenuData {
              futureTitle
              date
            }
            assets {
              arrowDown
              arrowWhite
              prevArrow
              nextArrow
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
      CommonInfo: common,
    },
  });

  createPage({
    path: '/gold-demand-trends/',
    component: path.resolve('./src/templates/HomePageTemplate/HomePageTemplate.jsx'),
    context: {
      PageData: secondArticlePage,
      CommonInfo: common,
    },
  });

  createPage({
    path: '/gold-market-commentary/',
    component: path.resolve('./src/templates/HomePageTemplate/HomePageTemplate.jsx'),
    context: {
      PageData: thirdArticlePage,
      CommonInfo: common,
    },
  });
};

module.exports = createPages;
