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
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
exports.contactUs = catchAsync_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const emailOutput = `
   <p>You have a new contact request</p>
   <h3>Contact Email</h3>
   <ul> 
     <li>Email: ${req.body.email}</li>
   </ul>
   <h3>Message</h3>
   <p>${req.body.message}</p>
   `;
    let transporter = nodemailer_1.default.createTransport({
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
    transporter.sendMail(mailOptions, (err) => {
        if (err) {
            return console.log(err);
        }
        return console.log(`Email sent.`);
    });
    res.status(201).json({
        status: `success`
    });
}));
