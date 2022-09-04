import { Box, Heading, VStack } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import Header from '../navigation/header/Header'

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <Box height='100vh'>
      <Header />
      <VStack p='4rem 0' spacing='-7'>
        <Heading variant='heading128' as='h1'>
          Sam
        </Heading>
        <Heading variant='heading48'>Almohanna</Heading>
      </VStack>
    </Box>
  )
}

export default Hero
