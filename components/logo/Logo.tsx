import { Image } from '@chakra-ui/react'
import Link from 'next/link'
import { FunctionComponent } from 'react'

interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <Link href='/' aria-label='Go to website root url'>
      <Image
        src='/logo.svg'
        alt='Sam Almohanna Logo'
        width='3rem'
        height='3rem'
        _hover={{ cursor: 'pointer' }}
      />
    </Link>
  )
}

export default Logo
