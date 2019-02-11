import { AppPage } from './app.po';

describe('Log Out', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('localstorage should NOT contain username and token after login', async () => {
    await page.navigateTo();
    const logOutBtn = page.getLogOutBtn();
    await logOutBtn.click();
    expect(await page.getLocalStorage()).toEqual(null);
  });

  it('it should redirect to dashboard', async () => {
    expect(await page.getCurrentUrl()).toContain('/login');
  });
});
