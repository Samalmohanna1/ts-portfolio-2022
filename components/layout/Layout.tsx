import { Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Footer from '../navigation/footer/Footer'

interface LayoutProps {
  children?: ReactNode | undefined
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Flex direction='column'>
      <Box>{children}</Box>
      <Footer />
    </Flex>
  )
}

export default Layout
