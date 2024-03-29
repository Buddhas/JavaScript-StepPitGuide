const Koa = require('koa');
const app = new Koa();
const url = require('url');
// logger

app.use(async (ctx, next) => {
  const { pathname } = url.parse(ctx.request.url)
  if (pathname === '/login') {
    console.log('test')
  }
});

// app.use(async (ctx, next) => {
//   console.log(JSON.stringify(ctx))
//   await next();
//   const rt = ctx.response.get('X-Response-Time');
//   console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// });

// // x-response-time

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   console.log(`----`);
//   ctx.set('X-Response-Time', `${ms}ms`);
// });

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);