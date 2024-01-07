$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:calc.feature");
formatter.feature({
  "name": "Feature to test calculator operations",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add 2 number in add",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I open Calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorsSteps.i_open_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add 20 and 10",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorsSteps.i_add_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get add result 30",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorsSteps.i_should_get_add_result(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mul 2 number in mul",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I open Calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorsSteps.i_open_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I mul 20 and 10",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorsSteps.i_mul_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get mul result 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorsSteps.i_should_get_mul_result(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:print1.feature");
formatter.feature({
  "name": "Feature1 to test calculator operations",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add 2 numbers in add",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I open Calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorsSteps.i_open_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add 210 and 120",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorsSteps.i_add_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get add result 330",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorsSteps.i_should_get_add_result(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mul 2 numbers in mul",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I open Calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorsSteps.i_open_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I mul 12 and 12",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorsSteps.i_mul_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get mul result 123",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorsSteps.i_should_get_mul_result(int)"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError: expected:\u003c123\u003e but was:\u003c144\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:234)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:241)\r\n\tat stepDefs.CalculatorsSteps.i_should_get_mul_result(CalculatorsSteps.java:40)\r\n\tat ✽.I should get mul result 123(file:print1.feature:12)\r\n",
  "status": "failed"
});
});