Feature: 

  Scenario Outline: As a registered user, I try to sign up and login with wrong credentials

    Given I am on the start screen
    When I try to sign up with <user> and <password>
    Then I should see <message> error message

    Examples:
      | user                    | password  | message                          |
      | juanjocanton@gmail.com  | fake      | Oops! Invalid login combination. |
