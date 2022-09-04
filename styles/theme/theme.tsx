import { extendTheme, theme as base } from '@chakra-ui/react'
import { Colors as colors } from './colors'
import { HeadingStyles as Heading } from './components/HeadingStyles'
import { TextStyles as Text } from './components/TextStyles'

const theme = extendTheme({
  fonts: {
    heading: `Yeseva One, ${base.fonts?.heading}`,
    body: `Nunito, ${base.fonts?.body}`,
  },
  colors,
  components: {
    Heading,
    Text,
  },
})

export default theme
