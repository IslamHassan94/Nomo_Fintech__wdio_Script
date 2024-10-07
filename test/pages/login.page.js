class LoginPage {
  get usernameField() {
    return $(
      'android=new UiSelector().className("android.widget.EditText").instance(0)'
    );
  }
  get passwordField() {
    return $(
      'android=new UiSelector().className("android.widget.EditText").instance(1)'
    );
  }
  get loginButton() {
    return $("~Login button");
  }
  get lockedMessage() {
    return $(
      'android=new UiSelector().text("Sorry, this user has been locked out.")'
    );
  }
  get noMatchMessage() {
    return $(
      'android=new UiSelector().text("Provided credentials do not match any user in this service.")'
    );
  }
  get userRequiredMessage() {
    return $('android=new UiSelector().text("Username is required")');
  }
  get passwordRequiredMessage() {
    return $('android=new UiSelector().text("Password is required")');
  }
  get productsText() {
    return $('//android.widget.TextView[@text="Products"]');
  }

  async isAt() {
    await this.usernameField.waitForDisplayed();
    return this.usernameField.isDisplayed();
  }

  async enterCredentials(username, password) {
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
  }

  async login() {
    await this.loginButton.click();
  }

  async isLocked() {
    await this.lockedMessage.waitForDisplayed();
    return this.lockedMessage.isDisplayed();
  }

  async isNoMatch() {
    await this.noMatchMessage.waitForDisplayed();
    return this.noMatchMessage.isDisplayed();
  }
  async isUsernameRequired() {
    await this.userRequiredMessage.waitForDisplayed();
    return this.userRequiredMessage.isDisplayed();
  }

  async isPasswordRequired() {
    await this.passwordRequiredMessage.waitForDisplayed();
    return this.passwordRequiredMessage.isDisplayed();
  }

  async isLoggedIn() {
    await this.productsText.waitForDisplayed({ timeout: 20000 });
    return this.productsText.isDisplayed();
  }
}

module.exports = LoginPage;
