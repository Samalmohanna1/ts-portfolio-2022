import { Image, Link, Stack } from '@chakra-ui/react'
interface ClickToPlayProps {
  imgUrl: string
  imgAlt: string
  linkUrl: string
  thumbnailClass: string
}

const ClickToPlay: React.FunctionComponent<ClickToPlayProps> = ({
  imgUrl,
  imgAlt,
  linkUrl,
  thumbnailClass,
}) => {
  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      p={['1.5rem 0', '2rem 0']}
    >
      <Link href={linkUrl} isExternal>
        <Image
          src={imgUrl}
          alt={imgAlt}
          maxW='800px'
          width='100%'
          className={thumbnailClass}
        />
      </Link>
      {/* <Link href={linkUrl} isExternal>
        <Image
          src={imgUrl}
          alt={imgAlt}
          maxW='1000px'
          width='100%'
          borderRadius='2rem'
          className={thumbnailClass}
        />
      </Link> */}
    </Stack>
  )
}

export default ClickToPlay
