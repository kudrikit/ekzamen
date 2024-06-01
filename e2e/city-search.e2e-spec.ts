const { browser, by, element, ExpectedConditions } = require('protractor');

describe('City Search', () => {
  beforeEach(() => {
    browser.waitForAngularEnabled(false); // Отключаем ожидание Angular
    browser.get('/');
    browser.wait(ExpectedConditions.presenceOf(element(by.css('app-root'))), 5000); // Ожидание элемента app-root
  });

  it('should display title', () => {
    // @ts-ignore
    browser.getTitle().then(title => {
      expect(title).toEqual('Lab2Users');
    });
  });

  it('should search weather for a city', () => {
    const input = element(by.css('input[type="text"]'));
    input.sendKeys('London');
    element(by.css('button.search-button')).click();

    browser.sleep(2000); // Добавим паузу для ожидания загрузки данных

    const weatherData = element(by.css('.data-store'));
    expect(weatherData.isPresent()).toBeTruthy();
  });
});
