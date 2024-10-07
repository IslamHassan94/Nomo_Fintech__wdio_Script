
# Mobile Test Automation with Appium, WebDriverIO, Chai, and Allure Reports

This project contains automated mobile test cases for an Android app using **Appium**, **WebDriverIO**, **Chai**, and **Allure Reports**. The test configuration and the testing framework are designed to ensure robust and scalable mobile automation.


## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

To run this project, ensure you have the following tools installed:

- **Node.js** (v14 or higher)
- **Appium Server** (v2.x)
- **Android SDK**
- **WebDriverIO** (WDIO)
- **JavaScript or TypeScript Support** (Optional)
- **Allure Command Line** (for generating reports)
- Any IDE that supports JavaScript (e.g., Visual Studio Code)

### Setup

Follow the steps below to set up the project environment:

1. **Clone the Repository**  
   Clone the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/IslamHassan94/Nomo_Fintech__wdio_Script.git
   ```

2. **Install Dependencies**  
   Navigate to the project directory and install all dependencies by running:
   ```bash
   npm install
   ```

3. **Configure Appium**  
   Ensure that your Appium server is running. You can start it with:
   ```bash
   appium
   ```

4. **Update Desired Capabilities**  
   Update the desired capabilities for the Android emulator in the WebDriverIO configuration file (`wdio.conf.js`):
   ```javascript
   capabilities: [
    {
      "appium:platformName": "Android",
      "appium:platformVersion": "9.0",
      "appium:deviceName": "IslamHassanEmulator_Device",
      "appium:automationName": "uiautomator2",
      "appium:app": path.join(
        process.cwd(),
        "app/android/Android-MyDemoAppRN.1.3.0.build-244.apk"
      ),
    },
  ],
   ```

5. **Run Android Emulator**  
   Ensure that the Android emulator is running before executing the tests. You can start it manually or use the command.
  
   ```


## Running the Tests

You can run the automated tests using WebDriverIO's built-in test runner.

- **Run all tests**  
  To run all the tests, use:
  ```bash
  npx wdio run wdio.conf.js
  ```


### Chai Assertions

This project uses **Chai** for assertions in the tests, ensuring a clean and readable syntax for validation:
```javascript
const expect = require('chai').expect;
expect(element.isDisplayed()).to.be.true;
```

## Test Reports

Test results are generated using **Allure Reports**.

- **View Test Results**  
  After running the tests, you can generate an Allure report with:
  ```bash
  allure generate allure-results --clean
  allure open
  ```

This will open a detailed test report in your default browser, showing test outcomes, failure details, and steps performed.


## Test Data

Test data is parameterized and loaded dynamically for different scenarios, ensuring that tests are reusable and scalable. You can modify or extend the test data within the `data` directory or directly in the test files.


## Author

- **Islam Hassan**  
  [LinkedIn](https://www.linkedin.com/in/islam-hassan) | [GitHub](https://github.com/IslamHassan94)

