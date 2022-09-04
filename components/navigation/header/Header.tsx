import { Flex } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import Logo from '../../logo/Logo'
import NavLinks from '../navLinks/NavLinks'

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <Flex direction={'row'} align={'center'} justifyContent={'space-between'}>
      <Logo />
      <NavLinks />
    </Flex>
  )
}

export default Header
