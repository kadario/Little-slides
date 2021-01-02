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
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
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
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../assets/fonts',
              publicPath: '../assets/fonts'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({filename:'style.css'})
  ]
}
