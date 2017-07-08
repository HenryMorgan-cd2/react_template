module.exports = {
  test: /\.(js|jsx)?(\.erb)?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: [
      ['env', { modules: false }],
      'stage-0',
      'react',
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
    ]
  }
}
