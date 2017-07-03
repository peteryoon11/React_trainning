require('dotenv').config();


const mongoose= require('mongoose');


const Koa = require('koa');

const Router = require('koa-router');

const router = new Router();


router.get('/',(ctx,next)=>{
    ctx.body="홈 ";
});

const app= new Koa();
app.use((ctx,next)=>{
    console.log(1);
    const started= new Date();
    next.then(()=>{
        const ended = new Date();
    });

    ctx.body='Hello Koa';
});

app.use((ctx,next)=>{
    ctx.body='Hello Koa';
});


app.use((ctx,next)=>{
    ctx.body='Hello Koa';
});


app.listen(4000, () => {
    console.log('heurm server is listening to port 4000');
});

