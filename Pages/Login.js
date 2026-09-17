class Login{
constructor(page) {
this.page = page;
this.username = page.getByPlaceholder('Username / Email');
this.password = page.getByPlaceholder('Password');
this.SignInButton = page.getByRole('button', { name: 'Sign in', exact:true });
    }

    async goToLoginPage(){
        await this.page.goto('http://staging.liveb.leap365.com.au/');
        timeout:12000;
    }

    async login(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.SignInButton.click();
    }

}
module.exports = {Login};