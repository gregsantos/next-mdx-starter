// Add next.config.js to extend usage of webpack with loaders, plugins, etc
// const withCSS = require("@zeit/next-css");
const images = require("remark-images");
const emoji = require("remark-emoji");
const webpack = require("webpack");
/**
 * After the next require you can use process.env to get your secrets
 */
if (process.env.NODE_ENV !== "production") {
  require("now-env");
}

console.log({
  SECRET: process.env.SECRET,
  ANOTHER_SECRET: process.env.ANOTHER_SECRET,
  SECRET_FAIL: process.env.SECRET_FAIL
});

/**
 * If some of the envs are public, like a google maps key, but you still
 * want to keep them secret from the repo, the following code will allow you
 * to share some variables with the client, configured at compile time.
 */
module.exports = {
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
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.SECRET": JSON.stringify(process.env.SECRET)
      })
      // Same as above
      // new webpack.EnvironmentPlugin(['SECRET'])
    );

    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  }
};
