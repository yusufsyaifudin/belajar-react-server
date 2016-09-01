export default (webpackConfig) => {

  webpackConfig.resolve.extensions = ['', '.js', '.jsx']

  return webpackConfig
}