module.exports = {
    NAME: process.env.NAME || 'Node Starter',
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 5000,
    URL: process.env.BASE_URL || 'http://localhost:5000',
    VERSION: process.env.VERSION || 'v0.1'
}