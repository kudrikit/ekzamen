import { expect } from 'chai';
import { MongoClient } from 'mongodb';

describe('Получение всех пользователей', () => {
  let connection;
  let db;

  before(async function() {
    this.timeout(10000); // Увеличиваем таймаут до 10 секунд
    const uri = "mongodb+srv://mean:Narxoz-mean2024@atlascluster.mdmzvd6.mongodb.net/mydatabase?retryWrites=true&w=majority\n"; // Замените на вашу строку подключения
    connection = await MongoClient.connect(uri, { useNewUrlParser: true });
    db = await connection.db('test');
    // Предварительно заполните базу данных данными
  });

  after(async function() {
    if(connection) {
      await connection.close();
    }
  });


  it('должна вернуть всех пользователей', async () => {
    const users = await db.collection('users').find({}).toArray();
    expect(users).to.be.an('array');
    expect(users).to.have.lengthOf.at.least(1); // Предполагается, что в базе есть хотя бы один пользователь
  });
});
