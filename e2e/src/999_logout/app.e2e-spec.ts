import { AppPage } from './app.po';

describe('Dashboard tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('localstorage should contain username and token after login', async () => {
    await page.navigateTo();
    expect(await page.getLocalStorage()).toEqual(`{"username":"testName","token":"fakeToken"}`);
  });

  it('should display the username on header icon click', async () => {
    const profileIconBtn = page.getTopProfileIconBtn();
    const usernameContainer = page.getUsernameContainer();
    await profileIconBtn.click();
    const usernameFromHeader = await usernameContainer.getText();
    expect(usernameFromHeader).toEqual('testName');
  });
});
