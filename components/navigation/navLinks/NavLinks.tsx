import { Link, Stack } from '@chakra-ui/react'

interface NavLinksProps {}

const NavLinks: React.FunctionComponent<NavLinksProps> = () => {
  return (
    <Stack direction={'row'} spacing={8}>
      <Link>Portfolio</Link>
      <Link>About</Link>
      <Link>Contact</Link>
    </Stack>
  )
}

export default NavLinks
