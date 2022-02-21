'use strict';

const homePage = require('./content/home');
const common = require('./content/common');
const secondArticlePage = require('./content/secondArticlePage');
const thirdArticlePage = require('./content/thirdArticlePage');

module.exports = {
  homePage,
  secondArticlePage,
  thirdArticlePage,
  common,
  url: '/',
  name: 'Set full project name',
  shortName: 'Set short project name',
  description: '',
  pathPrefix: '/hubs/wgc',
};
