const nodemailer = require(`nodemailer`);
const catchAsync = require(`./../utils/catchAsync`);

exports.contact = catchAsync(async (req, res) => {
  const emailOutput = `
   <p>You have a new contact request</p>
   <h3>Contact Email</h3>
   <ul> 
     <li>Email: ${req.body.email}</li>
   </ul>
   <h3>Message</h3>
   <p>${req.body.message}</p>
   `;

  let transporter = nodemailer.createTransport({
    service: `SendGrid`,
    auth: {
      user: process.env.SENDGRID_USERNAME,
      pass: process.env.SENDGRID_PASSWORD
    }
  });

  let mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL_FROM,
    subject: `Contact Request from ${req.body.email}`,
    text: req.body.message,
    html: emailOutput
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return console.log(err);
    }

    return console.log(`Email sent.`);
  });

  res.status(201).json({
    status: `success`
  });
});
