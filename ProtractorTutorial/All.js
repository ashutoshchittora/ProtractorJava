describe('ChainLocators', function() {
	
	function Add(a,b) {
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}
	
	it('TestCaseChainLocator', function() {
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.manage().window().maximize();

		
		Add(10,11);
		Add(10,21);
		Add(10,31);
		
		element.all(by.repeater("result in memory")).count().then(function(value) {
			console.log(value);
		})
		
		element.all(by.repeater("result in memory")).each(function(item) {
			item.element(by.css("td:nth-child(3)")).getText().then(function(textValue) {
				console.log(textValue);
			})
		})
	})
})