import { Image } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = () => {
  return <Image src='/logo.svg' alt='Sam Almohanna Logo' maxW='3rem' />
}

export default Logo
