const path = require('path');

module.exports = {
    entry: './client/client.js',
    output: {
        path: path.join(__dirname, 'public/dist/javascripts'),
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
    }

};