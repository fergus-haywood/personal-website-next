import Layout from '../../components/Layout'
import styles from '../../styles/Projects.module.css'

export default function Project(props) {
  const projectList = props.projects.result
  return (
    <Layout navigation={props.navigationBody}>
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
    </Layout>
  )
}

export async function getServerSideProps() {
  const navigationQuery = encodeURIComponent(`*[ _type == 'navigation']`)
  const navigationURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${navigationQuery}]`
  const navigationBody = await fetch(navigationURL).then((res) => res.json())

  const aboutQuery = encodeURIComponent(`*[ _type == 'about']`)
  const aboutURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${aboutQuery}]`
  const aboutBody = await fetch(aboutURL).then((res) => res.json())

  const clientsQuery = encodeURIComponent(`*[ _type == 'clients']`)
  const clientURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${clientsQuery}]`
  const clients = await fetch(clientURL).then((res) => res.json())

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
