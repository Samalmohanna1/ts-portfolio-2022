import { Box, Flex, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

interface HeroProps {}

const Hero: React.FunctionComponent<HeroProps> = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [ready])
  return (
    <div className='hero-gradient'>
      <Flex
        minH='100vh'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
      >
        <Heading variant='heading128' as='h1'>
          Sam
        </Heading>

        <Heading variant='heading48'>Almohanna</Heading>
        {ready && (
          <Box
            height='3rem'
            width='100%'
            bgGradient='linear(to-r, primaryOrange, darkOrange)'
            bgClip='text'
            fontSize='3xl'
            fontWeight='bold'
          >
            <TypeAnimation
              cursor={false}
              sequence={[
                'Creative Developer',
                2000,
                'Product Designer',
                2000,
                'UX Designer',
                2000,
                'Problem Solver',
                2000,
                'UX Engineer',
                2000,
              ]}
              speed={60}
              wrapper='h3'
              repeat={Infinity}
            />
          </Box>
        )}
      </Flex>
    </div>
  )
}

export default Hero
