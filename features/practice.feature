Feature: The Practice Selenium Site

    Scenario Outline: As a user,I open the selenium practice form page

        Given I load the url "http://www.practiceselenium.com/practice-form.html"
        Then I validate <header> on main page.
        When  I give <firstname> and <lastname> in the form.
        And I mention <sex>,<years>,<date>,<favouritechai>
        And I also give <excitingelement>,<continent>,<othercommand>
        Then I click on submit and validate <headertext> on new page.

        Examples:
            | header        | firstname | lastname | sex    | years | date       | favouritechai | excitingelement | continent | othercommand    | headertext                  |
            | Practice Form | chaitanya | parimi   | Female | 5     | 08-07-2021 | Black Tea     | Break           | Antartica | Switch Commands | We're passionate about tea. |