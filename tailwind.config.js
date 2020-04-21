/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        main: '#222b6e',
        secondary: '#4a3f3b',
        background: '#dbcdc2'
      },
      fontFamily: {
        sans: [
          'Brandon',
          ...defaultTheme.fontFamily.sans
        ]
      }
    }
  },
  variants: {},
  plugins: []
}
