# Docker + Webpack + Browsersync + Timber WordPress Development Environment 

This is a development setup that uses Docker, Webpack, Browsersync, and Timber for making WordPress sites. 
It makes use of [Timber](https://www.upstatement.com/timber/) for templating and building out a theme, and [Sass](http://sass-lang.com/) for CSS styles.
This tool will download all required Docker images, link them, and create a directory for your WordPress site in this tool's root directory. 

### Webpack features
* Hot Module Reloading (note that refreshes will happen when editing `.twig` files).
* Minifying styles, scripts and image compression on all production builds.


## Getting Started

To get up and running on your local machine, please follow these instructions:

### Prerequisites

* [NodeJS](https://nodejs.org/)
* [Docker](https://www.docker.com/community-edition)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/)

### Installing

Go into the root directory and run the following:

```
yarn install
```

Make sure nothing is running on port 8080 or 8081, as these are the ports we'll use with Docker to get up and running.
Run the following script to unpack and create a new wordpress install:

```
npm run build-wp --project="my-site"
```

Visit `http://localhost:8080/` after everything has been extracted and setup WordPress.

### Development

From the command line in the root directory, go into your WordPress installation's default theme 
folder (`my-site/wp-content/themes/starter-theme-master`), and run `npm start` to start building!

### Production

From the command line in the theme folder, run `npm run build` to make a production build of your site. 

