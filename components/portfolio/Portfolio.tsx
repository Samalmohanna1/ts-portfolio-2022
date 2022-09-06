import { Box, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
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
              details='The tool allows visitors to look up savings based on a vehicles make and model.'
              img='fvbs-search.png'
              alt='find vehicles by savings search'
              layout={['column', 'column', 'column', 'row-reverse']}
            />
          </motion.div>
          <motion.div variants={projectAnimate}>
            <ProjectBody
              details='When a vehicles make and model is selected the tool builds the requested page on demand and serves it.'
              img='fvbs-page.png'
              alt='find vehicles by savings page'
              layout={['column', 'column', 'column', 'row']}
            />
          </motion.div>
        </Box>
      </motion.div>

      <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.3 }}
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
              img='calculator.png'
              alt='Auto loan refinance calculator project'
              layout={['column', 'column', 'column', 'row-reverse']}
            />
          </motion.div>
        </Box>
      </motion.div>

      <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.3 }}
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
              img='code-integrations.png'
              alt='Custom code integrations'
              layout={['column', 'column', 'column', 'row']}
            />
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  )
}

export default Portfolio
