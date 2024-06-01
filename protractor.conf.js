exports.config = {
  // Адрес, где запущен ваш локальный сервер с фронтендом
  baseUrl: 'http://localhost:4200/city-search',

  // Путь к E2E тестам
  specs: ['./e2e/city-search.e2e-spec.ts'],

  // Используемый фреймворк для тестирования (в данном случае - Jasmine)
  framework: 'jasmine',

  // Настройки Jasmine
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },

  // Браузер, в котором будут запускаться тесты (Safari)
  capabilities: {
    browserName: 'safari'
  },

  // Уровень логирования
  logLevel: 'INFO'
  //protractor protractor.conf.js
//jest test/userDatabase.test.mjs
//jest test/mail.test.js
//jest auth.test.js
//npx mocha test/weather.test.mjs
};



