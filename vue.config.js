const { defineConfig } = require('@vue/cli-service')

const fs = require('fs');
const webpack = require('webpack');
const baseDirectory = './src/assets/project-images/';
const imageDirectories = fs.readdirSync(baseDirectory);
let dirList = {};

imageDirectories.forEach((imageFolderName) => {
  dirList[imageFolderName] = fs.readdirSync(baseDirectory + imageFolderName);
});

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
