const fs = require('fs')
const Vue = require('vue')
const server = require('express')()
const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer({
  template: fs.readFileSync('./public/index.html', 'utf-8'),
})

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url,
    },
    template: `<div>訪問的 URL是: {{ url }}</div>`,
  })

  const context = {
    title: 'Hello from server',
    meta: `
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
    `,
  }

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Server Error')
      return
    }
    res.end(html)
  })
})

server.listen(3000)
