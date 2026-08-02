import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import _ from "lodash";

const {EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASSWORD} = process.env;

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: Number(EMAIL_PORT),
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
});

export default async function ({ to, subject, template, data, attachments = null }) {
  try {
    const filePath = path.resolve('views/email', template + '.ejs');
    const html = await ejs.renderFile(filePath, { data });

    const payload = {
      from: '"Instagram Clone" <beniksargsyan349@gmail.com>',
      to,
      subject,
      html,
    }

    if (!_.isEmpty(attachments)) {
      payload.attachments = attachments;
    }

    const info = await transporter.sendMail(payload);

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error("Error while sending mail:", err);
  }
}