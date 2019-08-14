const path = require("path")

const uglify = require('uglifyjs-webpack-plugin')

const htmlPlugin = require('html-webpack-plugin')

const miniCssExtractPlugin = require('mini-css-extract-plugin')

const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',

  // 入口文件 配置项
  entry: {
    // 可配置多个 入口文件
    main: './src/main.js'
  },

  // 出口文件 配置项
  output: {
    path: path.resolve(__dirname, './dist'),

    // 出口文件的名称 ，[name]原始名称 ，[hash]唯一标识 一般用来处理缓存
    filename: 'js/[name].[hash].js'
  },

  // 模块： css,js,图片,压缩等
  module: {
    rules: [
      // css loader
      {
        test:/\.css$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
            options: {
              // 这里可以指定一个 publicPath
              // 默认使用 webpackOptions.output中的publicPath
              // publicPath的配置，和plugins中设置的filename和chunkFilename的名字有关
              // 如果打包后，background属性中的图片显示不出来，请检查publicPath的配置是否有误
              publicPath: '../',
              hmr: true, // 仅dev环境启用HMR功能
            },
          },
          'css-loader',
          'postcss-loader'
        ]
      },
      // Less loader
      {
        test:/\.less$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: true,
            },
          },
          'css-loader',
          'postcss-loader',
          'less-loader',

        ]
      },
      // SASS loader
      {
        test: /\.(sa|sc)ss$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: true,
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',

        ]
      },
      //图片 loader
      {
        test:/\.(png|jpg|gif|jpeg)/,  //是匹配图片文件后缀名称
        use:[{
          loader:'url-loader', //是指定使用的loader和loader的配置参数
          options:{
            limit:500,  //是把小于500B的文件打成Base64的格式，写入JS
            outputPath: 'img/'
          }
        }]
      },
      //HTML loader
      {
        test: /\.(htm|html)$/i,
        use:[ 'html-withimg-loader']
      },
      //vue loader
      {
        test: /\.vue$/,
        loader: 'vue-loader',        // 处理vue
      }
    ]
  },

  // 插件
  plugins: [
    new uglify(),  //js压缩插件
    new htmlPlugin({
      minify:{ //是对html文件进行压缩
        removeAttributeQuotes:true  // 是否去掉属性的双引号
      },
      hash:true, // 加入hash 避免缓存
      template:'./src/index.html' //要打包的html模版路径和文件名称

    }),
    new miniCssExtractPlugin({ // css 打包分离

      // 这里的配置和webpackOptions.output中的配置相似
      // 即可以通过在名字前加路径，来决定打包后的文件存在的路径
      filename: 'css/[name].[chunkhash].css',
      chunkFilename: 'css/chunk-[id].[chunkhash].css'
    }),
    // new optimizeCssAssetsPlugin(), // 压缩css
    new CleanWebpackPlugin(), // 清除打包文件
    new VueLoaderPlugin(), // 解析和转换 .vue 文件
  ],

  // 配置webpack 开发服务功能
  devServer: {
    // 设置基本目录结构
    contentBase: path.resolve(__dirname, './dist'),
    // 服务器ip地址
    host: 'localhost',
    // 服务器压缩是否开启
    compress: true,
    // 服务器端口
    port: 8888,
    // 是否自动打开
    open: true,
    // 是否开启热加载
    hot: true
  }
}
