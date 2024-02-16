import nodemailer from "nodemailer";

// email configurations

const transporter = nodemailer.createTransport({
  host: "mail.examaidhub.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "admin@examaidhub.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});
type Props = {
  name: string;
  email: string;
  number: string;
};

async function sendMail(data: Props) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"admin@examaidhub.com" <admin@examaidhub.com>', // sender address
    to: "papersmasters@gmail.com", // list of receivers
    subject: "Client details from examaidhub.com", // Subject line
    text: "Client details", // plain text body
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>eFeedbackPro</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f7f7f7;
                padding: 20px;
                text-align: center;
            }
    
            .email-container {
                max-width: 400px;
                margin: 0 auto;
                background-color: #fff;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                padding: 20px;
            }
    
            h2 {
                color: #333;
            }
    
            p {
                color: #666;
                margin-bottom: 15px;
            }
    
            .highlight {
                color: #4285f4;
                font-weight: bold;
            }
    
            .button {
                display: inline-block;
                padding: 10px 20px;
                background-color: #4285f4;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
                transition: background-color 0.3s ease;
            }
    
            .button:hover {
                background-color: #3367d6;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <h2>Client Details</h2>
            <p>Name: <span class="highlight">${data.name}</span>,</p>
            <p> Email: <span class="highlight">${data.email}</span></p>
            <p> Phone Number: <span class="highlight">${data.number}</span></p>
            </div>
    </body>
    </html>
    
    `,
  });

  console.log("Message sent: %s", info.messageId);
}

export default sendMail;
