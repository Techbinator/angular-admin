import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo() {
    await browser.get('/dashboard');
  }

  async getLocalStorage() {
    return await browser.executeScript(`return window.localStorage.getItem('seaTool')`);
  }

  getTopProfileIconBtn() {
    return element(by.className('profileBtn'));
  }

  getUsernameContainer() {
    return element(by.className('headerUsername'));
  }
}
