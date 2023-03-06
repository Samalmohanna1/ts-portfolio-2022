import { Box, Image, Link, Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import ClickToPlay from '../click-to-play/click_to_play'
import ProjectBody from './projectBody/ProjectBody'
import ProjectHeader from './projectHeader/ProjectHeader'

interface PortfolioProps {}

const Portfolio: React.FunctionComponent<PortfolioProps> = () => {
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
  return (
    <Box id='portfolioSection' p={['2rem', '2rem', '2rem 5rem', '2rem 7rem']}>
      <Text variant='subheading24Md' color='lightPurple'>
        Recent work
      </Text>
      <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.65 }}
      >
        <Box p='4rem 0'>
          <motion.div variants={projectAnimate}>
            <ProjectHeader
              title='Savings by Vehicle tool'
              role='Designer &amp; Developer'
              date='2022'
              link='https://start.caribou.com'
              brief='The Savings by Vehicle tool is a web app built to increase organic search growth as well as conversion.
This tool dynamically builds hundreds of landing pages that are unique by vehicle make and model.'
            />
          </motion.div>
          <motion.div variants={projectAnimate}>
            <ProjectBody
              details='The tool allows visitors to look up savings based on a vehicles make and model. When a vehicles make and model is selected the tool builds the requested page on demand and serves it.'
              projectId='1'
              numOfSlides={5}
            />
          </motion.div>
        </Box>
      </motion.div>

      <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.65 }}
      >
        <Box p='4rem 0'>
          <motion.div variants={projectAnimate}>
            <ProjectHeader
              title='Auto loan refinance calculator'
              role='Designer &amp; Developer'
              date='2022'
              link='https://samalmohanna1.github.io/calculator-v3-demo/index.html'
              brief='When building a calculator tool it is easy to get caught up in formulas and lose sight of what really matters: Is it useful? 
          Unless you are familiar with refinancing a car loan, the typical refinance calculator is overwhelming. The goal for this calculator was to make it simple, intuitive, and useful.'
            />
          </motion.div>
          <motion.div variants={projectAnimate}>
            <ProjectBody
              details='The calculator was simplified by removing unnecessary inputs and utilizing the correct input types to ensure ease of use. Results are highlighted and displayed in a clear way.'
              projectId='2'
              numOfSlides={5}
            />
          </motion.div>
        </Box>
      </motion.div>

      <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.65 }}
      >
        <Box p='4rem 0'>
          <motion.div variants={projectAnimate}>
            <ProjectHeader
              title='Custom code integrations'
              role='Developer'
              date='2022'
              brief='Marketing teams need to work fast, especially in the digital product space. Using a drag and drop landing page builder can have its benefits, but in many ways they are restricting and limited in selection. This creates brand inconsistency across the online experience.'
            />
          </motion.div>
          <motion.div variants={projectAnimate}>
            <ProjectBody
              details='In my last role, I built custom drop-down menus, carousel sliders, forms, and more to maintain brand consistency and provide familiar interaction for users.'
              projectId='3'
              numOfSlides={4}
            />
          </motion.div>
        </Box>
      </motion.div>
      <Text variant='subheading24Md' color='lightPurple'>
        Passion Projects
      </Text>

      <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.65 }}
      >
        <Box p='4rem 0'>
          <motion.div variants={projectAnimate}>
            <ProjectHeader
              title='FishyFishy'
              role='Designer & Developer'
              date='2022'
              link='https://sleepy-sam.itch.io/fishyfishy'
              brief="FishyFishy is an arcade style game I designed for Github's Game Off 2022. For this game jam, I had one month to build a game from scratch and the theme was Cliches. I built this game in GDevelop, illustrated and animated all graphics, and used free sfx and music. Game concept: The player has two minutes to eat as many fish as possible. Eating the wrong fish will end the game. Easy, right?"
            />
          </motion.div>
          <motion.div variants={projectAnimate}>
            <Stack
              direction={['column', 'column', 'column', 'row']}
              gap='2rem'
              justifyContent='space-evenly'
            >
              <Box position='relative'>
                <Box position='absolute' bottom='0' right='20%'>
                  <Box position='relative'>
                    <Box position='absolute' w='70%' left='15%' top='10%'>
                      <Image
                        src='games/fishyfishy/fishy-gif.gif'
                        alt=''
                        maxWidth='800px'
                        width='100%'
                        className=''
                      />
                    </Box>
                    <Image
                      src='games/fishyfishy/pixel.svg'
                      alt=''
                      maxWidth='800px'
                      width='100%'
                      className=''
                    />
                  </Box>
                </Box>
                <Image
                  src='games/fishyfishy/iPad.svg'
                  alt=''
                  maxWidth='800px'
                  width='100%'
                  className=''
                />
              </Box>
              <Stack justifyContent='center' alignItems='center' gap='2rem'>
                <Image
                  src='games/fishyfishy/fishyfishy.png'
                  alt=''
                  maxWidth='600px'
                  width='100%'
                  borderRadius='2rem'
                  className=''
                />
                <Stack
                  direction={['column', 'column', 'column', 'row']}
                  justifyContent='center'
                  alignItems='center'
                >
                  <Text variant='subheading24Bd' textAlign='center'>
                    Available now on Google Play!
                  </Text>
                  <Link
                    href='https://play.google.com/store/apps/details?id=com.SleepySam.FishyFishy'
                    isExternal
                  >
                    <Image
                      src='games/fishyfishy/playstore-btn.svg'
                      alt='google playstore button'
                      maxW='200px'
                      width='100%'
                      className=''
                    />
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </motion.div>
        </Box>
      </motion.div>
      <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.65 }}
      >
        <Box p='4rem 0'>
          <motion.div variants={projectAnimate}>
            <ProjectHeader
              title='Bat out of Hell'
              role='Designer & Developer'
              date='2022'
              brief='I designed Bat out of Hell for ScoreSpace Jam #23. This was a 3 day game jam, where we had to build a game from scratch and the top requirement was to include a leaderboard. I built this game in GDevelop, illustrated and animated all graphics, and used free/paid sfx and music. Game concept: Welcome to Hell.
              The only way out is to earn your way out. Collect all the coins and jewels to reach the top of "The Bat Race" leaderboard to be considered for release.'
            />
          </motion.div>
          <motion.div variants={projectAnimate}>
            <ClickToPlay
              imgUrl='games/booh.png'
              imgAlt='Link to game title: Bat out of Hell.'
              linkUrl='https://sleepy-sam.itch.io/bat-out-of-hell'
              thumbnailClass='gameThumbnails'
            />
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  )
}

export default Portfolio
