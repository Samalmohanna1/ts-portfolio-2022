import { Box, Text } from '@chakra-ui/react'

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  return (
    <Box id='aboutSection' p={['2rem', '2rem', '2rem 5rem', '2rem 7rem']}>
      <Text variant='subheading24Md' color='lightPurple'>
        About sam
      </Text>
    </Box>
  )
}

export default About
