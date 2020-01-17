module.exports = async function getStyles(ctx) {
  const styleElement = ctx.sheets.getStyleElement()

  // Seal the stylesheet to prevent memory leaks
  ctx.sheets.seal();

  return styleElement
}
