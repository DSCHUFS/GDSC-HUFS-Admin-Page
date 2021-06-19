module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/GDSC-HUFS-Admin-Page/'
    : '/',
  productionSourceMap: false,
  pwa: {
    name: 'GDSC HUFS Admin',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#4A90E2',
    msTileColor: '#4A90E2',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: "#ffffff"
    },
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  }
}