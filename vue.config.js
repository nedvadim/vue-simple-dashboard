// vue.config.js
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-simple-dashboard/" : "/",
  css: {
    loaderOptions: {
      scss: {
        data: `@import "~@/style/_variables.scss";` // gloabal variables stored here
      }
    }
  }
};
