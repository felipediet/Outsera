import { test } from "../setup/fixtures";

test.describe("Login", () => {
    
   // # Scenario: Successful login with valid credentials
   // #     Given the user is on the login page
   // #     When the user enters a valid email and password
   // #     And the user clicks the 'Login' button
   // #     Then the user should be authenticated successfully
   // #     And the user should be redirected to the home page or the user dashboard

    test("Login with invalid credentials", {tag: ['@regressao']}, async ({ page,login }) => {
        await login.visit();
        await login.login();
    });

});