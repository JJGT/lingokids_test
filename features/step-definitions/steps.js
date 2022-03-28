const { Given, When, Then } = require('@wdio/cucumber-framework');

const TestPage = require('../pageobjects/test.page');

Given(/^I am on the start screen$/, async () => {
    await TestPage.welcomeButton.click();
    await TestPage.mediumLevelButton.click();
    await TestPage.year2018.click();
    await TestPage.monthMay.click();
    await TestPage.childNameInput.waitForExist();
    await TestPage.childNameInput.setValue("Moonchild");
    await TestPage.continueButton.click();
});

When(/^I try to sign up with (.*) and (.*)$/, async (user, password) => {
    await TestPage.emailInput.setValue(user);
    await TestPage.gdpr.click();
    await TestPage.useMyEmailButton.click();
    await TestPage.passwordInput.setValue(password);
    await TestPage.useMyEmailButton.click();
});

Then(/^I should see (.*) error message$/, async (message) => {
    await expect(TestPage.accountAlreadyMessage).toBeExisting();
    await expect(TestPage.invalidLogin).toHaveTextContaining(message);
});
