Feature: Register functionality

 @Smoke @Register
Scenario: Register a new user with valid details

  Given User navigates to the registration page
  When User enters valid registration details
    | FirstName      | John              |
    | LastName       | Doe               |
    | DOB            | 1995-01-01        |
    | Country        | India             |
    | Postal         | 600001            |
    | HouseNumber    | 121               |
    | Phone          | 9876543210        |
    | Email          | john2001@test.com  |
    | Password       | John01@123          |
  And User clicks Register buttons
  Then Registration should be successful
    

