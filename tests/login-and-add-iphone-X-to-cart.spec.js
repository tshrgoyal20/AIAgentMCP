// @ts-check
import { test, expect } from "@playwright/test";

test("login and add iphone X to cart", async ({ page }) => {
  // Navigate to the login page
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  // Fill in the credentials (mentioned on the page)
  await page
    .getByRole("textbox", { name: "Username:" })
    .fill("rahulshettyacademy");
  await page
    .getByRole("textbox", { name: "Password:" })
    .fill("Learning@830$3mK2");

  // Click the Sign In button
  await page.getByRole("button", { name: "Sign In" }).click();

  // Wait for navigation to the shop page
  await page.waitForURL("https://rahulshettyacademy.com/angularpractice/shop");

  // Add iPhone X to the cart
  await page
    .locator("app-card")
    .filter({ hasText: "iphone X" })
    .getByRole("button")
    .click();

  // Confirm the product is added by checking the cart count
  await expect(page.getByText("Checkout ( 1 )")).toBeVisible();
});
