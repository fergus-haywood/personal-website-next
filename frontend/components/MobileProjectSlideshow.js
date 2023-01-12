import imageUrlBuilder from '@sanity/image-url'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'

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

  return (
    <div className="mobile-project-slideshow">
      <Swiper
        modules={[Pagination]}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
      >
        {slideImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={urlFor(slide.image).width(700).quality(100)}
              className={`slide-image ${styles.projectImage}`}
              // placeholder="blur"
              // blurDataURL={slide.image.asset.metadata.lqip}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
