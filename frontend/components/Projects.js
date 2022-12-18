import styles from '../styles/Projects.module.css'
import { useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

export default function Projects({ projects }) {
  const projectList = projects.projects.result[0].sort((a, b) =>
    a.title.localeCompare(b.title)
  )

  const projectItems = Array.from(document.querySelectorAll('.navItem'))

  const [projectContent, setProjectContent] = useState()

  function handleClick(e) {
    const targetProject = e.target.id
    const content = projectList.find(
      (content) => content.title == targetProject
    )
    projectItems.forEach((project) =>
      project.classList.remove('active-project')
    )
    e.target.classList.add('active-project')
    setProjectContent(content)
  }
  const imgBuilder = imageUrlBuilder({
    projectId: '36om7i3d',
    dataset: 'production',
  })

  function urlFor(source) {
    return imgBuilder.image(source)
  }

  return (
    <>
      <div className={styles.projectList}>
        <ul>
          {projectList.map((project) => {
            return (
              <li
                id={project.title}
                key={project.title}
                className="navItem"
                onClick={(e) => handleClick(e)}
              >
                {project.title}
                <span className={styles.clientOrigin}>({project.origin})</span>
              </li>
            )
          })}
        </ul>
      </div>

      {projectContent && (
        <>
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
                  src="./projectArrow.svg"
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
        </>
      )}
    </>
  )
}
