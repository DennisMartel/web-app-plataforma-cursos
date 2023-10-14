const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getStylesLoaders = (useCssModules) => {
  return [
    { loader: MiniCssExtractPlugin.loader },
    !useCssModules ? {
      loader: 'css-loader',
      options: {
        importLoaders: 1
      }
    } : {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: 'recipes__[name]--[local]'
        },
        importLoaders: 1
      }
    },
    {
      loader: 'sass-loader'
    }
  ];
}

/** @type { import('webpack').Configuration } */
module.exports = {
  entry: path.resolve(__dirname, 'src/js/main.jsx'),
  output: {
    filename: 'js/[name]-[contenthash].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/js'),
        use: 'babel-loader'
      },
      {
        test: /\.(scss|sass)$/,
        include: [path.resolve(__dirname, 'src/scss')],
        exclude: /node_mudules/,
        use: getStylesLoaders(false)
      },
      {
        test: /\.(scss|sass)$/,
        include: [path.resolve(__dirname, 'src/js')],
        exclude: /node_mudules/,
        use: [
          ...getStylesLoaders(true),
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        exclude: /node_mudules/,
        include: [path.resolve(__dirname, 'src/scss')],
        use: [
          ...getStylesLoaders(false),
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        type: 'asset',
        test: /\.(png|jpg|jpeg|svg|gif|webp)$/i,
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.sass', '.html'],
    modules: ['node_modules', path.resolve(__dirname, 'src/js')]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-styles.css?v=[contenthash]',
    })
  ]
}