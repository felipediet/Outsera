import * as fs from 'fs';
import * as path from 'path';
import { Page } from 'playwright';


/**
 * Tira uma captura de tela da página atual.
 * @param {Page} page - A página do Playwright.
 * @param {string} scenarioName - O nome do cenário para a captura de tela.
 */
export async function takeScreenshot(page: Page, scenarioName: string) {
    const screenshotsDir = path.resolve(__dirname, 'screenshots');
    if (!fs.existsSync(screenshotsDir)) {
        fs.mkdirSync(screenshotsDir, { recursive: true });
    }
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `${scenarioName.replace(/\s+/g, '_')}_${timestamp}.png`;
    const filePath = path.join(screenshotsDir, fileName);
    await page.screenshot({ path: filePath });
}

/**
 * Obtém o texto da área de transferência.
 * @param {Page} page - A página do Playwright.
 * @returns {Promise<string>} O texto da área de transferência.
 */
export async function getClipboardText(page: Page): Promise<string> {
    return page.evaluate(async () => {
        return await navigator.clipboard.readText();
    });
}

/**
 * Abre uma nova aba no navegador e acessa a URL da área de transferência.
 * @param {Page} page - A página do Playwright.
 */
export async function abrirNovaAbaComUrlDaAreaDeTransferencia(page: Page) {
    const clipboardUrl = await getClipboardText(page);
    const newPage = await page.context().newPage();
    await newPage.goto(clipboardUrl);
}

/**
 * Alterna para a primeira janela aberta.
 * @param {Page} page - A página do Playwright.
 */
export async function switchWindow(page: Page) {
    const pages = page.context().pages();
    if (pages.length > 0) {
        await pages[0].bringToFront();
    } else {
        throw new Error('No windows found to switch to.');
    }
}

/**
 * Formata um CPF no formato XXX.XXX.XXX-XX.
 * @param {string} cpf - O CPF a ser formatado.
 * @returns {string} O CPF formatado.
 */
export async function formatarCpf(cpf: string): Promise<string> {
    // Remove any non-numeric characters
    const cleanedCpf = cpf.replace(/\D/g, '');
    // Format the CPF as XXX.XXX.XXX-XX
    return cleanedCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

/**
 * Formata data para Formulário 
 **/
export function formatarDataParaFormulario(data: Date): string {
    return data.toLocaleString('en-US', { day: 'numeric', month: 'numeric' , year: 'numeric' });
}

/**
 * Valida se uma mensagem específica está visível na página.
 * @param {string} mensagem - A mensagem a ser validada.
 */
export async function validarMensagem(page: Page, mensagem: string): Promise<boolean> {
    //await page.waitForLoadState('networkidle');
    const mensagemVisivel = await page.getByText(mensagem).first().isVisible();
    if (mensagemVisivel) {
        return true;
    }
    return false;
}


/**
* Seleciona um item dentro da lista e retorna ele.
*/
export async function sortRandomItem(): Promise<string> {
        const items = ['Thor Hammer','Slip Joint Pliers','Combination Pliers','Claw Hammer','Bolt Cutters'];
        const randomName = items[Math.floor(Math.random() * items.length)];
        return randomName;
}
