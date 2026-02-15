const nodemailer = require("nodemailer");

exports.sendContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact from ${name}`,
      text: message
    });

    res.status(200).json({ msg: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Email failed" });
  }
};
