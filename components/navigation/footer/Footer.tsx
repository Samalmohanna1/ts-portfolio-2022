import { Box, Heading, Icon, Link, Stack, Text } from '@chakra-ui/react'

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <Box
      id='contactSection'
      p={['2rem', '2rem', '2rem 5rem', '2rem 7rem']}
      bg='softBlack'
      color='white'
    >
      <Stack
        direction={['column', 'column', 'column', 'row']}
        justifyContent='space-between'
        alignItems='center'
      >
        <Box p='2rem 0' textAlign={['center', 'center', 'center', 'left']}>
          <Heading variant='heading48'>Contact</Heading>
          <Text color='white'>Have questions? Reach out today!</Text>
          <Link
            href='https://www.linkedin.com/in/sumayahalmohanna/'
            style={{ textDecoration: 'none' }}
            isExternal
          >
            <Box
              bg='lightOrange'
              _hover={{ bg: 'primaryOrange' }}
              width={['full', 'fit-content']}
              textAlign={['center', 'left']}
              p='.6rem 2rem'
              m='.6rem 0rem'
              borderRadius={8}
            >
              <Text variant='interactiveNavItem18Bd' color='softBlack'>
                Connect on Linkedin
              </Text>
            </Box>
          </Link>
        </Box>
        <Box p='2rem 0'>
          <Stack direction='row' justifyContent='space-evenly' pb='2rem'>
            <Link
              href='https://www.linkedin.com/in/sumayahalmohanna/'
              isExternal
            >
              <Icon fontSize='2.5em' color='primaryOrange'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                  <path
                    fill='currentcolor'
                    d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
                  />
                </svg>
              </Icon>
            </Link>
            <Link href='https://github.com/samalmohanna1' isExternal>
              <Icon fontSize='2.5rem' color='primaryOrange'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'>
                  <path
                    fill='currentcolor'
                    d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
                  />
                </svg>
              </Icon>
            </Link>
            <Link href='https://dribbble.com/Sam_A' isExternal>
              <Icon fontSize='2.5rem' color='primaryOrange'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                  <path
                    fill='currentcolor'
                    d='M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z'
                  />
                </svg>
              </Icon>
            </Link>
          </Stack>
          <Text color='white' textAlign='center'>
            © 2022 - Sam Almohanna
          </Text>
        </Box>
      </Stack>
    </Box>
  )
}

export default Footer

{
  /* <Text color='white'>
            Have questions? Reach out on{' '}
            <Link
              href='https://www.linkedin.com/in/sumayahalmohanna/'
              color='primaryOrange'
              isExternal
            >
              Linkedin
            </Link>{' '}
            today!
          </Text> */
}
