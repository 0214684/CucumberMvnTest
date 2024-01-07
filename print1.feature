Feature: Feature1 to test calculator operations


 Scenario: Add 2 numbers in add
    Given I open Calculator
    When I add 210 and 120 
    Then I should get add result 330
   
Scenario: Mul 2 numbers in mul
    Given I open Calculator
    When I mul 12 and 12
    Then I should get mul result 123
 

   