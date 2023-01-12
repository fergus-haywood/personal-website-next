import { useState } from 'react'
import Layout from '../components/Layout'

export default function Contact(props) {
  // States for contact form fields
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  //   Form validation state
  const [errors, setErrors] = useState({})

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Send')

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (name.length <= 0) {
      tempErrors['fullname'] = true
      isValid = false
    }
    if (email.length <= 0) {
      tempErrors['email'] = true
      isValid = false
    }
    if (message.length <= 0) {
      tempErrors['message'] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    console.log('errors', errors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let isValidForm = handleValidation()

    const data = {
      name,
      email,
      message,
    }

    if (isValidForm) {
      setButtonText('Sending')
      const res = await fetch('/api/contact', {
        method: 'post',
        body: JSON.stringify(data),
      })
      console.log(res)
      const { error } = await res.json()
      if (error) {
        console.log(error)
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText('Send')
        return
      }
      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText('Sent')
    }
  }

  return (
    <>
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
          {!showSuccessMessage && (
            <button className="projectLink" type="submit">
              {buttonText}{' '}
              <img
                className="form-send-arrow"
                src="./sendArrow.svg"
                width="20"
              />
            </button>
          )}
          <div className="contact-form__message">
            {showSuccessMessage && (
              <p>Thanks for your message, i'll get back to you shortly</p>
            )}
            {showFailureMessage && (
              <p>
                Sorry there was an error, please{' '}
                <a href="mailto:hello@fergushaywood.com">email me</a> instead at
                <a href="mailto:hello@fergushaywood.com">hello@fergushaywood</a>
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  )
}
export async function getStaticProps() {
  const navigationQuery = encodeURIComponent(`*[ _type == 'navigation']`)
  const navigationURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${navigationQuery}]`
  const navigationBody = await fetch(navigationURL).then((res) => res.json())

  return {
    props: {
      navigationBody,
    },
  }
}
