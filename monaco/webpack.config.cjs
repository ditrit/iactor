module.exports = {
    entry: './src/main/javascript/index.js',
    output: {
        filename: 'main.js',
    },
    module: {
        rules: [{
            test: /.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: [ '.tsx', '.ts', '.js' ],
        fallback: {
            fs: false
        }
    },
    mode: 'development'
}