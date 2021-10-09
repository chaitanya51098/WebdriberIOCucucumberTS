Feature: Differet wait types

    Scenario: Validating wait methods using demo page
    
        Given I am on <appurl>
        When I click on start button
        Then I validate loading icon and text
        Examples:
            | appurl                                               |
            | https://the-internet.herokuapp.com/dynamic_loading/1 |