const LoginPage = require("../pages/login.page");
const HomePage = require("../pages/home.page");
const testData = require("../util/testData");
const { expect } = require("chai");

describe("Login functionality", function () {
  let loginPage;
  let homePage;

  before(async function () {
    loginPage = new LoginPage();
    homePage = new HomePage();

    await homePage.isAt();
  });

  it("should navigate to the login page", async function () {
    await homePage.goToLoginPage();
    const isAtLoginPage = await loginPage.isAt();
    if (!isAtLoginPage) throw new Error("Failed to navigate to login page");
  });

  it("should show 'Sorry Locked' for locked users", async function () {
    await loginPage.enterCredentials(
      testData.testCases[0].username,
      testData.testCases[0].password
    );
    await loginPage.login();
    const isLocked = await loginPage.isLocked();
    expect(isLocked).to.equal(true);
  });

  it("should show 'No Match' for not found users", async function () {
    await loginPage.enterCredentials(
      testData.testCases[1].username,
      testData.testCases[1].password
    );
    await loginPage.login();
    const isNoMatch = await loginPage.isNoMatch();
    expect(isNoMatch).to.equal(true);
  });

  it("should show 'Username Required' when username is missing", async function () {
    await loginPage.enterCredentials(
      testData.testCases[2].username,
      testData.testCases[2].password
    );
    await loginPage.login();
    const isUsernameRequired = await loginPage.isUsernameRequired();
    expect(isUsernameRequired).to.equal(true);
  });

  it("should show 'Password Required' when password is missing", async function () {
    await loginPage.enterCredentials(
      testData.testCases[3].username,
      testData.testCases[3].password
    );
    await loginPage.login();
    const isPasswordRequired = await loginPage.isPasswordRequired();
    expect(isPasswordRequired).to.equal(true);
  });

  it("should login with valid credentials", async function () {
    await loginPage.enterCredentials(
      testData.testCases[4].username,
      testData.testCases[4].password
    );
    await loginPage.login();
    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).to.equal(true);
  });
});
