// Add next.config.js to extend usage of webpack with loaders, plugins, etc
const withCSS = require("@zeit/next-css");
const images = require("remark-images");
const emoji = require("remark-emoji");

module.exports = withCSS({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            mdPlugins: [images, emoji]
          }
        }
      ]
    });

    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config;
  }
});
