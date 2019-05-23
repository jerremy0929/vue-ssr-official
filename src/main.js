import Vue from 'vue'
// import App from './app'
// import router from './router'
// import store from './store'
import { createRenderer } from 'vue-server-renderer'

Vue.config.productionTip = false

const app = new Vue({
  // router,
  // store,
  // render: h => h(App),
  template: `<div>Hello World</div>`,
}).$mount('#app')

const renderer = createRenderer()
/*
renderer.renderToString(app, (err, html) => {
  if (err) throw err
  console.log(html)
})
*/

renderer
  .renderToString(app)
  .then((html) => {
    console.log(html)
  })
  .catch((err) => {
    console.error(err)
  })
