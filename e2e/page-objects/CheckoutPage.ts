import { Locator, Page, expect } from '@playwright/test';
import { validarMensagem } from '../operacoes/helpers';
import { Perfil } from '../operacoes/gerarPerfil';
import { time } from 'console';


export default class LoginPage {
    private readonly page: Page;
    private readonly addToCartButton: Locator;
    private readonly cartButton: Locator;
    private readonly checkoutButtonCart: Locator;
    private readonly checkoutButtonSignIn: Locator;
    private readonly checkoutButtonBilling: Locator;
    private readonly checkoutButtonFinish: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = this.page.getByTestId('add-to-cart');
        this.cartButton = this.page.getByTestId('nav-cart');
        this.checkoutButtonCart = this.page.getByTestId('proceed-1');
        this.checkoutButtonSignIn = this.page.getByTestId('proceed-2');
        this.checkoutButtonBilling = this.page.getByTestId('proceed-3');
        this.checkoutButtonFinish = this.page.getByTestId('finish');
    }

    async addItemToCart(){
        await expect(this.addToCartButton).toBeVisible();
        await this.addToCartButton.click();
        
        const mensagem = this.page.getByText('Product added to shopping cart.', { exact: true });
        while (await mensagem.isVisible()) {
            await this.page.waitForTimeout(500);
        }

    }

    async goToCart(item: string) {
        await expect(this.cartButton).toBeVisible();
        await this.cartButton.click({ timeout: 6000 });
        const itens = this.page.getByTestId('product-title');
        const itemCheckout = itens.getByText(item, { exact: true });
        await expect(itemCheckout).toBeVisible();
    }

    async proceedToCheckoutCart() {
        await expect(this.checkoutButtonCart).toBeVisible();
        await this.checkoutButtonCart.click();
    }

    async checkUserSignedin(user: string) {
        await validarMensagem(this.page,'Hello ' + user + ', you are already logged in. You can proceed to checkout.');
        await this.checkoutButtonSignIn.click();
    }

    async proceedToCheckoutBilling(user: Perfil) {
        //await expect(this.page.getByTestId('street')).toContainText(user.address);
        // await expect(this.page.getByTestId('city')).toContainText(user.city);
        // await expect(this.page.getByTestId('state')).toContainText(user.state);
        // await expect(this.page.getByTestId('countrycode')).toContainText(user.countryCode);
        // await expect(this.page.getByTestId('postalcode')).toContainText(user.postalCode);

        await expect(this.checkoutButtonBilling).toBeVisible();
        await this.checkoutButtonBilling.click();
    }

    async proceedToCheckoutPayment() {
        await this.page.getByTestId('payment-method').selectOption('cash-on-delivery');
        await expect(this.checkoutButtonFinish).toBeVisible();
        await this.checkoutButtonFinish.click();
    }

    async confirmPurchase() {
        await validarMensagem(this.page, 'Payment was successful');
        await expect(this.checkoutButtonFinish).toBeVisible();
        await this.checkoutButtonFinish.click();
        await validarMensagem(this.page, 'Thanks for your order!');
    }



}





