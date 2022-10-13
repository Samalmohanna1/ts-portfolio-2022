import { Box, Stack } from '@chakra-ui/react'
import { CarouselProvider, Image, Slide, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { useRive } from 'rive-react'

interface CarouselIdProp {
  carouselId: string
  numOfSlides: number
}

const ProjectCarousel: React.FunctionComponent<CarouselIdProp> = ({
  carouselId,
  numOfSlides,
}) => {
  const { RiveComponent } = useRive({
    src: 'hand_gestures.riv',
    animations: 'Swipe Left',
    autoplay: true,
  })
  return (
    <CarouselProvider
      naturalSlideWidth={723}
      naturalSlideHeight={446}
      totalSlides={numOfSlides}
      visibleSlides={1.2}
      hasMasterSpinner
    >
      {carouselId === '1' && (
        <Slider className='carousel-slider'>
          <Slide index={0}>
            <Image
              className='carousel-img'
              hasMasterSpinner={true}
              src='sbvt-imgs/sbvt-1.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={1}>
            <Image
              className='carousel-img'
              hasMasterSpinner={false}
              src='sbvt-imgs/sbvt-2.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={2}>
            <Image
              className='carousel-img'
              hasMasterSpinner={false}
              src='sbvt-imgs/sbvt-3.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={3}>
            <Image
              className='carousel-img'
              hasMasterSpinner={false}
              src='sbvt-imgs/sbvt-4.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={4}>
            <Image
              className='carousel-img'
              hasMasterSpinner={false}
              src='sbvt-imgs/sbvt-5.webp'
              alt='portfolio project visuals'
            />
          </Slide>
        </Slider>
      )}
      {carouselId === '2' && (
        <Slider className='carousel-slider'>
          <Slide index={0}>
            <Image
              className='carousel-img'
              hasMasterSpinner={true}
              src='rc-imgs/rc-1.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={1}>
            <Image
              className='carousel-img'
              hasMasterSpinner={false}
              src='rc-imgs/rc-2.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={2}>
            <Image
              className='carousel-img'
              hasMasterSpinner={false}
              src='rc-imgs/rc-3.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={3}>
            <Image
              className='carousel-img'
              hasMasterSpinner={false}
              src='rc-imgs/rc-4.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={4}>
            <Image
              className='carousel-img'
              hasMasterSpinner={false}
              src='rc-imgs/rc-5.webp'
              alt='portfolio project visuals'
            />
          </Slide>
        </Slider>
      )}

      {carouselId === '3' && (
        <Slider className='carousel-slider'>
          <Slide index={0}>
            <Image
              className='carousel-img'
              hasMasterSpinner={true}
              src='ci-imgs/ci-1.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={1}>
            <Image
              className='carousel-img'
              hasMasterSpinner={true}
              src='ci-imgs/ci-2.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={2}>
            <Image
              className='carousel-img'
              hasMasterSpinner={true}
              src='ci-imgs/ci-3.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={3}>
            <Image
              className='carousel-img'
              hasMasterSpinner={true}
              src='ci-imgs/ci-4.webp'
              alt='portfolio project visuals'
            />
          </Slide>
        </Slider>
      )}
      <Stack direction='row' justifyContent='center'>
        <Box boxSize='4rem'>
          <RiveComponent />
        </Box>
      </Stack>
    </CarouselProvider>
  )
}

export default ProjectCarousel
