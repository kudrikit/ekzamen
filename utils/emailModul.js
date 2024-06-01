const nodemailer = require('nodemailer');

// Создайте транспортер для отправки писем
const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // ваше имя пользователя на mail.ru
    pass: process.env.EMAIL_PASSWORD // ваш пароль на mail.ru
  }
});

// Функция для отправки письма
async function sendEmail(email, subject, text) {
  try {
    // Отправка письма
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // ваш email
      to: email,
      subject: subject,
      text: text
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = { sendEmail };
