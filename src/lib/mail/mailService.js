// https://javascript.plainenglish.io/sending-emails-with-nodemailer-in-next-js-ccada06abfc9

var nodemailer = require("nodemailer");

export async function sendMail(toEmail, subject, otpText) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    // from: process.env.NODEMAILER_EMAIL,
    from: `${process.env.NODEMAILER_NAME} <${process.env.NODEMAILER_EMAIL}>`,
    to: toEmail,
    subject: subject,
    // text: otpText,
    html: otpText,
  };

  const mail = await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      // console.log("\nEmail Sent " + JSON.stringify(info));
      return true;
    }
  });
  console.log("mail:::::", { mail });
  return "123456";
}
