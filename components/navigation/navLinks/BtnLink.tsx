import { Box, Link, Text } from '@chakra-ui/react'

interface BtnLinkProps {
  url: string
  label: string
}

const BtnLink: React.FunctionComponent<BtnLinkProps> = ({ url, label }) => {
  return (
    <Link href={url} style={{ textDecoration: 'none' }}>
      <Box
        bg='transparent'
        _hover={{ bg: 'lightOrange' }}
        width='fit-content'
        p={['.6rem', '.6rem 2rem']}
        m='.6rem 0'
        borderRadius={8}
        textAlign='center'
      >
        <Text variant='interactiveNavItem18Bd'>{label}</Text>
      </Box>
    </Link>
  )
}

export default BtnLink
