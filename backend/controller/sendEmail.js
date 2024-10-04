import mailModal from "../modals/getInTouchMail.js";
import nodemailer from 'nodemailer'

export const sendEmail = async(req, res) => {
    try {
      const { email} = req.body;
      const newMail = await mailModal.create({ email });
  
  
//       const transporter = nodemailer.createTransport({
//         service: 'Outlook365',
//         auth: {
//           user: process.env.OUTLOOK_MAIL_FROM,
//           pass: process.env.OUTLOOK_PASS
//         },
//         secure: true,
//         port: 465
//       });
  
//       let mailOptions = {
//         // from: process.env.OUTLOOK_MAIL_FROM,
//         to: process.env.OUTLOOK_MAIL_TO,
//         subject: `Mail From Client:`,
//         text: `We've received a new client query on our LunarEdge IT Services Pvt. Ltd.
  
//   Details:
//   Email: ${email}

//   Please advise on the next steps.
  
//   Thanks,
//   LunarEdge Team`
//       };
  
//       transporter.sendMail(mailOptions).then(() => {
//         console.log("email sent successfully");
//       }).catch(error => {
//         console.log(error);
//       });

      res.status(200).json({
        message: "Email Sent Successfully!",
        success: true,
        error: false,
      })
  
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error Occurred! Please Try Again.",
        error: true,
        success: false
      });
    }
  };
  