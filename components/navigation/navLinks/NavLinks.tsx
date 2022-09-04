import { Link, Stack, Text } from '@chakra-ui/react'

interface NavLinksProps {}

const NavLinks: React.FunctionComponent<NavLinksProps> = () => {
  return (
    <Stack direction={'row'} spacing={8}>
      <Text variant='interactiveNavItem18Bd'>
        <Link href='#portfolioSection'>Portfolio</Link>
      </Text>
      <Text variant='interactiveNavItem18Bd'>
        <Link href='#aboutSection'>About</Link>
      </Text>
      <Text variant='interactiveNavItem18Bd'>
        <Link href='#contactSection'>Contact</Link>
      </Text>
    </Stack>
  )
}

export default NavLinks
