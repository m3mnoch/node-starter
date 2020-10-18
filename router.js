const mHome = require('./routes/home');
const mStuff = require('./routes/stuff');

module.exports = server => {
    server.get('/', mHome);
    server.get('/stuff/:things', mStuff);
}