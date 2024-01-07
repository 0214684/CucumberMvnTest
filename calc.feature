Feature: Feature to test calculator operations


 Scenario: Add 2 number in add
    Given I open Calculator
    When I add 20 and 10 
    Then I should get add result 30
   
Scenario: Mul 2 number in mul
    Given I open Calculator
    When I mul 20 and 10
    Then I should get mul result 200
 

    