const { sendEmail } = require('../utils/emailModul.js');

test('email sending test', async () => {
  // Установите тестовые данные
  const testEmail = 'knurseitov@inbox.ru';
  const subject = 'Test Subject';
  const text = 'Test Text';

  // Отправляем тестовое письмо
  await sendEmail(testEmail, subject, text);

  // Проверяем, что письмо было отправлено успешно
  // Вам нужно убедиться, что ваш тестовый почтовый ящик получил письмо
});
