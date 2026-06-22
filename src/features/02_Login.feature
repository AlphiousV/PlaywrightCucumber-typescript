Feature: Login functionality

@Smoke @Login
Scenario: Login Using Credential

Given user Navigate to Login Page
When user enter valid Credential 
    | Email          | john2001@test.com  |
    | Password       | John01@123          |
    | LastName       | Doe               |
Then It Should Land on AccountPage successful