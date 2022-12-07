import { globalStyle } from '@vanilla-extract/css'

/**
 * Adopted from Josh W. Comeau's Custom CSS `Reset`
 * reference: https://www.joshwcomeau.com/css/custom-css-reset/
 */

globalStyle('*, *::before, *::after', {
  // 1. Use a more-intuitive box-sizing model.
  boxSizing: 'border-box',
})

globalStyle('*', {
  // 2. Remove default margin
  margin: 0,
})

globalStyle('html,body', {
  // 3. Allow percentage-based heights in the application
  height: '100%',
  fontFamily: `'IBM Plex Sans',sans-serif`,
})

globalStyle('body', {
  /**
   * Typographic tweaks!
   * 4. Add accessible line-height
   * 5. Improve text rendering
   */
  lineHeight: 1.5,
  WebkitFontSmoothing: 'antialised',
})

globalStyle('img, picture, video, canvas, svg', {
  // 6. Improve media defaults
  display: 'block',
  maxWidth: '100%',
})

globalStyle('input, button, textarea, select', {
  // 7. Remove built-in form typography styles
  font: 'inherit',
})

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  // 8. Avoid text overflows
  overflowWrap: 'break-word',
})

globalStyle('#root, #__next', {
  // 9. Create a root stacking context
  isolation: 'isolate',
})
