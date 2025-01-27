const path = require('path');

module.exports = {
    name: 'wordtail-setting',
    mode: 'development', // 실서비스는 : production,
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: ['./client']
    }, // 입력
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }, // 출력
}