const fs = require('fs')
const server = require('express')()
const { createRenderer } = require('vue-server-renderer')

const createApp = require('./app')

const renderer = createRenderer({
  template: fs.readFileSync('./public/index.html', 'utf-8'),
})

server.get('*', (req, res) => {
  const context = { url: req.url }
  const app = createApp(context)

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Server Error')
      return
    }
    res.end(html)
  })
})

server.listen(3000)
