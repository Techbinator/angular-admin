import { AppPage } from './app.po';

describe('Login page tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should clear local storage', async () => {
    await page.navigateTo();
    expect(page.clearLocalStorage()).toEqual(undefined);
  });

  it('should display login screen', async () => {
    const text = await page.getLoginTitle();
    expect(text).toEqual('SEA Admin');
  });

  it('inputs should throw validation errors', async () => {
    const usernameInput = page.getUsernameInput();
    await usernameInput.sendKeys('a');
    expect(await usernameInput.getAttribute('value')).toEqual('a');
    expect(await usernameInput.getAttribute('class')).toContain('ng-invalid');

    const passworInput = page.getPasswordInput();
    await passworInput.sendKeys('p');
    expect(await passworInput.getAttribute('value')).toEqual('p');
    expect(await passworInput.getAttribute('class')).toContain('ng-invalid');

    const submitButton = page.getSubmitInput();
    await submitButton.click();

    const snackbarElement = page.getSnackBarElement();
    expect(await snackbarElement).toBeDefined();
  });

  it('it should submit form in case of correct data', async () => {
    const usernameInput = page.getUsernameInput();
    await usernameInput.clear();
    await usernameInput.sendKeys('testName');

    const passworInput = page.getPasswordInput();
    await passworInput.sendKeys('password');

    const submitButton = page.getSubmitInput();
    await submitButton.click();
  });

  it('it should redirect to dashboard', async () => {
    expect(await page.getCurrentUrl()).toContain('/dashboard');
  });
});
