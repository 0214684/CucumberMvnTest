package stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;



public class CalculatorsSteps {

	//global variables
	int result;
	int res1;
	
	@Given("I open Calculator")
	public void i_open_calculator() {
		System.out.println("Open Calculator");
	}
	
	@When("I add {int} and {int}")
	public void i_add_and(int i, int j) {
		result=i+j;
		System.out.println("addition");
	}
	
	
	@Then("I should get add result {int}")
	public void i_should_get_add_result(int r) {
		Assert.assertEquals(r, result);
		System.out.println("Assertion");
	}
	
	@When("I mul {int} and {int}")
	public void i_mul_and(int num1, int num2) {
		res1=num1*num2;
		System.out.println("Multiplication");
	}
	
	
	@Then("I should get mul result {int}")
	public void i_should_get_mul_result(int r1) {
		Assert.assertEquals(r1, res1);
		System.out.println("Multiple Assertion");
	}
	
}
