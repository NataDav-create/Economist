# Gatsby Fabric Starter kit.

** Relevant Documentation **

- Gatsby: https://gatsbyjs.org/
- Fabric Components: https://economistdigitalsolutions.github.io/fabric-components/
- Emotion: https://emotion.sh/docs/introduction
- Instruction how to set up Impact Prefix for master-impact branch: https://wiki.itransition.com/display/ECONOMISTCS/Impact+Prefix

1. This project is set up with gatsby-static, and supports react-snap for prerendering as well as extracting html template using the default.

2. The project is set up with @reach/router instead of the standard 'react-router-dom' to avoid having to mess with BrowserRouter and StaticRouter.

3. We expect the usage of PR template and the staging to happen on the Development branch, if auto preview for branches is needed, kindly request so.

## Project setup

#### Don't forget to change default values, which are using as examples:

1. Update @economist/fabric-components package to the latest version
2. Delete image from PreloadStatic component and add yours images if it's necessary.
3. Delete fonts which you don't use on the project (exception: EcoSansOS is default font for Economist Fabric Components).
4. Delete components which you don't need from HomePageTemplate, they are used as an example
5. Delete property which you don't need for home page from home.js, create-pages.js and use-site-metadata.js files
6. Delete HomeBanner.png img from static/images/HomePage folder
7. Change id at gatsby-config for google tagmanager
8. Add correct pathPrefix to config.js for your staging
9. Set up correct config in branch master-impact for amplify.yml and set up correct pathPrefix
10. Check that in the file gatsby-config property 'display' in the branch development 'standalone' and in the branches master and master-impact is 'browser'.

#### If you want to run it yourself you should use those commands:

```
npm install
```

DevServer can be used to quickly develop an application:

```
npm run develop
```

Check code by eslint and prettier rules:

```
npm run lint
```

If you want to fix code by eslint and prettier rules:

1. Add flag --fix to lint:js and lint:css scripts
2. Exchange in script lint:js --check on --write

Compiles and minifies for production

```
npm run build
```

Compiles getsby serve

```
npm run serve
```
