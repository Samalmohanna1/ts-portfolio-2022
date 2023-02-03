import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import ClickToPlay from '../click-to-play/click_to_play'

interface HeroProps {}

const Hero: React.FunctionComponent<HeroProps> = () => {
  const [ready, setReady] = useState(false)

  const projectAnimate = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  }

  useEffect(() => {
    setReady(true)
  }, [ready])
  return (
    <div className='hero-gradient'>
      <Flex
        minH='100vh'
        flexDirection={['column', 'row']}
        justifyContent='space-evenly'
        alignItems='center'
        textAlign='center'
      >
        <Box>
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
                  'Product Designer',
                  2000,
                  'UX Designer',
                  2000,
                  'Creative Developer',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                speed={60}
                wrapper='h3'
                repeat={Infinity}
              />
            </Box>
          )}
        </Box>
        <Box
          maxW='28rem'
          position='relative'
          display={['none', 'none', 'flex']}
        >
          <motion.div variants={projectAnimate}>
            <Text
              variant='subheading18Bd'
              position='absolute'
              bottom='20%'
              color='lightCream'
              backgroundColor='lightPurple'
              padding='.5rem 2rem'
            >
              Visit My Scroll Animated Portfolio Site
            </Text>
            <ClickToPlay
              imgUrl='3d-intro.webp'
              imgAlt='Link to 3d animated portfolio.'
              gameUrl='https://gsap-portfolio-2023.vercel.app/'
            />
          </motion.div>
        </Box>
      </Flex>
    </div>
  )
}

export default Hero
