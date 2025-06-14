import { test as base } from "@playwright/test";
import Login from "../page-objects/LoginPage";
import Home from "../page-objects/HomePage";
import Register from "../page-objects/RegisterPage";
import Checkout from "../page-objects/CheckoutPage";

export const test = base.extend<{
  login: Login,
  home: Home,
  register: Register,
  checkout: Checkout
}>({
  login: async ({ page }, use) => {
    const login = new Login(page);
    await use(login);
  },
  home: async ({ page }, use) => {
    const home = new Home(page);
    await use(home);
  },
  register: async ({ page }, use) => {
    const register = new Register(page);
    await use(register);
  },
  checkout: async ({ page }, use) => {
    const checkout = new Checkout(page);
    await use(checkout);
  }
});
