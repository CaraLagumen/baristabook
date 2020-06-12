"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const pug_1 = __importDefault(require("pug"));
const html_to_text_1 = __importDefault(require("html-to-text"));
class Email {
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
            return nodemailer_1.default.createTransport({
                service: `SendGrid`,
                auth: {
                    user: process.env.SENDGRID_USERNAME,
                    pass: process.env.SENDGRID_PASSWORD
                }
            });
        }
        return nodemailer_1.default.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });
    }
    //FRONT END
    send(template, subject) {
        return __awaiter(this, void 0, void 0, function* () {
            //1. RENDER HTML BASED ON PUG TEMPLATE
            const html = pug_1.default.renderFile(`${__dirname}/../../views/${template}.pug`, {
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
                text: html_to_text_1.default.fromString(html)
            };
            //3. CREATE NEW TRANSPORT AND SEND EMAIL
            yield this.newTransport().sendMail(mailOptions);
        });
    }
    //REGISTER
    sendWelcome() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.send(`welcome`, `Welcome to Baristabook.`);
        });
    }
    //PASSWORD RESET
    sendPasswordReset() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.send(`passwordReset`, `Your password reset token (valid for only 10 minutes)`);
        });
    }
}
exports.default = Email;
