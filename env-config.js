const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.URL_PREFIX': isProduction ? '/shadowlands-cheatsheet' : '',
    'process.env.LAST_UPDATED': 'Wednesday, July 29, 2020 4:36:37 PM GMT-07:00 (build 35360)',
}
