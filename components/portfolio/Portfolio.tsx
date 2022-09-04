import { Box, Text } from '@chakra-ui/react'
import ProjectBody from './projectBody/ProjectBody'
import ProjectHeader from './projectHeader/ProjectHeader'

interface PortfolioProps {}

const Portfolio: React.FunctionComponent<PortfolioProps> = () => {
  return (
    <Box id='portfolioSection' p={['2rem', '2rem', '2rem 5rem', '2rem 7rem']}>
      <Text variant='subheading24Md' color='lightPurple'>
        Recent work
      </Text>
      <Box p='4rem 0'>
        <ProjectHeader
          title='Savings by Vehicle tool'
          role='Designer &amp; Developer'
          date='2022'
          link='#'
          brief='The Savings by Vehicle tool is a web app built to increase organic search growth as well as conversion.
This tool dynamically builds hundreds of landing pages that are unique by vehicle make and model.'
        />
        <ProjectBody
          details='The tool allows visitors to look up savings based on a vehicles make and model.'
          img='fvbs-search.png'
          alt='find vehicles by savings search'
          layout={['column', 'column', 'column', 'row']}
        />
        <ProjectBody
          details='When a vehicles make and model is selected the tool builds the requested page on demand and serves it.'
          img='fvbs-page.png'
          alt='find vehicles by savings page'
          layout={['column', 'column', 'column', 'row-reverse']}
        />
      </Box>
      <Box p='4rem 0'>
        <ProjectHeader
          title='Auto loan refinance calculator'
          role='Designer &amp; Developer'
          date='2022'
          link='#'
          brief='A simple and intuitive auto loan refiance calculator. '
        />
        <ProjectBody
          details='A simple and intuitive auto loan refiance calculator. '
          img='calculator.png'
          alt='Auto loan refinance calculator project'
          layout={['column', 'column', 'column', 'row']}
        />
      </Box>

      <Box p='4rem 0'>
        <ProjectHeader
          title='Custom code integrations'
          role='Developer'
          date='2022'
          brief="Using a drag and drop landing page builder can have it's benifits, but in many ways they are restricting and limited in selection. In my last role, I built custom dropdown elements, carousel sliders, and form components to insure brand consistancy across platforms."
        />
        <ProjectBody
          details='Something here'
          img='code-integrations.png'
          alt='Custom code integrations'
          layout={['column', 'column', 'column', 'row-reverse']}
        />
      </Box>
    </Box>
  )
}

export default Portfolio
