const { test, expect } = require('@playwright/test');
const { Login } = require('../Pages/Login');

test.setTimeout(60000);

test('Signin', async ({ page }) => {

    const login = new Login(page);

    await login.goToLoginPage();

    await login.login(
        process.env.LEAP_USERNAME,
        process.env.LEAP_PASSWORD
    );

   await expect(page).toHaveURL(/\/matters/, {timeout: 30000});
   await expect(page.getByRole('button', { name: 'New Matter' })).toBeVisible({ timeout: 30000 });

    //await expect(page.getByText(/Matter List - Showing:/)).toBeVisible({
        timeout: 30000
    });
    
//});
