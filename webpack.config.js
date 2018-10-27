const path=require('path')
const ExtractTextPlugin=require('extract-text-webpack-plugin')
module.exports={
  mode:'development',
  entry:['babel-polyfill',path.resolve(__dirname,'src/js/index.js')],
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js',
  },
  module:{
    rules:[
      {
        test:/\.m?js$/,
        exclude:/(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
          options:{
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      },
      {
        test:/\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use:{
          loader:'url-loader',
          options:{
            limit:1000000
          }
        }
      },
      {
        test:/\.css$/,
        use:ExtractTextPlugin.extract({
          use:"css-loader"
        }),
      }
    ]
  },
  plugins:[
    new ExtractTextPlugin("css/[name].css")
  ]
}
