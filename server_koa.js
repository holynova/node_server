const Koa = require('koa')
const fs = require('fs')

const log = console.log
const app = new Koa()

const port = 10086
const main = (ctx) => {
  // ctx.response.body = 'hello world'
  // if (ctx.request.accepts('json')) {
  //   ctx.response.body = {
  //     type: 'json',
  //     data: 'hello world'
  //   }
  // }
  // ctx.response.type = 'html'
  // const tpl = fs.createReadStream('./template/index.html')
  // ctx.response.body = fs.createReadStream('./template/index.html')

  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./template/index.html');
}
app.use(main)
app.listen(port)