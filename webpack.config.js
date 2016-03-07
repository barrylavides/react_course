var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    module: {
        loaders: []
    },
    output: {
        filename: 'index_bundle.js',
        path: __dirname + '/dist'
    },
    //plugins: [HTMLWebpackPluginConfig]
}