const Koa= require('koa');
const app = new Koa();
const serve = require('koa-static');
const path = require('path');

app.use(ctx=> {
    ctx.body = "hello world";
});

app.listen(3001);