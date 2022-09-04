import { Box, Image, Stack, StackDirection, Text } from '@chakra-ui/react'

interface ProjectBodyProps {
  details: string
  img: string
  alt: string
  layout: StackDirection
}

const ProjectBody: React.FunctionComponent<ProjectBodyProps> = ({
  details,
  img,
  alt,
  layout,
}) => {
  return (
    <Stack
      direction={layout}
      justifyContent='space-evenly'
      alignItems='center'
      p={['1.5rem 0', '2rem 0']}
    >
      <Box maxW='25rem' p={['2rem 0', '2rem 0', '2rem 0', '']}>
        <Text>{details}</Text>
      </Box>
      <Box maxW='35rem'>
        <Image src={img} alt={alt} sizes='auto' />
      </Box>
    </Stack>
  )
}

export default ProjectBody
