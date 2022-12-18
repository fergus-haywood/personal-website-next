import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import MobileProjectSlideshow from '../../components/MobileProjectSlideshow'
import ProjectList from '../../components/ProjectList'
import styles from '../../styles/Projects.module.css'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

export default function Project(props) {
  const projectContent = props.project.result[0][0]
  const projectList = props.projects.result[0]

  function urlFor(source) {
    return imgBuilder.image(source)
  }

  const imgBuilder = imageUrlBuilder({
    projectId: '36om7i3d',
    dataset: 'production',
  })

  return (
    <Layout navigation={props.navigationBody}>
      <ProjectList projects={projectList} />
      <MobileProjectSlideshow project={projectContent} />
      <div className={styles.projectContent}>
        <div className={styles.projectContentInner}>
          <BlockContent blocks={projectContent.body} />
          {projectContent.extraCredits && (
            <div className={styles.extraCredit}>
              <BlockContent blocks={projectContent.extraCredits} />
            </div>
          )}
          <div className={styles.projectDisciplines}>
            {projectContent.projectDisciplines.map((discipline) => {
              return (
                <span className={styles.projectDisciplineItem}>
                  {discipline.text}
                </span>
              )
            })}
          </div>
          <a
            href={projectContent.link.linkUrl}
            className="projectLink"
            target="_blank"
          >
            View Project{' '}
            <img
              className={styles.projectArrow}
              src="../projectArrow.svg"
              width="15"
            />
          </a>
        </div>
      </div>
      <div className={styles.projectImages}>
        {projectContent.projectImages.map((image, i) => {
          return (
            <img
              key={i}
              src={urlFor(image.image).width(2000)}
              className={styles.projectImage}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export async function getServerSideProps(pageContext) {
  const pageSlug = pageContext.query.slug

  if (!pageSlug) {
    return {
      notFound: true,
    }
  }

  const navigationQuery = encodeURIComponent(`*[ _type == 'navigation']`)
  const navigationURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${navigationQuery}]`
  const navigationBody = await fetch(navigationURL).then((res) => res.json())

  const projectQuery = encodeURIComponent(
    `*[ _type == 'projects' && id == '${pageSlug}']`
  )
  const projectURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${projectQuery}]`
  const project = await fetch(projectURL).then((res) => res.json())

  const projectsQuery = encodeURIComponent(`*[ _type == 'projects' ]`)
  const projectsURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${projectsQuery}]`
  const projects = await fetch(projectsURL).then((res) => res.json())

  if (!project) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        project,
        projects,
        navigationBody,
      },
    }
  }
}
