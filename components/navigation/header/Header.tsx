import { Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Logo from '../../logo/Logo'
import NavLinks from '../navLinks/NavLinks'

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const [scroll, setScroll] = useState(false)

  const handleScroll = () => {
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (
    <Stack
      direction={'row'}
      alignItems='center'
      justifyContent='space-between'
      position='fixed'
      width='full'
      p={['2rem', '2rem', '2rem 5rem', '2rem 7rem']}
      height={1}
      bg={scroll ? 'lightPurple' : 'transparent'}
    >
      <Logo />
      <NavLinks />
    </Stack>
  )
}

export default Header
