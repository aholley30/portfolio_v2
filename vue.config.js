const { defineConfig } = require('@vue/cli-service')

const fs = require('fs');
const webpack = require('webpack');
const baseDirectory = './src/assets/project-images/';
const imageDirectories = fs.readdirSync(baseDirectory);
let dirList = {};
let temp = '';
imageDirectories.forEach((imageFolderName) => {
  // temp = 'pine' + imageFolderName;
  dirList[imageFolderName] = fs.readdirSync(baseDirectory + imageFolderName);
});
console.log(dirList);
console.log(imageDirectories);
console.log(JSON.stringify(dirList));
console.log(JSON.parse(JSON.stringify(dirList)));
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        IMAGE_LF: JSON.stringify(dirList),
      }), 
    ],
  },
});
