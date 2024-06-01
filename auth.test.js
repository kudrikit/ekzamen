const request = require('supertest');
const app = require('./server.js');
// Предположим, что createUser и deleteUser ваши асинхронные функции, которые работают с базой данных или другими ресурсами

// Вместо реальных функций createUser и deleteUser, используем заглушки (mocks)
const createUser = jest.fn(async (userData) => {
  // Возвращаем какие-то данные, которые вы хотите проверить в вашем тесте
  return { id: '123', ...userData };
});

const deleteUser = jest.fn(async (email) => {
  // Возвращаем какие-то данные, которые вы хотите проверить в вашем тесте
  return { success: true };
});

// Затем используйте эти моки в вашем тесте
test('successful authentication', async () => {
  // Создаем тестового пользователя
  await createUser({ email: 'test@example.com', password: 'password' });

  // Отправляем запрос на авторизацию
  const response = await request(app)
    .post('/api/users/auth')
    .send({ email: 'test@example.com', password: 'password' });

  // Проверяем, что в ответе приходит статус 200 и токен доступа
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('token');

  // Удаляем тестового пользователя из базы данных
  await deleteUser('test@example.com');

  // Проверяем, были ли функции createUser и deleteUser вызваны с правильными аргументами
  expect(createUser).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password' });
  expect(deleteUser).toHaveBeenCalledWith('test@example.com');
});
