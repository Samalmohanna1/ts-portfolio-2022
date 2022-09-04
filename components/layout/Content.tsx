import { Box } from '@chakra-ui/react'
import About from '../about/About'
import Hero from '../hero/Hero'
import Portfolio from '../portfolio/Portfolio'

interface ContentProps {}

const Content: React.FunctionComponent<ContentProps> = () => {
  return (
    <Box>
      <Hero />
      <Portfolio />
      <About />
    </Box>
  )
}

export default Content
