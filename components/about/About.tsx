import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  const profilePicAnimate = {
    offscreen: {
      x: -10,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, -2, 2, -1, 1, 0],
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  }
  return (
    <Box
      id='aboutSection'
      p={['2rem', '2rem', '2rem 5rem', '2rem 7rem']}
      bgGradient='linear(to-tl, primaryPurple, lightPurple)'
    >
      <Text variant='subheading24Md' color='softBlack'>
        About Sam
      </Text>
      <Stack
        direction={['column', 'column', 'column', 'row']}
        justifyContent='space-evenly'
        alignItems='center'
        p={['1.5rem 0', '2rem 0']}
      >
        <Box maxW='35rem'>
          <motion.div
            variants={profilePicAnimate}
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{ once: false, amount: 0.4 }}
          >
            <Image
              src='laser-eyes-profile-pic.gif'
              alt='sam almohanna'
              fallbackSrc='profile-pic.webp'
              width='24rem'
              height='32.68rem'
              borderRadius={8}
            />
          </motion.div>
        </Box>
        <Box
          maxW='32rem'
          p={['2rem 0', '2rem 0', '2rem 0', '2rem']}
          textAlign={['left', 'center', 'center', 'left']}
        >
          <Heading variant='heading36' color='white' pb='2rem'>
            Creative Developer passionate about plants and good food. Frequently
            enjoys chill beats and Earl Grey while problem solving.
          </Heading>
          <Heading variant='heading36' color='white'>
            Sam is an empathetic Designer with over 6 years experience designing
            and developing digital products.
          </Heading>
        </Box>
      </Stack>
    </Box>
  )
}

export default About
