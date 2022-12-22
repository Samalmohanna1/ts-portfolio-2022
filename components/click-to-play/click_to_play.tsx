import { Image, Link, Stack } from '@chakra-ui/react'
interface ClickToPlayProps {
  imgUrl: string
  imgAlt: string
  gameUrl: string
}

const ClickToPlay: React.FunctionComponent<ClickToPlayProps> = ({
  imgUrl,
  imgAlt,
  gameUrl,
}) => {
  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      p={['1.5rem 0', '2rem 0']}
    >
      <Link href={gameUrl} isExternal>
        <Image
          src={imgUrl}
          alt={imgAlt}
          maxW='1000px'
          width='100%'
          borderRadius='2rem'
          className='gameThumbnails'
        />
      </Link>
    </Stack>
  )
}

export default ClickToPlay
