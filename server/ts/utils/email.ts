import nodemailer from "nodemailer";
import pug from "pug";
import htmlToText from "html-to-text";

import IUser from "../types/userInterface";

class Email {
  to: string;
  firstName: string;
  url: string;
  from: string;

  constructor(user: IUser, url: string) {
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
  async send(template: string, subject: string) {
    //1. RENDER HTML BASED ON PUG TEMPLATE
    const html = pug.renderFile(`${__dirname}/../../views/${template}.pug`, {
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

  //REGISTER
  async sendWelcome() {
    await this.send(`welcome`, `Welcome to Baristabook.`);
  }

  //PASSWORD RESET
  async sendPasswordReset() {
    await this.send(
      `passwordReset`,
      `Your password reset token (valid for only 10 minutes)`
    );
  }
}

export default Email;
