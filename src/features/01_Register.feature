Feature: Register functionality

 @Smoke @Register
Scenario Outline: Register a new user with valid details
  Given User navigates to the registration page
  When User enters valid registration details

    | FirstName   | <FirstName>   |
    | LastName    | <LastName>    |
    | DOB         | <DOB>         |
    | Country     | <Country>     |
    | Postal      | <Postal>      |
    | HouseNumber | <HouseNumber> |
    | Phone       | <Phone>       |
    | Email       | <Email>       |
    | Password    | <Password>    |
  And User clicks Register buttons
  Then Registration should be successful

  Examples:

    | FirstName | LastName | DOB        | Country | Postal | HouseNumber | Phone      | Email              | Password   |
    | John      | Dom      | 1995-01-01 | India   | 600001 | 121         | 9876543210 | john2021@test.com  | John01@123 |
    | Jane      | Peter    | 1998-05-12 | India     | 90210  | 404         | 1234567890 | jane.Pet1er@test.uk | Jane02@456 |

    

