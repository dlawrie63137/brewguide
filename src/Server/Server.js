const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log('We are live on port 4444');
});


app.get('../containers/Contact/ContactForm/ContactForm.js', (req, res) => {
  res.send('Welcome to my api');
})

app.post('API_URI', (req,res) => {
  var data = req.body;

var smtpTransport = nodemailer.createTransport({
  service: 'Outlook',
  port: 465,
  auth: {
    user: 'MongoByteTesting',
    pass: 'testing123'
  }
});

var mailOptions = {
  from: data.email,
  to: 'ENTER_YOUR_EMAIL',
  subject: 'ENTER_YOUR_SUBJECT',
  html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
};

smtpTransport.sendMail(mailOptions,
(error, response) => {
  if(error) {
    res.send(error)
  }else {
    res.send('Success')
  }
  smtpTransport.close();
});

})