
const express = require('express');

// console.log(express);

// application
// request
// response
// Route
// Router
// json
// query
// static
// urlencoded

// Application
// https://expressjs.com/en/4x/api.html#app

// The app object conventionally denotes the Express application.
// Create it by calling the top-level express() function
// exported by the Express module:

const app = express();

// The app object has methods for
//
//  * Routing HTTP requests; see for example, app.METHOD and app.param.
//  * Configuring middleware; see app.route.
//  * Rendering HTML views; see app.render.
//  * Registering a template engine; see app.engine.

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('listening...');
});

// Using middleware
// https://expressjs.com/en/guide/using-middleware.html

// Middleware functions are functions that have access to the request object (req),
// the response object (res), and the next middleware function
// in the application’s request-response cycle.

// Application-level middleware

// app.use();

// https://expressjs.com/en/4x/api.html#app.use
// app.use([path,] callback [, callback...])

// Mounts the specified middleware function or
// functions at the specified path:
// the middleware function is executed
// when the base of the requested path matches path.

app.use((req, res, next)=>{
    console.log('app.use(first) - req', typeof(req));
    console.log('app.use(first) - res', typeof(res));
    console.log('app.use(first) - next', typeof(next));
    next();
}, (req, res, next)=>{
    console.log('app.use(second) - req', typeof(req));
    console.log('app.use(second) - res', typeof(res));
    console.log('app.use(second) - next', typeof(next));
    next();
}, (req, res, next)=>{
    console.log('app.use(third) - req', typeof(req));
    console.log('app.use(third) - res', typeof(res));
    console.log('app.use(third) - next', typeof(next));
    next();
});

// next('route') will work only in middleware functions
// that were loaded by using the app.METHOD() or
// router.METHOD() functions.

function myCookieParser (req, res, next){
    console.log(`${myCookieParser.name} - req`, typeof(req));
    console.log(`myCookieParser - res`, typeof(res));
    console.log(`myCookieParser - next`, typeof(next));
    next('route');
}

function myJSONParser (req, res, next){
    console.log('myJSONParser - req', typeof(req));
    console.log('myJSONParser - res', typeof(res));
    console.log('myJSONParser - next', typeof(next));
    next();
}

function specialMiddlewareRouter(req, res, next){
    console.log('specialMiddlewareRouter - req', typeof(req));
    console.log('specialMiddlewareRouter - res', typeof(res));
    console.log('specialMiddlewareRouter - next', typeof(next));
    next();
}

app.use(myCookieParser);
app.use(myJSONParser);
app.use(specialMiddlewareRouter);

// app.METHOD(); // METHOD (GET, PUT, POST, DELETE, etc.) in lowercase
//  app.get();
//  app.post();
//  app.put();
//  app.delete();

// https://expressjs.com/en/4x/api.html#app.get.method
// app.get(path, callback [, callback ...])

// Routes HTTP GET requests to the specified path
// with the specified callback functions.

app.get('/', (req, res, next)=>{
    console.log('app.get(/)(first) - req', typeof(req));
    console.log('app.get(/)(first) - res', typeof(res));
    console.log('app.get(/)(first) - next', typeof(next));
    next();
}, (req, res, next)=>{
    console.log('app.get(/)(second) - req', typeof(req));
    console.log('app.get(/)(second) - res', typeof(res));
    console.log('app.get(/)(second) - next', typeof(next));
    // pass the control to the next middleware function in this stack
    next('route');
}, (req, res, next)=>{
    console.log('app.get(/)(third) - req', typeof(req));
    console.log('app.get(/)(third) - res', typeof(res));
    console.log('app.get(/)(third) - next', typeof(next));
    res.end();
});

// To skip the rest of the middleware functions from a router middleware stack,
// call next('route') to pass control to the next route.

// NOTE: next('route') will work only in middleware functions
// that were loaded by using the app.METHOD() or router.METHOD() functions.

app.get('/', (req, res, next)=>{
    console.log('app.get(/)(fourth) - req', typeof(req));
    console.log('app.get(/)(fourth) - res', typeof(res));
    console.log('app.get(/)(fourth) - next', typeof(next));
    next();
});

app.get('/:id', (req, res, next)=>{
    console.log('app.get(:id)(first) - req', typeof(req));
    console.log('app.get(:id)(first) - res', typeof(res));
    console.log('app.get(:id)(first) - next', typeof(next));
    res.end();
});














