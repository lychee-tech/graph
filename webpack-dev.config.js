const path = require('path');
var webpack=require("webpack");

module.exports = {
    entry: ['./client/client.js',
       ],
    output: {
        path: path.join(__dirname, 'public/dist/javascripts'),
        filename: 'bundle.js',
        publicPath: "/dist/javascripts"
    },
    watch: true,
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
        compress: true,
        hotOnly: true,
        open:true,
        port:3000,
        proxy: {
            "/graphql": {
                target: 'http://localhost:8000/',
                secure: false
            }
        }
    },

};