const nodemailer = require(`nodemailer`);
const pug = require(`pug`);
const htmlToText = require(`html-to-text`);

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(` `)[0];
    this.url = url;
    this.from = `Cara Lagumen <${process.env.EMAIL_FROM}>`;
  }

  //BACK END
  newTransport() {
    if (process.env.NODE_ENV === `production`) {
      //SENDGRID
      return nodemailer.createTransport({
        service: `SendGrid`,
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD
        }
      });
    }
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }

  //FRONT END
  async send(template, subject) {
    //1. RENDER HTML BASED ON PUG TEMPLATE
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject
    });

    //2. DEFINE EMAIL OPTIONS
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html)
    };

    //3. CREATE NEW TRANSPORT AND SEND EMAIL
    await this.newTransport().sendMail(mailOptions);
  }

  //SIGNUPS
  async sendWelcome() {
    await this.send(`Welcome`, `Welcome to Barista Book.`);
  }

  async sendPasswordReset() {
    await this.send(
      `passwordReset`,
      `Your password reset token (valid for only 10 minutes)`
    );
  }
};
