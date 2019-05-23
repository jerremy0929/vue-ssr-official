const Vue = require('vue')

module.exports = function createApp(context) {
  return new Vue({
    data: {
      url: context.url,
    },
    template: `<div>訪問的 URL是: {{ url }}</div>`,
  })
}
