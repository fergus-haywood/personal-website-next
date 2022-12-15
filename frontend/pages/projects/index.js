import Layout from '../../components/Layout'
import styles from '../../styles/Projects.module.css'
import Link from 'next/link'

export default function Projects(props) {
  const projectList = props.projects.result[0]

  return (
    <Layout navigation={props.navigationBody}>
      <div className={styles.projectList}>
        <ul>
          {projectList.map((project) => {
            return (
              <Link href={`/projects/${project.id}`}>
                <li id={project.title} key={project.title} className="navItem">
                  {project.title}
                  <span className={styles.clientOrigin}>
                    ({project.origin})
                  </span>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const navigationQuery = encodeURIComponent(`*[ _type == 'navigation']`)
  const navigationURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${navigationQuery}]`
  const navigationBody = await fetch(navigationURL).then((res) => res.json())

  const projectsQuery = encodeURIComponent(`*[ _type == 'projects']`)
  const projectURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${projectsQuery}]`
  const projects = await fetch(projectURL).then((res) => res.json())
  return {
    props: {
      navigationBody,
      projects,
    },
  }
}
