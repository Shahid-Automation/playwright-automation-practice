const { test, expect } = require('@playwright/test');
const { Login } = require('../Pages/Login');
test.setTimeout(60000);

test('Signin', async ({ page }) => {

    const login = new Login(page);

    await login.goToLoginPage();

    await login.login(
        'sc.live-b.superdiary@leaptest.io',
        'Live2406'
    );

    //await expect(page.getByRole('img').first()).toBeVisible();
    await expect(page).toHaveURL(/matters/);
    timeout:15000
});
