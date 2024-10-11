import queryFormModal from "../modals/queryForm.js";
import nodemailer from 'nodemailer'
 const query = async (req, res, next) => {
console.log("Inside query")
  try {
    const { firstName, lastName , phoneNumber, email, message } = req.body;

    if (!firstName) {
      throw new Error('firstName is required!')
    }
    if (!lastName) {
      throw new Error('firstName is required!')
    }
    if (!email) {
      throw new Error('Email is required!')
    }
    if (!message) {
      throw new Error('Please leave a message!')
    }
    if (!phoneNumber) {
      throw new Error('Phone Number is required!')
    }


    console.log('started saving user')
    const newQueryForm = await queryFormModal.create({
      firstName,
      lastName,
      phoneNumber,
      email,
      message
    });


    // sending-email 

//     const transporter = nodemailer.createTransport({
//       service: 'Outlook365',
//       auth: {
//         user: process.env.OUTLOOK_MAIL_FROM,
//         pass: process.env.OUTLOOK_PASS 
//       },
//       secure: true,
//       port:465
//     });


//      let mailOptions = {
//       from : process.env.OUTLOOK_MAIL_FROM,
//       to : process.env.OUTLOOK_MAIL_TO,
//       subject : `New Client Query: ${name}`,
//       html : `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Client Query Email</title>
//     <style>
//         body {
//             font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//             line-height: 1.5;
//             color: #333;
//             margin: 0;
//             padding: 20px;
//             background-color: #e9ecef;
//         }
//         .container {
//             background-color: #ffffff;
//             border-radius: 10px;
//             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//             padding: 25px;
//             max-width: 650px;
//             margin: 0 auto;
//             border-left: 6px solid #007bff;
//         }
//         h2 {
//             color: #007bff;
//             margin-bottom: 20px;
//             font-size: 1.4em;
//         }
//         ul {
//             list-style-type: none;
//             padding: 0;
//         }
//         li {
//             margin-bottom: 10px;
//             padding: 10px;
//             border-bottom: 1px solid #f1f1f1;
//         }
//         .label {
//             font-weight: bold;
//             color: #007bff;
//             display: inline-block;
//             width: 100px;
//         }
//         .footer {
//             margin-top: 30px;
//             font-size: 0.85em;
//             color: #555;
//             border-top: 1px solid #f1f1f1;
//             padding-top: 15px;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">

//         <p>We've received a new client query on our LunarEdge IT Services Pvt. Ltd., Here are the details:</p>

//         <ul>
//             <li><span class="label">Name :</span>${name}</li>
//             <li><span class="label">Email :</span>${email}</li>
//             <li><span class="label">Phone :</span>${phoneNumber}</li>
//             <li><span class="label">Subject :</span>${subject}</li>
//             <li><span class="label">Message :</span>${message}</li>
//         </ul>

//         <p>Please advise on the next steps.</p>

//         <div class="footer">
//             <p>Thanks,</p>

//             <p>LunarEdge Team<br>
//             </p>
//         </div>
//     </div>
// </body>
// </html>`
//      }
     
//       transporter.sendMail(mailOptions).then(()=>{
//         console.log("email sent sucessfully")
//       }).
//       catch(error=>{
//         console.log(error)
//       })

    res.status(200).json({
      message: "Registered Successfully!",
      success: true,
      error: false,
    })
  }
  catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false
    })
  }
}

export default query