const React = require('react')
const { ServerStyleSheet } = require('styled-components')

module.exports = async function enhanceApp(ctx) {
  
  ctx.sheets = new ServerStyleSheet()
  return App => props => ctx.sheets.collectStyles(<App {...props} />)
}
