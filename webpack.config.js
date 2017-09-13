module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + './build', //co to jest __dirname znalazlem w dokumentacji: https://webpack.github.io/docs/configuration.html?
        filename: 'app.bundle.js'
    }
};