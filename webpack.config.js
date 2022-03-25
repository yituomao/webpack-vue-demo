 const path=require('path')
 const HtmlWebpackPlugin=require("html-webpack-plugin")
 const {VueLoaderPlugin}=require('vue-loader')
 const {CleanWebpackPlugin}=require('clean-webpack-plugin')
 module.exports={
     entry:'./src/main.js',
     output:{
        filename:'app.js',
        path:path.resolve(__dirname,'dist')
     },
     mode:'production',
     devServer:{
        //  contentBase:path.join(__dirname,'public'),
         open:true,
     },

     module:{
         rules:[
             {
               test:/\.vue$/,
               loader:'vue-loader'
             },
             {
                 test:/\.css$/,
                 use:['style-loader','css-loader']
             },
             {
                 test:/\.s[ac]ss$/,
                 use:['style-loader','css-loader','sass-loader']
             }
         ]
     },
     plugins:[
         new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new CleanWebpackPlugin()
     ],
     resolve:{
         alias:{
            //  'vue':'vue/dist/vue'
         }
     }
 }