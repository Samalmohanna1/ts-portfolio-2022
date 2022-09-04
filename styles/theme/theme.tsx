import { extendTheme, theme as base } from '@chakra-ui/react'
import { Colors as colors } from './colors'
import { HeadingStyles as Heading } from './components/headingStyles'

const theme = extendTheme({
  fonts: {
    heading: `Yeseva One, ${base.fonts?.heading}`,
    body: `Nunito, ${base.fonts?.body}`,
  },
  colors,
  components: {
    Heading,
  },
})

export default theme
