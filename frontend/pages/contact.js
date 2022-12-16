import { useState } from 'react'
import Layout from '../components/Layout'

export default function Contact(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name,
      email,
      message,
    }
    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    })
  }

  return (
    <Layout navigation={props.navigationBody}>
      <div className="contactWrapper">
        <h4 className="heading">Get in Touch</h4>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            required
            className="form-email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            type="text"
            required
            rows="4"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="projectLink" type="submit">
            Send{' '}
            <img className="form-send-arrow" src="./sendArrow.svg" width="20" />
          </button>
        </form>
      </div>
    </Layout>
  )
}
export async function getServerSideProps() {
  const navigationQuery = encodeURIComponent(`*[ _type == 'navigation']`)
  const navigationURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${navigationQuery}]`
  const navigationBody = await fetch(navigationURL).then((res) => res.json())

  return {
    props: {
      navigationBody,
    },
  }
}
