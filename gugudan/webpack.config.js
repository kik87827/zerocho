const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development', // production
    devtool: 'eval', // hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js']
    },
    entry: {
        app: './client',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR', 'last 2 chrome versions'] // browserslist
                        },
                        debug: true
                    }], '@babel/preset-react'],
                //presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: []
            }
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true })
    ], // 확장프로그램
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    }
}