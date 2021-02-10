const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
    home: './src/pages/home/index.ts',
    about: './src/pages/about/index.ts'
  },
  output: {
    filename: 'pages/[name]/index.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "__VUE_OPTIONS_API__": true,
      "__VUE_PROD_DEVTOOLS__": false
    })
  ]
}
