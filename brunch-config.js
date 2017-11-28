module.exports = {
  // CSS Styles here
  // npm: {
  //   styles: {
  //     codemirror: [
  //       'lib/codemirror.css',
  //       'theme/blackboard.css',
  //       'addon/scroll/simplescrollbars.css',
  //     ],
  //   },
  // },
  files: {
    javascripts: {
      joinTo: {
        './js/vendor.js': /^(?!app)/,
        './js/app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: {
        './css/vendor.css': /^(?!app)/,
        './css/app.css': /^app/
      }
    },
    templates: {
      joinTo: './js/app.js'
    }
  },
  plugins: {
    vue: {
      extractCSS: true,
      out: './public/css/components.css'
    },

    babel: {
      presets: [['env', {
        'targets': {
          'browsers': ['last 2 versions'],
        },
      }]],
      plugins: [['transform-runtime', {
        'polyfill': false,
      }]],
    }
  }
}