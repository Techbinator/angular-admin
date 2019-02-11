import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo() {
    await browser.get('/dashboard');
  }

  async getLocalStorage() {
    return await browser.executeScript(`return window.localStorage.getItem('seaTool')`);
  }

  getLogOutBtn() {
    return element(by.className('log-out-btn'));
  }

  async getCurrentUrl() {
    return await browser.getCurrentUrl();
  }
}
