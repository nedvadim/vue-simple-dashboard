// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        data: `@import "~@/style/_variables.scss";` // gloabal variables stored here
      }
    }
  }
};
