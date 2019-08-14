
// postcss.config.js

module.exports={
  plugins: [
    require('autoprefixer') //自动添加前缀插件
    // require('autoprefixer')({
    //   browsers: ['last 10 versions','Firefox >= 20','Android >= 4.0','iOS >= 8']
    // }) // 可以直接在这里配置
  ]
}
