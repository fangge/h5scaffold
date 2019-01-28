module.exports = {
  plugins: [
    require('autoprefixer')({
        browsers: [
            'ie >= 8',
            'ie_mob >= 10',
            'ff >= 26',
            'chrome >= 20',
            'safari >= 6',
            'opera >= 12',
            'Firefox >= 24',
            'Explorer >= 8',
            'ios >= 5',
            'android >= 2.3',
            'bb >= 10',
            'last 1 version'
        ]
    })
  ]
}
