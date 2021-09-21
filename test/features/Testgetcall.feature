Feature: Testing Get Call

    # Scenario Outline: Validate End to End Get single User

    #     Given I am on page <url>
    #     When I do <endpoint> user search in rest test page.
    #     And I make GET <endpoint> api call.
    #     Then I validate the search result.

    #     Examples:
    #         | url                      | endpoint     |
    #         | http://resttesttest.com/ | /api/users/2 |

    Scenario Outline: Validate End to End create User

        Given I am on page <url>
        When I create user with <endpoint> for user search in rest test page.
        And I make POST call with <endpoint> using request methods
        Then I validate the create user search result.

        Examples:
            | url                      | endpoint   |
            | http://resttesttest.com/ | /api/users |

