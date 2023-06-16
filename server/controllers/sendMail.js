const { JSDOM } = require("jsdom");
const DOMPurify = require("dompurify");
const nodemailer = require("nodemailer");

const { window } = new JSDOM("");
const { sanitize } = DOMPurify(window);

const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
const mailTransport = nodemailer.createTransport({
  service:SMTP_HOST,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;

const sendMail= async (req, res) => {
  try {
    const email = sanitize(req.body.email);
    const message = sanitize(req.body.message);

    if (!email || !/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
      return res
        .status(400)
        .json({ error: "Please enter a valid email address" });
    } else if (!message) {
      return res.status(400).json({ error: "Please enter a message" });
    } else if (email.length > MAX_EMAIL_LENGTH) {
      return res.status(400).json({
        error: `Please enter an email fewer than ${MAX_EMAIL_LENGTH} characters`,
      });
    } else if (message.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        error: `Please enter a message fewer than ${MAX_MESSAGE_LENGTH} characters`,
      });
    }

    const mailOptions = {
      from: `Portfolio <${SMTP_USER}>`,
      to: "chingchakhap11@gmail.com",
      subject: `New message from ${email}`,
      text: `From: ${email}\n\n${message}`,
    };

    await mailTransport.sendMail(mailOptions);

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Rejected", error);
    return res.status(500).json({ error: "Message rejected" });
  }
};

module.exports = sendMail;