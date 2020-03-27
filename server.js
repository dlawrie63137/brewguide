const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const creds = require('./config');

const transport = {
  host: 'smtp-mail.outlook.com', // Don’t forget to replace with the SMTP host of your provider
  port: 587,
  auth: {
  user: creds.USER,
  pass: creds.PASS
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  console.log(req.body.data)
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n message: ${message} `

  const mail = {
    from: name,
    to: 'MongoByteTesting@outlook.com',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})



const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)
app.use(bodyParser.urlencoded({extended: true}))



