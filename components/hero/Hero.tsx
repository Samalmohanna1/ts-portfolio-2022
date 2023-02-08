import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import ClickToPlay from '../click-to-play/click_to_play'

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
        <Box maxW='28rem' display={['none', 'none', 'grid']}>
          <Box position='relative'>
            <Text
              variant='subheading18Bd'
              position='absolute'
              bottom='20%'
              color='softBlack'
              backgroundColor='lightCream'
              padding='.5rem 2rem'
            >
              Visit My Scroll Animated Portfolio Site
            </Text>
            <ClickToPlay
              imgUrl='3d-intro.webp'
              imgAlt='Link to 3d animated portfolio.'
              linkUrl='https://gsap-portfolio-2023.vercel.app/'
              thumbnailClass='heroThumbnails'
            />
          </Box>
          <Box position='relative'>
            <Text
              variant='subheading18Bd'
              position='absolute'
              bottom='20%'
              color='softBlack'
              backgroundColor='lightCream'
              padding='.5rem 2rem'
            >
              Visit My 3D Virtual Gallery
            </Text>
            <ClickToPlay
              imgUrl='3d.jpg'
              imgAlt='Link to 3d Virtual Gallery.'
              linkUrl='https://sam-3d-gallery.vercel.app/'
              thumbnailClass='heroThumbnails'
            />
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Hero
