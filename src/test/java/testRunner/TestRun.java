package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
	(
	features={"test.feature"},
	glue={"stepDefs","Hooks"},
	dryRun=false,
	monochrome=true,
	tags= {"@Smoke"},
	plugin= {"pretty","html:test-output"}
	)

public class TestRun{
	
}