import { Box, Stack, Text } from '@chakra-ui/react'
import ProjectCarousel from '../projectCarousels/ProjectCarousel'

interface ProjectBodyProps {
  details: string
  projectId: string
  numOfSlides: number
}

const ProjectBody: React.FunctionComponent<ProjectBodyProps> = ({
  details,
  projectId,
  numOfSlides,
}) => {
  return (
    <Stack
      direction='column-reverse'
      justifyContent='center'
      alignItems='center'
      p={['1.5rem 0', '2rem 0']}
    >
      <Box
        p='1rem 0'
        position='relative'
        top={['-1rem', '-1rem', '-2rem', '-3rem']}
      >
        <Box borderRadius={8} boxShadow='lg' p='1rem 2rem'>
          <Text>{details}</Text>
        </Box>
      </Box>
      <Box w={['full', 'full', 'full', 'full', 'container.lg']}>
        <ProjectCarousel carouselId={projectId} numOfSlides={numOfSlides} />
      </Box>
    </Stack>
  )
}

export default ProjectBody
