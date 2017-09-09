var webpackDev=require('./webpack.config.js');
var WebPackStrip=require('strip-loader')

var stripLoader={
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: WebPackStrip.loader('console.log'),
        options: {
            presets: ['env']
        }
    }   
};
webpackDev.module.rules.push(stripLoader)

module.exports=webpackDev;