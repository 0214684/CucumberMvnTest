Feature: Feature1 to test calculator operations

@Smoke
Scenario: Add 2 numbers in add
    Given I open Calculator
    When I add 210 and 120 
    Then I should get add result 330
   

@Regression
  Scenario Outline: Mul numbers from table
 		Given I open Calculator
    When I mul <val1> and <val2>
    Then I should get mul result <res>
   
    Examples: 
      | val1  | val2 | res  |
      | 3 |     6 | 18 |
      | 2 |     7 | 14    |
      | 4 |		20 |	80	|
      | 4 |		25 |	100	|

   
   @Smoke
Scenario: Add 2 numbers in add
    Given I open Calculator
    When I add 234 and 432 
    Then I should get add result 666
    
    
    @Smoke
Scenario: Add 2 numbers in add
    Given I open Calculator
    When I add 210 and 120 
    Then I should get add result 330