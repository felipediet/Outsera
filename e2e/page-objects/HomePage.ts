import { Locator, Page, expect } from '@playwright/test';

export default class Home {
    private readonly page: Page;
    private readonly goHome: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.goHome = this.page.getByTestId('nav-home');
    }

    /**
     * Visita a página inicial.
     */
    async visitHome() {
        //TODO - Esse método no CI quebra SEMPRE, mas funciona localmente, pesquisar mais sobre isso.
            console.log('TODO - Esse método no CI quebra SEMPRE, mas funciona localmente, pesquisar mais sobre isso.');
        const upperMenu = this.page.locator('#navbarSupportedContent');
        const homeMenu = upperMenu.getByTestId('nav-home')
        await expect(upperMenu).toBeEnabled();
        await expect(homeMenu).toBeEnabled();
        await homeMenu.click();
    }

    /**
     * Seleciona um item pelo texto e clica nele.
     * @param text - Texto do item a ser selecionado.
     */
    async selectItemByText(text: string) {
        const item = this.page.getByText(text);
        await expect(item).toBeVisible();
        await item.click();
    }

    /**
     * Seleciona um item aleatório e clica nele.
     * @param randomItem - Nome do item aleatório a ser selecionado.
     */
    async selectRandomItemAndClick(randomItem: string): Promise<void> {
        const itens = this.page.getByTestId('product-name');
        const item = itens.getByText(randomItem, { exact: true });
        await expect(item).toBeVisible();
        await item.click();
        await expect(item).toBeVisible();
    }
    


}
