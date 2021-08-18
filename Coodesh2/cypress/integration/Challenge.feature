Feature: Challenge

Scenario: Load home page sucessfully
    Given that the user wants to enter on the coodesh homepage
    When user acess the coodesh home page
    Then the coodesh home page needs to load sucessfully

Scenario: Load job openings page sucessfully
    Given that the user is on the coodesh home page
    When user clicks on the job openings section
    Then the job openings page needs to load sucessfully


Scenario: Search for companies job openings sucessfully
    Given that the user is on the job openings page
    When user searchs for "Coodesh" company in the category field
    Then the page needs load the "Coodesh" job openings sucessfully
    
Scenario: Open company job opening sucessfully
    Given that the user searched the "Coodesh" company job openings
    When user clicks on the company job opening result
    Then the company job opening page needs load sucessfully

Scenario: Apply to the company job opening sucessfully
    Given that the user is on the company job opening result page
    When user clicks on the apply button
    Then the apply form needs load sucessfully



