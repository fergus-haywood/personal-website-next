import styles from '../styles/Projects.module.css'
import Link from 'next/link'

export default function ProjectList({ projects }) {
  console.log(projects)
  const projectList = projects
  return (
    <div className={styles.projectList}>
      <ul>
        {projectList.map((project) => {
          return (
            <Link href={`/projects/${project.id}`}>
              <li id={project.title} key={project.title} className="navItem">
                {project.title}
                <span className={styles.clientOrigin}>({project.origin})</span>
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}
