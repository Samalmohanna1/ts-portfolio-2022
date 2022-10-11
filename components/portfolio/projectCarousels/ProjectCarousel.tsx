import { CarouselProvider, Image, Slide, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

interface CarouselIdProp {
  carouselId: string
  numOfSlides: number
}

const ProjectCarousel: React.FunctionComponent<CarouselIdProp> = ({
  carouselId,
  numOfSlides,
}) => {
  const imgStyle = {
    padding: '1rem',
  }

  const sliderStyle = {
    padding: '1rem',
    width: '100%',
    borderTop: '.125rem solid #403D39',
    borderBottom: '.125rem solid #403D39',
  }

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={65}
      totalSlides={numOfSlides}
      visibleSlides={1.2}
    >
      {carouselId === '1' && (
        <Slider style={sliderStyle}>
          <Slide index={0}>
            <Image
              style={imgStyle}
              hasMasterSpinner
              src='sbvt-imgs/sbvt-1.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={1}>
            <Image
              style={imgStyle}
              hasMasterSpinner
              src='sbvt-imgs/sbvt-2.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={2}>
            <Image
              style={imgStyle}
              hasMasterSpinner
              src='sbvt-imgs/sbvt-3.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={3}>
            <Image
              style={imgStyle}
              hasMasterSpinner
              src='sbvt-imgs/sbvt-4.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={4}>
            <Image
              style={imgStyle}
              hasMasterSpinner
              src='sbvt-imgs/sbvt-5.webp'
              alt='portfolio project visuals'
            />
          </Slide>
        </Slider>
      )}
      {carouselId === '2' && (
        <Slider>
          <Slide index={0}>
            <Image
              style={imgStyle}
              hasMasterSpinner
              src='rc-imgs/rc-1.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={1}>
            <Image
              style={imgStyle}
              hasMasterSpinner
              src='rc-imgs/rc-2.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={2}>
            <Image
              style={imgStyle}
              hasMasterSpinner
              src='rc-imgs/rc-3.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={3}>
            <Image
              style={imgStyle}
              hasMasterSpinner
              src='rc-imgs/rc-4.webp'
              alt='portfolio project visuals'
            />
          </Slide>
          <Slide index={4}>
            <Image
              style={imgStyle}
              hasMasterSpinner
              src='rc-imgs/rc-5.webp'
              alt='portfolio project visuals'
            />
          </Slide>
        </Slider>
      )}

      {carouselId === '3' && (
        <Slider>
          <Slide index={0}>
            <Image
              style={imgStyle}
              hasMasterSpinner
              src='code-integrations.webp'
              alt='portfolio project visuals'
            />
          </Slide>
        </Slider>
      )}
    </CarouselProvider>
  )
}

export default ProjectCarousel
