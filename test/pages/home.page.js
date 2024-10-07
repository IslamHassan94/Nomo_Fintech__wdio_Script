const { driver } = require("webdriverio");

class HomePage {
  // Locators for the elements
  get burgerMenu() {
    return $(
      'android=new UiSelector().className("android.widget.ImageView").instance(0)'
    );
  }

  get logo() {
    return $(
      'android=new UiSelector().className("android.view.ViewGroup").instance(63)'
    );
  }

  get loginOption() {
    return $(
      'android=new UiSelector().className("android.widget.ImageView").instance(6)'
    );
  }
  async isAt() {
    try {
      await this.logo.waitForDisplayed({ timeout: 5000 }); // wait for the logo to be visible
      return this.logo.isDisplayed();
    } catch (error) {
      console.error("Error waiting for home page to load:", error);
      return false;
    }
  }

  // Method to navigate to the login page
  async goToLoginPage() {
    try {
      await this.burgerMenu.waitForDisplayed({ timeout: 5000 });
      await this.burgerMenu.click();
      await this.loginOption.waitForDisplayed({ timeout: 5000 });
      await this.loginOption.click();
    } catch (error) {
      console.error("Error navigating to the login page:", error);
      throw new Error("Failed to navigate to the login page");
    }
  }
}

module.exports = HomePage;
