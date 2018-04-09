// import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import json from "rollup-plugin-json";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";//Global replacement
import uglify from "rollup-plugin-uglify";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import postcss from "rollup-plugin-postcss";
//post class
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';
//suport typescript
import typescriptPlugin from 'rollup-plugin-typescript';
import typescript from 'typescript';
export default {
  input:"src/index.tsx",
  output:{
     file:"./dist/index.min.js",
     format:"cjs"
  },
  plugins: [
    postcss({
      extensions:[".css","./scss"],
      plugins:[
       simplevars(),
       nested(),
       cssnext({ warnForDuplicates: false, }),
       cssnano()
      ]
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules' // copywith the external
      }
    }),
    commonjs(),
    // babel({
    //   exclude: 'node_modules/**'
    // }),
    typescriptPlugin({
      exclude: 'node_modules/**',
      //import the vision of the lateset typescript
      typescript,
      importHelpers:true
    }),
    replace({
      ENV:JSON.stringify(process.env.NODE_ENV||"development")//Global replace the ENV
    }),
    // production uglify
    (process.env.NODE_ENV==="production"&&uglify({
      compress:{
        screw_ie8:true,
        warning:false
      },output: {
        comments: false
      },
      sourceMap: false,
    })),
    serve({
      open:true,//open the browser
      contentBase:"./",
      historyApiFallback:true,
      host:"localhost",
      port:8080
    }),
    livereload()
  ],
  soucemap:process.env.NODE_ENV==="development"?true:false,
  treeshake: true
}
