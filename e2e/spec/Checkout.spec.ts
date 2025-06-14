import { test } from "../setup/fixtures";
import { Perfil, gerarPerfil } from "../operacoes/gerarPerfil";
import { sortRandomItem, validarMensagem } from "../operacoes/helpers";

test.describe("Checkout", () => {

// # Scenario: Successful checkout with logged-in user
// #     Given the user is logged in
// #     And the shopping cart contains products
// #     When the user navigates to the checkout page
// #     And the user fills in the delivery information (if necessary)
// #     And the user selects a valid payment method
// #     And the user confirms the purchase
// #     Then the purchase should be processed successfully
// #     And the user should receive an order confirmation

    test("Successful checkout with logged-in user", {tag: ['@regressao']}, async ({ page,login,register,home,checkout }) => {
        const newuser = gerarPerfil();

        await login.visit();
        await register.SignUp();
        await register.fillForm(newuser);
        await register.submitForm();
        await login.loginAfterRegister(newuser);
        await home.visitHome();
            const item = await sortRandomItem();
        await home.selectRandomItemAndClick(item);
        await checkout.addItemToCart();
        await checkout.goToCart(item);
        await checkout.proceedToCheckoutCart();
        await checkout.checkUserSignedin(newuser.firstName + ' ' + newuser.lastName);
        await checkout.proceedToCheckoutBilling(newuser);
        await checkout.proceedToCheckoutPayment();
        await checkout.confirmPurchase();
    });

});