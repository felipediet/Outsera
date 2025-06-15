import { Locator, Page, expect } from '@playwright/test';
import { validarMensagem } from '../operacoes/helpers';
import { Perfil } from '../operacoes/gerarPerfil';

export default class LoginPage {
    private readonly page: Page;
    private readonly signUP: Locator;
    private readonly fieldEmail: Locator;
    private readonly filedPassword: Locator;
    private readonly loginButton: Locator;
    private readonly loginForm: Locator;
    private readonly userMenu: Locator;


    constructor(page: Page) {
        this.page = page;
        this.signUP = this.page.getByTestId('nav-sign-in')
        this.fieldEmail = this.page.getByTestId('email')
        this.filedPassword = this.page.getByTestId('password')
        this.loginButton = this.page.getByTestId('login-submit')
        this.loginForm = page.getByTestId('login-form');
        this.userMenu = this.page.getByTestId('nav-menu');
    }


    /**
    * Visita a página inicial.
    */
    async visit() {
        await this.page.goto("https://practicesoftwaretesting.com/");
    }

    /**
     * Faz login.
     */
    async login() {
        await this.signUP.click();
        await this.fieldEmail.click();
        await this.fieldEmail.fill('fefola@gmail.com');
        await this.filedPassword.click();
        await this.loginButton.click();
        await validarMensagem(this.page,'Invalid email or password');
    }


    /**
     * Realiza o login após o cadastro.
     * @param user - Objeto contendo os dados do usuário.
     */
    async loginAfterRegister(user: Perfil) {
        await expect(this.loginForm).toBeVisible();
        await this.fieldEmail.fill(user.email);
        await this.filedPassword.fill('Ramones10@');
        await this.loginButton.click();
        await expect(this.userMenu).toContainText(user.firstName + ' ' + user.lastName, { timeout: 10000 });
    }

}





