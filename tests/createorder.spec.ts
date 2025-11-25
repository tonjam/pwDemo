import { test, expect } from "@playwright/test";

test("create an order", async ({ page }) => {
  await page.goto("https://ilarionhalushka.github.io/jekyll-ecommerce-demo/");
  await page.getByRole("link", { name: "Bumble the Elephant" }).click();
  await page.getByRole("button", { name: "Add to cart" }).click();
  await page.getByLabel("Color").selectOption("Green");
  await page.getByRole("button", { name: "Checkout" }).click();
  await page.getByRole("textbox", { name: "Full name" }).click();
  await page.getByRole("textbox", { name: "Full name" }).fill("Nina");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("nina@gmail.com");
  await page.getByRole("textbox", { name: "Country" }).click();
  await page.getByText("Canada").click();

  await page

    .locator(
      ".snipcart-form__field.snipcart-form__cell--large > .snipcart-typeahead > .snipcart-typeahead__content > .snipcart-typeahead__select > .snipcart-typeahead__input > .snipcart-form__select-wrapper > .snipcart-textbox"
    )
    .click();
  await page.getByText("British Columbia").click();

  await page.getByRole("textbox", { name: "City" }).click();
  await page.getByRole("textbox", { name: "City" }).fill("Ottava");
  await page.locator(".snipcart-textbox").first().click();
  await page
    .getByRole("textbox", { name: "Street address" })
    .fill("Street name");
  await page.getByRole("textbox", { name: "Apt/Suite" }).click();
  await page.getByRole("textbox", { name: "Apt/Suite" }).fill("134");
  await page.getByRole("textbox", { name: "Postal/ZIP code" }).click();
  await page.getByRole("textbox", { name: "Postal/ZIP code" }).fill("02121");
  await page.getByRole("button", { name: "Continue to payment" }).click();
  await page
    .locator("iframe")
    .contentFrame()
    .getByRole("textbox", { name: "Card number" })
    .click();
  await page
    .locator("iframe")
    .contentFrame()
    .getByRole("textbox", { name: "Card number" })
    .fill("4242 4242 4242 42424");
  await page
    .locator("iframe")
    .contentFrame()
    .getByRole("textbox", { name: "MM/YY" })
    .click();
  await page
    .locator("iframe")
    .contentFrame()
    .getByRole("textbox", { name: "MM/YY" })
    .fill("09/30");
  await page
    .locator("iframe")
    .contentFrame()
    .getByRole("textbox", { name: "CVV" })
    .click();
  await page
    .locator("iframe")
    .contentFrame()
    .getByRole("textbox", { name: "CVV" })
    .fill("123");
  await page.getByRole("button", { name: "Place order" }).click();
  await page.getByRole("heading", { name: "Thank you for your order" }).click();
  await page.getByRole("button", { name: "Continue shopping" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Products" })
    .click();

  await page.getByRole("link", { name: "shopping_cart" }).click();
  await page.getByRole("button", { name: "Remove item" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Our Story" })
    .click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contact" })
    .click();
  await page.getByRole("textbox", { name: "Email Address" }).click();
  await page
    .getByRole("textbox", { name: "Email Address" })
    .fill("nina@gmail.com");
  await page.getByRole("textbox", { name: "Message" }).click();
  await page
    .getByRole("textbox", { name: "Message" })
    .fill("message test test");
  await page.getByRole("button", { name: "Send Message" }).click();
});
