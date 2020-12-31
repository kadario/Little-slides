const path = require('path')
const fs = require('fs')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const appDirectory = fs.realpathSync(process.cwd())
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath)
const host = process.env.HOST || 'localhost'
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: 'development',
  entry: resolveAppPath('src/js/main.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({filename:'style.css'})
  ]
}
