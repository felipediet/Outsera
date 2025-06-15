import { Locator, Page, expect } from '@playwright/test';
import { validarMensagem } from '../operacoes/helpers';

export default class Home {
    private readonly page: Page;
    private readonly goHome: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.goHome = this.page.getByTestId('nav-home');
    }

    async visitHome() {
        const upperMenu = this.page.locator('#navbarSupportedContent');
        const homeMenu = upperMenu.getByTestId('nav-home')
        await expect(upperMenu).toBeVisible();
        await expect(homeMenu).toBeVisible();
        await homeMenu.click();
        // await (expect(this.goHome)).toBeVisible({ timeout: 10000 });
        // await this.goHome.click();
    }

    async selectItemByText(text: string) {
        const item = this.page.getByText(text);
        await expect(item).toBeVisible();
        await item.click();
    }

    async selectRandomItemAndClick(randomItem: string): Promise<void> {
        const itens = this.page.getByTestId('product-name');
        const item = itens.getByText(randomItem, { exact: true });
        await expect(item).toBeVisible();
        await item.click();
        await expect(item).toBeVisible();
    }
    


}
