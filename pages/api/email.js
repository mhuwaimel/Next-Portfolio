import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async (req, res) => {
  const body = req.body;

  const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
               subject: ${body.subject}\r\n
                Message: ${body.message}\r\n
    `;

  const data = {
    to: process.env.NEXT_PUBLIC_GOOGLE_TO_EMAIL,
    from: process.env.NEXT_PUBLIC_MY_EMAIL,
    subject: "التواصل معي - موقعي الشخصي",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  sendgrid.send(data);

  return res.status(200).json({ status: "Ok" });
};
