
var koa = require('koa');

var app = module.exports = koa();

app.use(function* next(next) {
  if (!this.request.is('application/json')) return yield next;
  this.body = {
    message: 'hi!'
  };
})

app.use(function* () {
  this.response.type = 'text/plain';
  this.body = 'ok';
})
