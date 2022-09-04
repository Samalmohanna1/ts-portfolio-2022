import { Flex, Heading } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <Flex
      minH='100vh'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      bg='lightCream'
    >
      <Heading variant='heading128' as='h1'>
        Sam
      </Heading>

      <Heading variant='heading48'>Almohanna</Heading>
    </Flex>
  )
}

export default Hero
