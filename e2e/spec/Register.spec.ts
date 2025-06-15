import { test } from "../setup/fixtures";
import { Perfil, gerarPerfil } from "../operacoes/gerarPerfil";

test.describe("Register", () => {

// # Scenario: Successful registration with valid data
// #     Given the user is on the registration page
// #     When the user fills in all required fields with valid data
// #     And the user clicks the 'Register' button
// #     Then the user should be registered successfully
// #     And the user should be redirected to the login page or to the home page logged in

    test("Successful registration with valid data", {tag: ['@regressao']}, async ({ login,register }) => {
        const newuser = gerarPerfil();

        await login.visit();
        await register.SignUp();
        await register.fillForm(newuser);
        await register.submitForm();
        await login.loginAfterRegister(newuser);
        //await login.verifyUserMenu(newuser);
    });

});