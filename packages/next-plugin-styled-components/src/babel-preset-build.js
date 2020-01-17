module.exports = function babelPresetBuild(options, pluginConfig) {
  options = {
    ...options,
    plugins: [
      ...(options.plugins || []),
      [
        "babel-plugin-styled-components",
        {
          ssr: true,
          displayName: true,
          pure: true,
        }
      ]
    ]
  }
}