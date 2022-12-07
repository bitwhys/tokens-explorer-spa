import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { tokens } from '../../styles/globalTokens.css'

export const buttonStyles = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: tokens.spacing['2'],
    borderRadius: tokens.radii['4'],
    border: 0,
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 1.125,
    cursor: 'pointer',
  },
  variants: {
    variant: {
      solid: {
        background: tokens.colors.fill.purple.primary,
        color: 'white',
        ':hover': {
          background: tokens.colors.fill.purple['primary-variant'],
        },
        ':disabled': {
          background: tokens.colors.fill.purple['primary-variant'],
          opacity: 0.5,
          cursor: 'default',
        },
      },
      ghost: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'white',
        color: 'black',
        backgroundColor: 'transparent',
      },
    },
    size: {
      base: {
        paddingInline: tokens.spacing['4'],
        paddingBlock: tokens.spacing['2'],
      },
      lg: {
        paddingInline: tokens.spacing['6'],
        paddingBlock: tokens.spacing['3'],
      },
      sm: {
        paddingInline: tokens.spacing['3'],
        paddingBlock: tokens.spacing['1.5'],
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'base',
  },
})

export const iconWrapperStyles = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: tokens.spacing['5'],
  width: tokens.spacing['5'],
})
