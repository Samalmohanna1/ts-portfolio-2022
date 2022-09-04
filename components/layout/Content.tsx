import { Box } from '@chakra-ui/react'
import Hero from '../hero/Hero'

interface ContentProps {}

const Content: React.FunctionComponent<ContentProps> = () => {
  return (
    <Box>
      <Hero />
    </Box>
  )
}

export default Content
