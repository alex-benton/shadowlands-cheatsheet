const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    assetPrefix: isProduction ? '/shadowlands-cheatsheet/' : '',
}
