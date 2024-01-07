package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
	(
	features={"calc.feature","print1.feature"},
	glue="stepDefs",
	dryRun=false,
	monochrome=true,
	plugin= {"pretty","html:test-output"}
	)

public class TestRun{
	
}