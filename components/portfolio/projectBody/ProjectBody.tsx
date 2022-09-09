import {
  Box,
  Divider,
  Image,
  Stack,
  StackDirection,
  Text,
} from '@chakra-ui/react'

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
      justifyContent='center'
      alignItems='center'
      p={['1.5rem 0', '2rem 0']}
    >
      <Box maxW='25rem' p={['2rem 0', '2rem 0', '2rem 0', '']}>
        <Box borderRadius={8} boxShadow='lg' p='1rem 2rem'>
          <Text>{details}</Text>
        </Box>
      </Box>
      <Box>
        <Divider
          border='.185 solid'
          borderColor='black'
          orientation='horizontal'
          width={['', '', '', '', '4rem', '8rem', '12rem']}
        />
      </Box>
      <Box maxW='35rem'>
        <Image src={img} alt={alt} sizes='auto' />
      </Box>
    </Stack>
  )
}

export default ProjectBody
