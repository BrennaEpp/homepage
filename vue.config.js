module.exports = {
  pluginOptions: {
    quasar: {
      treeShake: true
    }
  },
  transpileDependencies: [/[\\\/]node_modules[\\\/]quasar[\\\/]/],
configureWebpack: {
  module: {
    rules: [
      {
        test: /\.(pdf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'files/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}
};
