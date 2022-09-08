import { Stack } from '@chakra-ui/react'
import BtnLink from './BtnLink'

interface NavLinksProps {}

const NavLinks: React.FunctionComponent<NavLinksProps> = () => {
  return (
    <Stack
      direction={'row'}
      spacing={[2, 8]}
      justifyContent='center'
      alignItems='center'
      textAlign='center'
    >
      <BtnLink url='#portfolioSection' label='Portfolio' />
      <BtnLink url='#aboutSection' label='About' />
      <BtnLink url='#contactSection' label='Contact' />
    </Stack>
  )
}

export default NavLinks
