import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo() {
    await browser.get('/');
  }

  async clearLocalStorage() {
    await browser.executeScript('window.localStorage.clear();');
    await browser.executeScript('window.sessionStorage.clear();');
  }

  async getLocalStorage() {
    return await browser.executeScript('return window.localStorage');
  }

  async getCurrentUrl() {
    return await browser.getCurrentUrl();
  }

  async getLoginTitle() {
    return await element(by.css('app-root h2')).getText();
  }

  getUsernameInput() {
    return element(by.name('username'));
  }

  getPasswordInput() {
    return element(by.name('password'));
  }

  getSubmitInput() {
    return element(by.tagName('button'));
  }

  getSnackBarElement() {
    return element(by.tagName('snack-bar-container'));
  }
}
