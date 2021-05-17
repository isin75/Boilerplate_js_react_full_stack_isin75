const { resolve } = requier('path')

const config = {
  entry: './client/main.js',
  mode: 'development',
  output: {
    filename: 'js/[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader'],
      excludes: /node_modules/
    }
  ]
}
}

module.exports = config