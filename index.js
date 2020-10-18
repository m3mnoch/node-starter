const restify = require('restify');
const config = require('./config/base');
const router = require('./router');


const server = restify.createServer(
    {
        name: config.NAME,
        version: config.VERSION,
    }
);

//Middleware
server.use(restify.plugins.bodyParser());

server.listen(config.PORT,function(){
    console.log('%s listening at %s', server.name, config.URL);
});

// ship everything to the router.
router(server);
