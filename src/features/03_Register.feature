Feature: Register functionality

 @Smoke @Register
Scenario Outline: Register a new user with valid details
  Given User navigates to the registration page
  When User enters valid registration details:

    | FirstName   | LastName   | DOB   | Country   | Postal   | HouseNumber   | Phone   | Email   | Password   |
    | <FirstName> | <LastName> | <DOB> | <Country> | <Postal> | <HouseNumber> | <Phone> | <Email> | <Password> |
    
  And User clicks Register buttons
  Then Registration should be successful

  Examples:

    | FirstName | LastName | DOB        | Country | Postal | HouseNumber | Phone      | Email              | Password   |
    | John      | Doe      | 1995-01-01 | India   | 600001 | 121         | 9876543210 | johnSon202@test.com  | John01@123 |
    | Jane      | Smith    | 1998-05-12 | India     | 90210  | 404         | 1234567890 | jane.smith1@test.uk | Jane02@456 |

  