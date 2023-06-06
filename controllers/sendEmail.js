const nodemailer = require('nodemailer');
const sgMail = require("@sendgrid/mail");

const sendEmailEthereal = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "lyda.corwin@ethereal.email",
        pass: "gkn1q3gSNhn58EBgDY",
      },
    });

    let info = await transporter.sendMail({
      from: '"Sumit" <sm412387@gmail.com>', // sender address
      to: "bar@example.com, sumitkmishra2022@gmail.com", // list of receivers
      subject: "Mail From Node", // Subject line
      html: "<b>hello didi email from nodejs</b>", // html body
    });

    res.send(info);

}

const sendEmail = async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "anu200293@gmail.com", // Change to your recipient
      from: "sm412387@gmail.com", // Change to your verified sender
      subject: "Hello Didi",
      text: "hello didi",
      html: "<strong>hello didi from nodejs</strong>",
    };

    const info = await sgMail.send(msg);
    res.json(info);
}

module.exports = sendEmail;