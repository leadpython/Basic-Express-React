module.exports = {
  entry: './client/client.js',
  output: {
    path: './client',
    filename: 'client.bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
