import {
  Box,
  Divider,
  Heading,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  StackDirection,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import ProjectCarousel from '../projectCarousels/ProjectCarousel'

interface ProjectBodyProps {
  title: string
  link?: string
  details: string
  img: string
  alt: string
  layout: StackDirection
  projectId: string
  numOfSlides: number
}

const ProjectBody: React.FunctionComponent<ProjectBodyProps> = ({
  title,
  link,
  details,
  img,
  alt,
  layout,
  projectId,
  numOfSlides,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Stack
      direction={layout}
      justifyContent='center'
      alignItems='center'
      p={['1.5rem 0', '2rem 0']}
    >
      <Box maxW='25rem' p={['2rem 0', '2rem 0', '2rem 0', '']}>
        <Box borderRadius={8} boxShadow='lg' p='1rem 2rem'>
          <Text>{details}</Text>
        </Box>
      </Box>
      <Box>
        <Divider
          border='.185 solid'
          borderColor='black'
          orientation='horizontal'
          width={['', '', '', '', '4rem', '8rem', '12rem']}
        />
      </Box>
      <Box maxW='35rem' onClick={onOpen} _hover={{ cursor: 'pointer' }}>
        <Image src={img} alt={alt} width='auto' height='auto' sizes='auto' />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={['lg', '5xl']} closeOnEsc>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading p='2rem 0rem 1rem 0rem'>{title}</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProjectCarousel carouselId={projectId} numOfSlides={numOfSlides} />
          </ModalBody>

          <ModalFooter pb='2rem'>
            <Stack
              width='full'
              direction={['column', 'row']}
              justifyContent='space-between'
              alignItems='center'
            >
              <Text pt='1.5rem'>{details}</Text>
              {link && (
                <Link href={link} style={{ textDecoration: 'none' }} isExternal>
                  <Box
                    bg='lightPurple'
                    _hover={{ bg: 'darkPurple' }}
                    width={['full', 'fit-content']}
                    textAlign={['center', 'left']}
                    p='.6rem 2rem'
                    m='.6rem 0 0 .3rem'
                    borderRadius={8}
                  >
                    <Text variant='interactiveHyperLink18Alt'>
                      See it in action
                    </Text>
                  </Box>
                </Link>
              )}
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  )
}

export default ProjectBody
