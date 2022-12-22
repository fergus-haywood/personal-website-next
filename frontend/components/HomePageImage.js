import styles from '../styles/HomePageImage.module.css'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'

export default function HomePageImage({ image }) {
  const homepageImage = image.result[0][0].image
  console.log(homepageImage)

  function urlFor(source) {
    return imgBuilder.image(source)
  }

  const imgBuilder = imageUrlBuilder({
    projectId: '36om7i3d',
    dataset: 'production',
  })

  return (
    <div className={styles.wrapper}>
      <Image
        src={urlFor(homepageImage).width(1500).quality(100).url()}
        className={styles.image}
        layout="fill"
        alt="Fergus Haywood Homepage Image"
        placeholder="blur"
        blurDataURL={urlFor(homepageImage).url()}
      />
    </div>
  )
}
