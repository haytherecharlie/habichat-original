module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            src: './src/',
            assets: './src/assets/',
            components: './src/components/',
            config: './src/config/',
            lib: './src/lib/',
            routes: './src/routes/',
            views: './src/views/'
          }
        }
      ]
    ]
  }
}
