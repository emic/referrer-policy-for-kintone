const path = require('path');
const KintonePlugin = require('@kintone/webpack-plugin-kintone-plugin');

module.exports = {
  entry: {
    "referrer-policy-for-kintone": './src/js/referrer-policy-for-kintone.js',
  },
  output: {
    path: path.resolve(__dirname, 'src', 'js'),
    filename: '[name].min.js'
  },
  plugins: [
    new KintonePlugin({
      manifestJSONPath: './src/manifest.json',
      privateKeyPath: './private.ppk',
      pluginZipPath: './dist/referrer-policy-for-kintone-v2.0.zip'
    })
  ]
};