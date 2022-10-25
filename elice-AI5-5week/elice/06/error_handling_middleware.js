

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// const myRouter = express.Router();
app.use((req, res, next)=>{
    console.log('/');
    next();
});

app.listen(PORT, ()=>console.log('listening...'));

function error_handling_middleware(err, req, res, next){
    console.log('come on!');
    fs.readFile('./404.html', {encoding: 'utf-8'}, (err, result)=>{
        if (err) {
            res.writeHead(500);
            res.end("Internal Server Error!");
            return
        } else {
          res.writeHead(404);
          res.end(result);
        }
    });
}

app.use((req, res, next)=>{
    throw new Error('요청한 페이지를 처리할 미들웨어가 없어요 ㅜㅜ');
})

app.use(error_handling_middleware);


