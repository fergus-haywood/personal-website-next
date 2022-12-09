const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
  const body = JSON.parse(req.body)

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `

  const data = {
    to: 'hello@fergushaywood.com',
    from: 'fergus.haywood5@gmail.com',
    subject: `New Website Contact Form Submitted`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  }

  try {
    await mail.send(data)
    res.status(200).json({ status: 'OK' })
  } catch (err) {
    console.error(err)
    res.send(err)
  }
}
