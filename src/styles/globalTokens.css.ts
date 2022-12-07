import { createGlobalTheme } from '@vanilla-extract/css'
import { radii, colors, spacing } from './tokens'

export const tokens = createGlobalTheme(':root', { colors, radii, spacing })
