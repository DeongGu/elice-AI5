
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Router-level middleware

// Router-level middleware works in the same way as application-level middleware,
// except it is bound to an instance of express.Router().

const userRouter = express.Router();

// https://expressjs.com/en/4x/api.html#router

// A router object is an isolated instance of middleware and routes.

// Load router-level middleware
// by using the router.use() and router.METHOD() functions.

// A router behaves like middleware itself,
// so you can use it as an argument to app.use()
// or as the argument to another router’s use() method.

// router.use([path], [function, ...] function)

// Uses the specified middleware function or functions,
// with optional mount path path, that defaults to “/”.

// router.use()

// The order in which you define middleware
// with router.use() is very important.

userRouter.use(function (req, res, next) {
    console.log('router.use(/) - %s %s %s', req.method, req.url, req.path);
    next();
});

userRouter.use('/:id', function (req, res, next) {
    console.log('router.use(/:id) - req', typeof(req));
    next();
});


// router.METHOD()

// NOTE:

const authRouter = express.Router();

function authenticate(req, res, next) {
    console.log('authenticate', req.headers);
    const key = req.headers.key || "";
    if (key === 'elice')
        next();
    else {
        res.status(401);
        res.send({message: 'Unauthorized'});
    }
}

authRouter.use(authenticate);

authRouter.get('/:user_id/edit', function (req, res, next) {
    console.log('authRouter.use(/:user_id/edit) - req', typeof(req));
});

authRouter.get('/', function (req, res, next) {
    console.log('authRouter.use(/) - req', typeof(req));
});

authRouter.get('/:user_id', function (req, res, next) {
    console.log('authRouter.use(/:user_id) - req', typeof(req));
});

app.use((req, res, next)=>{
    console.log('app.use');
    //req.headers.key = "elice";
    next();
});

app.use('/users', authRouter);


app.listen(PORT, ()=>{
    console.log('listening...');
});
