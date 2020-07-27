const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.URL_PREFIX': isProduction ? '/shadowlands-cheatsheet' : '',
    'process.env.LAST_UPDATED': 'Sunday, July 26, 2020 8:49:18 PM GMT-07:00 (build 35256)',
}
