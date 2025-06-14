import { Locator, Page, expect } from '@playwright/test';
import { takeScreenshot, validarMensagem } from '../operacoes/helpers';
import { Perfil } from '../operacoes/gerarPerfil';

export default class Cadastro {
    private readonly page: Page;
    private readonly signUp: Locator;
    private readonly initialRegisterButton: Locator;
    private readonly fielddEmail: Locator;
    private readonly fielddPassword: Locator;
    private readonly fieldFirstName: Locator;
    private readonly fieldLastName: Locator;
    private readonly fieldBirthDate: Locator;
    private readonly fieldAddress: Locator;
    private readonly fieldPostalCode: Locator;
    private readonly fieldCity: Locator;
    private readonly fieldState: Locator;
    private readonly fieldCountry: Locator;
    private readonly fieldPhone: Locator;
    private readonly buttonRegister: Locator;


    constructor(page: Page) {
        this.page = page;
        this.signUp = this.page.getByTestId('nav-sign-in');
        this.initialRegisterButton = this.page.getByTestId('register-link');
        this.fielddEmail = this.page.getByTestId('email');
        this.fielddPassword = this.page.getByTestId('password');
        this.fieldFirstName = this.page.getByTestId('first-name');
        this.fieldLastName = this.page.getByTestId('last-name');
        this.fieldBirthDate = this.page.getByTestId('dob');
        this.fieldAddress = this.page.getByTestId('street');
        this.fieldPostalCode = this.page.getByTestId('postal_code');
        this.fieldCity = this.page.getByTestId('city');
        this.fieldState = this.page.getByTestId('state');
        this.fieldCountry = this.page.getByTestId('country');
        this.fieldPhone = this.page.getByTestId('phone');
        this.buttonRegister = this.page.getByTestId('register-submit');
    }

    /**
     * Acessa a página de cadastro.
     */
    async SignUp() {
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.signUp).toBeVisible();
        await this.signUp.click();
        await expect(this.initialRegisterButton).toBeVisible();
        await this.initialRegisterButton.click();
        await expect(this.page.getByTestId('register-form')).toBeVisible();
    }

    /**
     * Preenche o formulário de cadastro com os dados do usuário.
     * @param user - Objeto contendo os dados do usuário.
     */
    async fillForm(user: Perfil) {
        await this.fieldFirstName.fill(user.firstName);
        await this.fieldLastName.fill(user.lastName);
        await this.fieldBirthDate.click();
        await this.fieldBirthDate.fill(user.birthDate);
        await this.fieldAddress.fill(user.address);
        await this.fieldPostalCode.fill(user.postalCode);
        await this.fieldCity.fill(user.city);
        await this.fieldState.fill(user.state);
        await this.fieldCountry.selectOption(user.countryCode);
        await this.fieldPhone.fill(user.phone);
        await this.fielddEmail.fill(user.email);
        await this.fielddPassword.fill('Ramones10@');
    }

    /**
     * Envia o formulário de cadastro.
     */
    async submitForm() {
        await this.buttonRegister.click();
    }



}