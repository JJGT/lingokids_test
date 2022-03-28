/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

class Test {
    /**
    * define selectors using getter methods
    */
    
    get welcomeButton () {
        return $('~signupButtonWelcome');
    }

    get mediumLevelButton () {
        return $('~levelButton_medium');
    }

    get year2018 () {
        return $('//android.widget.TextView[@text="2018"]');
    }

    get monthMay () {
        return $('//android.widget.TextView[@text="MAY"]');
    }

    get childNameInput () {
        return $('~nameTextInput');
    }

    get emailInput () {
        return $('~emailTextInput');
    }

    get continueButton () {
        return $('//android.widget.TextView[@text="Continue"]');
    }

    get useMyEmailButton () {
        return $('//android.widget.TextView[@text="Use my email"]');
    }

    get gdpr () {
        return $('~gdprCheckbox');
    }

    get accountAlreadyMessage () {
        return $('//android.widget.TextView[@text="It looks like you already have an account"]');
    }

    get invalidLogin () {
        return $('//android.widget.TextView[@text="Oops! Invalid login combination."]');
    }

    //This is a bad approach, try to fix with a more stable locator
    get passwordInput () {
        return $('//*[@focused="true"]');
    }

}

module.exports = new Test();
