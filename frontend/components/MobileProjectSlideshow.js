import imageUrlBuilder from '@sanity/image-url'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import styles from '../styles/Projects.module.css'

import 'swiper/css'
import 'swiper/css/pagination'

export default function MobileProjectSlideshow({ project }) {
  const slideImages = project.projectImages

  function urlFor(source) {
    return imgBuilder.image(source)
  }

  const imgBuilder = imageUrlBuilder({
    projectId: '36om7i3d',
    dataset: 'production',
  })

  console.log(slideImages[0].image)
  // slideImages.forEach((image) => console.log(urlFor(image.image)))
  return (
    <div className="mobile-project-slideshow">
      <Swiper
        modules={[Pagination]}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
      >
        {slideImages.map((slide, index) => (
          <SwiperSlide>
            <img
              src={urlFor(slide.image).width(700)}
              className={`slide-image ${styles.projectImage}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
