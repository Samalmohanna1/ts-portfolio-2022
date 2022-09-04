import { Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Footer from '../navigation/footer/Footer'
import Header from '../navigation/header/Header'

interface LayoutProps {
  children?: ReactNode | undefined
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Flex direction='column'>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Flex>
  )
}

export default Layout
