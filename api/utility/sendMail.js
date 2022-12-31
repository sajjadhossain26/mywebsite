import nodemailer from "nodemailer";

export const contactMail = (to, data) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_ID, // generated ethereal user
      pass: process.env.MAIL_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  transporter.sendMail({
    from: `"PORTFOLIO" <${process.env.MAIL_ID}>`, // sender address
    to: to, // list of receivers
    subject: "I am from portfolio website", // Subject line
    text: data.name, // plain text body
    html: `Name : <b>${data.name}</b> <br/><b>Description: ${data.description}</b>`, // html body
  });
};
