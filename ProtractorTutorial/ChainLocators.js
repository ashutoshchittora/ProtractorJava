describe('ChainLocators', function() {
	
	it('TestCaseChainLocator', function() {
		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("31");
		element(by.model("second")).sendKeys("15");
		element(by.id("gobutton")).click();
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(repeaterText) {
			console.log(repeaterText);
			// by.repeater used to identify : ng-repeat tags . similarly by.model to find ng-model tags.
		});
	})
})