export const TextStyles = {
  baseStyle: {
    fontWeight: '400',
    maxW: '32.5rem',
    color: 'softBlack',
  },
  sizes: {},
  variants: {
    subheading24Bd: {
      fontSize: '1.5rem',
      lineHeight: '2.25rem',
      fontWeight: '600',
    },
    subheading24Md: {
      fontSize: '1.5rem',
      lineHeight: '2.25rem',
      fontWeight: '500',
    },
    subheading18Bd: {
      fontSize: '1.125rem',
      lineHeight: '2rem',
      fontWeight: '600',
    },
    subheading18Md: {
      fontSize: '1.125rem',
      lineHeight: '2rem',
      fontWeight: '500',
    },
    paragraph18Rg: {
      fontSize: '1.125rem',
      lineHeight: '2rem',
    },
    interactiveNavItem18Bd: {
      fontSize: '1.125rem',
      fontWeight: '600',
      lineHeight: '1.5rem',
      _hover: {
        color: 'lightOrange',
      },
    },
    interactiveHyperLink18: {
      fontSize: '1.125rem',
      lineHeight: '2rem',
      fontWeight: '500',
      _hover: {
        color: 'lightPurple',
      },
    },
    interactiveHyperLink18Alt: {
      fontSize: '1.125rem',
      lineHeight: '2rem',
      fontWeight: '500',
      color: 'white',
    },
  },
  defaultProps: {
    variant: 'paragraph18Rg',
  },
}
