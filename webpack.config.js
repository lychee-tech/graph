const path = require('path');

module.exports = {
    entry: './client/client.js',
    output: {
        path: path.join(__dirname, 'dist/javascripts'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            } ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        publicPath: "/javascripts/",
        compress: true,
        port: 3000,
        openPage: 'http://localhost:3000'

    }
};