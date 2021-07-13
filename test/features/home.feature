Feature: The Internet website home page

  Scenario Outline: As a user, I open the internet website.

    Given I open browser and load the <homepageurl>
    Then I should see a header with <headertext>

    Examples:
      | homepageurl                         | headertext                     |
      | https://the-internet.herokuapp.com/ | Welcome to the-internet        |
