const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.URL_PREFIX': isProduction ? '/shadowlands-cheatsheet' : ''
}
