$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:test.feature");
formatter.feature({
  "name": "Feature1 to test calculator operations",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add 2 numbers in add",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
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
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
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
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
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
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Mul numbers from table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I open Calculator",
  "keyword": "Given "
});
formatter.step({
  "name": "I mul \u003cval1\u003e and \u003cval2\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I should get mul result \u003cres\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "val1",
        "val2",
        "res"
      ]
    },
    {
      "cells": [
        "3",
        "6",
        "18"
      ]
    },
    {
      "cells": [
        "2",
        "7",
        "14"
      ]
    },
    {
      "cells": [
        "4",
        "20",
        "80"
      ]
    },
    {
      "cells": [
        "4",
        "25",
        "100"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Mul numbers from table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
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
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I mul 3 and 6",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorsSteps.i_mul_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I should get mul result 18",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorsSteps.i_should_get_mul_result(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Mul numbers from table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
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
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I mul 2 and 7",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorsSteps.i_mul_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I should get mul result 14",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorsSteps.i_should_get_mul_result(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Mul numbers from table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
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
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I mul 4 and 20",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorsSteps.i_mul_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I should get mul result 80",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorsSteps.i_should_get_mul_result(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Mul numbers from table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
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
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I mul 4 and 25",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorsSteps.i_mul_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I should get mul result 100",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorsSteps.i_should_get_mul_result(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add 2 numbers in add",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
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
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I add 234 and 432",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorsSteps.i_add_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I should get add result 666",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorsSteps.i_should_get_add_result(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add 2 numbers in add",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
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
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
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
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
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
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});